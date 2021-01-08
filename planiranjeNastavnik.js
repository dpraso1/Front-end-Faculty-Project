var npredmeta = document.getElementById("npredmeta");
var vpocetka = document.getElementById("vpocetka");
var vkraja = document.getElementById("vkraja");
var Tip = document.getElementById("Tip");

npredmeta.addEventListener("blur", function() {
    validirajNaziv(npredmeta);
});
vpocetka.addEventListener("blur", function() {
    validirajPocetak(vpocetka)
});
vkraja.addEventListener("blur", function() {
    validirajKraj(vpocetka, vkraja)
});
Tip.addEventListener("blur", function() {
    validirajTip(Tip, vpocetka, vkraja);
});
