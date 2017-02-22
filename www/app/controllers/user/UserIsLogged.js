/**
 * Created by davinazz on 16/02/2017.
 */
appchat.controller('UserisLogged', function($scope) {
    if(localStorage.getItem("user")){
        alert("Vous êtes déjà connecté");
    }
    else {
        alert("Vous n'êtes pas encore connecté");
    }
});
