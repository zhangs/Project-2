/**
 * This is the entry point for our JavaScript program
 * Project 3
 */
 
 // Need to add comments
 // See if I can get the buttons to hide and not hide
function main() {

	$('#restart_button').fadeOut();

	var occurance = 0;

	$("#search_button").click(function() {
		$("#search_button").fadeOut(2000, function() {

		});
		$("#term").fadeOut(2000, function() {

		});		
		
		$('#restart_button').fadeIn();
		
	});	
	
	$("#search_button").click(startSearch);
		
	$('#restart_button').click(function() {
		location.reload();
	});
	
	function startSearch() {		
	
		var searched = $("#term").val();

		var count_text = $("<p>How many times the word " + "'" + searched + "'" + " occurred: </p>");
		$("#results").append(count_text);	
		
		var s = new Spotter("twitter.search", 
							{q:"Nintendo", period:120},
							{buffer:true, bufferTimeout:750}
							);
						
						
		s.register(function(tweet) {
			var profile_image = "<img src=' "+tweet.profile_image_url+" ' />";	
		
			var object = $("<p class='tcolor'>" + profile_image + tweet.text+ "</p>");
			
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