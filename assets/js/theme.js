(function($) {

    var themes = {
        light: {
            id: 'light',
            bodyClass: 'theme-light',
            logo: '/assets/img/logo_white_bg.svg'
        },
        dark: {
            id: 'dark',
            bodyClass: 'theme-dark',
            logo: '/assets/img/logo_dark_bg.svg'
        }
    }

    function getCurrentTheme() {
        var t = localStorage.getItem('current-theme') ?? themes.light.id;
        return themes[t];
    }

    function setTheme(t) {
        localStorage.setItem('current-theme', t.id);
        $('.logo img').attr('src', t.logo);
        $('body')
            .removeClass(themes.light.bodyClass)
            .removeClass(themes.dark.bodyClass)
            .addClass(t.bodyClass);
    }

    $(document).ready(function(){
        setTheme(getCurrentTheme());

        $('#theme-toggle').click(function(e) {
            e.preventDefault();
            
            var nextTheme = (getCurrentTheme() === themes.light) ? themes.dark : themes.light;
            setTheme(nextTheme);
        });
    });
    
})(jQuery);