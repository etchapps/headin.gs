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
            '<article id="{{hash}}" class="heading">' +
            '<iframe src="{{urlFull}}" frameborder="0"></iframe>' +
            '<div class="meta">' +
            '<a href="{{urlPen}}" title="View on Codepen"><i class="icon-download-2"></i></a>' +
            '<a href="#{{hash}}"><i class="icon-twitter"></i></a>' +
            '<i class="icon-info-sign"></i>' +
            '</div>' +
            '</article>'
    });
}(jQuery));
