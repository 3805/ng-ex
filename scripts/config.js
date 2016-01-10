(function() {
  angular.module('ngExConfig', [])
    .config(['RestangularProvider', restangularConfig])

  function restangularConfig(RestangularProvider) {
    RestangularProvider.setBaseUrl('http://swapi.co/api');
    RestangularProvider.setDefaultHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json'
    });
  }

})();
