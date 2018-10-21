app.controller('HomeCtrl', function($rootScope, $location, $scope, nodeService)
{
	var system = nodeService.getSystem();
   $scope.message = system.message;
   $scope.name = system.name;
});