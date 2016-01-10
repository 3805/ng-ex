(function() {
  angular.module('ngExControllers', [])
    .controller('InputCtrl', InputCtrl)
    .controller('OutputCtrl', OutputCtrl);

  InputCtrl.$inject = ['restServices'];
  OutputCtrl.$inject = ['restServices', 'list', '$rootScope', '$scope'];

  function InputCtrl(restServices) {
    var vm = this;

    vm.checkWho = checkWho;

    function checkWho(id) {
      return id ? restServices.getAll('people', id) : alert('Not a number');
    };
  }

  function OutputCtrl(restServices, list, $rootScope, $scope) {
    var vm = this, charInfoListener;

    vm.totalChars = list;

    charInfoListener = $rootScope.$on('charInfo', function(evt, data) {
      vm.character = data;
    });

    $scope.$on('$destroy', () => charInfoListener());
  }

})();