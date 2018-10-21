app.controller('HomeCtrl', function($rootScope, $location, $scope, nodeService)
{
	var system = nodeService.getSystem();
   $rootScope.activetab = $location.path();
   console.log($rootScope.activetab);
   $scope.message = system.message;
   $scope.name = system.name;
});