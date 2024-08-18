function fullSummary() {
    document.getElementById("frame").src = "https://docs.google.com/spreadsheets/d/13FllM0R-sylfZsDyvUDmW-znNi5WtQlMVNUKdoEiI8s/gviz/tq?tqx=out:html&sheet=Summary";
}

function noResponses() {
    document.getElementById("frame").src = "https://docs.google.com/spreadsheets/d/13FllM0R-sylfZsDyvUDmW-znNi5WtQlMVNUKdoEiI8s/gviz/tq?tqx=out:html&sheet=Summary&tq=select * where I = 0";
}

function moreResponses() {
    document.getElementById("frame").src = "https://docs.google.com/spreadsheets/d/13FllM0R-sylfZsDyvUDmW-znNi5WtQlMVNUKdoEiI8s/gviz/tq?tqx=out:html&sheet=Summary&tq=select * where I > 1";
}

function total() {
    document.getElementById("frame").src = "https://docs.google.com/spreadsheets/d/13FllM0R-sylfZsDyvUDmW-znNi5WtQlMVNUKdoEiI8s/gviz/tq?tqx=out:html&sheet=Summary&tq=select * where A = %22TOTAL%22";
}

function other() {
    document.getElementById("frame").src = "https://docs.google.com/spreadsheets/d/13FllM0R-sylfZsDyvUDmW-znNi5WtQlMVNUKdoEiI8s/gviz/tq?tqx=out:html&sheet=Summary&tq=select * where A = %22Other%22";
}

function rent() {
    document.getElementById("frame").src = "https://docs.google.com/spreadsheets/d/13FllM0R-sylfZsDyvUDmW-znNi5WtQlMVNUKdoEiI8s/gviz/tq?tqx=out:html&sheet=Summary&tq=select * where F > 0";
}

function coolnairy() {
    document.getElementById("frame").src = "https://docs.google.com/spreadsheets/d/13FllM0R-sylfZsDyvUDmW-znNi5WtQlMVNUKdoEiI8s/gviz/tq?tqx=out:html&sheet=Summary&tq=select * where A contains %22cool%22";
}

function todaysActivity() {
    document.getElementById("frame").src = "https://docs.google.com/spreadsheets/d/13FllM0R-sylfZsDyvUDmW-znNi5WtQlMVNUKdoEiI8s/gviz/tq?tqx=out:html";
}

function vendorType(vendorType) {
    document.getElementById("frame").src = "https://docs.google.com/spreadsheets/d/13FllM0R-sylfZsDyvUDmW-znNi5WtQlMVNUKdoEiI8s/gviz/tq?tqx=out:html&sheet=Summary&tq=select * where J = %22"+vendorType+"%22"
}

function vendorMaster() {   
    document.getElementById("frame").src = "https://docs.google.com/spreadsheets/d/13FllM0R-sylfZsDyvUDmW-znNi5WtQlMVNUKdoEiI8s/gviz/tq?tqx=out:html&sheet=Static&tq=select * where order by A"
}