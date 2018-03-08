 jQuery(document).ready(function($) { 

  // для свг
  svg4everybody({});
  // Custom JS
  
  // custom select
   $('select').selectize();
 
 // маска на инпут
   $("input[type='tel']").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({"mask": "+7(999)999-99-99"});

  var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      // effect: 'flip',
      // grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      loop: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 300,
        depth: 400,
        modifier: 1,
        slideShadows : false,
      },
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }); 



  var swiper = new Swiper('.swiper-container2', {
     loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
       navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
});
