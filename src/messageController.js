module.exports = function(app) {
  app.controller('MessageController', ['mailService', '$stateParams', '$scope',
    '$state',
    function(mailService, $stateParams, $scope, $state) {
      $scope.message = mailService.get(parseInt($stateParams.id));
      $scope.back = function() {
        $state.go("inbox");
      }
    }
  ])
}