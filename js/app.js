var App = angular.module('App', ['pascalprecht.translate','ngRoute','ApiModel','ngSanitize']);

App.config(function($routeProvider) {
    $routeProvider

      // route for the home page
      .when('/', {
        templateUrl : 'lib/pages/home.html',
        controller  : 'appCtrl'
      })

      // route for the about page
      .when('/abt', {
        templateUrl : 'lib/pages/test.html',
        controller  : 'pageCtrl'
      })

      // route for the contact page
      .when('/view/:orderId', {
        templateUrl : 'lib/pages/test.html',
        controller  : 'pageCtrl'
      })
      .when('/view/:orderId/:slug', {
        templateUrl : 'lib/pages/test.html',
        controller  : 'pageCtrl'
      });
  });
App.controller('pageCtrl', function ($scope,$timeout,  $window,$translate,$route,$routeParams, $location,AppRestangular) {

$scope.$route = $route;
$scope.$location = $location;
     $scope.$routeParams = $routeParams;
     $scope.name = 'pageController';
  $scope.order_id = $routeParams.orderId;
  $scope.message = 'Look! I am an about page.';
//load data

/************* load dynamic data based on guide ************/
  $scope.loadDetails = function() {
    $scope.loading = true;
    itemdata.get().then(function(data) {

    $scope.card = data;
       //$scope.viewResult();
       // after data has finished loading
       //$scope.viewResult(data.latitude,data.longitude);



        setTimeout(function() {


       $scope.loading = false;


    }, 0);


});


  };
var itemdata = AppRestangular.one("id", $scope.order_id);
  $scope.loadDetails();
//load data ends
});
App.controller('appCtrl', function ($scope,$timeout,  $window,$translate,$route, $location,$routeParams) {
 $scope.$route = $route;
$scope.$location = $location;
     $scope.$routeParams = $routeParams;
     $scope.name = 'appCtrl';
  $scope.helloworld = "hey! hello world!";
  $scope.data = {
  cb2: 'en'
};
   $scope.changeLanguage = function (key) {
    $translate.use(key);
  };


});
App.config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('en', {
            LANGBOARD: "Your local discovery guide",
            DOWNAPP: "Get it for free!",
            APPHERO2: "We help you discover and find everything in your city, because life it's easier when you know what's around you.",
        })
        .translations('es', {
            LANGBOARD: "Su guía de descubrimiento local",
            DOWNAPP: "¡Descargar gratis!",
            APPHERO2: "Te ayudamos a descubir y encontrar todo en tu ciudad, porque la vida es más fácil cuando sabes lo que te rodea.",

        });
$translateProvider.preferredLanguage('en');
}]);
