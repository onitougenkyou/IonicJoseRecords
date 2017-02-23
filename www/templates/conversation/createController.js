appchat.controller('createController', function($scope, $stateParams, conversationService, $state) {

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
			$state.go('app.conversation_create', {id:id, id2:2});
		});
	}
});
