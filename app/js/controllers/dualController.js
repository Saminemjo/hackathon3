angular.module('app')
    .controller('dualController', function($scope, CurrentUser, $state, UserService) {
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
        });
    });
