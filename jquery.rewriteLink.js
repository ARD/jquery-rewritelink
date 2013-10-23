/**
 * Rewrite link.
 * Autor: Andre Rainaud <contato@andrerainaud.com.br>
 */
(function($){
    $.fn.rewriteLink = function(settings){
        var config = {
            'prefix': '#!',
			'base': ''
        };
        if (settings){$.extend(config, settings);}

        return this.each(function(){
			var dst = $(this).attr('href').replace(config.base,'');
            $(this).attr('href',config.prefix+dst);
        });
    };
})(jQuery);
