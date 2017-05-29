var App = angular.module('App', ['pascalprecht.translate','ngRoute','ApiModel','ngSanitize','ngLoadScript']);

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
      })
      .when('/event/:eventId', {
        templateUrl : 'lib/pages/event.html',
        controller  : 'pageCtrl'
      })
      .when('/event/:eventId/:slug', {
        templateUrl : 'lib/pages/event.html',
        controller  : 'pageCtrl'
      })
      .otherwise({
                redirectTo: '/'
            });
  });
App.filter('removeAt', function() {
    return function (value) {
        var s = value;
 var n = s.indexOf('@');
  s = s.substring(0, n != -1 ? n : s.length);
  return s;
    };

  });
App.controller('pageCtrl', function ($scope,$timeout,  $window,$translate,$route,$routeParams, $location,AppRestangular) {

$scope.$route = $route;
$scope.$location = $location;
     $scope.$routeParams = $routeParams;
     $scope.name = 'pageController';
  if($routeParams.eventId){
    $scope.order_id = $routeParams.eventId
    $scope.pageType = "event";
  }else{
    $scope.order_id = $routeParams.orderId;
    $scope.pageType = "eat";
  }
  $scope.message = 'Look! I am an about page.';
//load data

/************* load dynamic data based on guide ************/
  $scope.loadDetails = function() {
$scope.loaded = false;
    itemdata.get().then(function(data) {

    $scope.card = data;
       //$scope.viewResult();
       // after data has finished loading
       //$scope.viewResult(data.latitude,data.longitude);



        setTimeout(function() {


       $scope.loaded = true;
       $scope.$apply();


    }, 1000);


});


  };
if($scope.pageType == 'eat'){
  var itemdata = AppRestangular.one("id", $scope.order_id);
}else if($scope.pageType == 'event'){

  var itemdata = AppRestangular.one("eventid", $scope.order_id);
}

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
  $scope.lang = function(){ return $translate.use();}

setTimeout(function() {


       $scope.loaded = true;
       $scope.$apply();


    }, 500);
});
App.config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('en', {
            LANGBOARD: "Local Discovery Guides",
            DOWNAPP: "Get the free app!",
            APPHERO2: "CityWiz helps you discover everything in your city. Life is easier when you know what's around you!",
            ABOUTUSTITLE:"We believe life is easier when you know what's around you.",
            APPABOUTUS: "<p>Citywiz is a free and easy-to-use iPhone\® App \(soon on Android\) that will guide you to discover and connect to everything local \(currently in Puerto Rico\).</p><p>If you’re looking for a place to eat, go for a night out, get the intel of nearby events or even searching for a new house to buy or rent, our app will help you stay connected to everything your city has to offer.</p><p>New city-wizards \(guides\) will be added regularly for you to discover cool and essential things like food, music, art, sports, real estate, hotels, professional services, shopping and more.</p>",
            TEAMTITLE: "How wonderful to meet you!",
            TEAM: "<p>We are a small but passionate Puerto Rican team focused on delivering new and fun technology products that will help you search and discover.</p>",
            DOWNLOADTITLE: "Start discovering your city now!",
            DOWNLOAD: "Our app is available now for iPhone. Download now and get started!"

        })
        .translations('es', {
            LANGBOARD: "Guías de descubrimiento local",
            DOWNAPP: "¡Descarga el app gratis!",
            APPHERO2: "CityWiz te ayuda a descubrir tu ciudad. ¡La vida es más fácil cuando sabes lo que te rodea!",
            ABOUTUSTITLE:"La vida es más fácil cuando sabes lo que te rodea.",
            APPABOUTUS: "<p>Citywiz es una aplicación de iPhone® gratuita y fácil de usar (pronto en Android) que te ayudará a descubrir y conectarte con todo lo que te rodea (actualmente en Puerto Rico).</p><p>Si estás buscando un lugar para comer, salir de paseo, obtener información de eventos cercanos o incluso buscando un hogar para comprar o alquilar, nuestra aplicación te ayudará a mantenerte conectado con todo lo que tu ciudad tiene para ofrecer.</p><p>Nuevos city-wizards (guías) serán añadidos regularmente para que continúes descubriendo cosas nuevas y esenciales como comida, música, arte, deportes, bienes raíces, hoteles, servicios profesionales, compras y mucho más.</p>",
            TEAMTITLE: "¡Qué maravilloso conocerte!",
            TEAM: "<p>Somos un pequeño pero apasionado equipo puertorriqueño enfocado en brindar nuevos y divertidos productos tecnológicos que te ayudarán a buscar y descubrir.</p>",
            DOWNLOADTITLE: "¡Comienza a descubrir tu ciudad ya!",
            DOWNLOAD: "Nuestra aplicación ya está disponible para iPhone®. ¡Descargue ahora y comienza a descubrir!"
        });
$translateProvider.preferredLanguage('en');
}]);
