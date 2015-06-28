
var data = {
    "titlemustache": "MUSTACHE",
    "titlehandlebars": "HANDLEBARS",
    "names": [
        {"name": "Tarzan"},
        {"name": "Tarzan"},
        {"name": "Tarzan"},
        {"name": "Tarzan"},
        {"name": "Tarzan"},
        {"name": "Jane"}
    ]
};


//MUSTACHE EXAMPLE
(function($) {

    var template = '<div class="container">' +
                        '<h1>{{titlemustache}}</h1>' +
                        '<ul>{{#names}}' +
                            '<li>{{name}}</li>{' +
                        '{/names}}</ul>' +
                    '</div>';
    var result = Mustache.render(template, data);
    $(document.body).append(result);

})(window.jQuery);


// FUNTIONS
(function($) {

    // HANDLEBARS EXAMPLE
    function handlebarsRender() {
        var template = $('#myTemplate').html();
        var compiledTemplate = Handlebars.compile(template);
        var result = compiledTemplate(data);
        $(document.body).append(result);
    }

    $('#tester').on('click', function(e) {
        handlebarsRender();
    });

})(window.jQuery);


