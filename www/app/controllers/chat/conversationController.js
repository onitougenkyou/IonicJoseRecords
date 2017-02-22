appchat.controller('conversationController', function($scope, conversationService,$stateParams)
{
  var id = $stateParams.id;
  var lastID = null;
  var done = false;
  var user = localStorage.getItem('user');
  user= JSON.parse(user);
  $scope.id = id ;
  $scope.user = user;
  console.log(id);
  console.log("userid"+ user.id);
  //var arr = new Array();

  conversationService.getconversation(id).then(function(response)
  {
    $scope.messages= messages = response.data.messages;
    console.log(response.data.messages);

    if(messages != undefined)
    {

      for (var i = 0; i < messages.length; i++)
      {
        lastID = messages[i].id;
      }
      console.log("id "+lastID);
      done = true;
    }





  });

  console.log("last "+lastID);
  setInterval(function(){
    if(done == true)
    {

      conversationService.getconversation(id).then(function(response)
      {
        $scope.messages= response.data.messages;
      });
    }
  }, 1000);


  $scope.f = function(id,user)
  {
    done=true;
    console.log("scope "+id);
    console.log("scope user id "+user.id);
    conversationService.SendMessage(id,user.id,$scope.dd).then(function(response){
      console.log(response);
      //$scope.messages(response.data.messages);
      // conversationService.getconversation(id).then(function(response)
      // {
      //   $scope.messages= messages = response.data.messages;
      //   for (var i = 0; i < messages.length; i++)
      //   {
      //     lastID = messages[i].id;
      //   }
      //   console.log(response.data.messages);
      //   console.log("id "+lastID);
      //   done = true;
      //
      //
      // });
    });

  }

});
