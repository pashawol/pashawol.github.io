jQuery.fn.toggleText = function(b, a) {
    return this.each(function() {
        var c = $(this)
          , d = c.text();
        -1 < d.indexOf(b) ? c.text(d.replace(b, a)) : c.text(d.replace(a, b))
    })
}
;
$(document).ready(function() {
	 $(document).on('submit','#frm1',function(ev){
        var frm = $('#frm1');
        $.ajax({
            type: 'post',
            url: '/form1',
            data: frm.serialize(),
            success: function (data) {
   				$('#frm1').remove();
                $('#questionForm_header').html(data); 
            }
        });
        ev.preventDefault();
    });
	
	 $(document).on('submit','#frm2',function(ev){
        var frm = $('#frm2');
        $.ajax({
            type: 'post',
            url: '/form2',
            data: frm.serialize(),
            success: function (data) {
   				$('#frm2').remove();
                $('#questionForm_header7').html(data); 
            }
        });
        ev.preventDefault();
    });	
    $("#rev") && $("#rev .comment_captcha img").attr("src", "manager/includes/veriword0a6d.jpg?rand=" + parseInt(1E8 * Math.random()));
    $.fn.draggable = function() {
        var b = null;
        this.bind("touchstart", function(a) {
            a = a.originalEvent;
            var c = $(this).position();
            b = {
                x: a.changedTouches[0].pageX - c.left,
                y: a.changedTouches[0].pageY - c.top
            };
            $(".btn-del").animate({
                opacity: "1"
            }, 400)
        });
        this.bind("touchend", function(a) {
            $(".btn-del").animate({
                opacity: "0"
            }, 400);
            var b = a.originalEvent;
            a = b.changedTouches[0].pageY - $(".btn-del").position().top;
            b = b.changedTouches[0].pageX - $(".btn-del").position().left;
            -40 < b && 40 > b && 10 < a && 100 > a && ($(".call_mobile_link").hide(),
            a = new Date,
            a.setDate(a.getDate() + 1),
            document.cookie = "call_btn_del=1; path=/; expires=" + a.toUTCString())
        });
        this.bind("touchmove", function(a) {
            a.preventDefault();
            a = a.originalEvent;
            $(this).css({
                top: a.changedTouches[0].pageY - b.y,
                left: a.changedTouches[0].pageX - b.x
            })
        })
    }
    ;
    $(".cbh-phone").draggable();
    $(".services_title.main-title h1").click(function() {
        $(".sevices_menu").slideToggle();
        return !1
    });
    $(".open-menu, .close-menu").click(function() {
        $(".top_menu_wrap").slideToggle();
        return !1
    });
    $(".sevices_menu .mob_h2").click(function() {
        $(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active");
        $(".ui-tabs-nav").slideToggle();
        return !1
    });
    $(".personal_gallery_carusel").jcarousel({
        scroll: 1
    });
    $(".svernut_grafik").click(function() {
        $(this).next(".spacialists_grafik_table").slideToggle("slow").siblings(".spacialists_grafik_table:visible").slideUp("slow");
        $(this).toggleClass("active");
        $(this).siblings(".svernut_grafik").removeClass("active");
        $(this).toggleText("View", "Hide").next().toggle();
        $(this).toggleText("\u0413\u0440\u0430\u0444\u0438\u043a \u0440\u0430\u0431\u043e\u0442\u044b \u0432\u0440\u0430\u0447\u0435\u0439", "\u0413\u0440\u0430\u0444\u0438\u043a \u0440\u0430\u0431\u043e\u0442\u044b \u0432\u0440\u0430\u0447\u0435\u0439").next().toggle()
    });
    $(".carusel_gallery_person").each(function() {
        var b = $(this).html()
          , a = b.indexOf(" ");
        -1 == a && (a = b.length);
        $(this).html('<span class="firstWord">' + b.substring(0, a) + "</span><br>" + b.substring(a, b.length))
    });
    $(".spacialists_grafik table tr td").each(function() {
        var b = $(this).html()
          , a = b.indexOf(" ");
        -1 == a && (a = b.length);
        $(this).html('<span class="firstWord">' + b.substring(0, a) + "</span><br>" + b.substring(a, b.length))
    });
    $(".fixedbtn").click(function(b) {
        b.preventDefault();
        $(".bg").show();
        $(".review-form").slideDown()
    });
    $(".bg").click(function() {
        $(".modal-form").hide()
    });
    $(".close").click(function() {
        $(".modal-form").hide()
    })
});
$(window).load(function() {
    0 < $(".sign").find("img").length && $(".sign").each(function() {
        var b = $(this).find("img")
          , a = b.attr("title");
        jQuery('<span class="img_title" style="width:' + b.width() + 'px;">' + a + "</span>").insertAfter(b)
    });
    $("#vt_nivo_slider98").nivoSlider({
        effect: "fade",
        slices: 15,
        boxCols: 8,
        boxRows: 4,
        animSpeed: 500,
        pauseTime: 3E3,
        startSlide: 0,
        directionNav: !0,
        controlNav: !0,
        controlNavThumbs: !1,
        pauseOnHover: !0,
        manualAdvance: !1,
        prevText: "Prev",
        nextText: "Next",
        randomStart: !0,
        beforeChange: function() {},
        afterChange: function() {},
        slideshowEnd: function() {},
        lastSlide: function() {},
        afterLoad: function() {}
    })
});
function addLink() {
    var b = document.getElementsByTagName("body")[0], a;
    a = window.getSelection();
    var c = a + ("<br /><br /> \u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a: <a href='" + document.location.href + "'>" + document.location.href + "</a>")
      , d = document.createElement("div");
    d.style.position = "absolute";
    d.style.left = "-99999px";
    b.appendChild(d);
    d.innerHTML = c;
    a.selectAllChildren(d);
    window.setTimeout(function() {
        b.removeChild(d)
    }, 0)
}
document.oncopy = addLink;
function formSubmit(b, a) {
    a.preventDefault();
    var c = $(b).serialize();
    console.log(c);
    $.post("/ajaxreview", c, function(a) {
        $(b).parent().html(a)
    })
}
;