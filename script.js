const today = new Date();
var month = (today.getMonth() + 1);
var day = today.getDate();
document.getElementById("title").innerHTML = "WWCFM Token Collection for " + month + "/" + day + "/" + today.getFullYear();

function updateTotal() {
    var mb = document.getElementById("mb").value;
    var snap = document.getElementById("1010502183").value;
    var gfb = document.getElementById("1442430695").value;
    if (mb == "") {
        document.getElementById("mb").value = "0";
        mb = 0;
    }
    if (snap == "") {
        document.getElementById("1010502183").value = "0";
        snap = 0;
    }
    if (gfb == "") {
        gfb = document.getElementById("1442430695").value = "0";
        gfb = 0;
    }
    document.getElementById("totalText").innerText = "$" + (parseInt(mb) * 5 + parseInt(snap) + parseInt(gfb)) + ` (\$${parseInt(mb) * 5}  MB, \$${parseInt(snap)} SNAP, \$${parseInt(gfb)} GFB)`;
    document.getElementById("860974514").value = parseInt(mb) * 5 + parseInt(snap) + parseInt(gfb);
}

function validate() {
    if (document.getElementById("1952425390").value == "") {
        alert("please pick a vendor!");
        return;
    }
    updateTotal();
    document.getElementById("653425285").value = parseInt(document.getElementById("mb").value) * 5;
    document.getElementById("1010502183").value = parseInt(document.getElementById("1010502183").value);
    document.getElementById("1442430695").value = parseInt(document.getElementById("1442430695").value);
    document.getElementById("main").submit();
}


function checkRent() {
    if (document.getElementById("1952425390").value == "") {
        alert("please pick a vendor!");
        return;
    }
    vendor = document.getElementById("1952425390").value;
    rentdue = getRentDue(vendor);
    alert("rentdue: "+rentdue);
}


function getRentDue(){
    var vendorName = document.getElementById("1952425390").value;
    vendorName = encodeURIComponent(vendorName);
    var url = "https://docs.google.com/spreadsheets/d/1z82wLqfuOacuHxwXeRoMhLzRnrUlEgKM0wgvSEZLgdw/gviz/tq?tqx=out:html&tq=select A, B, C where A=%22"+vendorName+"%22";
    document.getElementById("rentFrame").src = url;
}