$(function() {

	$(document).ready(function(){

		//small hover
		$('.small-menu__item').hover(function(){
			$(this).addClass('active');
		}, function(){
			$(this).removeClass('active');
		})

		// mob menu
		$(".btn-menu").click(function(){
			$(".fixed-menu").addClass("active");
		});

		$(".fixed-menu__close").click(function(){
			$(".fixed-menu").removeClass("active");
		});

		// sticky mob header
		$(window).scroll(function(){
		    if ($(window).scrollTop() >= 230) {
		       $('.mob-header').addClass('fixed');
		    }
		    else {
		       $('.mob-header').removeClass('fixed');
		    }
		});


		// callback form
		$('.callback-form').click(function(){
			$(".fixed-form-wrap").addClass('active');
		});

		$('.fixed-form__close').click(function(){
			$(".fixed-form-wrap").removeClass('active');
		});

     $(document).mouseup(function(e)
    {
        var container = $(".fixed-form-wrap");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0)
        {
            container.removeClass('active');
        }
    });

    // callback form static
    $('.callback-form-static').click(function(){
      $(".static-form").addClass('active');
    });

    $('.static-form__close').click(function(){
      $(".static-form").removeClass('active');
    });

     $(document).mouseup(function(e)
    {
        var container = $(".static-form");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0)
        {
            container.removeClass('active');
        }
    });

	});

  //bg slider
  $('.body-background').slick({
    slidesToShow: 1,
    arrows: false,
    dots: false,
    speed: 600,
    loop: false,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true
  });

  // dropdown slider
  // $('.small-menu__item--mega').hover(function(){
  //   $('.product-carousel').slick('setPosition');
  // },


  // $('.product-carousel').slick({
  //   arrows: false,
  //   dots: false,
  //   variableWidth: true,
  //   slidesToShow: 5,
  //    responsive: [
  //       {
  //         breakpoint: 640,
  //         settings: {
  //           slidesToShow: 1,
  //           variableWidth: false,
  //         }
  //       },
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 3,
  //         }
  //       },

  //     ]
  // });



  //main slider
  $('.home-slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    speed: 600,
    loop: false,
    dotsClass: "hslider-dots",
    customPaging : function(slider, i) {
      return '';
    },
  });

  // $('.hslider-dots li[data-slide]').click(function(e) {
  //     e.preventDefault();
  //    var slideno = $(this).data('slide');
  //    $('.home-slider').slick('slickGoTo', slideno - 1);
  //    $('.hslider-dots li').removeClass();
  //    $(this).addClass('active');
  //  });

  //footer sliders
  $('.tab-carousel').slick({
    slidesToShow: 3,
    arrows: false,
    dots: false,
    speed: 600,
    loop: false,
    responsive: [
        {
          breakpoint: 0,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
          }
        },
         {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2,
            centerMode: true,
          }
        },

      ]
  });

  $('.tabs__slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: false,
    speed: 600,
    loop: false,
    draggable: false,
    swipe: false,
    touchMove: false,
    fade: true,
  });

  $('.tabs__caption li[data-slide]').click(function(e) {
      e.preventDefault();
     var slideno = $(this).data('slide');
     $('.tabs__slider').slick('slickGoTo', slideno - 1);
     $('.tabs__caption li').removeClass();
     $(this).addClass('active');
   });

  // sertificat slider
  $('.serts__inner').slick({
    slidesToShow: 6,
    arrows: false,
    dots: false,
    swipeToSlide: true,
    speed: 600,
    infinite: false,
    loop: false,
     responsive: [
        {
          breakpoint: 530,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
          }
        },
      ]
  });

// serts gallery popup
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    callbacks: {
      open: function () {
          $(this.container[0]).append("<div class='sert-popup-close'></div>");
        }
    },
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow serts-popup-%dir% mfp-arrow-%dir%"></button>',
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
    markup: '<div class="mfp-figure">'+
          '<div class="mfp-close"></div>'+
          '<figure>'+
            '<div class="mfp-img"></div>'+
            '<figcaption>'+
              '<div class="mfp-bottom-bar">'+
                '<div class="mfp-title"></div>'+
                '<div class="mfp-counter"></div>'+
              '</div>'+
            '</figcaption>'+
          '</figure>'+
        '</div>',
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  $('.gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    callbacks: {
      open: function () {
          $(this.container[0]).append("<div class='sert-popup-close'></div>");
        }
    },
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow serts-popup-%dir% mfp-arrow-%dir%"></button>',
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
    markup: '<div class="mfp-figure">'+
          '<div class="mfp-close"></div>'+
          '<figure>'+
            '<div class="mfp-img"></div>'+
            '<figcaption>'+
              '<div class="mfp-bottom-bar">'+
                '<div class="mfp-title"></div>'+
                '<div class="mfp-counter"></div>'+
              '</div>'+
            '</figcaption>'+
          '</figure>'+
        '</div>',
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });


  // calc btn show result
  $('.calc-btn').click(function(e){
    e.preventDefault();
    $('.cost').show();
  });


  // tooltip
   $('.help').on('click',function(){
        if(!window.matchMedia('(max-width: 1280px)').matches)
          return;
      $(this).siblings('.help-tool').fadeIn(300);
    })
    $('.help-tool').on('click',function(){
      $(this).fadeOut(150);
    });

  ///////////////////////////////////////////////////////////////////////////

    //more
     (function(){
        $(window).resize(function() {
            $('#more-button,#more-gradient,#more').removeAttr('style')
            more($('#more').hasClass('catalog-intro'));
        });
        more($('#more').hasClass('catalog-intro'));
     })();
     function more(flag){
        if(window.matchMedia('(max-width: 840px)').matches || flag)
          {
            var more = $('#more');
            var height = $('#more').height();

            more.removeAttr('style');

            if(more.hasClass('product-intro')){
              more.css({
                'height': '230px',
                'overflow': 'hidden'
              });
            }else if(true){
              more.css({
                'height': '365px',
                'overflow': 'hidden'
              });
            }else{
              more.css({
                'height': '260px',
                'overflow': 'hidden'
              });
            }


            $('#more-button').on('click',function(){
                $('#more').stop().animate({
                  height: height
                },300, function(){
                  $('#more-button,#more-gradient').fadeOut()
                })
            })
          }
     };


     //gallery
      (function(){
        $('.gallery').slick({
          slidesToShow: 4,
          arrows: false,
          variableWidth: true,
          responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3
                }
              }
          ]
        });
     })();


     // cat articles
      (function(){
        $('.cat-articles').slick({
          slidesToShow: 3,
          arrows: false,
          // variableWidth: true,
          responsive: [
              {
                breakpoint: 1280,
                settings: {
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1
                }
              }
          ]
        });
     })();


     $('.offer-form__submit,.calculation__submit').on('click',function(e){
      e.preventDefault();
      $('#sent-success').show();
     });

     $('#success-close').on('click',function(e){
      $('#sent-success').hide();
     });

     $('.offer-form__submit').on('click',function(e){
      e.preventDefault();
      $('#sent-success-order').show();
     });

     $('#success-close-order').on('click',function(e){
      $('#sent-success-order').hide();
     });


     $('.fixed-form__btn').on('click',function(e){
      e.preventDefault();
      $('.fixed-form__thanks').addClass('active');
     });

     $('.static-form__btn').on('click',function(e){
      e.preventDefault();
      $('.static-form__thanks').addClass('active');
     });


     // reset filters
     (function(){
        $('.reset').on('click',function(){
          $('.filter-select').each(function(i,el){
              $(this).val('all');
              $(this).parents('.filter').find('.select__selected').text('--- все ---');
          })

        })
     })();


    //product caption
    $('ul.product-tabs__caption').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.product-tabs').find('div.product-tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });

    $('#file-button').on('click',function(e){
        e.preventDefault();
        document.getElementById('file').click();
    });

    $('.filter-year-close').on('click',function(e){
        $('.filter-year-open').hide();
    });

    $('.mob-header').on('click',function(e){
        $('.filter-year-open').show();
    });

    $(".filter").hover(
      function() {
        $( this ).find('.select__scrollable').addClass( "open" );
      }, function() {
        $( this ).find('.select__scrollable').removeClass( "open" );
      }
    );

    $(".select__item").on('click',function(){
      setTimeout(function(){
        $('.select__scrollable').removeClass( "open" );
      },0)

    });





     (function(){


         })();



});
