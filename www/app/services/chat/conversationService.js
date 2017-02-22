appchat.factory('conversationService', function($http, $q) {

    var API = 'http://preprod.prokonect.fr';

    var service = {
        response : false,
        getconversation: function(id) {
            var deferred = $q.defer();
            var url = API + "/api/conversations/view/"+id ;

            $http.get(url)
            .then(function(data, status) {
                service.response = data;
                deferred.resolve(service.response);
            });

            return deferred.promise;
        },
        create: function(user) {
          var deferred = $q.defer();
          var url = API + "/api/conversations/create/" +user.recipient.id+ "/" +user.sender.id;

          // console.log(user);
          // console.log(user.recipient.id);
          $http.get(url)
          .then(function(data) {
              service.response = data;
              deferred.resolve(service.response);
          });
            return deferred.promise;
        },
        RefreshById: function(id) {
            var deferred = $q.defer();
            var url = API + "/api/conversations/messages/all/"+id ;

            $http.get(url)
            .then(function(data, status) {
                service.response = data;
                deferred.resolve(service.response);
            });

            return deferred.promise;
        },
        GetById: function(id) {
          var deferred = $q.defer();
          var url = API + "/api/conversations/" + id;
          

          $http.get(url)
          .then(function(data, status) {
              service.response = data;
              deferred.resolve(service.response);
          });
          return deferred.promise;
        },
        SendMessage: function(conversId,userId,content) {
          var deferred = $q.defer();
          var url = API + "/api/conversations/messages/create/"+conversId+"/"+userId+"/"+content;

          $http.get(url)
          .then(function(data, status) {
              service.response = data;
              deferred.resolve(service.response);
          });
          return deferred.promise;
        }
    }

    return service;
});
