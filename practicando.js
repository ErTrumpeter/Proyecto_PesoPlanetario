//a probar express🤝
// let express = require("express")
// let app = express()

// app.get("/", inicio);    //me ayuda a crear url
// app.get("/cursos", cursos);


// function inicio(peticion, resultado) {
//     resultado.send("practicando.html");  //home
// }


// function cursos(peticion, resultado)
// {
//     resultado.send("Estos son los <strong>cursos</strong>");
// }


// aplicacion.listen(8989);


//programa
let gravedad
let planeta
var g_tierra = 9.8;

var peso_final

var marte = document.getElementById("Marte");
marte.addEventListener("click", marteSelect);

var jupiter = document.getElementById("Jupiter");
jupiter.addEventListener("click", jupiterSelect);

var venus = document.getElementById("Venus");
venus.addEventListener("click", venusSelect);

//ocultar el btn de reinicio
let ocultarBtnRestart = document.getElementById("reinicio")
ocultarBtnRestart.style.display = "none"

let restart = document.getElementById("btn_reiniciar")
restart.addEventListener("click", reloadProgram)


function marteSelect() {
    planeta = "Marte"
    planetChoice()
    marte.disabled = true
}
function jupiterSelect() {
    planeta = "Jupiter"
    planetChoice()
    jupiter.disabled = true
}
function venusSelect() {
    planeta = "Venus"
    planetChoice()
    venus.disabled = true
}



function planetChoice() {    
    let usuario = document.getElementById("dato_usuario");
    peso_usuario = parseInt(usuario.value); 

    if(planeta == "Marte") {        
        gravedad = 3.7
    }
    else if(planeta == "Jupiter") {
        gravedad = 24.8
    }
    else if(planeta == "Venus") {
        gravedad = 8.87
    }

    peso_final = peso_usuario * gravedad / g_tierra;
    peso_final = parseInt(peso_final);

    crearMensaje()
}


function crearMensaje() {
    let usuario = document.getElementById("dato_usuario");
    peso_usuario = parseInt(usuario.value);

    let resultado = document.getElementById("resultado");   //esto es para tomar el id de la etiqueta p donde va a ir la respuesta

    let crearParrafo = document.createElement("p")
    crearParrafo.innerHTML = "👽 Tu peso en " + planeta + " es de " + peso_final + " kilos"


    if(peso_usuario <= 0) {
        crearParrafo.innerHTML = "Escribe tu peso normal por favor, no uses el signo de resta 😉"
    }
    else if(peso_usuario <= 10) {
        crearParrafo.innerHTML = "🙃 Acaso te crees que eres un bebe?"
    }
    else if(marte.disabled && jupiter.disabled && venus.disabled == true) {
        crearParrafo.innerHTML = "JAJAJA"
    }

    resultado.appendChild(crearParrafo)
        
    let ocultarBtnRestart = document.getElementById("reinicio")
    ocultarBtnRestart.style.display = "block"
}


function reloadProgram() {
    location.reload()
}




// ipconfig    es el codigo a usar en cmd para averiguar el ip del wifi. Es donde dice Direccion IPv4


//Esto es para convertir la imagen en una etiqueta usando appendChild

//var mundoFoto = {
//    url: "mundo.png"
//}

//mundoFoto.imagen = new Image();
//mundoFoto.imagen.src = mundoFoto.url;

//document.body.appendChild(mundoFoto.imagen);

/*

function peso_en_Marte()
{
    var usuario = document.getElementById("dato_usuario");
    peso_usuario = parseInt(usuario.value); 

    if(marte)
    {          
        peso_final = peso_usuario * g_marte / g_tierra;
        peso_final = parseInt(peso_final);   
    o    res.innerHTML = "👽 Tu peso en Marte es de " + peso_final + " kilos.";

        if(peso_usuario <= 0)
        {
            res.innerHTML = "Escribe tu peso normal por favor, no uses el signo de resta. ;)";
        }
        else if(peso_usuario <= 10)
        {
            res.innerHTML = "🙃 Acaso te crees que eres un bebe? :)";
        }
        else if(peso_usuario == "")
        {
            res.innerHTML = "🤨 Por favor, escribe tu peso. ;)";
        }
    }
    
}


function peso_en_Jupiter()
{
    var usuario = document.getElementById("dato_usuario");
    peso_usuario = parseInt(usuario.value); 

    if(jupiter)
    {
        peso_final = peso_usuario * g_jupiter / g_tierra;
        peso_final = parseInt(peso_final);
        res.innerHTML = "👽 Tu peso en Jupiter es de " + peso_final + " kilos.";

        if(peso_usuario <= 0)
        {
            res.innerHTML = "Escribe tu peso normal por favor. ;)"
        }
        else if(peso_usuario <= 10)
        {
            res.innerHTML = "🤨 Acaso te crees que eres un bebe? :)";
        }
    }    
}


function peso_en_Venus()
{
    var usuario = document.getElementById("dato_usuario");
    peso_usuario = parseInt(usuario.value); 

    if(venus)
    {
        peso_final = peso_usuario * g_venus / g_tierra;
        peso_final = parseInt(peso_final);
        res.innerHTML = "👽 Tu peso en Venus es de " + peso_final + " kilos.";

        if(peso_usuario <= 0)
        {
            res.innerHTML = "Escribe tu peso normal por favor. ;)"
        }
        else if(peso_usuario <= 10)
        {
            res.innerHTML = "Acaso te crees que eres un bebe? :)";
        }
    }
}  
*/