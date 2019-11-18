//new version of replacing the document body that should work
//now uses window.onload to actually wait for the gfycat js to finish before obliterating the site.
window.addEventListener ("load", gfyclean(), false)

function gfyclean() {
    if (window.location.href != "https://gfycat.com/" && window.location.href != "gfycat.com"){
        try {
            replacegfy();
        }
        catch (TypeError) {
            //failed the first time, so keep retrying until the site is loaded.
            //used to be an elegant solution here but it wasn't working on mobile :(
            let interval = 400;
            setTimeout(function() {
                try {
                    replacegfy();
                }
                //next just keep going for many times
                catch (TypeError) {
                    setTimeout(function() {
                        try {
                            replacegfy();
                        }
                        catch (TypeError) {
                            setTimeout(function() {
                                try {
                                    replacegfy();
                                }
                                catch (TypeError) {
                                    setTimeout(function() {
                                        try {
                                            replacegfy();
                                        }
                                        catch (TypeError) {
                                            setTimeout(function() {
                                                try {
                                                    replacegfy();
                                                }
                                                catch (TypeError) {
                                                    setTimeout(function() {
                                                        try {
                                                            replacegfy();
                                                        } catch (TypeError) { //just give up lol
                                                            document.body.style.visibility = "visible";
                                                        }
                                                    }, interval);
                                                }
                                            }, interval);
                                        }
                                    }, interval);
                                }
                            }, interval);
                        }
                    }, interval);
                }
            }, interval);

        }
    } else {
        document.body.style.visibility = "visible";
    }
};

function replacegfy() {
    var vid;
    vid = document.getElementsByClassName("video media")[0];
    document.body.innerHTML = "<div class=\"container\"><video controls loop muted autoplay>" + vid.innerHTML + "</video></div>";
    document.body.style.visibility = "visible";
}