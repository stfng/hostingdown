$(document).ready(function() {
    $('#Flags > div').click(function() {
        if ($(this).hasClass('Opener')) {
            $(this).removeClass('Opener');
        } else {
            $(this).addClass('Opener');
        }
    })


})
