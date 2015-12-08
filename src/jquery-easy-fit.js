/**
 * jQuery-EasyFit
 *
 * v1.0
 *
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 *
 * @Author Roni Kumar Saha (roni.cse@gmail.com)
 * Mobile: 01817087873
 * http://xiidea.github.io/jquery-easy-fit/
 *
 * Please use as you wish at your own risk.
 *
 */

(function ( $ ) {
    $.fn.easyFit = function() {
        var $elements = $(this);

        return $elements.each(function() {
            resize(this);
        });

        function reduceSize(el) {
            while (el.scrollHeight > el.offsetHeight) {
                $(el).css('font-size', (parseInt($(el).css('font-size').slice(0, -2)) - 1) + 'px');
            }
        }

        function increaseSize(el) {
            while (el.scrollHeight <= el.offsetHeight) {
                $(el).css('font-size', (parseInt($(el).css('font-size').slice(0, -2)) + 1) + 'px');
            }
        }

        function resize(el){
            increaseSize(el);
            reduceSize(el);
        }
    };
}( jQuery ));