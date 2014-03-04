(function ($) {
    'use strict';

    $('.codepen-wrapper').pentizr({
        username: 'headin-gs',
        type: 'loved',
        callback: function () {
            $('.pen-tooltip').tooltip();
        },
        template: '' +
            '<article id="{{hash}}" class="heading">' +
            '<iframe src="{{urlFull}}" frameborder="0"></iframe>' +
            '<div class="meta">' +
            '<a href="{{urlPen}}" data-toggle="tooltip" data-title="Edit on Codepen" class="pen-tooltip">' +
            '<i class="icon-download-2"></i></a>' +
            '<a href="#{{hash}}"><i class="icon-twitter"></i></a>' +
            '</div>' +
            '</article>'
    });
}(jQuery));
