//new version of replacing the document body that should work
//now uses window.onload to actually wait for the gfycat js to finish before obliterating the site.
window.addEventListener ("load", gfyclean(), false)

function gfyclean() {
    if (window.location.href != "https://gfycat.com/" && window.location.href != "gfycat.com"){
        try {
            var vid;
            vid = document.getElementsByClassName("video media")[0];
            document.body.innerHTML = "<div class=\"container\"><video controls loop muted autoplay>" + vid.innerHTML + "</video></div>";
            document.body.style.visibility = "visible";
        }
        catch (TypeError) {
            //failed the first time, so keep retrying until the site is loaded.
            var i;
            for (i = 0; i < 100; i++) {
                if (i == 99) {
                    //script failed after 10 seconds; just show the normal page
                    document.body.style.visibility = "visible";
                }
                try {
                    setTimeout(function() {
                        var vid;
                        vid = document.getElementsByClassName("video media")[0];
                        document.body.innerHTML = "<div class=\"container\"><video controls loop muted autoplay>" + vid.innerHTML + "</video></div>";
                        document.body.style.visibility = "visible";
                        i = 10;
                    }, 100);
                } catch (TypeError) {
                    continue;
                }
            }
        }
    } else {
        document.body.style.visibility = "visible";
    }
};
