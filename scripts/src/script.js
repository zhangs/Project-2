/**
 * This is the entry point for our JavaScript program
 * Project 3
 */
function main() {

	var occurance = 0;

    //your code goes here
	$("#search_button").click(function() {
		$("#search_button").fadeOut(2000, function() {

		});
		$("#term").fadeOut(2000, function() {

		});
		
	});
	
	$("#search_button").click(startSearch);

	function startSearch() {		
	//    alert("hello world!");
	//	var count = 0;
	//	var object_array = new Array();
	//	var object_array = [];

		//your tasks

		//1. Create a spotter and get it to insert tweets into the DOM


		var searched = $("#term").val();

		var count_text = $("<p>How many times " + searched + " occured: </p>");
		$("#results").append(count_text);	
		
		var s = new Spotter("twitter.search", 
							{q:"Nintendo", period:120},
							{buffer:true, bufferTimeout:750}
							);
						
						
		s.register(function(tweet) {
		//	count = count + 1;
		//	var color;
			

			//2. Add profile images (tweet.profile_image_url)
			//var profile_image = "<img src=' "+tweet.profile_image_url+" ' />";	
		
			//var object = $("<p class='"+color+"'>" + profile_image + tweet.text+ "</p>");
			$('#tweets').empty();					
				
			var counting = $("<p>" + occurance + "</p>");
			$("#tweets").append(counting);			

			if (tweet.text.match(searched) ) {
				occurance = occurance + 1;		
			}
							

			
				
//			object.hide();
//			$("#tweets").prepend(object);
//			object.slideDown();
			
			//var counted = 10;
		
			// check to see if tweet has the word love
			// if the tweet contains love. increment love_count	
		});
	
		s.start();
	}	
	
}

$(document).ready(function() {
	main();
});