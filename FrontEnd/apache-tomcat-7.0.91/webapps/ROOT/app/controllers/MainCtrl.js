app.controller('MainCtrl', function($location, $scope, nodeService)
{
	var fileName = 'app/img/17_Cluster_Arches';
	var nodeJson = '';
	$.ajax({
		type: "POST",
		data: "Hubble_Pics/hubble_friday_05292015.jpg",
		url: "http://192.168.137.155:8082/",
		dataType: "text"
	}).done(function (res) {
		console.log(res);
		nodeJson = res.replace(/\'/g, '"');
		var nodes = JSON.parse(nodeJson);
		
		for(var i = 0; i < nodes.length; i++){
			var node = nodes[i];
			//console.log(node);
			node.name = 'Nome da estrela ' + i;
			var link = $('<a>', {href:"/#node", id:"img"+i});
			link.click(function(e){
				var index = this.id.substring(3, this.id.length);
				var node1 = JSON.parse(JSON.stringify(nodes[index]));
				console.log(node1);
				nodeService.setNode(node1);
				
			})
			var image = $('<img>',{ class:'nodeImage', src:'app/img/ring.png'});
			image.css('left', node.x+2).css('top', node.y-14).css('position', 'absolute').css('z-index', '99').show();
			link.append(image);
			$('#hidden-images').append(link);
		}
	
		console.log($('#hidden-images'));
		// Your `success` code
	}).fail(function (jqXHR, textStatus, errorThrown) {
		console.log("AJAX call failed: " + textStatus + ", " + errorThrown);
	});
	var system = {};
	
	var fileTxt = readTextFile(fileName+'.txt');
	console.log(fileTxt);
	
	
	nodeService.setSystem(system);
	   
	$scope.img = fileName + '.jpg';
   
	function readTextFile(file)
	{
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = function ()
		{
			if(rawFile.readyState === 4)
			{
				if(rawFile.status === 200 || rawFile.status == 0)
				{
					console.log(rawFile)
					var allText = rawFile.responseText;
					fileTxt = allText;
					system.name = fileTxt.substring(0, fileTxt.indexOf('\n'));
					system.message = fileTxt.substring(fileTxt.indexOf('\n')+1, fileTxt.length);
				}
			}
		}
		rawFile.send(null);
	}
   
   
});