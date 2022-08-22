function contador(respuesta1, correcta1, respuesta2, correcta2, respuesta3, correcta3) {
    puntos=0
    if (respuesta1==correcta1) {
        puntos = + 20;
    }
    if (respuesta2==correcta2) {
        puntos = puntos + 10;
    }
    if (respuesta3==correcta3) {
        puntos= puntos + 40;
    }
}

let puntos=0
const participante1 = {
    nombre:" ",
    edad:" ",
    puntos:0
}
const participante2 = {
    nombre:" ",
    edad:" ",
    puntos:0
}
const participante3 = {
    nombre:" ",
    edad:" ",
    puntos:0
}

alert("Bienvenidos, para este juego hacen falta 3 participantes\nAclaraciones previas:\n1-solo se pueden responder con minusculas o numneros (cuando sea el caso)\n2-Las preguntas multiple choice se responden con a,b,c o d")

participante1.nombre= prompt("Primer participánte, ingrese su nombre:");
participante1.edad= prompt("Ingrese su edad:");

contador(
    prompt("¿Cuantas veces el hombre ha estado en la luna?:"), 6 ,
    prompt("¿En cual de los siguientes paises nacio Van Gogh?\nA.Paises bajos B.Francia C.Suiza D.Belgica"), "a" ,
    prompt("¿En que pais se encuentra el desierto de atacama?:"), "chile"
);

    participante1.puntos = puntos;

    participante2.nombre= prompt("Segundo participante, ingrese su nombre:");
    participante2.edad= prompt("Ingrese su edad:");

contador(
    prompt("¿cuantas notas musicales existen?:"),12,
    prompt("¿cual es el animal mas grande de la tierra?\nA.Ballena Azul B.Gusano cordón de bota C.Medusa melena de león ártica D.Cachalote"),"b",
    prompt("¿cual es el metal mas caro del mundo?:"),"rodio"
    );

    participante2.puntos = puntos;

    participante3.nombre= prompt("Ultimo participante,ingrese su nombre:");
    participante3.edad= prompt("Ingrese su edad:");

contador(
    prompt("¿Cuanto duro la guerra de los 100 años?:"),116,
    prompt("¿cual es el deporte mas practicado del mundo?\nA.Running B.Voleibol C.Futbol D.Natacion"),"d",
    prompt("¿Cual es el hueso mas pequeño del cuerpo humano?").toLowerCase,"estribo"
    );

    participante3.puntos = puntos;


if (participante1.puntos==participante2.puntos) {
    if (participante1.puntos==participante3.puntos) {
        alert("Empataron los tres participantes con " + participante1.puntos +" puntos, gracias por jugar")
    } else {
        if (participante1.puntos>participante3.puntos) {
            alert( participante1.nombre + " y " + participante2.nombre + " ganaron con " + participante1.puntos + " puntos, gracias por jugar")
        } else {
            alert("¡¡Felicidades " + participante3.nombre +" ganaste, tu puntuacion es " + participante3.puntos +"!!")
        }
    }
} else {
    if (participante1.puntos==participante3.puntos) {
        if (participante1.puntos>participante2.puntos) {
            alert( participante1.nombre + " y " + participante3.nombre + " ganaron con " + participante1.puntos + " puntos, gracias por jugar")
        } else {
            alert("¡¡Felicidades " + participante2.nombre +" ganaste, tu puntuacion es " + participante2.puntos +"!!" )
        }
    } else {
        if (participante2.puntos==participante3.puntos) {
            alert( participante3.nombre + " y " + participante2.nombre + " ganaron con " + participante3.puntos + " puntos, gracias por jugar")
        } else {
            if (participante1.puntos>participante2.puntos) {
                if (participante1.puntos>participante3.puntos) {
                    alert("¡¡Felicidades " + participante1.nombre + " ganaste, tu puntuacion es " + participante1.puntos + " puntos!!" )
                } else {
                    alert("¡¡Felicidades " + participante3.nombre + " ganaste, tu puntuacion es " + participante3.puntos + " puntos!!")
                }
            } else {
                if (participante2.puntos>participante3.puntos) {
                    alert("¡¡Felicidades " + participante2.nombre +" ganaste, tu puntuacion es " + participante2.puntos +" puntos!!" )
                } else {
                    alert("¡¡Felicidades " + participante3.nombre +" ganaste, tu puntuacion es " + participante3.puntos +" puntos!!")
                }
            }
        }
    }
}
