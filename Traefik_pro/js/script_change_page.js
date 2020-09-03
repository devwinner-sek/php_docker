function getXMLHttpRequest() {
    var xhr = null;
     
    if (window.XMLHttpRequest || window.ActiveXObject) {
        if (window.ActiveXObject) {
            try {
                xhr = new ActiveXObject("Msxml2.XMLHTTP");
            } catch(e) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
        } else {
            xhr = new XMLHttpRequest();
        }
    } else {
        alert("Votre navigateur est obsolète, veuillez en changer.");
        return null;
    }     
    return xhr;
}

//deb
function valid(val) {  
     requestval(readDataval,val);
  }

function requestval(callback,val) {
    var xhr = getXMLHttpRequest();
     
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            callback(xhr.responseText);
        }
    };
    //var nickname= encodeURIComponent(document.getElementById("simpleSMS").value);
    var nickname= val;
	
    xhr.open("GET", "changepagesendsms.php?title="+nickname, true);
    xhr.send(null);
}
 
function readDataval(sData) {
     document.getElementById('page').innerHTML = sData;
	// document.getElementById('page').innerHTML = "EN MAINTENANCE..................";
}
//fin

//deb
function validmenu(val) {  
     requestvalmenu(readDatavalmenu,val);
  }

function requestvalmenu(callback,val) {
    var xhr = getXMLHttpRequest();
     
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            callback(xhr.responseText);
        }
    };
    //var nickname= encodeURIComponent(document.getElementById("simpleSMS").value);
    var nickname= val;
	
    xhr.open("GET", "gestionsousmenu.php?title="+nickname, true);
    xhr.send(null);
}
 
function readDatavalmenu(sData) {
     document.getElementById('sousmenu').innerHTML = sData;
	// document.getElementById('page').innerHTML = "EN MAINTENANCE..................";
}
//fin


//deb


























