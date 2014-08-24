angular.module('my_app')
.controller('tweetsController', function ($scope, data) {
  $scope.tweets = data.tweets;
});
