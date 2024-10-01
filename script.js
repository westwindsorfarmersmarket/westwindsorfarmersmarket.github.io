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
    document.getElementById("1010502183").value = parseInt(document.getElementById("1010502183").value);
    document.getElementById("1442430695").value = parseInt(document.getElementById("1442430695").value);
    document.getElementById("860974514").value = document.getElementById("860974514").placeholder;
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


function getRentDueTest(){
    var vendorName = document.getElementById("1952425390").value;
    vendorName = encodeURIComponent(vendorName);
    var url = "https://docs.google.com/spreadsheets/d/1z82wLqfuOacuHxwXeRoMhLzRnrUlEgKM0wgvSEZLgdw/gviz/tq?tqx=out:html&tq=select A, B, C where A=%22"+vendorName+"%22";
    document.getElementById("rentFrame").src = url;
}



function getRentDue(vendor){
    let SHEET_ID = "1z82wLqfuOacuHxwXeRoMhLzRnrUlEgKM0wgvSEZLgdw";

    // Creating a XHR object
    let xhr = new XMLHttpRequest();
    let myurl = "https://sheets.googleapis.com/v4/spreadsheets/"+SHEET_ID+"/values/Rent?valueRenderOption=FORMATTED_VALUE&key=AIzaSyA6gLJfCoxH3OxtpVzw7lWBqNkiEx6noGA"

    // open a connection
    xhr.open("GET", myurl, false);
    //xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');

    // Set the request header i.e. which type of content you are sending
    xhr.setRequestHeader("Content-Type", "application/json");
    var rentdue = "0"

    // Create a state change callback
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            // Print received data from server
            // alert(xhr.responseText); // this.responseText;
            const jsonString = xhr.responseText;
            const json = JSON.parse(jsonString);
            // alert(json.values.length);
            for (var i=0; i < json.values.length; i++) {
                row = json.values[i];
                // alert(row[0]);
                if(vendor == row[0]){
                    // alert("match: "+row[1]+" ");
                    if (row[1]) {
                        rentdue = row[1];
                    }
                }
             }
                     
        }
    };


    // Sending data with the request
    xhr.send();
    return rentdue;
}