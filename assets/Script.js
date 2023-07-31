$('#btnHome').css("background-color","white");
$('#btnHome').css("color","black");

$('#aboutSec').hide();

$('#btnHome').click(function () {
    $('#homeSec').show();
    $('#aboutSec').hide();
    $(this).css("background-color","white");
    $(this).css("color","black");

    $('#btnAbout').css("background-color","black");
    $('#btnAbout').css("color","white");
});

$('#btnAbout').click(function () {
    $('#homeSec').hide();
    $('#aboutSec').show();
    $(this).css("background-color","white");
    $(this).css("color","black");

    $('#btnHome').css("background-color","black");
    $('#btnHome').css("color","white");
});

