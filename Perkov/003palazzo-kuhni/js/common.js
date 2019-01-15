window.bioEp = {
  // Private variables
  bgEl: {},
  popupEl: {},
  closeBtnEl: {},
  shown: false,
  overflowDefault: "visible",
  transformDefault: "",

  // Popup options
  width: 400,
  height: 220,
  html: "",
  css: "",
  fonts: [],
  delay: 5,
  showOnDelay: false,
  cookieExp: 0,
  showOncePerSession: false,
  onPopup: null,

  // Object for handling cookies, taken from QuirksMode
  // http://www.quirksmode.org/js/cookies.html
  cookieManager: {
    // Create a cookie
    create: function (name, value, days, sessionOnly) {
      var expires = "";

      if (sessionOnly)
        expires = "; expires=0"
      else if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
      }

      document.cookie = name + "=" + value + expires + "; path=/";
    },

    // Get the value of a cookie
    get: function (name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(";");

      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
      }

      return null;
    },

    // Delete a cookie
    erase: function (name) {
      this.create(name, "", -1);
    }
  },

  // Handle the bioep_shown cookie
  // If present and true, return true
  // If not present or false, create and return false
  checkCookie: function () {
    // Handle cookie reset
    if (this.cookieExp <= 0) {
      // Handle showing pop up once per browser session.
      if (this.showOncePerSession && this.cookieManager.get("bioep_shown_session") == "true")
        return true;

      this.cookieManager.erase("bioep_shown");
      return false;
    }

    // If cookie is set to true
    if (this.cookieManager.get("bioep_shown") == "true")
      return true;
    return false;

  },

  // Add font stylesheets and CSS for the popup
  addCSS: function () {

  },

  // Add the popup to the page
  addPopup: function () {
    // Add the background div
    this.bgEl = document.createElement("div");
    this.bgEl.id = "bio_ep_bg";
    document.body.appendChild(this.bgEl);

    // Add the popup
    if (document.getElementById("bio_ep"))
      this.popupEl = document.getElementById("bio_ep");
    else {
      this.popupEl = document.createElement("div");
      this.popupEl.id = "bio_ep";
      this.popupEl.innerHTML = this.html;
      document.body.appendChild(this.popupEl);
    }

    // Add the close button
    if (document.getElementById("bio_ep_close"))
      this.closeBtnEl = document.getElementById("bio_ep_close");
    else {
      this.closeBtnEl = document.createElement("div");
      this.closeBtnEl.id = "bio_ep_close";
      this.closeBtnEl.appendChild(document.createTextNode("X"));
      this.popupEl.insertBefore(this.closeBtnEl, this.popupEl.firstChild);
    }
  },

  // Show the popup
  showPopup: function () {

    if (this.shown) return;
    // $.fancybox.close();
    $.magnificPopup.close();
    $('[href="#modal-big"]').click();
    // 	$.magnificPopup.open({
    // 	 items: {
    // 		 src: '#modal-big', // can be a HTML string, jQuery object, or CSS selector
    // 		 type: 'inline',

    // 		 fixedContentPos: true,
    // 		 fixedBgPos: true,

    // 		 overflowY: 'auto',

    // 		 closeBtnInside: true,
    // 		 preloader: false,

    // 		 midClick: true,
    // 		 removalDelay: 300,
    // 		 mainClass: 'my-mfp-zoom-in'
    // 	 }
    //  })
    // this.bgEl.style.display = "block";
    // this.popupEl.style.display = "block";

    // // Handle scaling
    // this.scalePopup();

    // // Save body overflow value and hide scrollbars
    // this.overflowDefault = document.body.style.overflow;
    // document.body.style.overflow = "hidden";

    this.shown = true;
    this.cookieManager.create("bioep_shown", "true", this.cookieExp, false);
    this.cookieManager.create("bioep_shown_session", "true", 0, true);

    if (typeof this.onPopup === "function") {
      this.onPopup();
    }

  },

  // Hide the popup
  hidePopup: function () {

  },

  // Handle scaling the popup
  scalePopup: function () {

  },

  // Event listener initialisation for all browsers
  addEvent: function (obj, event, callback) {
    if (obj.addEventListener)
      obj.addEventListener(event, callback, false);
    else if (obj.attachEvent)
      obj.attachEvent("on" + event, callback);
  },

  // Load event listeners for the popup
  loadEvents: function () {

    this.addEvent(document, "mouseout", function (e) {
      e = e ? e : window.event;
      // If this is an autocomplete element.
      if (e.target.tagName.toLowerCase() == "input")
        return;

      // Get the current viewport width.
      var vpWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      // If the current mouse X position is within 50px of the right edge
      // of the viewport, return.
      if (e.clientX >= (vpWidth - 50))
        return;

      // If the current mouse Y position is not within 50px of the top
      // edge of the viewport, return.
      if (e.clientY >= 50)
        return;

      // Reliable, works on mouse exiting window and
      // user switching active program
      var from = e.relatedTarget || e.toElement;
      if (!from)
        bioEp.showPopup();
    }.bind(this));
    // Handle the popup close button
    this.addEvent(this.closeBtnEl, "click", function () {
      bioEp.hidePopup();
    });
    // Handle window resizing
    this.addEvent(window, "resize", function () {
      bioEp.scalePopup();
    });
  },

  // Set user defined options for the popup
  setOptions: function (opts) {

    this.width = (typeof opts.width === 'undefined') ? this.width : opts.width;
    this.height = (typeof opts.height === 'undefined') ? this.height : opts.height;
    this.html = (typeof opts.html === 'undefined') ? this.html : opts.html;
    this.css = (typeof opts.css === 'undefined') ? this.css : opts.css;
    this.fonts = (typeof opts.fonts === 'undefined') ? this.fonts : opts.fonts;
    this.delay = (typeof opts.delay === 'undefined') ? this.delay : opts.delay;
    this.showOnDelay = (typeof opts.showOnDelay === 'undefined') ? this.showOnDelay : opts.showOnDelay;
    this.cookieExp = (typeof opts.cookieExp === 'undefined') ? this.cookieExp : opts.cookieExp;
    this.showOncePerSession = (typeof opts.showOncePerSession === 'undefined') ? this.showOncePerSession : opts.showOncePerSession;
    this.onPopup = (typeof opts.onPopup === 'undefined') ? this.onPopup : opts.onPopup;

  },

  // Ensure the DOM has loaded
  domReady: function (callback) {
    (document.readyState === "interactive" || document.readyState === "complete") ? callback(): this.addEvent(document, "DOMContentLoaded", callback);
  },

  // Initialize
  init: function (opts) {
    // Handle options
    if (typeof opts !== 'undefined')
      this.setOptions(opts);

    this.addCSS();
    this.domReady(function () {
      // Handle the cookie

      // if(bioEp.checkCookie()) return;

      // Add the popup
      bioEp.addPopup();

      // Load events
      setTimeout(function () {
        bioEp.loadEvents();
        if (bioEp.showOnDelay)
          bioEp.showPopup();
      }, bioEp.delay * 1000);
    });
  }
};
jQuery(document).ready(function ($) {


  if (!$('#modal-big').is(':hidden'))
    bioEp.init({});



  // для свг
  svg4everybody({});
  // Custom JS

  // галерея
  $(" .gal").each(function () {

    $(this).find("a").magnificPopup({
      type: 'image',
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true,
        // titleSrc: function(item) {
        //   return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
        // }
      },
      gallery: {
        enabled: true
      }
    });
  })
  // мобильное меню
  var toggMnu = $(".toggle-mnu-1").click(function () {

    $(".toggle-mnu-1").toggleClass("on");
    // $("body").toggleClass("fixed");
    $(".hidden-mnu").toggleClass("active");
    $("body").toggleClass("fixed");
    return false;
  });
  $('.hidden-mnu ul li a').on('click', function () {
    $(".hidden-mnu .toggle-mnu").click();
  });
  $(document).mouseup(function (e) {
    var container = $(".hidden-mnu.active");
    if (container.has(e.target).length === 0) {
      $(".toggle-mnu-1").removeClass("on");
      // $("body").toggleClass("fixed");
      $(".hidden-mnu").removeClass("active");
      $("body").removeClass("fixed");
    }
  });

  function heightses() {

    var w = $(window).width();
    // $(".otz__item .text-wrap ").height('auto').equalHeights();
    //


    // скрывает моб меню 
    if (w > 991) {
      $(".toggle-mnu-1").removeClass("on");
      // $("body").removeClass("fixed");
      $(".hidden-mnu").removeClass("active");
      $("body").removeClass("fixed");
    }
    var topH = $("header ").innerHeight();
    if ($(this).scrollTop() > topH) {
      $('.top-nav  ').addClass('fixed');

    } else if ($(this).scrollTop() < topH) {
      $('.top-nav  ').removeClass('fixed');

    }
    $(window).scroll(function () {
      if ($(this).scrollTop() > topH) {
        $('.top-nav  ').addClass('fixed');
      } else if ($(this).scrollTop() < topH) {
        $('.top-nav  ').removeClass('fixed');
      }
    });
    // конец добавил 
  }

  $(window).resize(function () {
    heightses();

  });
  $(window).on("load", function () {
    heightses();

  })

  heightses();



  // листалка по стр
  $("  .scroll-link").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top - 140;

    $('html, body').animate({
      scrollTop: destination
    }, 1100);

    return false;
  });


  // листалка по стр
  $(" .top-nav ul a").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $(".top-nav ul a").removeClass("active")
    $(this).addClass("active");
    $('html, body').animate({
      scrollTop: destination
    }, 1100);

    return false;
  });



  var icon = '<svg class="icon icon-arr-r">  <use xlink:href="img/svg/sprite.svg#chevron-right"></use>  </svg>';

  var arrl2 = (' <div class="l">' + icon),
    arrr2 = (' <div class="r">' + icon);


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



  // маска на инпут
  $("input[type='tel']").attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({
    "mask": "+7(999)999-99-99"
  });

  // accordion
  $(".showhide").click(function () {


    $(".showhide-all").slideUp().parent().removeClass("active"), $(".showhide").removeClass("active"),
      $(this).next("div").filter(function () {
        return "block" == $(this).css("display")
      }).slideUp().parent().removeClass("active"),
      $(this).next("div").filter(function () {
        return "none" == $(this).css("display")
      }).slideDown().prev("div").addClass("active").parent().addClass("active")
  })




  // табы на ajax
  var containerId1 = '.mytabs-container1';
  var tabsId1 = '.mytabs1';


  $(".main-tabs__content").each(function () {
    var th = $(this);

    // Preload tab on page load

    if (th.find(tabsId1 + ' .current A').length > 0) {
      loadTab1(th.find(tabsId1 + ' .current A'));
    }

    th.find(tabsId1 + ' A').click(function () {
      if ($(this).parent().hasClass('current')) {
        return false;
      }

      th.find(tabsId1 + ' .current').removeClass('current');
      $(this).parent().addClass('current');

      loadTab1($(this));
      return false;
    });

    function loadTab1(tabObj1) {
      if (!th.find(tabObj1) || !th.find(tabObj1).length) {
        return;
      }
      th.find(containerId1).addClass('loading');
      th.find(containerId1).hide();

      th.find(containerId1).load(tabObj1.attr('href'), function () {
        th.find(containerId1).removeClass('loading');
        th.find(containerId1).fadeIn();

        // галерея

        $(".tab__slider2, .tab__slide-slider ").find("img").each(function () {

          $(this).parent().addClass("gal-link").attr("href", "dop/" + $(this).attr("data-lazy"))
          // .wrap('<a href="dop/'+$(this).attr("data-lazy")+'">')
        })

        $(".tab__slider2 , .tab__slide-slider ").each(function () {

          $(this).find(".gal-link").magnificPopup({
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            image: {
              verticalFit: true,
              // titleSrc: function(item) {
              //   return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
              // }
            },
            gallery: {
              enabled: true
            }
          });
        })

        // листалка по стр
        $("  .scroll-link").click(function () {
          var elementClick = $(this).attr("href");
          var destination = $(elementClick).offset().top;

          $('html, body').animate({
            scrollTop: destination
          }, 1100);

          return false;
        });
        $(".s-indr .btn").each(function () {
          var th = $(this);
          th.click(function () {
            $("#modal .h2").text("Рассчитать под мои размеры");
            $("#modal .order").val("Рассчитать под мои размеры");
            $("#modal .btn").text("Рассчитать под мои размеры");

            $("#modal .type  ").val(th.parents(".main-tabs__content").find(".current a").text());
            $(" #modal .meb ").val(th.prev().text());
          })
        })




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


        th.find('.tab__slider1').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          speed: 450,
          infinite: true,
          loop: true,
          arrows: true,
          prevArrow: arrl2,
          nextArrow: arrr2,
          adaptiveHeight: true
        });
        th.find('.tab__slider2').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          speed: 450,
          infinite: true,
          loop: true,
          arrows: true,
          prevArrow: arrl2,
          nextArrow: arrr2,
          adaptiveHeight: true,
        });


        th.find('.tab__slide-slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          speed: 450,
          infinite: true,
          loop: true,
          arrows: true,
          prevArrow: arrl2,
          nextArrow: arrr2,
          adaptiveHeight: true,

        });


        th.find('.tab__slider-big').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          speed: 450,
          infinite: true,
          loop: true,
          arrows: false,
          draggable: false,
          swipe: false,
          adaptiveHeight: true,
          asNavFor: th.find('.tab__slider-small'),
          responsive: [

            {
              breakpoint: 991,
              settings: {
                draggable: true,
                swipe: true,
                arrows: true,
                prevArrow: arrl2,
                nextArrow: arrr2,

              }

            }
          ]
        });

        th.find('.tab__slider-small').slick({
          slidesToShow: 7,
          slidesToScroll: 1,
          dots: false,
          speed: 450,
          infinite: true,
          loop: true,
          arrows: false,
          focusOnSelect: true,
          prevArrow: arrl2,
          nextArrow: arrr2,
          asNavFor: th.find('.tab__slider-big'),

        });


        var $gallery = $('.tab__slider1,  .tab__slider-small ')
        $gallery.on('lazyLoaded', function (event, slick, image, imageSource) {
          image.parent().css('background-image', 'url(' + image.attr('src') + ')');
        });
      });
    }

  });

  $('.main-tabs').on('click', '.toggle-l', function () {
    $(this).toggleClass('active').parent().next().find('.toggle-block').slideToggle()
    return false;

  })

  $('.s-sert__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: true,
    loop: true,
    arrows: true,
    prevArrow: arrl2,
    nextArrow: arrr2,
    responsive: [

      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1
        }
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  $('.s-rew__slider, .contact__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 450,
    infinite: true,
    loop: true,
    arrows: true,
    prevArrow: arrl2,
    nextArrow: arrr2,
    adaptiveHeight: true
  });


  $('.contact__slider').on('lazyLoaded', function (event, slick, image, imageSource) {
    image.parent().css('background-image', 'url(' + image.attr('src') + ')');
  });

  // включение видео   
  $(".pretty-embed__bg").each(function () {
    $(this).click(function () {
      $(this).removeClass("on").next()
        .attr("src", 'https://www.youtube.com/embed/' + $(this).data("src") + '?autoplay=1&amp;rel=0').addClass("on");
    })
  })


  $(".footer__btn").click(function () {
    $("#modal .h2").text("ЗАКАЗ КОНСУЛЬТАЦИИ");
    $("#modal .order").val("Заказ консультации в подвале сайта");
    $("#modal .btn").text("Заказать консультацию");
    $("#modal .type, #modal .meb ").val("");
    $("#modal p").text(" ");
  })

  $(".btn__quav-js").click(function () {
    $("#modal .h2").text("НЕ НАШЛИ ОТВЕТА");
    $("#modal .order").val("Заказ консультации в подвале сайта");
    $("#modal p").text("Задайте их нашему специалисту  по телефону, оставив свои данные");
    $("#modal .btn").text("Заказать консультацию");
    $("#modal .type, #modal .meb ").val("");
  })


  $(".cost-content-l input").on("input, change", function () {
    var th = $(this);
    if (th.attr("id") == 'top') {
      $("#inp_secl_t").val(th.val() + "см");
    }


  })


  $(".header-block__inner .order").val("Заявка в шапке")
  $(".s-needs .order").val("Заявка в блоке потребностей")
  $(".s-form .order").val("Заявка в блоке вызова замерщика")
  $(".s-calc .order").val("Заявка с калькулятора")
  $(".s-accord .order").val("Заявка с FAQ")
  $("#modal-big .order").val('Заявка  c " У ВАС РЕМОНТ?"')



  // форма
  $("form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: 'action.php', //Change
      data: th.serialize()
    }).success(function () {
      //     $.magnificPopup.close();
      //        $.magnificPopup.open({
      //   items: {
      //     src: '#thanks', // can be a HTML string, jQuery object, or CSS selector
      //     type: 'inline'
      //   }
      // })
      window.location.replace("/thanks.html");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
        // $.magnificPopup.close();
      }, 4000);
    });
    return false;
  });


  $('.s-why__row ').slick({
    slidesToShow: 9,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: true,
    loop: true,
    arrows: true,
    prevArrow: arrl2,
    nextArrow: arrr2,
    responsive: [

      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 2
        }
      },

      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });

  $('.s-ind__row ').slick({
    slidesToShow: 9,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: true,
    loop: true,
    arrows: true,
    prevArrow: arrl2,
    nextArrow: arrr2,
    responsive: [

      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 2
        }
      },

      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });

  $(' .s-video__row').slick({
    slidesToShow: 109,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: false,
    loop: false,
    arrows: true,
    prevArrow: arrl2,
    nextArrow: arrr2,
    responsive: [

      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  $(' .s-client__row').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    speed: 450,
    infinite: false,
    loop: false,
    arrows: true,
    prevArrow: arrl2,
    nextArrow: arrr2,
    responsive: [

      {
        breakpoint: 1199.98,
        settings: {
          slidesToShow: 2
        }
      },

      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 1
        }
      },

    ]
  });

  $(".trop__link--js").click(function () {
    $(".mytabs-container1 .toggle-l ").not('.active').click();
  })
  setTimeout(function () {

    $('[href="#modal-big"]').click();
  }, 20000);

});
