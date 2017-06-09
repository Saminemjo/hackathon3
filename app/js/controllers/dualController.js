angular.module('app')
    .controller('dualController', function($scope,  $timeout,CurrentUser, $state, UserService) {
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
        });
        $timeout(callAtTimeout, 4500);

      function callAtTimeout() {
          $state.go('user.matchs');
  }
    });
