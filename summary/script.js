function fullSummary() {
    document.getElementById("frame").src = "https://docs.google.com/spreadsheets/d/13FllM0R-sylfZsDyvUDmW-znNi5WtQlMVNUKdoEiI8s/gviz/tq?tqx=out:html&sheet=Summary";
}

function noResponses() {
    document.getElementById("frame").src = "https://docs.google.com/spreadsheets/d/13FllM0R-sylfZsDyvUDmW-znNi5WtQlMVNUKdoEiI8s/gviz/tq?tqx=out:html&sheet=Summary&tq=select * where G = 0";
}

function moreResponses() {
    document.getElementById("frame").src = "https://docs.google.com/spreadsheets/d/13FllM0R-sylfZsDyvUDmW-znNi5WtQlMVNUKdoEiI8s/gviz/tq?tqx=out:html&sheet=Summary&tq=select * where G > 1";
}