$("#coverbutton").click(function(){
    $(".cover").fadeOut(800)

    $( ".logo-top" ).addClass("nooffset");
    $( ".logo-bottom" ).addClass("nooffset");
    $( ".body" ).addClass("bodycanscroll");
    setTimeout(videosIn(),1500);
});

function videosIn(){
    $( ".video-l" ).addClass("nooffset");
    $( ".video-r" ).addClass("nooffset");
    $( ".candyoffset-l" ).addClass("nooffset");
    $( ".candyoffset-r" ).addClass("nooffset");
}
function bodyOnLoad(){
    $( ".welcomebutton" ).addClass("welcomebuttonloaded");
    $(".cover i").fadeOut(500)
}