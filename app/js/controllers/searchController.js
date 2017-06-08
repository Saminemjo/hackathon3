angular.module('app')
    .controller('searchController', function($scope, CurrentUser, $state, UserService) {
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
        });
    });
