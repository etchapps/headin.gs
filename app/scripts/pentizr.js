/*
 *
 * pentizr.js
 *
 * Show your CodePens everywhere in 25 seconds!
 *
 *
 * Tim Pietrusky
 * http://timpietrusky.com
 *
 */

(function($) {
    'use strict';
    // Create the defaults once
    var pluginName = 'pentizr';
    // default options
    var defaults = {
        username : '',
        type : 'owned',
        page : 1,
        classname : 'pentizr',
        social : false,
        limit : 9,
        template : '',
        callback : ''
    };

    // Create the defaults once
    function Plugin(element, options) {
        this.element = element;

        this.options = $.extend( {}, defaults, options);
        this.init();
    }

    // The actual plugin constructor
    Plugin.prototype.init = function() {
        this.retrieve();
    };

    Plugin.prototype.retrieve = function() {
        var _this = this;

        $.ajax({
            dataType: 'jsonp',
            jsonp: 'jsonp',
            url: 'http://codepen-awesomepi.timpietrusky.com/' + this.options.username + '/' + this.options.type + '/' + this.options.page,
            success: function(data) {
                if (data.content !== null) {

                    // Use the default template
                    if (_this.options.template === '') {
                        _this.show(data.content.pens);

                        // Use a custom template
                    } else {
                        _this.showCustom(data.content.pens);
                    }
                }
            }
        });

    };

    /**
     * Appends the output to the element.
     */
    Plugin.prototype.show = function(pens) {
        var _this = this;
        var container = $('<div class="'+this.options.classname+'"></div>');

        $.each(pens, function(i) {

            // Limit the returned pens
            if (i >= _this.options.limit) {
                return false;
            }

            var wrapper = $('<div class="wrappetizr"></div>');

            // Subcontainer
            var subcontainer = $('<div class="subcontainer"></a>');

            // Iframe
            var iframe = $('<iframe></iframe>');
            iframe.attr('frameborder', 0);
            iframe.attr('scrolling', 'no');
            iframe.attr('allowtransparency', 0);
            iframe.attr('class', 'iframe' + i);
            iframe.attr('src', this.url.fullgrid);

            // Meta
            var meta = $('<div class="meta"></div>');
            var metaTitle = $('<h2></h2>');

            if (this.title !== null) {
                metaTitle.html(this.title);
            }

            metaTitle.appendTo(meta);

            // Open CodePen
            var metaCodepen = $('<div class="open-codepen"></div>');
            metaCodepen.append($('<a href="'+this.url.details+'" target="_blank">Details</a>'));
            metaCodepen.append($('<a href="'+this.url.pen+'" target="_blank">Source</a>'));
            metaCodepen.append($('<a href="'+this.url.full+'" target="_blank">Fullscreen</a>'));
            metaCodepen.appendTo(meta);

            // Create social if options.social is true
            if (_this.options.social) {
                var metaSocial = $('<div class="social"></div>');
                metaSocial.append(this.views + ' <span class="views">&#9786;</span>');
                metaSocial.append('&nbsp;&nbsp;');
                metaSocial.append(this.hearts + ' <span class="hearts">&#9829;</span>');
                metaSocial.append('&nbsp;&nbsp;');
                metaSocial.append(this.comments + ' <span class="comments">&#9829;</span>');

                metaSocial.appendTo(meta);
            }

            // Append childs
            wrapper.append(iframe);
            wrapper.append(subcontainer);
            subcontainer.append(meta);
            wrapper.appendTo(container);

            // Append pen to element
            $(_this.element).append(container);

            // Add click handler for the pens
            subcontainer.on('click', function(e) {
                if (e.target.localName !== 'a') {
                    if (wrapper.hasClass('onair')) {
                        wrapper.removeClass('onair');
                    } else {
                        $('.wrappetizr').removeClass('onair');
                        wrapper.addClass('onair');
                    }
                }
            });
        });

        // Provide a function when everything is finished
        if ($.isFunction(_this.options.callback)) {
            _this.options.callback();
        }
    };

    /**
     * Use a custom <CODE>options.template</CODE> and parse
     * the values:
     *
     * {{title}}
     * {{description}}
     * {{views}}
     * {{hearts}}
     * {{comments}}
     * {{urlDetails}}
     * {{urlPen}}
     * {{urlFull}}
     *
     * The output is appended to the element.
     */
    Plugin.prototype.showCustom = function(pens) {
        var _this = this;

        $.each(pens, function(i) {

            // Limit the returned pens
            if (i >= _this.options.limit) {
                return false;
            }

            var template = _this.options.template;
            var customRegex = '';

            var toReplace = {
                title : this.title,
                description : this.description,
                views : this.views,
                hearts : this.hearts,
                comments : this.comments,
                urlDetails : this.url.details,
                urlPen : this.url.pen,
                urlFull : this.url.full
            };

            // Parse the template and replace the toReplace fields
            $.each(toReplace, function(i, v) {
                customRegex = new RegExp('{{' + i + '}}', 'g');
                template = template.replace(customRegex, v);
            });

            // Append the template to element
            $(_this.element).append(template);
        });

        // Provide a function when everything is finished
        if ($.isFunction(_this.options.callback)) {
            _this.options.callback();
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function( options ) {
        return this.each(function (){
            if(!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                    new Plugin(this, options));
            }
        });
    };

})(jQuery);