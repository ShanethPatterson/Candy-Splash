$("#coverbutton").click(function(){
 //   document.getElementById("cover").style.backgroundColor="rgba(0,0,0,0)";
  //  document.getElementbyId("cover").style.zIndex=-1;
    $(".cover").fadeOut(800);
    $( ".welcomebutton" ).removeClass("welcomebuttonloaded");
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
    setTimeout(function(){$( ".welcomebutton").addClass("welcomebuttonloaded");},800);
    $("#loadingtext").fadeOut(500);
    //document.getElementById("cover").style.backgroundColor="rgba(0,0,0,0.6)";
}