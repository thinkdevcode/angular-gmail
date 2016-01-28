module.exports = function(app) {
  app.controller('InboxController', ['mailService', '$scope',
    function(mailService, $scope) {
      $scope.messages = mailService.getMail();
    }
  ]);
}