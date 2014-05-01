

$( document ).ready(function() {
    // main function here
});


// handlebars boilerplate
var source   = $("#entry-template").html();
var template = Handlebars.compile(source);
var html     = template(data);
$( target ).html( html );