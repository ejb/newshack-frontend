if(window.location.host.indexOf('amazonaws') > -1 ) {
	var jsonLoc = 'http://ec2-54-72-215-27.eu-west-1.compute.amazonaws.com/api/public/random/index/round/';
} else {
	var jsonLoc = 'proxy.php?x=';	
}

// var jsonLoc = 'example.json';


$( document ).ready(function() {
		
    // main function here
	$.getJSON( jsonLoc + '1', function( d ){
		
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

