function openPlayer(identifier) {
	var url = "videoplayer.html?identifier=" + identifier;
	window.location = url;
}

function getVideo() {
	var url;
	var identifier;
	
	const player = document.getElementById("yes");
	
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	var identifier = urlParams.get('identifier');
	if (identifier != undefined) {
		player.setAttribute("cool","yes");
	} else {
		var identifier = "static";
	}
	const fileName = "https://cdn.badbunsen.com/videos/" + identifier + ".mp4";
	console.log("url is " + fileName + ".");
	
	function playVideo() { 
		player.src = fileName;
		window.addEventListener("load", function() {
			if (identifier = "static") {
			player.setAttribute("autoplay","true");
			player.setAttribute("loop","true");
			}
		});
	}
	
	playVideo(fileName);
}