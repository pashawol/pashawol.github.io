$(function(){
    return;
//настройки
    //интервал
    var slideInterval = 2000;
    var switchSlider = false;




    //элементы слайдера
    var slider = '.slider';
    var slidewrapper = $(slider+' .slidewrapper');
    var viewport = $(slider+' .viewport');
    var slide = $('.slide');

    //классы элементов управления
    var nextBtn = $(slider+' .next');
    var prevBtn = $(slider+' .prev');

    //вспомогательная инфа
    var slideNow = 1;
    var slideCount = slidewrapper.children().length;





    //элементы управления событие onclick
    nextBtn.on('click',function(){
        nextSlide();
    })
    prevBtn.on('click',function(){
        prevSlide();
    })

    // автопрокрутка
    if(switchSlider){
        var switchInterval = setInterval(nextSlide, slideInterval);
        // остановка слайдера по ховеру
        viewport.hover(function(){
                clearInterval(switchInterval);
        },function() {
                switchInterval = setInterval(nextSlide, slideInterval);
        });
    }


    //следующий слайд
    function nextSlide() {
        if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
            slidewrapper.css('transform', 'translate(0, 0)');
            slideNow = 1;
        } else {
            translateWidth = - viewport.width() * (slideNow);
            slidewrapper.css({
                'transform': 'translate(' + translateWidth + 'px, 0)'
            });
            slideNow++;
        }
    }

    //предыдущий слайд
    function prevSlide() {
        if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
            translateWidth = - viewport.width() * (slideCount - 1);
            slidewrapper.css({
                'transform': 'translate(' + translateWidth + 'px, 0)'
            });
            slideNow = slideCount;
        } else {
            translateWidth = - viewport.width() * (slideNow - 2);
            slidewrapper.css({
                'transform': 'translate(' + translateWidth + 'px, 0)'
            });
            slideNow--;
        }
    }

    //drag мышкой
    slide.on('mousedown',function(e){
        console.log(e.pageX);
    })


});


$(function(){
     $(".owl-carousel").owlCarousel({
        items: 1
     });
});



$(function(){
  var methods = {
     init : function( options ) {

       return this.each(function(){
         $(window).bind('resize.tooltip', methods.reposition);
       });

     },
     destroy : function( ) {

       return this.each(function(){
         $(window).unbind('.tooltip');
       })

     },
     reposition : function( ) {
       console.log('here')
     },
     show : function( ) {
        console.log('show');
     },
     hide : function( ) {
       // ...
     },
     update : function( content ) {
       // ...
     }
  };

  $.fn.tooltip = function( method ) {

    if ( methods[method] ) {
      methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        console.log(Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Метод с именем ' +  method + ' не существует для jQuery.tooltip' );
    }

  };
});

$(function(){
    var l = $('.tooltip').tooltip('init');
    //$('.tooltip').trigger('resize.tooltip');
    //console.log(l);
})