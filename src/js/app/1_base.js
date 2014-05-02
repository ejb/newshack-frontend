if(window.location.host.indexOf('amazonaws') > -1 ) {
	var jsonLoc = 'http://ec2-54-72-215-27.eu-west-1.compute.amazonaws.com/api/public/random/';
} else {
	var jsonLoc = 'proxy.php';	
}

// var jsonLoc = 'example.json';


$( document ).ready(function() {
		
    // main function here
	$.getJSON( jsonLoc, function( d ){
		
		setTimeout(function(){
			$('h1').addClass('small');
			buildQuestion( d );
		},1000);
		
	});
	
	$(function() {
	    FastClick.attach(document.body);
	});
	
});

var score = 0;
var current = 0;

