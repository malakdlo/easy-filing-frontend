// app.js
// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
var formApp = angular.module('formApp', [
  'firebase',
  'ngRoute',
  'ngAnimate',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
]);

/*
formApp.run(['$rootScope', '$location', function($rootScope, $location){
      $rootScope.$on('$routeChangeError', function(event, next, previous, error){
          if(error == 'AUTH_REQUIRED'){
              $rootScope.message = 'Sorry, you must log in to access that page';
              $location.path('/login');
          }
      })
  }]);
*/

// configuring our routes 
// =============================================================================
formApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider

// basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: 'views/forms/form.html',
            controller: 'FormController'
        })

        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('form.profile', {
            url: '/profile',
            templateUrl: 'views/forms/form-profile.html'
        })

        // url will be /form/interests
        .state('form.interests', {
            url: '/interests',
            templateUrl: 'views/forms/form-interests.html'
        })

        // url will be /form/payment
        .state('form.payment', {
            url: '/payment',
            templateUrl: 'views/forms/form-payment.html'
        })
        
  
  // sc100 
        .state('sc100', {
            url:'/sc100',
            templateUrl: 'views/scforms/sc100/sc100.html',
            controller: 'Sc100FormCtrl'
            /*resolve: {
              currentAuth: function(Authentication){
                  return Authentication.requireAuth();
              }
          }*/
        })
        .state('sc100.plaintiff', {
            url:'/plaintiff',
            templateUrl: 'views/scforms/sc100/sc100-plaintiff.html'
          })
        .state('sc100.defendant', {
            url: '/defendant',
            templateUrl: 'views/scforms/sc100/sc100-defendant.html'
        })
        .state('sc100.dispute', {
            url: '/dispute',
            templateUrl: 'views/scforms/sc100/sc100-dispute.html'
        })
  
  // Quiz
  
        .state('quiz', {
            url: '/quiz',
            templateUrl: 'views/quiz/quiz.html',
            controller: 'QuizController'
          })
        .state('quiz.step1', {
            url: '/step1',
            templateUrl: 'views/quiz/quiz-step1.html',
          })
        .state('quiz.step2', {
            url: '/step2',
            templateUrl: 'views/quiz/quiz-step2.html'
          })
        .state('quiz.step3', {
            url: '/step3',
            templateUrl: 'views/quiz/quiz-step3.html'
          })
  
  // login
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'RegistrationController'
          })
  // register
        .state('registration', {
            url: '/register',
            templateUrl: 'views/register.html',
            controller: 'RegistrationController'
          });

    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/sc100');
    
}]);