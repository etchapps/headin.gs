(function ($) {
    'use strict';

    $('.codepen-wrapper').pentizr({
        username: 'headin-gs',
        type: 'loved',
        callback: function () {
            $('a[data-toggle]').tooltip();
        },
        template: '' +
            '<article id="{{hash}}" class="heading">' +
                '<iframe src="{{urlFull}}" frameborder="0"></iframe>' +
                '<div class="meta">' +
                    '<a href="{{urlPen}}" data-toggle="tooltip" data-title="View source">' +
                        '<i class="icon-download-2"></i>' +
                    '</a>' +
                    '<a href="https://twitter.com/intent/tweet?url=http%3A%2F%2Fheadin.gs%2F%23{{hash}}&via=etch&text={{title}}.%20Be%20more%20creative%20with%20your%20headings."' +
                        ' data-toggle="tooltip" data-title="Tweet this heading">' +
                        '<i class="icon-twitter"></i>' +
                    '</a>' +
                '</div>' +
            '</article>'
    });
}(jQuery));
