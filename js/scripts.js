
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
    // have the appropriate page appear when clicking a box
	//////////////////////////////////////////////////////////////    
    $('#container .item').click(function() {

    	//construct the pageId
    	var pageId = $(this).attr('id');
    	var htmlID = 'page_'+$(this).attr('id');
    	var jsonFile = pageId+'.json';
    	console.log(jsonFile);

    	// make a json call and apply a jQuery template
		$.ajax({
		  url: jsonFile,
		  context: document.body
		}).done(function() { 
		  console.log('done')
		});    	


    	// show the page using jQuery UI method show
    	//$('#'+pageId).show('blind')
    })

});

