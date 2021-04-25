(function($) {
    var subscribe = $('#subscribe'),
        subscribeForm = $('#subscribe_form'),
        subscribeClose = $('#subscribe_close');

    subscribeForm.submit(function() {
        if(ga) {
            ga('send', 'event', 'Subscribe', 'submit', 'email', 1);
        }
    });

    $('.subscribe-button').click(function(evt) {
        console.log('showing sign up form');
        evt.preventDefault();
        subscribe.css('display', 'flex');   
    });

    subscribeClose.click(function(evt) {
        evt.preventDefault();
        subscribe.css('display', 'none');
    });
})(jQuery);