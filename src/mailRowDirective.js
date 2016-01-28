module.exports = function(app) {
  app.directive('mailRow', ['$state',
    function($state) {
      return {
        restrict: 'E',
        scope: {
          message: '=message'
        },
        template: require('./template/mailRow.jade!'),
        link: function(scope, element, attrs) {
          scope.view = function(message) {
            $state.go('message', {
              id: message.id
            });
          }
        }
      }
    }
  ]);
}