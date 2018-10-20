app.controller('MenuCtrl', function($rootScope, $location, $scope)
{
   $rootScope.activetab = $location.path();
   console.log($rootScope.activetab);
   $scope.message = 'Menu aqui';
});