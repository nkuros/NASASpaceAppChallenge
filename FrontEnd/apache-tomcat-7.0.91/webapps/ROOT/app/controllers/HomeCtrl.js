app.controller('HomeCtrl', function($rootScope, $location, $scope)
{
   $rootScope.activetab = $location.path();
   console.log($rootScope.activetab);
   $scope.message = 'Informações sobre o sistema aqui';
});