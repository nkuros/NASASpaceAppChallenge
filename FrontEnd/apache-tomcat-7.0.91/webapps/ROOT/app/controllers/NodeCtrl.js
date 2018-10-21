app.controller('NodeCtrl', function($rootScope, $location, $scope, nodeService, resourceServices)
{
	start();
	
	function start(){
		$scope.node = nodeService.getNode();
		$scope.node.distance = Math.pow(Math.pow(resourceServices.getX() - $scope.node.x,2)+Math.pow(resourceServices.getY() - $scope.node.y,2),0.5);
		$scope.node.material_rate = (Math.pow(($scope.node.size || 0),0.13) * ($scope.node.multiplier || 0)).toFixed(2);
		$scope.node.science_rate = (Math.pow(($scope.node.size || 0),0.1) * ($scope.node.multiplier || 0)).toFixed(2);
		$scope.node.explored = nodeService.getIsExplored($scope.node.index);
		if ($scope.node.explored == true){
			$scope.node.duration = 0
		}
		else{
			$scope.node.duration = (Math.pow(($scope.node.size || 0),1.3)).toFixed(2);
		}
	}
	$scope.$on('changeNode', function(event, data){
		start()
	}); 
	$scope.exploreNode = function(){
		if(resourceServices.getFuel() < resourceServices.necessaryFuel($scope.node.distance)){
			alert('Você não possui combustível suficiente para essa viagem (' + resourceServices.necessaryFuel($scope.node.distance).toFixed(2) + ').');
			return;
		}
		if ($scope.node.explored == false){
			resourceServices.setX($scope.node.x);
			resourceServices.setY($scope.node.y);
			resourceServices.increaseTime($scope.node.distance/resourceServices.getSpeed() + $scope.node.duration);
			resourceServices.reduceFuel($scope.node.distance);
			resourceServices.increaseMaterialRate($scope.node.material_rate);
			resourceServices.increaseScienceRate($scope.node.science_rate);
			$scope.node.explored = true;
			nodeService.setExploredNode($scope.node.index);
			$scope.node.distance = 0;
			$scope.node.duration = 0;
			$rootScope.$broadcast('exploreEvent', 'Explore Event Fired');
		}
		else{
			alert('Essa região já foi explorada');
		}
	}
	
});