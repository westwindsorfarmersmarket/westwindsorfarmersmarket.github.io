function fullSummary() {
    document.getElementById("frame").src = "https://docs.google.com/spreadsheets/d/13FllM0R-sylfZsDyvUDmW-znNi5WtQlMVNUKdoEiI8s/gviz/tq?tqx=out:html&sheet=Summary";
}

function noResponses() {
    document.getElementById("frame").src = "https://docs.google.com/spreadsheets/d/13FllM0R-sylfZsDyvUDmW-znNi5WtQlMVNUKdoEiI8s/gviz/tq?tqx=out:html&sheet=Summary&tq=select * where I = 0";
}

function moreResponses() {
    document.getElementById("frame").src = "https://docs.google.com/spreadsheets/d/13FllM0R-sylfZsDyvUDmW-znNi5WtQlMVNUKdoEiI8s/gviz/tq?tqx=out:html&sheet=Summary&tq=select * where I > 1";
}

function responses() {
    document.getElementById("frame").src = "https://docs.google.com/spreadsheets/d/13FllM0R-sylfZsDyvUDmW-znNi5WtQlMVNUKdoEiI8s/gviz/tq?tqx=out:html&sheet=Summary&tq=select * where I > 0 order by E desc";
}

function noActivity() {
    document.getElementById("frame").src = "https://docs.google.com/spreadsheets/d/13FllM0R-sylfZsDyvUDmW-znNi5WtQlMVNUKdoEiI8s/gviz/tq?tqx=out:html&sheet=Summary&tq=select * where I > 0 and E = 0 and F = 0";
}

function other() {
    document.getElementById("frame").src = "https://docs.google.com/spreadsheets/d/13FllM0R-sylfZsDyvUDmW-znNi5WtQlMVNUKdoEiI8s/gviz/tq?tqx=out:html&sheet=Summary&tq=select * where A = %22Other%22";
}

function rent() {
    document.getElementById("frame").src = "https://docs.google.com/spreadsheets/d/13FllM0R-sylfZsDyvUDmW-znNi5WtQlMVNUKdoEiI8s/gviz/tq?tqx=out:html&sheet=Summary&tq=select * where F > 0";
}

function todaysActivity() {
    document.getElementById("frame").src = "https://docs.google.com/spreadsheets/d/13FllM0R-sylfZsDyvUDmW-znNi5WtQlMVNUKdoEiI8s/gviz/tq?tqx=out:html";
}

function vendorType(vendorType) {
    document.getElementById("frame").src = "https://docs.google.com/spreadsheets/d/13FllM0R-sylfZsDyvUDmW-znNi5WtQlMVNUKdoEiI8s/gviz/tq?tqx=out:html&sheet=Summary&tq=select * where J = %22"+vendorType+"%22"
}

function vendorsIncorrectlyAcceptedGFB(vendorType) {
    document.getElementById("frame").src = "https://docs.google.com/spreadsheets/d/13FllM0R-sylfZsDyvUDmW-znNi5WtQlMVNUKdoEiI8s/gviz/tq?tqx=out:html&sheet=Summary&tq=select * where K <> 'G' and D > 0"
}

function vendorsIncorrectlyAcceptedSNAP(vendorType) {
    document.getElementById("frame").src = "https://docs.google.com/spreadsheets/d/13FllM0R-sylfZsDyvUDmW-znNi5WtQlMVNUKdoEiI8s/gviz/tq?tqx=out:html&sheet=Summary&tq=select * where K = 'M' and C > 0"
}

function vendorClassification(vendorClassification) {
    document.getElementById("frame").src = "https://docs.google.com/spreadsheets/d/13FllM0R-sylfZsDyvUDmW-znNi5WtQlMVNUKdoEiI8s/gviz/tq?tqx=out:html&sheet=Summary&tq=select * where K = %22"+vendorClassification+"%22"
}

function vendorMaster() {   
    document.getElementById("frame").src = "https://docs.google.com/spreadsheets/d/13FllM0R-sylfZsDyvUDmW-znNi5WtQlMVNUKdoEiI8s/gviz/tq?tqx=out:html&sheet=Static"
}