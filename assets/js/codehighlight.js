(function($, highlight){
    $(document).ready(function() {
         document.querySelectorAll('.code-snippet pre code').forEach(function(block) {
            block.firstChild.nodeValue = block.firstChild.nodeValue.replace(/^\n+|\n+$/g, "");
            highlight.highlightBlock(block);
        });
    });
})(jQuery, hljs);