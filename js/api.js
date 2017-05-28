// The contents of individual model .js files will be concatenated into dist/models.js

(function() {

// Protects views where angular is not loaded from errors
if ( typeof angular == 'undefined' ) {
  return;
};


var module = angular.module('ApiModel', ['restangular']);


module.factory('AppRestangular', function(Restangular) {


  return Restangular.withConfig(function(RestangularConfigurer) {

 RestangularConfigurer.setBaseUrl('http://esobusco.com/api/v1');
    //RestangularConfigurer.setRequestSuffix('.json');

  });

});


// ends factory

// compraymudate data http://esobusco.com/api/v1/gustazos
module.factory('CymRestangular', function(Restangular) {


  return Restangular.withConfig(function(RestangularConfigurer) {

 RestangularConfigurer.setBaseUrl('https://compraymudate.com/feed');
 //RestangularConfigurer.setRequestSuffix('/');

  });

});


// ends factory


})();
