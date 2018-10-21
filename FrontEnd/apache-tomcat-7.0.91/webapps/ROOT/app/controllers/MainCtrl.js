app.controller('MainCtrl', function($rootScope, $location, $scope, nodeService)
{
	var fileNames = ['hubble_friday_12182015', 'hubble_friday_06172016', 'hubble_friday_05292015', 'GSFC_20171208_Archive_e000256_orig', 'GSFC_20171208_Archive_e001362_orig', 'archives_g266', '118080main_image_feature_348_ys_full'];
	start();
	$scope.$on('newSystem', function(event, data){
		$(".rings").remove();
		if(fileNames.length == 0){
			fileNames = ['hubble_friday_12182015', 'hubble_friday_06172016', 'hubble_friday_05292015', 'GSFC_20171208_Archive_e000256_orig', 'GSFC_20171208_Archive_e001362_orig', 'archives_g266', '118080main_image_feature_348_ys_full'];
		}
		start();
	}); 
	
	function start(){
		var fileIndex = Math.floor(Math.random()*fileNames.length);
		var fileName = fileNames[fileIndex];
		fileNames.splice(fileIndex, 1);
		console.log(fileNames);
		var nodeJson = '';
		$.ajax({
			type: "POST",
			data: "Hubble_Pics/"+fileName+'.jpg',
			url: "http://192.168.3.81:8082/",
			dataType: "text"
		}).done(function (res) {
			console.log(res);
			nodeJson = res.replace(/\'/g, '"');
			var nodes = JSON.parse(nodeJson);
			
			for(var i = 0; i < nodes.length; i++){
				var node = nodes[i];
				//console.log(node);
				node.name = 'Nome da estrela ' + i;
				node.multiplier = Math.random() * 0.3 + 0.85;
				var link = $('<a>', {href:"/#node", id:"img"+i, class:"rings"});
				link.click(function(e){
					var index = this.id.substring(3, this.id.length);
					var node1 = JSON.parse(JSON.stringify(nodes[index]));
					
					console.log(node1);
					nodeService.setNode(node1);
					$rootScope.$broadcast('changeNode', node1);
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
		
		
		var fileTxt = readTextFile('app/img/'+fileName+'.txt');
		$scope.img = 'app/img/'+fileName + '.jpg';
	}
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
					var system = {};
					system.name = fileTxt.substring(0, fileTxt.indexOf('\n'));
					system.message = fileTxt.substring(fileTxt.indexOf('\n')+1, fileTxt.length);
					nodeService.setSystem(system);
				}
			}
		}
		rawFile.send(null);
	}
   
   
});