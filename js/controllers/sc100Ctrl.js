formApp.controller('Sc100FormCtrl', function($scope, QuizFactory){
  /******************** Data **********************/
      $scope.quizResults = QuizFactory.results;
      $scope.sc100Deets = {
        "plaintiffs":[],
        "defendants":[],
        "toDoList": [],
        "other":{
          "begin": false
        }
      };
      $scope.scFormInfo = {
        "plaintiff":{
          "s1":{
            num : [1, 2, 3, 4, 5, "Greater than 5"],
            finished : false
          },
          "s2":{
            type : ['Corp', 'Ficticious Business', 'Individual', 'Government Official'],
            finished: false
          }
        },
        "defendant":{
          "s1":{
            num : [1, 2, 3, 4, 5, "Greater than 5"],
            finished : false
          },
          "s2":{
            type : ['Corp', 'Ficticious Business', 'Individual', 'Government Official'],
            militaryDuty: ['Yes', 'No'],
            finished: false
          }
        }
      };

    // Modal Settings
      $scope.oneAtAtTime = true;


/******************** Functions **********************/

// BEGIN

    $scope.beginFiling = function(){
      $scope.sc100Deets.other.begin = true;
    }

// Step 1 - PLAINTIFF INFO
    // Find out how may plaintiffs to create number of forms
    $scope.numOfPlaintiffs = function(){
      var num = $scope.sc100Deets.pNum;
      for(var x = 0; x < num; x++){
        $scope.sc100Deets.plaintiffs.push(
          {'id': x + 1}
        )
      }
      if(num > 2){
        $scope.sc100Deets.toDoList.push("File a SC-100A for >2 Plaintiffs");
      }
    };
    // Find out if any plaintiffs are ficticious businesses for sc-103
    $scope.fictBus = function(){
      var p = $scope.sc100Deets.plaintiffs
      for(var i = 0; i < p.length; i++){
        if(p[i].type == 'Ficticious Business'){
          $scope.sc100Deets.toDoList.push("File a SC-103 for Plaintiff Number " + p[i].id + ", named " + p[i].name + ", which is a ficticious business.")
        }
      }
    };


// Step 2 - DEFENDANT INFO
    // Find out how may defendants to create number of forms
    $scope.numOfDefendants = function(){
      var num = $scope.sc100Deets.dNum;
      for(var x = 0; x < num; x++){
        $scope.sc100Deets.defendants.push(
          {'id': x + 1}
        )
      }
      if(num > 2){
        $scope.sc100Deets.toDoList.push("File a SC-100A for >2 Defendants");
      }
    };
    // Find out if any defendants are military members
    $scope.activeMilitary = function(){
      var d = $scope.sc100Deets.defendants
      for(var i = 0; i < d.length; i++){
        if(d[i].military == 'Yes'){
          $scope.sc100Deets.toDoList.push("Add " + d[i].name + " to SC-100 due to active military duty");
        }
      }
    }

// ALL
    // to-do list
    $scope.addToDo = function(item){
          console.log("Adding to do list item...")
          $scope.sc100Deets.toDoList.push(item);
          console.log($scope.sc100Deets.toDoList);
      }

});
