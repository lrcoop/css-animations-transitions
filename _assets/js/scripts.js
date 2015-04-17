
function replayAnimation(){
	$('.animate #line1, .animate #line2').css('width', '0');
    $('.animate #labels, #results .animate #arrow').css('opacity', '0');
    $('.chart').removeClass('animate');
   	setTimeout(function(){ $('#lineChart').addClass('animate'); }, 5);
}
$( document ).ready(function() {
    $('#cards div').click(function(){
    	$(this).toggleClass('flipped');
    });
});