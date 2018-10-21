app.controller('ResourceCtrl', function($location, $scope, resourceServices, $rootScope){
	$scope.science = resourceServices.getScience();
	$scope.material = resourceServices.getMaterial();
	$scope.fuel = resourceServices.getFuel();
	$scope.time = resourceServices.getTime();
	$scope.material_rate = resourceServices.getMaterialRate();
	$scope.science_rate = resourceServices.getScienceRate();
	
	$scope.$on('exploreEvent', function(event, data){
		$scope.science = resourceServices.getScience();
		$scope.material = resourceServices.getMaterial();
		$scope.fuel = resourceServices.getFuel();
		$scope.time = resourceServices.getTime();
		$scope.material_rate = resourceServices.getMaterialRate();
		$scope.science_rate = resourceServices.getScienceRate();
	}); 
	
	$scope.nextSystem = function(){
		$rootScope.$broadcast('newSystem', 'Next System');
	}
})