formApp
  .controller('QuizController', function($scope, QuizFactory) {

/******************** Data **********************/
    $scope.infoObject = QuizFactory.infoObject;
    $scope.quizResults = QuizFactory.results;


/******************** Functions **********************/

  // Quiz Beginning
    // Hide begin button when clicked
    $scope.startQuiz = QuizFactory.startQuiz;

  // Quiz Step 1 - Demand Letter Question

  // Quiz Step 2 - Basic Questions
      // Find out if the user can file
    $scope.canFile = QuizFactory.canFile;

  // Quiz Step 3 - Rare Questions
      // Rare questions for certain states
    $scope.finishQuiz = QuizFactory.finishQuiz;

    })
  .factory('QuizFactory', function(){

    var QuizFactory = this;

// Data
    QuizFactory.results = {
      quizStarted:false,
      rareAnswers: {}
    };
    QuizFactory.infoObject = {
       "stateInfo":{
          "AL":{
             "canFile":false
          },
          "AK":{
             "canFile":true,
             "filingRanges":{
                "min":2500,
                "max":10000
             },
             "filingFees":{
                "min":40,
                "max":75
             },
             "rareQuestions":{
                "status":false
             }
          },
          "CA":{
             "canFile":true,
             "filingRanges":{
                "min":1000,
                "mid":5000,
                "max":10000
             },
             "filingFees":{
                "min":30,
                "mid":50,
                "max":75
             },
             "rareQuestions":{
                "status":true,
                "text":[
                   {
                      "title":"moreThanTwo",
                      "question":"Have you filed more than two small claims cases for more than $2,500 during this calendar year?",
                      "answer":"No"
                   },
                   {
                      "title":"publicEntity",
                      "question":"Are you a public entity?",
                      "answer":"No"
                   },
                   {
                      "title":"moreThanTwelve",
                      "question":"Have you filed more than 12 other small claims within the last 12 months?",
                      "answer":"No"
                   }
                ]
             }
          },
          "TX":{
             "canFile":false,
             "filingRanges":{
                "min":1000,
                "mid":5000,
                "max":10000
             },
             "filingFees":{
                "min":30,
                "mid":50,
                "max":75
             },
             "rareQuestions":{
                "status":false
             }
          },
          "NV":{
             "canFile":true,
             "filingRanges":{
                "min":1000,
                "mid":5000,
                "max":10000
             },
             "filingFees":{
                "min":30,
                "mid":50,
                "max":75
             },
             "rareQuestions":{
                "status":false
             }
          }
       },
       "formInfo":{
          "asked":[
             "Yes",
             "No"
          ],
          "pNumber":[
             1,
             2,
             3,
             4,
             5,
             "Greater than 5"
          ],
          "pType":[
             "Business",
             "Person",
             "Government Official"
          ],
          "states":[
             "AK",
             "AL",
             "CA",
             "NV",
             "TX"
          ]
       }
     };

// Quiz Functions
  // Quiz Beginning
    QuizFactory.startQuiz = function(){
      QuizFactory.results.quizStarted = true;
    };
  // Quiz Step 1 Specific
  // Quiz Step 2 Specific
    QuizFactory.canFile = function(state, amount){
      console.log("**** canFile Results ****");
      if(QuizFactory.infoObject.stateInfo.hasOwnProperty(state)){
        if(QuizFactory.infoObject.stateInfo[state].canFile == true){
           if(amount <= QuizFactory.infoObject.stateInfo[state].filingRanges.max){
             console.log("Less than the max?");
             console.log("Yes")
             QuizFactory.results.passBasics = true;
             QuizFactory.results.hasRare = QuizFactory.infoObject.stateInfo[QuizFactory.results.defendantState].hasOwnProperty("rareQuestions");
           } else {
             QuizFactory.results.passBasics = false;
             QuizFactory.results.failReason = "Your claim has surpassed the max that you're allowed to sue for.";
             console.log(QuizFactory.reason);
           }// end if / else for max
        }else {
          QuizFactory.results.passBasics = false;
          QuizFactory.results.failReason = "You can't file a small claim in " + QuizFactory.results.defendantState;
          console.log(QuizFactory.reason);
        } // end if / else for canFile
      } // end if for hasOwnProperty(state)

    };
  // Quiz Step 3 Specific
    QuizFactory.finishQuiz = function(arr){

      var answersArr = [];
      var errorMessageNumbers = [];

      for(var i = 0; i < arr.length; i++){
        answersArr.push(arr[i]["answer"])
      }

      if(answersArr.indexOf("Yes") >= 0){
        for(var j = 0; j < answersArr.length; j++){
          errorMessageNumbers.push(i + 1);
        }
        QuizFactory.results.rareAnswers.status = true;
        QuizFactory.results.rareAnswers.message = "Sorry, you answered 'Yes' to questions number " + errorMessageNumbers.join(", ") + ". This means you can't file."
      }else{
        QuizFactory.results.rareAnswers.status = false;
      }

    }

    return QuizFactory;

  });


// unsuccessful http request 1
/*
    var url = "js/data/data.json";
    var successCallback = function (response){
      QuizFactory.infoObject = response.data
      console.log(response);
      console.log(response.data);
      console.log(QuizFactory.infoObject);
    }
    $http.get(url).then(successCallback);
    console.log(QuizFactory.infoObject)
    */
// unsuccessful http request 2
/*
$http({
  method: 'GET',
  url: 'js/data/data.json'
}).then(successCallback, function errorCallback(response){
  console.log(response.status);
  console.log(response.statusText);
});
*/
/*
function successCallback(response){

  var QuizFactory = this;

  QuizFactory.infoObject = response.data;
  console.log("infoObject inside: ");
  console.log(QuizFactory.infoObject);

  // Data
  QuizFactory.results = {
  passBasics:false,
  quizStarted:false
};

  // Quiz Functions

  // Quiz Step 1 Specific
  QuizFactory.startQuiz = function(){
  QuizFactory.results.quizStarted = true;
}

  // Quiz Step 2 Specific
  QuizFactory.canFile = function(state, amount){
  console.log("**** canFile Results ****");
  if(QuizFactory.infoObject.stateInfo.hasOwnProperty(state)){
    if(QuizFactory.infoObject.stateInfo[state].canFile === true){
       if(amount <= QuizFactory.infoObject.stateInfo[state].filingRanges.max){
         console.log("Less than the max?");
         console.log("Yes")
         QuizFactory.results.passBasics = true;
       } else {
         QuizFactory.reason = "Sorry, you have surpassed the max";
         console.log(QuizFactory.reason);
       }// end if / else for max
    }else {
      QuizFactory.reason = "Sorry, can't file in this state :( "
      console.log(QuizFactory.reason);
    } // end if / else for canFile
  } // end if for hasOwnProperty(state)

};
  QuizFactory.twoToThree = function(state, type, amount){
      QuizFactory.results.defendantState = state;
      QuizFactory.results.defendantType = type;
      QuizFactory.results.amount = amount;

      //console.log("Scoped Defendant Type: " + $scope.defendantType);
      //console.log("Non Scoped Variable: " + defendantType);
      //console.log($scope.defendantState, $scope.defendantType, $scope.amount);
      //quizObject.push(defendantState, defendantType, amount);
      //$scope.quizObject.push(defendantState, defendantType, amount);
    };

  // Quiz Step 3 Specific
  QuizFactory.finishQuiz = function(q1, q2, q3){
  if(q1 == 'No' && q2 == 'No' && q3 == 'No'){

  }
}

  return QuizFactory;
};
*/
