var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];

function getStreams() {
	// Loop through streamers array
	for (var i = 0; i < streamers.length; i++) {
		$.getJSON("https://api.twitch.tv/kraken/streams/" + streamers[i] + "?client_id=99etv7bwptim3jt74z81cqsey9m9mq0&callback=?", function(data) {
			streamers = data;
			// Handle online streamers	
			if (data.stream !== null){
				$("#results").append('<div class="online col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-8 col-xs-offset-2"> <img src="' + data.stream.channel.logo + '" class="logo"> &nbsp' + data.stream.channel.display_name + '&nbsp <a href="' + data.stream.channel.url + '" target="_blank">' + data.stream.channel.status + '</a> <span class="viewers">' + data.stream.viewers + '</span></div>');
			} else {
				// Get channel info for offline streamers
				$.getJSON(data._links.channel + "?client_id=99etv7bwptim3jt74z81cqsey9m9mq0&callback=?", function(data) {
					// Handle non-existant streamers
					if (data.status === 404 || data.status === 422 || data.error === "Not Found"){
						console.log(data);
						$("#results").append('<div class="dne col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-8 col-xs-offset-2">' + data.message + '</div>');
					} else {	
						$("#results").append('<div class="offline col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-8 col-xs-offset-2"> <img src="' + data.logo + '" class="logo"> &nbsp' + data.display_name + '&nbsp Offline </div>');
					}
						
				});
			}
		});
	}
}

getStreams();

$(".all-btn").click(function(){
	$(".online").removeClass("hidden");
	$(".offline").removeClass("hidden");
	$(".dne").removeClass("hidden");
});

$(".online-btn").click(function(){
	$(".online").removeClass("hidden");
	$(".offline").addClass("hidden");
	$(".dne").addClass("hidden");
});

$(".offline-btn").click(function(){
	$(".offline").removeClass("hidden");
	$(".online").addClass("hidden");
	$(".dne").addClass("hidden");
});