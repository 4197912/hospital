// jquery is start for nav bar

$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass("fa-times");
        $('nav').toggleClass('nav-toggle');
    });
    $(window).on("load scroll",function(){
        $('.fa-bar').removeClass("fa-times");
        $('nav').removeClass('nav-toggle');
        if($(window).scrollTop () >10){
            $('header').addClass('header-active');

        }else{
            $('header').removeClass('header-active');
        }
    });
    $('.facility').magnificPopup({
        type:"image",
        delegate:"a",
        gallery:{
            enabled:true
        }
    })
});
// jquery is end for nav bar