(function($) {
    $(document).ready(function(){
        var theme = localStorage.getItem('current-theme') ?? 'light';
        $('body').addClass(theme);
    });
})(jQuery);