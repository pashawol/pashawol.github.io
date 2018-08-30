 jQuery(document).ready(function($) {

  // для свг
  svg4everybody({});
  // Custom JS

	$('[data-toggle="tooltip"]').tooltip({ boundary: 'window',  placement: 'auto'})
      


// листалка по стр
 $(" .top-nav a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;

            $('html, body').animate({ scrollTop: destination }, 1100);

        return false;
    });

 
 // маска на инпут
   $("input[type='tel']").attr("pattern","[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({"mask": "+7(999)999-99-99"});

 

});
