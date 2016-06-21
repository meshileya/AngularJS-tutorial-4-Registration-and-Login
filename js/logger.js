'use strict';
/*
We want to write a function which will communicate with our php file
for user authentication.
*/
var app = angular.module('myapp', [])
        app.controller('empcontroller', function($scope, $http){
  $scope.signin=function(){
    console.log("triggered");
 $http.post("login.php",{'collectedmail':$scope.theemailadd, 'collectedpassword':$scope.thepassword})


  .success(function(data, status, headers, config) {
                
        console.log(data);      
        if(data.trim()==='correct'){
          
          window.location.href = 'index.html';
        } else {
          $scope.errorMsg = "Login not correct";
        }
      })
      .error(function(data, status, headers, config) {
        $scope.errorMsg = 'Unable to LOGIN';
      })
            
  }
  
  $scope.signup = function(){
  console.log("We want to register");
  $http.post("signup.php", {'firstname': $scope.firstname, 'lastname': $scope.lastname, 'emailadd': $scope.emailadd, 'passwords': $scope.password})
  
	.success(function(data, status, headers, config){
		console.log(data);
		if(data.trim()==='correct'){
		window.location.href='login.html';
		}
		else{
		$scope.errorMsg ="Registration wasn't succesful";
		}
		})
		.error(function(data, status, headers, config){
		$scope.errorMsg = "Unable to Register";
		})
		}
  
  });