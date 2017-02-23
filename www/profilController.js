appchat.controller('profilController', function(
	$scope,$routeParams,topicService,profilService) {

    var user = localStorage.getItem("user");
    $scope.user = JSON.parse(user);
    usertest = JSON.parse(user);
    console.log("id user :"+ usertest.id);

    profilService.retrieveTopics(usertest.id).then(function (response) {
        $scope.topics = response.data;
    });

	$scope.profil = function(id){
		var user = {
				id:id
		};

};




/* text area publictation */


	$scope.envoyer = function() {

    console.log("id user");

		var user = localStorage.getItem("user");

		var userjson = JSON.parse(user);

		var newPost = {
			userid: userjson.id,
			contenu: $scope.contenupost
		};

 		profilService.newPost(newPost);
	}






});
