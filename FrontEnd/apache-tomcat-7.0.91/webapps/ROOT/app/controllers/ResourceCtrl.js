app.controller('ResourceCtrl', function($location, $scope, resourceServices){
	$scope.science = resourceServices.getScience();
	$scope.material = resourceServices.getMaterial();
	$scope.fuel = resourceServices.getFuel();
	$scope.time = resourceServices.getTime();
	
	$scope.$on('exploreEvent', function(event, data){
		$scope.science = resourceServices.getScience();
		$scope.material = resourceServices.getMaterial();
		$scope.fuel = resourceServices.getFuel();
		$scope.time = resourceServices.getTime();
	}); 
})