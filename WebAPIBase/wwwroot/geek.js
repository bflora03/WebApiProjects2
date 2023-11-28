var viccek;

window.onload = function () {
    fetch('/jokes.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
        );

    function letöltésBefejeződött(d) {
        console.log("Sikeres letöltés")
        console.log(d)
        viccek = d;

        for (var i = 0; i < viccek.length; i++) {

            var ÚjDiv = document.createElement("div");
            ÚjDiv.innerText = viccek[i].question;
            document.getElementById("vicc").appendChild(ÚjDiv);
        }
    }


};