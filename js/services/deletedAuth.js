//myApp.factory('Authentication',['$rootScope', '$firebaseAuth', '$location' , '$firebaseObject', function($rootScope, $firebaseObject, $firebaseAuth, $location){
//    
//    var ref = firebase.database().ref();
//    var auth = $firebaseAuth();
///******************************************************************************************************************************************** 
//                                              Detect when a user has logged in to get their data.
//********************************************************************************************************************************************/ 
//    auth.$onAuth(function(authUser){
//        if(authUser){
//            console.log("Successful authUser from authStateChange: " + authUser);
//            // Get a reference to the userId
//            var userRef = ref.child('users').child(authUser.uid);
//            // Set data associated with the UID to an object 
//            var userObj = $firebaseObject(userRef);
//            // Pass the object to the rootscope
//            $rootScope.currentUser = userObj;   
//        }else{
//            console.log("Failed authUser from authStateChange: " + authUser);
//        }
//    });
//
//    return {
//        login: function(user){
//            auth.$signInWithEmailAndPassword(
//                user.email,
//                user.password
//            ).then(function(user){
///******************************************************************************************************************************************** 
//                                              Redirect to another page after login.
//********************************************************************************************************************************************/       
//                $location.path('/success');
//            }).catch(function(error){
//                $rootScope.message = error.message;
//            }); // signInWithEmailAndPassword
//        }, // login
//        
//        register: function(user){
//            auth.$createUserWithEmailAndPassword(
//                user.email,
//                user.password
//            ).then(function(regUser){
//                                
///******************************************************************************************************************************************** 
//                                                - Set user variables in the database. 
//                                                - Data passed from the form to the controller to the service.
//********************************************************************************************************************************************/               
//                var regRef = ref.child('users')
//                    .child(regUser.uid).set({
//                        date: firebase.database.ServerValue.TIMESTAMP,
//                        regUser: regUser.uid,
//                        firstName: user.firstName,
//                        lastName: user.lastName,
//                        email: user.email
//                    }); // user info
//                    $rootScope.message = "Hi " + user.firstName + ", thanks for registering!";
//            }).catch(function(error){
//                $rootScope.message = error.message;
//            }); // createUserWithEmailAndPassword
//        
//        } // register
//    
//    }; // return
//    
//}]); // Authentication Factory