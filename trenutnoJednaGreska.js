function trenutniCas (divRaspored, trenutnoVrijeme) {
    var trenutnoVrijemeDatum = new Date(trenutnoVrijeme);
    var dan = trenutnoVrijemeDatum.getDay();
    var di = (dan + 6) % 7;
    var ulDani = divRaspored.querySelector("ul");
    var iD = -1;
    for (var i = 0; i < ulDani.children.length; i++) {
        if (i == di) {
            iD = di;
        }
    }
    if (iD === -1)
        return;
    var pret = divRaspored.querySelector("#t");
    if (pret) {
        pret.style.backgroundColor = "#c7d5d9";
        pret.id = "";
    }
    var satiTrenutno = trenutnoVrijemeDatum.getHours();
    var minuteTrenutno = trenutnoVrijemeDatum.getMinutes();
    var ukupno = 60*satiTrenutno + minuteTrenutno;
    var red = divRaspored.querySelectorAll("tr").item(2 * iD + 1)
    for (var cel of red.children) {
        if (cel.getAttribute("p")) {
            var p = 60 * cel.getAttribute("p");
            var k = p + 60 * (cel.getAttribute("colspan") / 2);
            if (p < ukupno && ukupno <= k) {
                cel.style.backgroundColor = "#ff8533";
                cel.id = "t";
                break;
            }
        }
    }
}
