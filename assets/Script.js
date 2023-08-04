$('.btnHome').css("background-color","white");
$('.btnHome').css("color","black");

$('#sideBar').hide();

$('#aboutSec').hide();
$('#serviceSec').hide();
$('#portfolioSec').hide();
$('#contactSec').hide();

$('.btnHome').click(function () {
    $('#homeSec').show();
    $('#aboutSec').hide();
    $('#serviceSec').hide();
    $('#portfolioSec').hide();
    $('#contactSec').hide();
    $('#sideBar').hide();
    $(this).css("background-color","white");
    $(this).css("color","black");

    $('.btnAbout').css("background-color","black");
    $('.btnAbout').css("color","white");
    $('.btnService').css("background-color","black");
    $('.btnService').css("color","white");
    $('.btnPortfolio').css("background-color","black");
    $('.btnPortfolio').css("color","white");
    $('.btnContact').css("background-color","black");
    $('.btnContact').css("color","white");
});

$('.btnAbout').click(function () {
    $('#homeSec').hide();
    $('#aboutSec').show();
    $('#serviceSec').hide();
    $('#portfolioSec').hide();
    $('#contactSec').hide();
    $('#sideBar').hide();
    $(this).css("background-color","white");
    $(this).css("color","black");

    $('.btnHome').css("background-color","black");
    $('.btnHome').css("color","white");
    $('.btnService').css("background-color","black");
    $('.btnService').css("color","white");
    $('.btnPortfolio').css("background-color","black");
    $('.btnPortfolio').css("color","white");
    $('.btnContact').css("background-color","black");
    $('.btnContact').css("color","white");
});

$('.btnService').click(function () {
    $('#homeSec').hide();
    $('#aboutSec').hide();
    $('#serviceSec').show();
    $('#portfolioSec').hide();
    $('#contactSec').hide();
    $('#sideBar').hide();

    $(this).css("background-color","white");
    $(this).css("color","black");

    $('.btnAbout').css("background-color","black");
    $('.btnAbout').css("color","white");
    $('.btnHome').css("background-color","black");
    $('.btnHome').css("color","white");
    $('.btnPortfolio').css("background-color","black");
    $('.btnPortfolio').css("color","white");
    $('.btnContact').css("background-color","black");
    $('.btnContact').css("color","white");
});

$('.btnPortfolio').click(function () {
    $('#homeSec').hide();
    $('#aboutSec').hide();
    $('#serviceSec').hide();
    $('#portfolioSec').show();
    $('#contactSec').hide();
    $('#sideBar').hide();

    $(this).css("background-color","white");
    $(this).css("color","black");

    $('.btnAbout').css("background-color","black");
    $('.btnAbout').css("color","white");
    $('.btnHome').css("background-color","black");
    $('.btnHome').css("color","white");
    $('.btnService').css("background-color","black");
    $('.btnService').css("color","white");
    $('.btnContact').css("background-color","black");
    $('.btnContact').css("color","white");
});

$('.btnContact').click(function () {
    $('#homeSec').hide();
    $('#aboutSec').hide();
    $('#serviceSec').hide();
    $('#portfolioSec').hide();
    $('#contactSec').show();
    $('#sideBar').hide();

    $(this).css("background-color","white");
    $(this).css("color","black");

    $('.btnAbout').css("background-color","black");
    $('.btnAbout').css("color","white");
    $('.btnHome').css("background-color","black");
    $('.btnHome').css("color","white");
    $('.btnPortfolio').css("background-color","black");
    $('.btnPortfolio').css("color","white");
    $('.btnService').css("background-color","black");
    $('.btnService').css("color","white");
});

$('#barMenu').click(function () {
    $('#sideBar').show();
});

$('#close').click(function () {
    $('#sideBar').hide();
})

