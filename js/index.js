$(document).ready(function(){
	$("#owl-demo").owlCarousel({
		autoPlay:true
	});
});
$(document).ready(function() {
        $(".rslides").responsiveSlides({
            speed: 800
        });
});
$(document).ready(function() {
    var win = $(window),
        nav = $('.masthead'),
        pos = nav.offset().top,
        sticky = function() {
            win.scrollTop() > pos ? nav.addClass('sticky') : nav.removeClass('sticky')
        }
    win.scroll(sticky)
});
$(document).ready(function() {
    $(".inline").colorbox({
        inline: true,
        width: "450"
    });
});
jQuery(document).ready(function($) {
    $("#cloud").mCustomScrollbar({
        scrollButtons: {
            enable: true
        },
        theme: "dark-2"
    });
});
jQuery(document).ready(function($) {
$(".nav-bar").click(function(){
    $(".responsive-nav ul").toggle(200);
});
});