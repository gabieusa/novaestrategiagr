$(document).ready(function() {
    // 1. Remove hash inicial
    cleanHash();
    
    // 2. Configura rolagem suave
    $("a[href^='#']").on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        
        if(target.length) {
            // Rolagem suave
            $('html, body').animate({
                scrollTop: target.offset().top - 100
            }, 800, cleanHash);
        }
    });
    
    // Função para limpar hash
    function cleanHash() {
        try {
            history.replaceState(null, null, ' ');
            if(window.location.hash) {
                window.location.hash = '';
            }
        } catch(e) {}
    }
});
