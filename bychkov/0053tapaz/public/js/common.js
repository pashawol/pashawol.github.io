 jQuery(document).ready(function($) { 

  // Custom JS
  
  svg4everybody({});
  
    $(".s-main__btn-wrap-js").each(function() {
        var ch = $(this).children();
          if  (ch.length <= 3) { 
             ch.removeClass(" col-4").removeClass(" col-6").addClass(" col-12"); 
               
             }
        else if  (ch.length <= 6) { 
             ch.removeClass(" col-4").removeClass(" col-12").addClass(" col-6"); 
               
             }
          else  {
               ch.removeClass(" col-6").removeClass(" col-12").addClass(" col-4"); 
                
          }
    });

    
    $(".s-colors__btn-wrap-js").each(function() {
        var ch = $(this).children();
         if  (ch.length > 2) { 
              ch.find(".btn").removeClass("btn-lg"); 

             
           }
           if  (ch.length > 3) { 
              ch.removeClass("col-12").addClass("col-6"); 
             
           }

          if  (ch.length >= 4) { 
             ch.filter(":odd").find(".btn").addClass("btn-right"); 
               
             }

             if  ( ch.length  == 2) { 
                ch.find(".btn").addClass("btn-2-2"); 
               
             }
             if  ( ch.length  == 3) { 
                ch.find(".btn").addClass("btn-3-3"); 
               
             }

          if  ( ch.length  == 4) { 
                ch.find(".btn").addClass("btn-4-4"); 
               
             }
          if  (ch.length >= 5) { 
                ch.find(".btn").addClass("btn-5-6"); 
               
             }
 
    });


       //Replace all SVG images with inline SVG
  $('img.img-svg').each(function(){
    var $img = $(this);
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    $.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = $(data).find('svg');

        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
          $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }
          $('[fill]').removeAttr('fill');
                    $('[stroke]').removeAttr('stroke');
                    $('[style]').removeAttr('style');
        // Replace image with new SVG
        $img.replaceWith($svg);

      }, 'xml');

  });

  
    // модальное окно
   $('.popup-with-move-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: true,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });
 
   
 
});
