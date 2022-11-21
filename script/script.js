var myWindow;
opn = document.getElementsByClassName("open")[0]
opn.addEventListener('click', openWin);


function openWin() {
    myWindow = window.open("", "myWindow", "width=200,height=100, top=100,left=500,");
    myWindow.document.write("<p>Dodatne informacije za rezvaraciju celog restorana za Vaše događaje možete dobiti pozivom na broj +381 65870000</p>");
}

// var dt = new Date();
// var vreme = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
// document.getElementById('date-time').innerHTML = vreme;

