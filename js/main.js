// 99etv7bwptim3jt74z81cqsey9m9mq0

var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];

function getStreams() {
	for (var i = 0; i < streamers.length; i++) {
		$.ajax({
			type: "GET",
			url: "https://api.twitch.tv/kraken/streams/" + streamers[i] + "?client_id=99etv7bwptim3jt74z81cqsey9m9mq0",
			dataType: "json",
			success: function(response){
				console.log(response);
			},
			error: function(response){
				console.log(response);
			}

		});
	}
}

getStreams();