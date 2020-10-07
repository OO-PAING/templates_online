jQuery.noConflict();
(function( $ ) {
$('#buttonone').click(function(){
    $('#content p').addClass("one_column");
    $('#buttonone').addClass("active");
    $('#buttontwo').removeClass("active");
    $('p').removeClass("box_column");
});

$('#buttontwo').click(function(){
    $('#content p').addClass("box_column");
	$('#buttontwo').addClass("active");
	$('#buttonone').removeClass("active");
	$('p').removeClass("one_column");
});
})(jQuery);