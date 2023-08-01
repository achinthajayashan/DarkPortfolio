$('#btnHome').css("background-color","white");
$('#btnHome').css("color","black");

$('#aboutSec').hide();
$('#serviceSec').hide();

$('#btnHome').click(function () {
    $('#homeSec').show();
    $('#aboutSec').hide();
    $('#serviceSec').hide();
    $(this).css("background-color","white");
    $(this).css("color","black");

    $('#btnAbout').css("background-color","black");
    $('#btnAbout').css("color","white");
    $('#btnService').css("background-color","black");
    $('#btnService').css("color","white");
});

$('#btnAbout').click(function () {
    $('#homeSec').hide();
    $('#aboutSec').show();
    $('#serviceSec').hide();
    $(this).css("background-color","white");
    $(this).css("color","black");

    $('#btnHome').css("background-color","black");
    $('#btnHome').css("color","white");
    $('#btnService').css("background-color","black");
    $('#btnService').css("color","white");
});

$('#btnService').click(function () {
    $('#homeSec').hide();
    $('#aboutSec').hide();
    $('#serviceSec').show();

    $(this).css("background-color","white");
    $(this).css("color","black");

    $('#btnAbout').css("background-color","black");
    $('#btnAbout').css("color","white");
    $('#btnHome').css("background-color","black");
    $('#btnHome').css("color","white");
});

