var testApp = angular.module("testApp", []);

testApp.controller("testController", function($scope, $http) {
  $scope.home = "This is the homepage";

  $scope.getRequest = function(val) {
    console.log("I've been pressed!");
    $http.get("http://192.168.56.101:3000/api/shellRequest?patern="+val).then(
      function successCallback(response) {
        $scope.response = response;
      },
      function errorCallback(response) {
        console.log("Unable to perform get request");
      }
    );
  };
});
