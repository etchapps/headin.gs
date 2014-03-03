(function ($) {
    'use strict';

    $('.codepen-wrapper').pentizr({
        username: 'headin-gs',
        type: 'loved',
        callback: function () {
            var headings = $('.heading');

            $.each(headings, function (i, v) {
                console.log($(v));
            });
        },
        template: '' +
            '<article class="heading">' +
            '<iframe src="{{urlFull}}" frameborder="0"></iframe>' +
            '<div class="meta">' +
            '<i class="icon-twitter"></i> <i class="icon-download-2"></i>' +
            '</div>' +
            '</article>'
    });
}(jQuery));
