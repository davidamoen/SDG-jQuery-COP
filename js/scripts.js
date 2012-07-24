
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
        $('#' + htmlID).show();
        $('#pageDisplay').show('blind');
    });

    $('#pageCloser').click(function () {

        $('.pagecontent').hide();

        $('#pageDisplay').hide('blind');

    });


    //////////////////////////////////////////////////////////////
    // DOM Manipulation samples
    //////////////////////////////////////////////////////////////   

    // toggle CSS on and off
    $('.addClassSample1').toggle(
        function () {
            $(this).addClass('redbox');
        },
        function () {
            $(this).removeClass('redbox');
        }
    );


    // Content insertion
    $('.addContentSample2').click(function () {
        $(this).after('<span>You typed: ' + $('#addContentTextBox1').val() + '</span>');
    });

    // show/hide methods
    $('#addShowHideSample1').click(function () {
        $('#wolfpic').fadeOut(500);
        $('#wolfpic').show();
    });

    $('#addShowHideSample2').click(function () {
        $('#wolfpic').fadeOut(500);
        $('#wolfpic').show('bounce');
    });

    $('#addShowHideSample3').click(function () {
        $('#wolfpic').fadeOut(500);
        $('#wolfpic').fadeIn(2000);
    });

    $('#addShowHideSample4').click(function () {
        $('#wolfpic').fadeOut(500);
        $('#wolfpic').show('puff');
    });

    // sample animation
    $('.animationSample1').click(function () {
        $('#logo').removeAttr('style');
        $('#logo').show();
        $('#logo').animate({ left: '+=300' }, 500, function () {
            $('#logo').animate({ top: '-=200' }, 500, function () {
                $('#logo').animate({ left: '+=320' }, 500, function () {
                    $('#logo').animate({ top: '-=225' }, 500, function () {
                        console.log("animation complete"); 
                    });
                });
            });
        });
    });

    // ajax example
    $('.ajaxSample1').click(function () {
        $('#searchResults .results').detach();
        $('#loader').show();
        $.ajax({
            type: 'POST',
            url: "http://api.geonames.org/wikipediaSearchJSON?maxRows=20&username=davidamoen&q=" + $('#wikipediaSearchTextBox').val(),
            success: function (data) {
                $('#loader').hide();
                $.each(data.geonames, function (idx, elem) {
                    html = '<div class="results"><div class="thumb"><img src="' + elem.thumbnailImg + '" />&nbsp;</div><div class="title">' + elem.title + '</div><a href="http://' + elem.wikipediaUrl + '" target="_blank">Go</a></div>';
                    $('#searchResults').append(html);
                });
            },
            dataType: 'jsonp'
        });

    });

});

