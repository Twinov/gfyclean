var vidTag = document.getElementsByTagName("video")[0];
vidTag = vidTag.outerHTML;
vidTag = vidTag.substring(0, 6) + " controls loop autoplay>" + vidTag.substring(vidTag.indexOf("<source"));
document.body.innerHTML = vidTag;