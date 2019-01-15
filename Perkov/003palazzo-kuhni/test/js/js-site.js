var d = new Date();
var month = d.getMonth() + 1;
var day = d.getDate();
var currDate = (('' + day).length < 2 ? '0' : '') + day + '.' + (('' + month).length < 2 ? '0' : '') + month + '.' + d.getFullYear();
$(document).ready(function() {
    $(".nowdate").text(currDate);
    
 
    var popup_width = $('.callback-block').outerWidth() / 2;
    var popup_height = $('.callback-block').outerHeight() / 2;
    var popupСЃ_width = $('.tnx-block').outerWidth() / 2;
    var popupСЃ_height = $('.tnx-block').outerHeight() / 2;
    $('.callback-block').css({
        'left': '50%',
        'margin-left': (-popup_width),
        'top': '50%',
        'margin-top': (-popup_height)
    });
    $(".tnx-block").show().css({
        'left': '50%',
        'margin-left': (-popupСЃ_width),
        'top': '50%',
        'margin-top': (-popupСЃ_height)
    });
    $(document).on('click', ".popup-callback", function() {
        $('.popup').css({
            'opacity': 1,
            'z-index': 9998
        });
        $('.callback-block').css({
            'opacity': 1,
            'z-index': 9999
        });
        return false;
    });
	$(document).on('click', ".popup-complect", function() {
        $('.popup').css({
            'opacity': 1,
            'z-index': 9998
        });
        $('.complect-block').css({
            'opacity': 1,
            'z-index': 9999
        });
        return false;
    });
    $(document).on('click', ".popup, a.close", function() {
        $('.popup').css({
            'opacity': 0,
            'z-index': -1
        });
        $('.callback-block').css({
            'opacity': 0,
            'z-index': -1
        });
		$('.complect-block').css({
            'opacity': 0,
            'z-index': -1
        });
        $('.tnx-block').css({
            'opacity': 0,
            'z-index': -1
        });
        return false;
    });
    var wrapper = $(".source-file"),
        inp = wrapper.find("input"),
        btn = wrapper.find(".button-file"),
        lbl = wrapper.find(".txt-file");
    var file_api = (window.File && window.FileReader && window.FileList && window.Blob) ? true : false;
    inp.change(function() {
        var file_name;
        if (file_api && inp[0].files[0]) file_name = inp[0].files[0].name;
        else file_name = inp.val().replace("C:\\fakepath\\", '');
        if (!file_name.length) return;
        if (lbl.is(":visible")) {
            lbl.text(file_name);
        } else btn.text(file_name);
    }).change();
    var wrapper3 = $(".source-file-3"),
        inp3 = wrapper3.find("input"),
        btn3 = wrapper3.find(".button-file"),
        lbl3 = wrapper3.find(".txt-file");
    var file_api = (window.File && window.FileReader && window.FileList && window.Blob) ? true : false;
    inp3.change(function() {
        var file_name;
        if (file_api && inp3[0].files[0]) file_name = inp3[0].files[0].name;
        else file_name = inp3.val().replace("C:\\fakepath\\", '');
        if (!file_name.length) return;
        if (lbl3.is(":visible")) {
            lbl3.text(file_name);
        } else btn3.text(file_name);
    }).change();
  
    (function() {
        [].slice.call(document.querySelectorAll('select.cs-select')).forEach(function(el) {
            new SelectFx(el, {
                onChange: function(val) {
                    document.querySelector('#ml').value = val;
                }
            });
        });
    })();
    $(".types .pinput").click(function() {
        $(this).parent().parent().parent().find(".name").removeClass("active");
        $(this).parent().parent().parent().find(".pinput").removeClass("warning");
        var curI = $(this).parent().parent().find(".name");
        $("#wd").val($(this).parent().find("#pwidth").val());
        $("#ht").val($(this).parent().find("#pheight").val());
        curI.addClass("active");
        $("#nm").val(curI.text());
    });
    $(".cs-select.cs-skin-border").click(function() {
        $(this).removeClass("warning");
    });
    $(".types #pwidth").change(function() {
        $("#wd").val($(this).val());
    });
    $(".types #pheight").change(function() {
        $("#ht").val($(this).val());
    });

    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }
    $('.accordion-section-title').click(function(e) {
        var currentAttrValue = $(this).attr('href');
        if ($(e.target).is('.active')) {
            close_accordion_section();
        } else {
            close_accordion_section();
            $(this).addClass('active');
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
        }
        e.preventDefault();
    });
    $(".questions .accordion-section-title:first").click();
    $("#pphone").click(function() {
        $(this).removeClass("warning");
    });
    $(".tell-me-block .tq").click(function() {
        $(this).removeClass("warningw");
    });
    $(".tell-me-block .tp").click(function() {
        $(this).removeClass("warningw");
    });
    $(".tell-me-block .btn").click(function() {
        var fl = false;
        if (!$(".tell-me-block .tq").val()) {
            $(".tell-me-block .tq").addClass("warningw");
            fl = true;
        }
        if (!$(".tell-me-block .tp").val()) {
            $(".tell-me-block .tp").addClass("warningw");
            fl = true;
        }
        var serializedData = jQuery(".tell-me-block form").serialize();
        if (fl == false) {
            jQuery.ajax({
                url: "/mailer/question.php",
                type: "POST",
                data: serializedData,
                success: function() {
                    window.location.href = "/tnx.html";
                }
            });
        }
        return false;
    });
    $(".callback-block input").click(function() {
        $(".callback-block input").removeClass("warning");
        $(".callback-block textarea").removeClass("warning");
    });
    $(".callback-block textarea").click(function() {
        $(".callback-block input").removeClass("warning");
        $(".callback-block textarea").removeClass("warning");
    });
    $(".callback-block .btn").click(function() {
        var fl = false;
        if (!$(".callback-block .tq").val()) {
            $(".callback-block .tq").addClass("warning");
            fl = true;
        }
        if (!$(".callback-block .tp").val()) {
            $(".callback-block .tp").addClass("warning");
            fl = true;
        }
        if (!$(".callback-block .tn").val()) {
            $(".callback-block .tn").addClass("warning");
            fl = true;
        }
        var serializedData = jQuery(".callback-block form").serialize();
        if (fl == false) {
            jQuery.ajax({
                url: "/mailer/call.php",
                type: "POST",
                data: serializedData,
                success: function() {
                    $(".callback-block .close").click();
                    window.location.href = "/tnx.html";
                }
            });
        }
        return false;
    });
    $(".consult-block input").click(function() {
        $(this).removeClass("warning");
    });
    $(".consult-block-3 input").click(function() {
        $(this).removeClass("warning");
    });
    jQuery(".consult-block .btn").click(function() {
        var fl = false;
        if (!jQuery(".consult-block .tn").val()) {
            jQuery(".consult-block .tn").addClass('warning');
            fl = true;
        }
        if (!jQuery(".consult-block .tp").val()) {
            jQuery(".consult-block .tp").addClass('warning');
            fl = true;
        }
        var m_data = new FormData();
        m_data.append('name', jQuery('.consult-block input[name=name]').val());
        m_data.append('phone', jQuery('.consult-block input[name=phone]').val());
        if (fl == false) {
            jQuery.ajax({
                url: "/mailer/form.php",
                type: "POST",
                data: m_data,
                processData: false,
                contentType: false,
                success: function() {
                    window.location.href = "/tnx.html";
                }
            });
        }
        return false;
    });
    jQuery(".consult-block-3 .btn").click(function() {
        var fl = false;
        if (!jQuery(".consult-block-3 .tn").val()) {
            jQuery(".consult-block-3 .tn").addClass('warning');
            fl = true;
        }
        if (!jQuery(".consult-block-3 .tp").val()) {
            jQuery(".consult-block-3 .tp").addClass('warning');
            fl = true;
        }
        var m_data = new FormData();
        m_data.append('name', jQuery('.consult-block-3 input[name=name]').val());
        m_data.append('phone', jQuery('.consult-block-3 input[name=phone]').val());
        if (fl == false) {
            jQuery.ajax({
                url: "/mailer/form.php",
                type: "POST",
                data: m_data,
                processData: false,
                contentType: false,
                success: function() {
                    window.location.href = "/tnx.html";
                }
            });
        }
        return false;
    });
});