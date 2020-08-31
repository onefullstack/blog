(function($) {

    function getTheme() {
        return localStorage.getItem('current-theme') ?? 'light';
    }

    function setTheme(theme) {
        localStorage.setItem('current-theme', theme);
        $('body').removeClass('light').removeClass('dark').addClass(theme);
    }

    $(document).ready(function(){
        $('body').addClass(getTheme());

        $('#theme-toggle').click(function(e) {
            e.preventDefault();
            
            var nextTheme = (getTheme() === 'light') ? 'dark' : 'light';
            setTheme(nextTheme);
        });
    });
})(jQuery);