/**
 * Created by davinazz on 16/02/2017.
 */

appchat.controller('UserController', function($scope, $window, UserService) {


        var user = localStorage.getItem("user");
        var objetUser = JSON.parse(user);

        $scope.signup = function () {
            var user = {
                mail: $scope.mail,
                password: $scope.password,
                nickname: $scope.nickname,
                lastname: $scope.lastname,
                firstname: $scope.firstname
            };
            console.log(user);
            UserService.createUser(user);
            $window.location = "#!/signup_success";
        };

            $scope.login = function () {
            var userlogin = {

                mail: $scope.mail,
                password: $scope.password
            };

               UserService.loginUser(userlogin).then(function (response) {
                   if(response.data.success){
                       localStorage.setItem("user",JSON.stringify(response.data));
                       $window.location = "#!/login_success";
                   }
                   else {

                   }
               });




                                        }
    }
);
