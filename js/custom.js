////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// jQuery
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
jQuery(function ($) {

  $(document).on("scroll",function(){

        if($(document).scrollTop()>50){
          $(".header").addClass("bg-light").fadeIn('slow');
        } else{
          $(".header").removeClass("bg-light").fadeIn('slow');
        }

    });

    $(document).ready(function () {

        $('#sidenav').niceScroll({
            cursorcolor: '#999999', // Changing the scrollbar color
            cursorwidth: 4, // Changing the scrollbar width
            cursorborder: 'none', // Rempving the scrollbar border
        });

        // when opening the sidebar
        $('#open').on('click', function () {
            // open sidebar
            $('#sidenav').addClass('open');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });
       
        // if dismiss or overlay was clicked
        $('#dismiss').on('click', function () {
          $('#sidenav').removeClass('open');
        });
    });

});