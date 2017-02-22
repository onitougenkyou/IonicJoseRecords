appchat.factory('profilService', function($http, $q) {
  var API = 'http://preprod.prokonect.fr/api';

    var service = {
        response: false,

        profil: function(user) {
            var url = API + "users/view" +id;

            $http.get(url)
                .then(function(status) {

                });
        },

        newPost: function(newPost) {

            var url = API + "/topics/create/" + newPost.userid + "/" +newPost.contenu;

            $http.get(url)
                .then(function(status) {

                });
        },

        retrieveTopics: function (iduser) {


            var deferred = $q.defer();

            var url = API + "/topics/all/" + iduser;

            $http.get(url)
                .then(function(data) {
                    service.response = data;
                    deferred.resolve(service.response);
                });

            return deferred.promise;
        }

        /*var valeur = jQuery(#champTexte).val();*/


    };

    return service;

});



