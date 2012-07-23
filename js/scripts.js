
//////////////////////////////////////////////////////////////
// for browsers that don't support console.log
//////////////////////////////////////////////////////////////   
var alertFallback = true;
if (typeof console === "undefined" || typeof console.log === "undefined") {
 console = {};
 if (alertFallback) {
     console.log = function(msg) {
          alert(msg);
     };
 } else {
     console.log = function() {};
 }
}

//////////////////////////////////////////////////////////////
// script that run once the DOM is complete
//////////////////////////////////////////////////////////////
$(document).ready(function () {

    colors = new Array('red', 'blue1', 'blue2', 'blue3', 'gray', 'yellow')

    //////////////////////////////////////////////////////////////
    // render the isotope plugin for the opening page, and assign a random color to the boxes
    //////////////////////////////////////////////////////////////   
    $('#container').isotope({ filter: '.wrapper' }, function ($items) {
        $items.each(function () {

            var randomNum = Math.ceil(Math.random() * colors.length) - 1;

            $(this).find('.item').addClass(colors[randomNum]);

        });
    });

    //////////////////////////////////////////////////////////////
    // hide all the examples in the presentation
    //////////////////////////////////////////////////////////////   
    $('.pagecontent').hide();

    //////////////////////////////////////////////////////////////
    // have the appropriate page appear when clicking a box
    //////////////////////////////////////////////////////////////    
    $('#container .item').click(function () {

        $('.pagecontent').hide();

        //construct the pageId
        var htmlID = 'page_' + $(this).attr('id');

        // show the appropriate content
        $('#'+htmlID).show();
        $('#pageDisplay').show('blind');
    });

    $('#pageCloser').click(function () {

        $('.pagecontent').hide();

        $('#pageDisplay').hide('blind');

    });

});

