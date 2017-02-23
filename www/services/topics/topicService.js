appchat.factory('topicService', function($http, $q) {

    var API = 'http://preprod.prokonect.fr';

    var service = {
        response : false,
        GetAll: function(id, limit) {
            var deferred = $q.defer();
            var url = API + "/api/topics/user/"+id+"/"+limit ;

            $http.get(url)
            .then(function(data, status) {
                service.response = data;
                deferred.resolve(service.response);
            });

            return deferred.promise;
        }, 
        GetCreate: function(id, limit) {
            var deferred = $q.defer();
            var url = API + "/api/topics/user/"+id+"/"+limit ;

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
