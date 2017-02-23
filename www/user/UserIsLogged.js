/**
 * Created by davinazz on 16/02/2017.
 */
appchat.controller('UserisLogged', function($scope, $state) {

  $scope.userlogged = function () {
    if (localStorage.getItem("user")) {
      //setTimeout(function(){$window.location.href = "#/profil"}, 3000) ;
      setTimeout(function () {
        $state.go("profil")
      }, 3000);
    }
    else {

    }
  };
});
