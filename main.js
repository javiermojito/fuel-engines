var canvas = document.getElementById("game");
var ctx = canvas.getContext('2d');

ctx.fillStyle = "rgb(201,171,36)";

var butFill = document.getElementById("butFill");
butFill.addEventListener('click', moverRectangulo);

var imagenFondo = new Image();
imagenFondo.src = "https://i.imgur.com/VKDLCPv.png";

const LIMITE_CARGA = 60;

var rect = {
    posX: 30,
    posY: 480,
    ancho: 300,
    alto: 10
}

pintarImagenDeFondo();

var interval = null;

function moverRectangulo(){
    
    if(interval === null){
        interval = setInterval(function(){

            if(estaEnElLimite()){
                alert("Tarea completada");
                clearInterval(interval);
                interval = null;
            }

            rect.posY -= 0.5;
            rect.alto += 0.5;
            limpiarTablero();
            pintarRectangulo(rect); 
            pintarImagenDeFondo();
        }, 1)
    }
    else{
        clearInterval(interval);
        interval = null;
    }

}

function estaEnElLimite(){
    return rect.posY <= LIMITE_CARGA;
}

function limpiarTablero(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
}

function pintarRectangulo({ posX, posY, ancho, alto}){
    ctx.fillRect(posX, posY, ancho, alto);
}

function pintarImagenDeFondo(){
    ctx.drawImage(imagenFondo, 0,0, canvas.width, canvas.height);
}

/* ////////
console.log("b")



//
console.log("1")
console.log("2")
setTimeout(function(){
    console.log("3");
}, 0);
console.log("4"); */

//3124
//1234
//1243
