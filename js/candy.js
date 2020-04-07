$("#coverbutton").click(function(){
   document.getElementById("cover").style.backgroundColor="rgba(0,0,0,0)";
   document.getElementById("cover").style.zIndex=-1;
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

/* Light YouTube Embeds by @labnol */
/* Web: http://labnol.org/?p=27941 */

document.addEventListener("DOMContentLoaded",
    function() {
        var div, n,
            v = document.getElementsByClassName("youtube-player");
        for (n = 0; n < v.length; n++) {
            div = document.createElement("div");
            div.setAttribute("data-id", v[n].dataset.id);
            div.innerHTML = labnolThumb(v[n].dataset.id);
            div.onclick = labnolIframe;
            v[n].appendChild(div);
        }
    });

function labnolThumb(id) {
    var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
        play = '<div class="play"></div>';
    return thumb.replace("ID", id) + play;
}

function labnolIframe() {
    var iframe = document.createElement("iframe");
    var embed = "https://www.youtube.com/embed/ID?autoplay=1";
    iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    this.parentNode.replaceChild(iframe, this);
}
