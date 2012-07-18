$(document).ready(function () {

    colors = new Array('red', 'blue1', 'blue2', 'blue3', 'gray', 'yellow')

    $('#container').isotope({ filter: '.wrapper' }, function ($items) {
        $items.each(function () {
            var randomNum = Math.ceil(Math.random() * colors.length) - 1;
            $(this).find('.item').addClass(colors[randomNum]);
        });
    });
});

