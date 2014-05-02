

function buildQuestion( data ){
	
	current++;
	
	console.log(data);
	
	for (var i = 0; i < data.answers.length; i++) {
		var a = data.answers[i];
		if (a.correct) {
			a.message = "Correct! Appears in these articles:";
			a.class = "correct";
			data.question.solution = [];
			data.question.solution.label = a.label;
			a.articles = a.articles.slice(0, 2);
		} else {
			a.message = "Not the most tenuous connection: this appears in quite a few articles with "+data.question.label+". Try again.";
			a.class = "incorrect";
		}
		data.answers[i] = a;
		
	    var img = new Image();
	    img.src = a.img;
	    if (img.height === 0) {
	    	a.img = 'img/src/img/questionmark.png';
	    }
		
	}
	
	var source   = $("#question-template").html();
	var template = Handlebars.compile(source);
	var html     = template(data);
	$( '.question-holder' ).html( html );

	// set heights
	
	$('.answer-box .image').height( $('.answer-box .image').width() );
	
	$('.answer-box-links').each(function(){
		var h = $(this).height()+25;
		$(this).css('margin-bottom',-h).css('top',-h);
	});
	
	var answered = false;
	
	$('.answer-box').click(function(){
		if ( !$(this).hasClass('answered')) {
			$('.answer-box.answered').css('opacity',0);
			$(this).addClass('answered');
			$(this).find('.answer-box-links').addClass('active')
				.css('margin-bottom','').css('top','');
			var scrollTo = $(this).position().top;
			$("html, body").animate({ scrollTop: scrollTo });
		
			if( $(this).hasClass('correct') ) {
				setTimeout(function(){
					$('.play-again').removeClass('inactive').addClass('active');
					setTimeout(function(){
						var playAgain = $(window).height();
						$("html, body").animate({ scrollTop: playAgain });
					},200);
				},500);
				if (!answered) {
					score++;
				}
			}
			answered = true;
		
			$(this).off();
			
		}
		
	});
	
	$('.play-again').click(function(){
		playAgain();
	});
	


	setTimeout(function(){
		$('.big-question').addClass('active');
	},100);
	
	setTimeout(function(){
		$('.answers-grid').addClass('active');
	},1000);
	
	$('.answer-box').each(function(i){
		var $this = $(this);
		setTimeout(function(){
			$this.addClass('active');
		},(500*i)+1000);
	});	
	
}