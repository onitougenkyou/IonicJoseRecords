appchat.controller('profilController', function(
	$scope,$routeParams,topicService,profilService) {

    var user = localStorage.getItem("user");
    $scope.user = JSON.parse(user);

    profilService.retrieveTopics($scope.user.id).then(function (response) {
        $scope.topics = response.data;
    });

	$scope.profil = function(id){
		var user = {
				id:id
		};

};



	topicService.GetAll($scope.user.id, 10).then(function(response) {

	});



/* text area publictation */


	$scope.envoyer = function() {

		var user = localStorage.getItem("user");

		var userjson = JSON.parse(user);

		var newPost = {
			userid: userjson.id,
			contenu: $scope.contenupost
		};

 		profilService.newPost(newPost);
	}






});
