/*$.preloadImages = function () {
    if (typeof arguments[arguments.length - 1] == 'function') {
        var callback = arguments[arguments.length - 1];
    } else {
        var callback = false;
    }
    if (typeof arguments[0] == 'object') {
        var images = arguments[0];
        var n = images.length;
    } else {
        var images = arguments;
        var n = images.length - 1;
    }
    var not_loaded = n;
    for (var i = 0; i < n; i++) {
        $(new Image()).load(function() {
            if (--not_loaded < 1 && typeof callback == 'function') {
                callback();
            }
        }).attr('src', images[i]);
    }
}




$.preloadImages([
        'http://albums-rostov.ru/img/p11.png',
        'http://albums-rostov.ru/img/p22.png',
		'http://albums-rostov.ru/img/s11.png',
		'http://albums-rostov.ru/img/s22.png',
		'http://albums-rostov.ru/img/s33.png',
		'http://albums-rostov.ru/img/vv2.png',
		'http://albums-rostov.ru/img/videob2.png',
    ],
    function() {
        console.log('все загрузилось');
    }
);
*/