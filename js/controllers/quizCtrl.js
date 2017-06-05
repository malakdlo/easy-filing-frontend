formApp
  .controller('QuizController', function($scope, QuizFactory) {

// Data
    // we will store all of our form data in this object
    $scope.quizResults = QuizFactory.results;
    $scope.stateDetailsObject = QuizFactory.stateDetailsObject;
    $scope.formInfo = QuizFactory.formInfo;
  
// Functions
      // function to process the form
    $scope.processForm = function() {
        alert('awesome!');
    };
  
  // Section 1 - 
      // Add data and move to next step
    $scope.twoToThree = QuizFactory.twoToThree;
    
  // Section 2 - 
      // Find out if the user can file
    $scope.canFile = QuizFactory.canFile;
  
  // All
      // Hide buttons when clicked
    $scope.startQuiz = QuizFactory.startQuiz;
  
  }) 
  .factory('QuizFactory', function(){
  
    var QuizFactory = this;

// Data
    QuizFactory.results = {
      passBasics:false, 
      quizStarted:false
    };
    QuizFactory.stateDetailsObject = {
            "CA": {
              canFile: true,
              filingRanges:{
                min: 1000,
                mid: 5000,
                max: 10000  
              },
              filingFees:{
                min: 30,
                mid: 50,
                max: 75
              },
              rareQuestions:[
                {
                  "title":"moreThanTwo",
                  "question":"Have you filed more than two small claims cases for more than $2,500 during this calendar year?"
                },
                {
                  "title":"publicEntity",
                  "question":"Are you a public entity?"
                },
                {
                  "title":"moreThanTwelve",
                  "question":"Have you filed more than 12 other small claims within the last 12 months?"
                }
              ]
            },
            "TX": {
              canFile: false,
              filingRanges:{
                min: 1000,
                mid: 5000,
                max: 10000  
              },
              filingFees:{
                min: 30,
                mid: 50,
                max: 75
              }
            },
            "NV": {
              canFile: true,
              filingRanges:{
                min: 1000,
                mid: 5000,
                max: 10000  
              },
              filingFees:{
                min: 30,
                mid: 50,
                max: 75
              }
            }
          };
    QuizFactory.formInfo = {
          asked: ["Yes", "No"],
          pNumber : [1, 2, 3, 4, 5, "Greater than 5"],
          pType : ['Business', 'Person', 'Government Official'],
          states : [ "AK","AL","AR","AS","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"]
    };  

// Functions
  
  // Step 1 Specific
    QuizFactory.startQuiz = function(){
      QuizFactory.results.quizStarted = true;
    }
  
  // Step 2 Specific
    QuizFactory.canFile = function(state, amount){
      console.log("**** canFile Results ****");
      if(QuizFactory.stateDetailsObject.hasOwnProperty(state)){
        if(QuizFactory.stateDetailsObject[state].canFile === true){
           if(amount <= QuizFactory.stateDetailsObject[state].filingRanges.max){
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
  
  // Step 3 Specific 
    QuizFactory.finishQuiz = function(q1, q2, q3){
      if(q1 == 'No' && q2 == 'No' && q3 == 'No'){
        
      }
    }
  
  // All
    
    
    return QuizFactory;
  });
