(function($) {

    $('.subscribe-button').click(function(e){
        e.preventDefault();
        showSubscribeForm();
    });

    function showSubscribeForm() {
        $('#subscribe-form').show();
    }

})(jQuery);