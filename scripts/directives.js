(function() {
  angular.module('ngExDirectives', [])
    .directive('charHeight', charHeight);

  function charHeight() {
    return {

      scope: {
        charHeight: '='
      },

      template: [
        '<div style="background-color: #000; ',
             'height: {{height}}px; ',
             'width:100px;">',
          '<p  style="color: #fff;">',
            '{{height | heightText}}',
          '</p>',
        '</div>'
      ].join(''),
      
      link: function(scope) {
        scope.$watch('charHeight', function(newVal, oldVal) {
          scope.height = newVal;
        });
      }
    };
  }

})();