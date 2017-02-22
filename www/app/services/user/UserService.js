/**
 * Created by davinazz on 15/02/2017.
 */

appchat.factory('UserService', function($http,$q) {

    var objetUser = null;

    var API = 'http://preprod.prokonect.fr/api';

    var service = {
        response : false,
        createUser: function(user) {
            var url = API + "/users/create/" +user.mail+ "/" +user.nickname+ "/" +user.password+ "/" +user.firstname+ "/" +user.lastname;

            $http.get(url)
                .then(function(status) {

                });


        },

        loginUser: function (userlogin) {

            var deferred = $q.defer();

            var url = API + "/users/login/" + userlogin.mail + "/" +userlogin.password;


            $http.get(url)
                .then(function (data) {
                    service.response = data;
                    deferred.resolve(service.response);
                });

            return deferred.promise;
        },

        returnUser: function () {
            return objetUser;
        }
    };

    return service;

});
