$(document).ready(function () {

    $.getJSON('/yorsa-api', printTerms);
    $('form').submit(function (e) {
        e.preventDefault();
        $.post('/yorsa-api', {term: $('#term').val(), defined: $('#defined').val()}, printTerms);
        this.reset();
    });

});

function printTerms(terms) {
    $('body>dl').empty();
    $.each(terms, function () {
        $('<dt>').text(this.term).appendTo('body>dl');
        $('<dd>').text(this.defined).appendTo('body>dl');
    });
    $('dt').off('dblclick').dblclick(function() {
        $.ajax({
            url: '/yorsa-api/' + $(this).text(),
            type: 'DELETE',
            success: printTerms
        });
    });
}
