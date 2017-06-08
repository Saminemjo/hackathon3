angular.module('app')
    .controller('ChatController', function($scope, CurrentUser, UserService) {
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
        });
        function load_home() {
             document.getElementById("contentchat").innerHTML='<object type="text/html" data="http://cjroth.com/aframe-keyboard/" ></object>';
        }
        load_home();

    });
