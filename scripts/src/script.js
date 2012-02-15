/**
 * This is the entry point for our JavaScript program
 * Project 3
 */
function main() {
    //your code goes here
	$("#search_button").click(function() {
		$("#search_button").fadeOut(2000, function() {

		});
		$("#term").fadeOut(2000, function() {

		});
		
	});
	
	$("#search_button").click(startSearch);

	function startSearch() {
		var counted = 10;
	
		var counting = $("<p>How many times this has appeared: " + counted + "</p>");
		$("#tweets").append(counting);	
	
		var love_count = 0;
	
	//    alert("hello world!");
		var count = 0;
	//	var object_array = new Array();
		var object_array = [];

		//your tasks

		//1. Create a spotter and get it to insert tweets into the DOM
		var searched = $("#term").val();
	
		var s = new Spotter("twitter.search", 
							{q:searched, period:120},
							{buffer:true, bufferTimeout:750}
							);
						
						
		s.register(function(tweet) {
			count = count + 1;
			var color;

			//2. Add profile images (tweet.profile_image_url)
			var profile_image = "<img src=' "+tweet.profile_image_url+" ' />";	
		
			var object = $("<p class='"+color+"'>" + profile_image + tweet.text+ "</p>");
				
			object.hide();
			$("#tweets").prepend(object);
			object.slideDown();
		
			// check to see if tweet has the word love
			// if the tweet contains love. increment love_count
		
			if (tweet.text.match(/love/i) ) {
				$("#tweets").prepend(object);
			}
							
		
		});
	
		s.start();
	}	
	
}

$(document).ready(function() {
	main();
});