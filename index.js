 function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("="); if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}
var time = 5; var page = getQueryVariable("t");
function countDown() 
{ if (time > 0) 
    time--;
     gett("timecount").innerHTML = time;
//  if (time == -1) {
//      window.location = page; }
     }
function gett(id) {
    if (document.getElementById) return document.getElementById(id);
    if (document.all) return document.all.id; if (document.layers) return document.layers.id;
    if (window.opera) return window.opera.id;
} 
function init() {
    if (gett('timecount')) 
    { setInterval(countDown, 1000); gett("timecount").innerHTML = time; }
    else { setTimeout(init, 50); }
    var newButton = document.getElementById("button1");     
    newButton.style.visibility = time > 0? 'none' : '';
}


document.onload = init(); $(document).ready(function () { $('.link-out-btn').click(function () { window.location = page; }); $('#linkout').text(page); });

function closeWindow() 
    { window.open('', '_parent', ''); window.close(); } 