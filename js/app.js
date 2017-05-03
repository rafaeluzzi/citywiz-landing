var App = angular.module('App', ['pascalprecht.translate']);

App.controller('appCtrl', function ($scope,$timeout,  $window,$translate) {
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
