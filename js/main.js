(function ($) {
    var header = $('<div></div>').load('header.html'),
        footer = $('<div></div>').load('footer.html');

    $('main').prepend(header);
    $('main').append(footer);
}(jQuery));
