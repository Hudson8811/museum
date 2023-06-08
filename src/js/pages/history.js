$(document).ready(function (){
    if ($('.history').length > 0){
        const tl = gsap.timeline();

        tl.fromTo('.history__track-date', 1,{top: '30px',}, {top: '-30px'}, 0)

        ScrollTrigger.create({
            animation: tl,
            trigger: '.history',
            start: '0 0',
            end: 'center',
            scrub: 4,
        })


        $(window).scroll( function(){
            $('.history__track span').each( function(i){
                if($(window).scrollTop() > ($(this).offset().top - $(window).height() / 2 - ($(this).outerHeight() / 2)) & $(window).scrollTop() < ($(this).offset().top - $(window).height() / 2 + ($(this).outerHeight() / 2))){
                    $(this).addClass('active');
                } else {
                    $(this).removeClass('active');
                }
            });
        });



        let history__track_par_height = $('.history__track').parent().height();
        let history__track_height = $('.history__track').children().last().height();

        $('.history__track').css('max-height', function(index, value) {
            return history__track_par_height - history__track_height + 7;
        });
    }
})

