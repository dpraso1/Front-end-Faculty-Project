const nazivPredmeta = document.getElementById("naziv");
const tipAktivnosti = document.getElementById("tipAktivnosti");
const vrijemeTrajanja = document.getElementById("vrijemeTrajanja");
const dan = document.getElementById("dan");
const submitButton = document.getElementById("submit");

nazivPredmeta.addEventListener("change", function() {
    tipAktivnosti.value = '';
    vrijemeTrajanja.value= '';
    dan.value = '';
});

tipAktivnosti.addEventListener("change", function() {
    nazivPredmeta.value = '';
    vrijemeTrajanja.value= '';
    dan.value = '';
});

vrijemeTrajanja.addEventListener("change", function() {
    tipAktivnosti.value = '';
    nazivPredmeta.value= '';
    dan.value = '';
});

dan.addEventListener("change", function() {
    tipAktivnosti.value = '';
    vrijemeTrajanja.value= '';
    nazivPredmeta.value = '';
});

submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    const raspored = Filtriraj();
    raspored.postaviRaspored(document.getElementById("sadrzaj"));
    if(nazivPredmeta.value) {
        raspored.filtrirajPredmet(nazivPredmeta.value);
    } else if (tipAktivnosti.value) {
        raspored.filtrirajTip(tipAktivnosti.value);
    } else if (vrijemeTrajanja.value) {
        raspored.filtrirajTrajanje(vrijemeTrajanja.value);
    } else if (dan.value) {
        dan.value.charAt(0) === '+' ? raspored.filtrirajBuduce(dan.value) : raspored.filtrirajProslo(dan.value);
    }
});
