//new version of replacing the document body that should work
//now uses window.onload to actually wait for the gfycat js to finish before obliterating the site.
window.addEventListener ("load", gfyclean(), false)

function gfyclean() {
    if (window.location.href != "https://gfycat.com/"){
        try {
            var vid = document.getElementsByClassName("video media")[0];
            document.body.innerHTML = "<div class=\"container\"><video controls loop muted autoplay>" + vid.innerHTML + "</video></div>";
        }
        catch (TypeError) {
            setTimeout(function() {
                try {
                    var vid = document.getElementsByClassName("video media")[0];
                    document.body.innerHTML = "<div class=\"container\"><video controls loop muted autoplay>" + vid.innerHTML + "</video></div>";
                }
                catch (TypeError) {
                    setTimeout(function() {
                        var vid = document.getElementsByClassName("video media")[0];
                        console.log(vid)
                        document.body.innerHTML = "<div class=\"container\"><video controls loop muted autoplay>" + vid.innerHTML + "</video></div>";
                    }, 6000);
                }
            }, 6000);
        }
    }
};
