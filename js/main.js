(function ($) {
    var header = $('<div></div>').load('header.html'),
        footer = $('<div></div>').load('footer.html');

    $('body').prepend(header);
    $('body').append(footer);
}(jQuery));
