angular.module('app')
    .controller('matchsController', function($scope, CurrentUser, UserService) {
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
        });
    });
