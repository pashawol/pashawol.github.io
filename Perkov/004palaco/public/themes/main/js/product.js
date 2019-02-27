$(function() {

    function selectTabByHash()
    {
        if (/tab-\d+/.test(window.location.hash) )
        {
            var index = window.location.hash.replace(/[^\d]+/, '');
            if (index >= $('ul.tabs li').length)
                return;
            $('ul.tabs li').removeClass('current').eq(index).addClass('current').parents('div.section').find('div.box').hide().eq(index).show();
        }
    }
    selectTabByHash();

    // Product tabs
    $('ul.tabs').delegate('li:not(.current)', 'click', function() {
        if ($(this).index())
            window.location.hash = 'tab-' + $(this).index();
        else
            window.location.hash = '';
        $(this).addClass('current').siblings().removeClass('current').parents('div.section').find('div.box').hide().eq($(this).index()).fadeIn(750);
    });

    /** Original scroll code: http://jqueryui.com/slider/#side-scroll **/

    //scrollpane parts
    var scrollPane = $( ".scroll-pane" ), scrollContent = $( ".scroll-content" );
    var scrollLength = scrollContent.find('a').length;

    // 119 is slider item width + margin
    scrollContent.width(Math.max(118*scrollLength-11, 700));

    function moveSliderHandle(value) {
        $(".scroll-bar").slider('value', value);
        if (scrollContent.width() > scrollPane.width()) {
            scrollContent.css("margin-left", Math.round(
                value / 100 * (scrollPane.width() - scrollContent.width())
            ) + "px");
        } else
            scrollContent.css("margin-left", 0);
    }

    //build slider
    var scrollbar = $(".scroll-bar").slider({
        slide: function(event, ui) {
            moveSliderHandle(ui.value);
        }
    });

    var handleHelper = scrollbar.find(".ui-slider-handle")
        .mousedown(function() {
            scrollbar.width(handleHelper.width());
        })
        .mouseup(function() {
            scrollbar.width("100%");
        })
        .wrap( "<div class='ui-handle-helper-parent'></div>" ).parent();

    //change overflow to hidden now that slider handles the scrolling
    scrollPane.css( "overflow", "hidden" );

    //size scrollbar and handle proportionally to scroll distance
    function sizeScrollbar() {
        var remainder = scrollContent.width() - scrollPane.width();
        var proportion = remainder / scrollContent.width();
        if (proportion <= 0)
            scrollbar.hide();
        else {
            var handleSize = scrollPane.width() - proportion*scrollPane.width();
            scrollbar.find(".ui-slider-handle").css({
                width: handleSize,
                "margin-left": -handleSize / 2
            });
            handleHelper.width("").width(scrollbar.width() - handleSize);
        }
    }

    //reset slider value based on scroll content position
    function resetValue() {
        var remainder = scrollPane.width() - scrollContent.width();
        var leftVal = scrollContent.css("margin-left" ) === "auto" ? 0 : parseInt(scrollContent.css("margin-left"));
        var percentage = Math.round(leftVal / remainder * 100);
        scrollbar.slider("value", percentage);
    }

    //if the slider is 100% and window gets larger, reveal content
    function reflowContent() {
        var showing = scrollContent.width() + parseInt( scrollContent.css("margin-left"), 10);
        var gap = scrollPane.width() - showing;
        if (gap > 0) {
            scrollContent.css("margin-left", parseInt( scrollContent.css("margin-left"), 10 ) + gap);
        }
    }

    //change handle position on window resize
    $(window).resize(function() {
        resetValue();
        sizeScrollbar();
        reflowContent();
    });

    //init scrollbar size
    setTimeout(sizeScrollbar, 10); //safari wants a timeout

    // gallery
    $('.scroll-content a:first').addClass('selected');
    $('.scroll-content a').click(function() {
        //if (animation) return false;
        var link = $(this);
        link.addClass('selected').siblings().removeClass('selected');
        $('.gallery-img').fadeOut();
        $('#gallery-img-'+link.data('id')).fadeIn();
        return false;
    }).BlackAndWhite({
        hoverEffect : true,
        speed: {
            fadeIn: 0,
            fadeOut: 0
        }
    });

    $('.gallery .go-prev').click(function() {
        var selected = $('.scroll-content a.selected');
        if (selected.length == 0)
            return false;
        var prev = selected.prev();
        if (prev.length > 0)
        {
            moveSliderHandle(prev.prevAll().length / Math.max(prev.siblings().length, 1) * 100);
            prev.click();
            selected.removeClass('selected');
        }
        return false;
    });

    $('.gallery .go-next').click(function() {
        var selected = $('.scroll-content a.selected');
        if (selected.length == 0)
            return false;
        var next = selected.next();
        if (next.length > 0)
        {
            moveSliderHandle(next.prevAll().length / Math.max(next.siblings().length, 1) * 100);
            next.click();
            selected.removeClass('selected');
        }
        return false;
    });

    $('.product-photo-label').click(function() {
        $('.gallery a.gallery-img:visible').click();
    });
});

