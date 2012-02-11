/**
 * This is the entry point for our JavaScript program
 */
function main() {
    //your code goes here
//    alert("hello world!");
	var count = 0;
//	var object_array = new Array();
	var object_array = [];

    //your tasks

    //1. Create a spotter and get it to insert tweets into the DOM
	
	var s = new Spotter("twitter.search", 
						{q:"Pokemon", period:120},
						{buffer:true, bufferTimeout:750}
						);
						
	s.register(function(tweet) {
		count = count + 1;
		var color;

		//2. Add profile images (tweet.profile_image_url)
		var profile_image = "<img src=' "+tweet.profile_image_url+" ' />";	
		
		if (count%2 === 0) {
			color = "red";
		} else {
			color = "blue";
		}
		
//		$("p:even").css("background-color", "#E8E8E8");
//		$("p:odd").css("background-color", "#C0C0C0");
				
		//3. Make the tweets occur so the most recent are at the top				
		//4. Make the tweets slide down		

		var object = $("<p class='"+color+"'>" + profile_image + tweet.text+ "</p>");
				
		object.hide();
		$("#tweets").prepend(object);
		object.slideDown();
		
		object_array.push(object);
		
		if (object_array.length > 10) {
			var object_to_remove = object_array.shift();
			object_to_remove.fadeOut(2000, function() {
				object_to_remove.remove();
			});
		}	
		
//		$("#tweets p:gt(9)").fadeOut(200, function() {
//			$("#tweets p:gt(9)").remove();		
//		});

    //5. Alternate the colors or the background of the tweets
										
		
	});
	
	s.start();
	
	// Jeison value (key: value, period:seconds),
	// 				(Buffer gives one at a time, instead of array)

	// function tweet appended as id
	
	// start spotter
	
	
	
	
	
	
    //6. Show a maximum of 10 tweets at a time (remove old tweets from the dom)
	//   Array (hint)


}

main();
