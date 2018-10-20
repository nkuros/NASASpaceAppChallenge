app.service('nodeService', function() {
  var currentNode = {};
  var currentSystem = {};

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
    getSystem: getSystem
  };

});