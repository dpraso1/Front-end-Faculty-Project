function validirajNaziv (ieNaziv) {
    var naziv = ieNaziv.value;
    var regex1 = new RegExp(/^[A-Z]+$/, "");
    var regex2 = new RegExp(/^[A-Z]+[0-9]{1}$/, "");
    ieNaziv.classList.remove("ok", "notOk");
    if (naziv.length < 2 || naziv.length > 5 || !(regex1.test(naziv) || regex2.test(naziv)))
        ieNaziv.classList.add("notOk");
    else
        ieNaziv.classList.add("ok")
}

function validirajPocetak (iePocetak) {
    var pocetak = iePocetak.value;
    var regex = new RegExp(/^([01]\d):([0-5]\d)$/, "");
    iePocetak.classList.remove("ok", "notOk");
    if (pocetak.length != 5 || !regex.test(pocetak))
        iePocetak.classList.add("notOk");
    else
        iePocetak.classList.add("ok");
}

function validirajKraj (iePocetak, ieKraj) {
    var kraj = ieKraj.value;
    var regex = new RegExp(/^([01]\d|2[0-3]):([0-5]\d)$/, "");

    var hp = parseInt(iePocetak.value.slice(0, 2));
    var mp = parseInt(iePocetak.value.slice(-2));
    var hk = parseInt(kraj.slice(0, 2));
    var mk = parseInt(kraj.slice(-2));

    var krajVeci = hk > hp || (hk === hp && mk > mp)

    ieKraj.classList.remove("ok", "notOk");
    if (kraj.length != 5 || !regex.test(kraj) || !krajVeci)
        ieKraj.classList.add("notOk");
    else
        ieKraj.classList.add("ok");
}

function validirajTip (ieTip, iePocetak, ieKraj) {
    var tip = ieTip.value;
    var regex = new RegExp(/^(Predavanja|Vježbe)$/, "");

    var hp = parseInt(iePocetak.value.slice(0, 2));
    var mp = parseInt(iePocetak.value.slice(-2));
    var hk = parseInt(ieKraj.value.slice(0, 2));
    var mk = parseInt(ieKraj.value.slice(-2));

    var dp = new Date();
    dp.setHours(hp);
    dp.setMinutes(mp);

    var dk = new Date();
    dk.setHours(hk);
    dk.setMinutes(mk);

    var delta = dk.getTime() - dp.getTime();
    var deltaM = delta / (1000 * 60);

    var razlikaOk = false;
    if (tip === "Predavanja")
        razlikaOk = deltaM >= 60 && deltaM <= 180;
    else if (tip === "Vježbe")
        razlikaOk = deltaM >= 45 && deltaM <= 180;

    ieTip.classList.remove("ok", "notOk");
    if (!regex.test(tip) || !razlikaOk)
        ieTip.classList.add("notOk");
    else
        ieTip.classList.add("ok");
}
