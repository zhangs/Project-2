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
	
		var searched = $("#term").val();

		var count_text = $("<p>How many times " + searched + " occured: </p>");
		$("#results").append(count_text);	
		
		var s = new Spotter("twitter.search", 
							{q:"Nintendo", period:120},
							{buffer:true, bufferTimeout:750}
							);
						
						
		s.register(function(tweet) {
			var profile_image = "<img src=' "+tweet.profile_image_url+" ' />";	
		
			var object = $("<p>" + profile_image + tweet.text+ "</p>");
			
			$('#tweets').empty();					
				
			var counting = $("<p>" + occurance + "</p>");
			$("#tweets").append(counting);			

			if (tweet.text.match(searched) ) {
				occurance = occurance + 1;	
				object.hide();
				$("#tweets").append(object);
				object.fadeIn();
				object.fadeOut();
			}
								
		});
	
		s.start();
	}	
	
}

$(document).ready(function() {
	main();
});