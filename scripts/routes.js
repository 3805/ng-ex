(function() {
  angular.module('ngExRouter', [])
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise(function($injector, $location) {
        $injector.invoke(['$state', function($state) {
          $state.go('main');
        }]);
      });

      $stateProvider
        .state('main', {
          url: '/',
          views: {
            '': {
              templateUrl: '../views/struct.html'
            },
            'input@main': {
              templateUrl: '../views/input.html',
              controller: 'InputCtrl',
              controllerAs: 'input'
            },
            'output@main': {
              templateUrl: '../views/output.html',
              controller: 'OutputCtrl',
              controllerAs: 'output',
              resolve: {
                list: ['restServices', function(restServices) {
                  if (!localStorage.getItem('swapiTotalChars')) {
                    return restServices.get().then((res) => 
                      localStorage.setItem('swapiTotalChars', res.count)
                    );
                  }
                  return localStorage.getItem('swapiTotalChars');
                }]
              }
            }
          }
        });
    })
})();
