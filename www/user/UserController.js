/**
 * Created by davinazz on 16/02/2017.
 */

appchat.controller('UserController', function($scope, $window, UserService, $state,$ionicHistory) {


        var user = localStorage.getItem("user");
        var objetUser = JSON.parse(user);

        if (localStorage.getItem("user")) {

          $state.go("app.profil")

        }
        else {
          $state.go('app.login');
        }

                if (localStorage.getItem("user")) {
                  setTimeout(function () {
                    $state.go("app.profil")
                  }, 3000);
                }
                else {
                  $state.go('app.login');
                }





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
            $state.go('app.login');
        };

            $scope.login = function () {
            var userlogin = {

                mail: $scope.mail,
                password: $scope.password
            };

               UserService.loginUser(userlogin).then(function (response) {
                   if(response.data.success){
                       localStorage.setItem("user",JSON.stringify(response.data));
                       $state.go('app.profil');
                   }
                   else {

                   }
               });




                                        }
          $scope.deconnexion = function () {
            $window.localStorage.clear();
            $ionicHistory.clearCache();
            $ionicHistory.clearHistory();
            $state.go('app.login');
          }
    }
);
