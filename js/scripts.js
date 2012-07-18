$(document).ready(function () {

    colors = new Array('red', 'blue1', 'blue2', 'blue3', 'gray', 'yellow')

    $('#container').isotope({ filter: '.wrapper' }, function ($items) {
        var id = this.attr('id'),
        len = $items.length;
        console.log('Isotope has filtered for ' + len + ' items in #' + id);

        $items.each(function () {
            var randomNum = Math.ceil(Math.random() * colors.length) - 1;
            $(this).find('.item').addClass(colors[randomNum]);
        });


    });
});

