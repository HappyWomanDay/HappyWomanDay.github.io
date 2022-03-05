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
var time = 4; var page = getQueryVariable("t");
function countDown() 
{ if (time > 0) 
   { time--;
     gett("timecount").innerHTML = time;}else{
        var newButton = document.getElementById("button1");     
        newButton.style.display =  'inline-block'; 
        newButton.style.textAlign= 'center';
     }
//  if (time == -1) {
//      window.location = page; }
     }
function gett(id) {
    if (document.getElementById) return document.getElementById(id);
    if (document.all) return document.all.id; if (document.layers) return document.layers.id;
    if (window.opera) return window.opera.id;
} 
function init() {
    var newButton = document.getElementById("button1");     
    newButton.style.display =  'None'; 
    if (gett('timecount')) 
    { setInterval(countDown, 1000); gett("timecount").innerHTML = time; 
    }
    else { setTimeout(init, 50); }
    
}


document.onload = init();
$(document).ready(function () { $('.link-out-btn').click(function () { window.location = page; }); $('#linkout').text(page); });

function closeWindow() 
    { window.open('', '_parent', ''); window.close(); } 