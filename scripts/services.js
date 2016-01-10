(function() {
  angular.module('ngExServices', [])
    .service('restServices', restServices);

  restServices.$inject = ['Restangular', '$rootScope'];

  function restServices(Restangular, $rootScope) {

    var charInfo = {};

    return {

      get: function(item, id) {
        return Restangular.one(item, id).get();
      },

      getAll: function(item, id) {
        return this.get(item, id)
          .then((res) => {
            charInfo = { name: res.name, height: res.height };
            return res;
          })
          .then((res) => this.get('planets', res.homeworld.split('/')[5]))
          .then((res) => {
            charInfo.planet = res.name;
            return charInfo;
          })
          .then((res) => $rootScope.$emit('charInfo', res));
      }

    };
  }
  
})();