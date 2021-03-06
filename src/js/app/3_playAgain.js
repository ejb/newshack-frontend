
function playAgain(){


	$( '.question-holder' ).fadeOut(function(){
		$(this).empty();
		
		if (current > 4) {
			finishGame()
		} else {
			$.getJSON( jsonLoc + (current + 1) , function( d ){
				$( '.question-holder' ).show();
				buildQuestion( d );
			});		
		}
		
	});
	
	
	
}



function finishGame(){
	var msg = "You got <b>"+score+" out of "+current+"</b> answers correct.";
	if (score === current) {
		msg += " You sure know your news. <span class='try-again'>Try again</span>, "
	} else if (score === current-1) {
		msg += " You're pretty up to date with news, I guess. <span class='try-again'>Try again</span>?"
	} else {
		msg += " <span class='try-again'>Try again</span>, and this time, think tenuous!"
	}
	
	tweet = "I got "+score+" out of "+current+" answers correct in the tenuous connections news quiz. Can you do better?";
	tweet =  encodeURIComponent(tweet);
	
   var tbutton = '<p>Share your score</p><a href="https://twitter.com/share?text='+tweet+'" class="twitter-share-button" data-lang="en">Tweet</span><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>'



	$('.final-score').html( msg + tbutton );
	
	$('.final-score').show();	
	
	
	$('.try-again').click(function(){
		window.location.reload();
	})
}