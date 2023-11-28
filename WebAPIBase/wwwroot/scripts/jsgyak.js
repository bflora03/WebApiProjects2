window.onload = () => {
    console.log("betöltődött")
    for (var sor = 0; sor < 10; sor++) { //sorok létrehozása
        var újDiv = document.createElement("div");
        //új div létrehozása az új sornak
        újDiv.classList.add('sor')
        //új div osztálylistájához add hozzá a "sor"-t
        document.getElementById("pascal").appendChild(újDiv);
        //új div-et add hozzá a "pascal" gyermekeihez

        for (var oszlop = 0; oszlop <= sor; oszlop++) { //oszlopok létrehozása
            var újElemDiv = document.createElement("div");
            //új div létrehozása az új elemnek
            újElemDiv.classList.add('elem');
            //új elem div osztálylistájához add hozzá az "elem"-et
            újElemDiv.innerText = faktoriális(sor) / (faktoriális(oszlop) * faktoriális(sor - oszlop))


           // (újElemDiv.innerText = sor + ';' + oszlop;)
            //teszteléshez .innerHTML = `${sor}:${oszlop}`
           // legyen az innerHTML a megfelelő szám
            újDiv.appendChild(újElemDiv);
        //új elem div-et vedd fel a sor elemei közé
        }
    }
}
var faktoriális = function (n) {
    let er = 1;
    for (let i = 2; i <= n; i++) {
        er = er * i;
    }
    return er;
}

