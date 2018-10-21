app.service('resourceServices', function() {
	var science = 0;
	var material = 0;
	var fuel = 100;
	var time = 0;
	
	var increaseScience = function(increment){
		science += parseFloat(increment);
		return science;
	}

	var increaseMaterial = function(increment){
		material += parseFloat(increment);
		return material;
	}
	
	var reduceFuel = function(fuelCost){
		fuel -= fuelCost;
		return fuel;
	}
	
	var refuel = function(){
		fuel = 100;
		return fuel;
	}
	
	var increaseTime = function(increment){
		time += parseFloat(increment);
		return time;
	}
	
	var getScience = function(){
		return science;
	}
	var getMaterial = function(){
		return material;
	}
	var getFuel = function(){
		return fuel;
	}
	var getTime = function(){
		return time;
	}
	
	return {
    increaseScience: increaseScience,
    increaseMaterial: increaseMaterial,
    reduceFuel: reduceFuel,
    refuel: refuel,
    increaseTime: increaseTime,
    getScience: getScience,
    getMaterial: getMaterial,
    getFuel: getFuel,
    getTime: getTime
  };
	
});