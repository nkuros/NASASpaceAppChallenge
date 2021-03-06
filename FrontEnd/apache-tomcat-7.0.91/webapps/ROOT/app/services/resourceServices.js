app.service('resourceServices', function() {
	var science = 0;
	var material = 0;
	var fuel = 100;
	var time = 0;
	var x = 0;
	var y = 0;
	var science_rate = 0;
	var material_rate = 0;
	var speed = 1;
	var fuel_consumption = 0.1;
	var max_fuel = 100;
	
	var increaseScience = function(duration){
		science += parseFloat(duration) * science_rate;
		return science;
	}

	var increaseMaterial = function(duration){
		material += parseFloat(duration) * material_rate;
		return material;
	}
	
	var reduceFuel = function(distance){
		fuel -= necessaryFuel(distance);
		return fuel;
	}
	
	var necessaryFuel = function(distance){
		return parseFloat(distance) * fuel_consumption / speed;
	}
	
	var refuel = function(){
		fuel = max_fuel;
		return fuel;
	}
	
	var increaseTime = function(increment){
		increment = parseFloat(increment);
		time += increment;
		increaseScience(increment);
		increaseMaterial(increment);
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
	var getX = function(){
		return x;
	}
	var getY = function(){
		return y;
	}
	var getScienceRate = function(){
		return science_rate;
	}
	var getMaterialRate = function(){
		return material_rate;
	}
	var setX = function(newX){
		x = newX;
	}
	var setY = function(newY){
		y = newY;
	}
	var increaseScienceRate = function(increment){
		science_rate += parseFloat(increment);
	}
	var increaseMaterialRate = function(increment){
		material_rate += parseFloat(increment);
	}
	var getSpeed = function(){
		return speed;
	}
	
	var getScienceRate = function(){
		return science_rate;
	}
	var getMaterialRate = function(){
		return material_rate;
	}
		
	
	
	
	
	
	return {
    increaseScience: increaseScience,
    increaseMaterial: increaseMaterial,
    reduceFuel: reduceFuel,
    necessaryFuel: necessaryFuel,
    refuel: refuel,
    increaseTime: increaseTime,
    getScience: getScience,
    getMaterial: getMaterial,
    getFuel: getFuel,
    getTime: getTime,
	getX: getX,
	getY: getY,
	getScienceRate: getScienceRate,
	getMaterialRate: getMaterialRate,
	getSpeed: getSpeed,
	setX: setX,
	setY: setY,
	increaseMaterialRate: increaseMaterialRate,
	increaseScienceRate: increaseScienceRate
  };
	
});