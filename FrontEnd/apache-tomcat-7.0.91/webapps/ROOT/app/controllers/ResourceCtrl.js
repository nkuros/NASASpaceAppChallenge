app.controller('ResourceCtrl', function($location, $scope, resourceServices, $rootScope){
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
	
	$scope.nextSystem = function(){
		$rootScope.$broadcast('newSystem', 'Next System');
	}
})