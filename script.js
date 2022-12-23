
let nombre = prompt("Ingrese su nombre")

function saludoBienvenida () {
    alert("Bienvenido/a " + nombre)
}


saludoBienvenida();




function mensaje () {
    alert("A continuacion te mostraremos nuestro menu")
}

mensaje();








let menu = prompt("Ingrese: \n1- Para ver productos \n2- Para ver precios \n3- Para ver nuestros medios de contacto")
do {
    
    if (menu == 1) {
        alert("1-Jamon cocido por pieza \n2-Queso Danbo por pieza \n3-Mortadela por pieza \n4-Salame por pieza")
    }
    else if (menu == 2){
        alert("1- $1000 por Kg. \n 2-$1500 por Kg. \n 3-$1400 por Kg. \n4-$1600 por Kg.")
    }
    else if (menu == 3){
        alert("Nuestro telefono de contacto es 1111111111, tambien puedes enviarnos un correo a dist1500@hotmail.com")
    }
    else if (menu > 3) {
        alert("Opcion incorrecta")
    }
    break
} while (menu != 0);