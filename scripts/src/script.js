 // Need to add comments
function main() {

	// Restart button starts out hidden
	$('#restart_button').hide();

	// Counter for later
	var occurance = 0;

	// When the search button is clicked, the button itself and the text input area will
	// fade out and the restart button will fade in
	// function startsearch will also start
	$("#search_button").click(function() {
		$("#search_button").fadeOut(2000, function() {

		});
		$("#term").fadeOut(2000, function() {

		});		
		
		$('#restart_button').fadeIn();
		
	});	
	
	$("#search_button").click(startSearch);
		
	// When the restart button is pressed, the site will refresh itself and 
	// the user can start anew
	$('#restart_button').click(function() {
		location.reload();
	});
	
	function startSearch() {		

		// Get what was typed in the text input area
		var searched = $("#term").val();

		// Append text
		var count_text = $("<p>How many times the word " + "'" + searched + "'" + " occurred: </p>");
		$("#results").append(count_text);	
		
		// Search for tweets with the word "Nintendo"
		var s = new Spotter("twitter.search", 
							{q:"Nintendo", period:120},
							{buffer:true, bufferTimeout:750}
							);
						
						
		s.register(function(tweet) {
			// Create a variable with information about the tweet
			var profile_image = "<img src=' "+tweet.profile_image_url+" ' />";	
		
			var object = $("<p class='tcolor'>" + profile_image + tweet.text+ "</p>");
			
			// Everytime a new tweet is picked up, 
			// the area where the count is appended is first cleaned
			$('#tweets').empty();					
				
			// Counts how many times searched term has appeared and appends it
			var counting = $("<p>" + occurance + "</p>");
			$("#tweets").append(counting);			

			// Briefly shows the tweet that matches the search
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