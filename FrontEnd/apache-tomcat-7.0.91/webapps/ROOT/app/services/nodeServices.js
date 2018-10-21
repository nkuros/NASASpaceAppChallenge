app.service('nodeService', function() {
  var currentNode = {};
  var currentSystem = {};
  var exploredNodes = [];

  var setExploredNode = function(index){
	  if(exploredNodes.indexOf(index) == -1){
		  exploredNodes.push(index);
		  console.log(exploredNodes);
	  }
  }
  
  var getIsExplored = function(index){
	  console.log(exploredNodes);
	  return exploredNodes.indexOf(index) != -1;
  }
  
  var setNode = function(newObj) {
     currentNode = newObj;
  };

  var getNode = function(){
      return currentNode;
  };
  
  var setSystem = function(newObj) {
     currentSystem = newObj;
  };

  var getSystem = function(){
      return currentSystem;
  };

  return {
    setNode: setNode,
    setSystem: setSystem,
    getNode: getNode,
    getSystem: getSystem,
    getIsExplored: getIsExplored,
    setExploredNode: setExploredNode
	
  };

});