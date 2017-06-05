formApp.controller('Sc100FormCtrl', function($scope){
  /******************** Data & Settings **********************/
    // Main Object
      $scope.sc100Deets = {
        'plaintiffs':[],
        'defendants':[]
      };
  
    // Small Claims Form Info 
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
      
    // To Do List
      $scope.toDoList = [];
  
    // Modal Settings
      $scope.oneAtAtTime = true;
    
  
/******************** Functions **********************/
// For sc100-plaintiff.html
    // Find out how may plaintiffs to create number of forms
    $scope.numOfPlaintiffs = function(){
      var num = $scope.sc100Deets.pNum;
      for(var x = 0; x < num; x++){
        $scope.sc100Deets.plaintiffs.push(
          {'id': x + 1}
        )
      }
      if(num > 2){
        $scope.toDoList.push("File a SC-100A for >2 Plaintiffs");
      }
    };
    // Find out if any plaintiffs are ficticious businesses for sc-103
    $scope.fictBus = function(){
      var p = $scope.sc100Deets.plaintiffs
      for(var i = 0; i < p.length; i++){
        if(p[i].type == 'Ficticious Business'){
          $scope.toDoList.push("File a SC-103 for Plaintiff Number " + p[i].id + ", named " + p[i].name + ", which is a ficticious business.")
        }
      }
    };
      
      
// For sc100-defendant.html
    // Find out how may defendants to create number of forms
    $scope.numOfDefendants = function(){
      var num = $scope.sc100Deets.dNum;
      for(var x = 0; x < num; x++){
        $scope.sc100Deets.defendants.push(
          {'id': x + 1}
        )
      }
      if(num > 2){
        $scope.toDoList.push("File a SC-100A for >2 Defendants");
      }
    };
    // Find out if any defendants are military members
    $scope.activeMilitary = function(){
      var d = $scope.sc100Deets.defendants
      for(var i = 0; i < d.length; i++){
        if(d[i].military == 'Yes'){
          $scope.toDoList.push("Add " + d[i].name + " to SC-100 due to active military duty");
        }
      }
    }
       
    // to-do list
      $scope.addToDo = function(item){
          console.log("Adding to do list item...")
          $scope.toDoList.push(item);
          console.log($scope.toDoList);
      }
    
    
    $scope.canFile = function(state, amount){
                  console.log("**** canFile Results ****");
                  $scope.passBasics = false;
                  if($scope.filingDeetsObject.hasOwnProperty(state)){
                    if($scope.filingDeetsObject[state].canFile === true){
                       if(amount <= $scope.filingDeetsObject[state].filingRanges.max){
                         console.log("Less than the max?");
                         console.log("Yes")
                         $scope.passBasics = true;
                       } else {
                         $scope.reason = "Sorry, you have surpassed the max";
                         console.log($scope.reason);
                       }// end if / else for max
                    }else {
                      $scope.reason = "Sorry, can't file in this state :( "
                      console.log($scope.reason);
                    } // end if / else for canFile
                  } // end if for hasOwnProperty(state)
                  return $scope.passBasics;
                };
      
      
      
      
});