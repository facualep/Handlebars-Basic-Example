
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
    $('.main').append(result);

})(window.jQuery);


// FUNTIONS
(function($) {

    // HANDLEBARS EXAMPLE
    function handlebarsRender() {
        var template = $('#myTemplate').html();
        var compiledTemplate = Handlebars.compile(template);
        var result = compiledTemplate(data);
        $('.main').append(result);
    }

    $('#tester').on('click', function(e) {
        e.preventDefault();
        if ($("input[name='newTitle']").val() !== '') {
            data.titlehandlebars = $("input[name='newTitle']").val();
            $("input[name='newTitle']").val('');
        }
        handlebarsRender();
    });

})(window.jQuery);


