//1 

function modifyParagraph() {
  const element = document.getElementById("parrafo");
  element.style.fontSize = "20px";
  element.style.color = "red";
  element.style.fontFamily = "system-ui";
}

const changeStyleButton = document.getElementById("botonEstilo");
changeStyleButton.addEventListener("click", modifyParagraph);

//2

function Imprimirvalores(event) {
    event.preventDefault();
    const form1 = document.getElementById("form1").elements;
    console.log("fname:", form1["fname"].value);
    console.log("lname:", form1["lname"].value);
}

const form1 = document.getElementById("form1");
form1.addEventListener("submit", Imprimirvalores);

//3


const botonesenlace = document.getElementById("botonEnlaces");
botonesenlace.addEventListener("click", alerta) 

function alerta() {

    const enlacespag = document.querySelectorAll('a')
    const enlacestotal = enlacespag.length
    const primerenlace = enlacespag[0]
    const ultimonlace = enlacespag[enlacestotal - 1]
    alert("enlacestotal: " + enlacestotal + '\n' +
            "primerenlace: " + primerenlace + '\n' +
            "ultimonlace: " + ultimonlace)
}
