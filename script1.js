$(document).ready(function()
{   
    $("#titletype").text($('.active').attr("id"));
    
   
$('.next').on('click', function()
{
    var curimg = $('.active');
    var nextimg = curimg.next();
   
    if(nextimg.length )
    {
        curimg.removeClass('active').css('z-index', -10);
        nextimg.addClass('active').css('z-index', 10);

    }
    else{
        curimg.removeClass('active').css('z-index', -10);
        nextimg = $("#starwars");
        nextimg.addClass('active').css('z-index', 10)
    }

    $("#titletype").text($('.active').attr("id"));
});

$('.prev').on('click', function()
{
    var curimg = $('.active');
    var previmg = curimg.prev();

    if(previmg.length)
    {
        curimg.removeClass('active').css('z-index', -10);
        previmg.addClass('active').css('z-index', 10);

    }
    else{
        curimg.removeClass('active').css('z-index', -10);
        previmg = $("#marvel");
        previmg.addClass('active').css('z-index', 10);
    }

    $("#titletype").text($('.active').attr("id"));

    

});

$('#starwars').on('click', function()
{
    var url = "./quiz.html?quiztype=starwars";
    location.href = url;
});

$('#marvel').on('click', function()
{
    var url = "./quiz.html?quiztype=marvel";
    location.href = url;
});

$('#anime').on('click', function()
{
    var url = "./quiz.html?quiztype=anime";
    location.href = url;
});

});
