function removeImgur() {
    if (window.location.href == "https://imgur.com/" || window.location.href == "imgur.com") {
        document.body.style.visibility = "visible";
    } else {
        imgur = browser.storage.local.get("imgur");
        imgur.then(function(result) {
            if (window.location.href.indexOf("i.imgur.com") != -1) {
                if (window.location.href.indexOf(".mp4") != -1) {
                    document.body.innerHTML = "<video controls autoplay loop><source " + "src=\"" + window.location.href + "\" type=\"video/mp4\"></video>"
                }
                document.body.style.visibility = "visible";
            } else {
                if (result["imgur"]) {
                    im = document.getElementsByClassName("image post-image")[0];
                    ims = im.innerHTML.substring(im.innerHTML.indexOf("src"));
                    ims = "https://i." + ims.substring(ims.indexOf("imgur"));
                    ims = ims.substring(0, ims.indexOf("\""))
                    window.location.assign(ims);
                }
                document.body.style.visibility = "visible";
            }
        });
    }
};

window.addEventListener("load", removeImgur(), false);
