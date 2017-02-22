appchat.controller('createController', function($scope, $routeParams, conversationService, $location) {

	$scope.newConversation = function(id){
		var user = {
			recipient :{
				id:id
			},
			sender : {
				id : 1
			}
		};

		conversationService.create(user).then(function(response) {
			var id = (response.data[0].conversation.id);
			$location.path('/conversation/messages/'+id);
		});
	}
});
