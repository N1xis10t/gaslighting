setTimeout(function() {
    var normalStyle = document.querySelector("#normal").style;
    normalStyle.bottom = "4px";
    normalStyle.left = "4px";
    normalStyle.textShadow = "-4px 4px 4px yellow";
    normalStyle.color = "rgb(2, 173, 173)";
}, 1000)

setTimeout(function() {
    var friendlyStyle = document.querySelector("#friendly").style;
    friendlyStyle.bottom = "4px";
    friendlyStyle.left = "4px";
    friendlyStyle.textShadow = "-4px 4px 4px teal";
    friendlyStyle.color = "orange";
}, 1200)

/* The function below doesn't work for rotating the "&",
and I dont know why. */

setTimeout(function() {
    var andS = document.querySelector("#andS");
    andS.style.transform = "rotate(45deg)";
}, 1100)

var scrollhasnthappened = true;

document.onscroll = function() {
    var scrollStyle = document.querySelector("#scrollDown").style;
    scrollStyle.color = "white";
    scrollhasnthappened = false;
}

setTimeout(function() {
    if (scrollhasnthappened) {
        var scrollStyle = document.querySelector("#scrollDown").style;
        scrollStyle.color = "green";
    }
}, 1300)

function scarepeople() {
    var grendle = document.querySelector("#grendle");
    grendle.textContent = '"It is a somewhat perplexing topic to write about ones own ambitions and desires, not the least of which are an enthralling subject on their own merit, at least for a man of my humble stature, and another thing is that the one thing that I have not known nearly as well as some other things, is the concept of interesting and profound speech combined with an understanding of the basic materials." — Forstmyer & Grendleson, Annals of the Unexpired Vol. 38, Pages 15-16';
    var scroll2Style = document.querySelector("#scrollDown2").style;
    scroll2Style.color = "white";
}