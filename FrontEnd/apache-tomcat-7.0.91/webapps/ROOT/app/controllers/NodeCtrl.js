app.controller('NodeCtrl', function($rootScope, $location, $scope, nodeService)
{
	$scope.node = nodeService.getNode();
	$rootScope.activetab = $location.path();
	console.log($rootScope.activetab);
	$scope.message = 'Informações sobre o nó';
});