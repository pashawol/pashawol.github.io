 jQuery(document).ready(function($) { 

  // if you want to use the 'fire' or 'disable' fn,
    // you need to save OuiBounce to an object
    var _ouibounce = ouibounce(document.getElementById('ouibounce-modal'), {
    aggressive: true,
    timer: 0,
    callback: function() { console.log('ouibounce fired!'); }
    });
    $('body').on('click', function() {
    $('#ouibounce-modal').fadeOut();
    });
    $('#ouibounce-modal .modal-footer').on('click', function() {
    $('#ouibounce-modal').fadeOut();
    });
    $('#ouibounce-modal .modal').on('click', function(e) {
    e.stopPropagation();
    });

});
