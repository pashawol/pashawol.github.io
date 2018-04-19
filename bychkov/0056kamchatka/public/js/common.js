 jQuery(document).ready(function($) { 

  // для свг
  svg4everybody({});
  // Custom JS
 
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
    if (container.has(e.target).length === 0){
       $(".toggle-mnu-1").removeClass("on");
      // $("body").toggleClass("fixed");
      $(".hidden-mnu").removeClass("active");
      $("body").removeClass("fixed");
        }
    });
 
  function heightses() {

    var w = $(window).width(); 
    // скрывает моб меню 
    if (w>991){
       $(".toggle-mnu-1").removeClass("on");
        // $("body").removeClass("fixed");
        $(".hidden-mnu").removeClass("active");
        $("body").removeClass("fixed");
    }
    var topH=$("header ").innerHeight();  
    if($(this).scrollTop()>topH){
                    $('.top-nav  ').addClass('fixed');
                    
                }
                else if ($(this).scrollTop()<topH){
                    $('.top-nav  ').removeClass('fixed');
                   
                }
    $(window).scroll(function(){
                if($(this).scrollTop()>topH){
                    $('.top-nav  ').addClass('fixed'); 
                }
                else if ($(this).scrollTop()<topH){
                    $('.top-nav  ').removeClass('fixed'); 
                }
            });
       // конец добавил 
  }

  $(window).resize(function() {
    heightses(); 
  });
 
 heightses();



// листалка по стр
 $(" .top-nav  ul a, .scroll-link").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        
            $('html, body').animate({ scrollTop: destination }, 1100);
        
        return false; 
    });

 
// слайдер цвета в карточке 
  var swiper = new Swiper('.swiper-container', {
      // effect: 'flip',
      // grabCursor: true,
      loop: true, 
           effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : false,
      },
      grabCursor: true, 
      // pagination: {
      //   el: '.swiper-pagination',
      // },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
       preloadImages: false,
      // Enable lazy loading
      lazy: true,
      lazy: {
        loadPrevNext: true,
      },
      // lazyImageLoad: function (slideEl, imageEl){
      //    console.log(slideEl)
      //    console.log(imageEl)
      // }
    });
  // swiper.on('loadInSlide',function (slideEl, imageEl) {
  //       var src=imageEl.attr("data-lazy");
  //       imageEl.parentNode.style.backgroundImage = "url('"+src+"')";
  // })

 $(".top-nav__btn").click(function(){
  $("#modal-win .order").val("Заявка с шапки");
  // $("#modal-win .form-wrap__title").text("Оставьте свои контакты, а мы вам перезвоним");

 })
  $(".s-text__btn").click(function(){
  $("#modal-win .order").val("Заявка с о нас");
  // $("#modal-win .form-wrap__title").text("Оставьте свои контакты, а мы вам перезвоним");

 })

 $(".s-catalog__btn").click(function(){
  $("#modal-cat .order").val('Заявка на: "'+ $(this).parents(".s-catalog__item").find(".s-catalog__title").text() +'"');
  
 })



 // форма
$("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: 'action.php', //Change
      data: th.serialize()
    }).success(function() {
        
             $('.modal').modal('hide')
             $('#thanks').modal('show')
        // window.location.replace("/thanks.html");
       setTimeout(function() {
        // Done Functions
        th.trigger("reset");
             $('#thanks').modal('hide')
        // $.magnificPopup.close();
      }, 4000);
    });
    return false;
  });
   
 // маска на инпут
   $("input[type='tel']").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({"mask": "+7(999)999-99-99"});

     

});
