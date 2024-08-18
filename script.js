const today = new Date();
var month = (today.getMonth() + 1);
var day = today.getDate();
document.getElementById("title").innerHTML = "WWCFM Token Collection for " + month + "/" + day + "/" + today.getFullYear();

function updateTotal() {
    var mb = document.getElementById("653425285").value;
    var snap = document.getElementById("1010502183").value;
    var gfb = document.getElementById("1442430695").value;
    if (mb == "") {
        document.getElementById("653425285").value = "0";
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
    document.getElementById("totalText").innerText = "$" + (parseInt(mb) * 5 + parseInt(snap) + parseInt(gfb));
    document.getElementById("860974514").placeholder = parseInt(mb) * 5 + parseInt(snap) + parseInt(gfb);
}

function validate() {
    if (document.getElementById("1952425390").value == "") {
        alert("please pick a vendor!");
        return;
    }

    document.getElementById("653425285").value = parseInt(document.getElementById("653425285").value) * 5;
    document.getElementById("860974514").value = document.getElementById("860974514").placeholder;
    document.getElementById("main").submit();
}