(function($) {

    $(document).ready(function() {
        $('#open-nav').click(function(e) {
            e.preventDefault();
            $('header.site-header nav .dropdown').show();
        });

        $('#close-nav').click(function(e) {
            e.preventDefault();
            $('header.site-header nav .dropdown').hide();
        });
    });

})(jQuery);