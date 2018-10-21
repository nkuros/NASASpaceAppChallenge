app.controller('NodeCtrl', function($rootScope, $location, $scope, nodeService, resourceServices)
{
	$scope.node = nodeService.getNode();
	$scope.$on('changeNode', function(event, data){
		$scope.node = nodeService.getNode();
	}); 
	$scope.exploreNode = function(){
		resourceServices.increaseMaterial((($scope.node.size || 0) * 2* ($scope.node.multiplier || 0)).toFixed(2));
		console.log(resourceServices.getMaterial());
		$rootScope.$broadcast('exploreEvent', 'Explore Event Fired');
	}
	
});