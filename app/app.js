var app = angular.module('myApp', []);

app.controller('appController', function($scope, $http){

	

	$scope.carriers = [
		          {id:'7',name:'AT&T',email:'txt.att.net'},
		          {id:'8',name:'T-Mobile',email:'tmomail.net'},
		          {id:'9',name:'Sprint',email:'messaging.sprintpcs.com'}     			  ];
      

 	$scope.sendText = function (txt){
      		var request = $http({
          		method: "post",
          		url: window.location.href + "ajax/stxt.php",
          		data: {
              			name: txt.name,
              			email: txt.email,
	      			carrier: $scope.txt.carrier.email,
	      			number: txt.number,
	      			message: txt.message
           			},
          		headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        	});
			//$scope.txt = null;

        	// Check whether the HTTP Request is successful or not.
       	 	request.success(function (data) {
            		$scope.msg = " Text message sent successfully!";
            		
        	});
  	
		

	};
		









});
