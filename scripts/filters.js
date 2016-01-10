(function() {
  angular.module('ngExFilters', [])
    .filter('heightText', heightText);

  function heightText() {
    return (input) => {
      return input 
        ? input < 100 ? 'It\'s a gnome!' : input + ' cm tall.'
        : void 9;
    }
  }

})();