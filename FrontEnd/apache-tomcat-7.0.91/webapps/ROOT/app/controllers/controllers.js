app.controller('HomeCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});

app.controller('NodeCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});

app.controller('MenuCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});