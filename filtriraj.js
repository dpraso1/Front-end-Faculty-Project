const Filtriraj = function () {
    let div;
    const dani = ["ponedjeljak", "utorak", "srijeda", "četvrtak", "petak"];

    function postaviRaspored(sadrzaj) {
        div = sadrzaj;
    }

    function resetujFiltrirano () {
        const filtriraneCelije = div.querySelectorAll(".filtrirano");
        filtriraneCelije.forEach(celija => celija.parentElement.removeChild(celija));
    }

    function filtrirajPredmet (nazivPredmeta) {
        if(!div) {
            console.log("Treba postaviti div");
        } else {
            resetujFiltrirano();

            const sveCelije = div.querySelectorAll("td");
            sveCelije.forEach(celija => {
                if(celija.innerHTML && !celija.innerHTML.toLowerCase().includes(nazivPredmeta.toLowerCase())) {
                    const filriraniDiv = document.createElement("div");
                    filriraniDiv.classList.add("filtrirano")
                    celija.appendChild(filriraniDiv);
                }
            })
        }
    }

    function filtrirajTip (tipAktivnosti) {
        if(!div) {
            console.log("Treba postaviti div");
        } else {
            resetujFiltrirano();

            const sveCelije = div.querySelectorAll("td");
            sveCelije.forEach(celija => {
                if(celija.innerHTML && !celija.innerHTML.toLowerCase().includes(tipAktivnosti.toLowerCase())) {
                    const filriraniDiv = document.createElement("div");
                    filriraniDiv.classList.add("filtrirano")
                    celija.appendChild(filriraniDiv);
                }
            })
        }
    }

    function filtrirajTrajanje (brojMinuta) {
        if(!div) {
            console.log("Treba postaviti div");
        } else {
            resetujFiltrirano();

            const sveCelije = div.querySelectorAll("td");
            sveCelije.forEach(celija => {
                if(brojMinuta == 0 || celija.innerHTML && celija.getAttribute("p") && celija.getAttribute("colspan")*30<=brojMinuta) {
                    const filriraniDiv = document.createElement("div");
                    filriraniDiv.classList.add("filtrirano")
                    celija.appendChild(filriraniDiv);
                }
            });
        }
    }

    function filtrirajProslo (nazivDana) {
        if (!div) {
            console.log("Treba postaviti div");
        } else {
            resetujFiltrirano();

            const redniBrojDana = dani.indexOf(nazivDana.slice(1).toLowerCase());
            if(redniBrojDana === 0 || redniBrojDana === -1) return;

            const redovi = div.getElementsByTagName("tr");
            let prethodneCelije = [];

            for (let i = 0; i < redovi.length; i++) {
                if (i < redniBrojDana * 2 + 1) {
                    prethodneCelije = [...prethodneCelije, ...redovi[i].querySelectorAll("td")];
                } else if (i == redniBrojDana * 2 + 1) {
                    prethodneCelije.forEach(celija => {
                        if (celija.innerHTML && celija.getAttribute("p")) {
                            const filriraniDiv = document.createElement("div");
                            filriraniDiv.classList.add("filtrirano")
                            celija.appendChild(filriraniDiv);
                        }
                    });
                    return;
                }
            }
        }
    }

    function filtrirajBuduce (nazivDana) {
        if (!div) {
            console.log("Treba postaviti div");
        } else {
            resetujFiltrirano();

            const redniBrojDana = dani.indexOf(nazivDana.slice(1).toLowerCase());
            if(redniBrojDana === dani.length - 1 || redniBrojDana === -1) return;

            const redovi = div.getElementsByTagName("tr");
            let prethodneCelije = [];

            for (let i = redovi.length - 1; i >= 0; i--) {
                if (i > redniBrojDana * 2 + 1) {
                    prethodneCelije = [...prethodneCelije, ...redovi[i].querySelectorAll("td")];
                } else if (i == redniBrojDana * 2 + 1) {
                    prethodneCelije.forEach(celija => {
                        if (celija.innerHTML && celija.getAttribute("p")) {
                            const filriraniDiv = document.createElement("div");
                            filriraniDiv.classList.add("filtrirano")
                            celija.appendChild(filriraniDiv);
                        }
                    });
                    return;
                }
            }
        }
    }

    return {
        postaviRaspored: postaviRaspored,
        filtrirajPredmet: filtrirajPredmet,
        filtrirajTip: filtrirajTip,
        filtrirajTrajanje: filtrirajTrajanje,
        filtrirajProslo: filtrirajProslo,
        filtrirajBuduce: filtrirajBuduce
    };
};
