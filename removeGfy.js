var vidTag = document.getElementsByTagName("video")[0];
vidTag = vidTag.outerHTML;
vidTag = vidTag.substring(0, 6) + " controls loop autoplay>" + vidTag.substring(vidTag.indexOf("<source"));
var divForCentering = "<div class=\"container\">" + vidTag + "</div>";
document.body.innerHTML = divForCentering;
document.head.innerHTML = "";
//document.body.innerHTML = document.getElementsByTagName("video")[0].outerHTML.substring(0, 6) + " controls loop>" + document.getElementsByTagName("video")[0].outerHTML.substring(document.getElementsByTagName("video")[0].outerHTML.indexOf("<source"));