app.controller('NodeCtrl', function($rootScope, $location, $scope, nodeService, resourceServices)
{
	$scope.node = nodeService.getNode();
	$scope.node.distance = Math.pow(Math.pow(resourceServices.getX() - $scope.node.x,2)+Math.pow(resourceServices.getY() - $scope.node.y,2),0.5);
	$scope.node.material_rate = (Math.pow(($scope.node.size || 0),0.13) * ($scope.node.multiplier || 0)).toFixed(2);
	$scope.node.science_rate = (Math.pow(($scope.node.size || 0),0.1) * ($scope.node.multiplier || 0)).toFixed(2);
	if ($scope.node.explored){
		$scope.node.duration = 0
	}
	else{
		$scope.node.duration = (Math.pow(($scope.node.size || 0),1.3)).toFixed(2);
	}
	$scope.$on('changeNode', function(event, data){
		$scope.node = nodeService.getNode();
	}); 
	$scope.exploreNode = function(){
		resourceServices.setX($scope.node.x);
		resourceServices.setY($scope.node.y);
		resourceServices.increaseTime($scope.node.distance/resourceServices.getSpeed() + $scope.node.duration);
		resourceServices.reduceFuel($scope.node.distance);
		if (!($scope.node.explored)){
			resourceServices.increaseMaterialRate($scope.node.material_rate);
			resourceServices.increaseScienceRate($scope.node.science_rate);
		}
		console.log(resourceServices.getMaterial());
		$rootScope.$broadcast('exploreEvent', 'Explore Event Fired');
	}
	
});