(function($) {

    var themes = {
        light: {
            id: 'light',
            bodyClass: 'theme-light',
            logo: '/assets/img/logo_white_bg.svg',
            logoSm: '/assets/img/logo_white_bg_small.svg'
        },
        dark: {
            id: 'dark',
            bodyClass: 'theme-dark',
            logo: '/assets/img/logo_dark_bg.svg',
            logoSm: '/assets/img/logo_dark_bg_small.svg'
        }
    }

    function getCurrentTheme() {
        var t = localStorage.getItem('current-theme') ?? themes.light.id;
        return themes[t];
    }

    function setTheme(t) {
        localStorage.setItem('current-theme', t.id);
        $('.logo-med img').attr('src', t.logo);
        $('.logo-sm img').attr('src', t.logoSm);
        $('.theme-toggle').attr('data-event-label', t.id);
        $('body')
            .removeClass(themes.light.bodyClass)
            .removeClass(themes.dark.bodyClass)
            .addClass(t.bodyClass);
    }

    $(document).ready(function(){
        setTheme(getCurrentTheme());

        $('.theme-toggle').click(function(e) {
            e.preventDefault();
            
            var nextTheme = (getCurrentTheme() === themes.light) ? themes.dark : themes.light;
            setTheme(nextTheme);
        });
    });
    
})(jQuery);