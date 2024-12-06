// Las delicias de estrella Mágica, ahora podes realizar tu pedidio online!
let pedido = 'Su pedido es el siguiente\n\n '
let total = 'El total de su compra es:  '
const rellenos = ['Crema bariloche', 'Oreo', 'Crema y frutillas', 'Crema y duraznos']
const productos = ['Torta de cumpleaños', 'Torta de casamiento', 'Cookies', 'Alfajores caseros']

function pedidos (productos, rellenos, precio) {
    productos,
    rellenos,
    precio
    describir = function() {
        return 'Producto: ${producto}\n Relleno: ${relleno}\n Precio: ${precio}'
    }
}


function validacionDatos (dato) {
    return !isNaN(dato)
}

function validarNumeros (pregunta) {
    let numero = Number(prompt(pregunta))
    let validado = validacionDatos(numero)

    while(!validado){
        alert('Por favor escribir un numero')
        numero = Number(prompt(pregunta))
        validado = validacionDatos(numero)
    }
    return numero
}

let numeroDeOrden = Math.floor((Math.random()*300)+100)

function numeroDePedido () {
    prompt('Este es tu numero de orden' + numeroDeOrden)
}


let pasosASeguir = ('Segui los siguientes pasos\n\n 1- En el menu principal elegi la opcion 1\n 2- Elegi el tipo de producto\n 3- Selecciona el tipo de relleno')
const realizarPedido =  Number(prompt('¿Qué vas a pedir?\n\n  1- Torta de cumpleaños\n  2- Torta de casamiento\n  3- Cookies\n  4- Alfajores caseros\n  5- Otros\n\n'))

function core () {
    let bandera = true
    
    while (bandera) {
        
        let opciones = validarNumeros ('Las delicias de Estrella Mágica  ♥\n\n  1- Relizar un pedido\n  2- Consultar mi pedido\n  3- ¿Cómo realizo mi pedido?\n  4- Sabores a elegir\n\n');
        
        switch (opciones) {
            case 0:
                return;
            case 1: 
                realizarPedido 
                productoElegido()
                break;
            case 2:
                numeroDePedido = Number(prompt('Cual es tu numero de pedido?'))
                break;
            case 3: 
                bandera = alert(pasosASeguir)
                break;
            case 4:
                alert('Podes elegir entre los siguientes sabores:\n\n - Crema bariloche\n - Oreo\n - Crema y frutillas\n - Crema y duraznos\n')
                break;
            default:
                alert('No tenemos esa opcion')
                break;
        }
    }
}

function productoElegido () {
    let bandera = true;

    while (bandera) {

        const realizarPedido =  Number(prompt('¿Qué vas a pedir?\n\n  1- Torta de cumpleaños\n  2- Torta de casamiento\n  3- Cookies\n  4- Alfajores caseros\n  5- Otros\n\n'))

        switch (realizarPedido) {
            case 0:
                return;
            case 1:
                validarNumeros ('Que relleno vas a querer?\n\n 1- Crema bariloche\n 2- Oreo\n 3- Crema y frutillas\n 4- Crema y duraznos\n')
                bandera = confirm('Elegiste: '+ productos[0] + 'con relleno de ' + rellenos)
                break
            case 2:
                validarNumeros ('Que relleno vas a querer?\n\n 1- Crema bariloche\n 2- Oreo\n 3- Crema y frutillas\n 4- Crema y duraznos\n')
                bandera = confirm('Elegiste: '+ productos[1] + 'con relleno de ' + rellenos)
                break
            case 3:
                validarNumeros ('Que relleno vas a querer?\n\n 1- Crema bariloche\n 2- Oreo\n 3- Crema y frutillas\n 4- Crema y duraznos\n')
                bandera = confirm('Elegiste: '+ productos[2] + 'con relleno de ' + rellenos)
                break
            case 4:
                let opcionesRelleno = validarNumeros ('Que relleno vas a querer?\n\n 1- Crema bariloche\n 2- Oreo\n 3- Crema y frutillas\n 4- Crema y duraznos\n')
                bandera = confirm('Elegiste: '+ productos[3] +' con relleno de ' + rellenos)
                break
            case 5:
                productos.push = prompt('Que producto te gustaria?')
                validarNumeros ('Que relleno vas a querer?\n\n 1- Crema bariloche\n 2- Oreo\n 3- Crema y frutillas\n 4- Crema y duraznos\n')
                bandera = confirm('Elegiste: '+ productos[indexof()] + 'con relleno de ' + rellenos)
                break
                default:
                alert('Por favor elige un producto')
                break
        }
    }
}

function primeraOpcion () {
    let bandera = true

    while (bandera) {

        let opciones = validarNumeros ('Que relleno vas a querer?\n\n 1- Crema bariloche\n 2- Oreo\n 3- Crema y frutillas\n 4- Crema y duraznos\n')

        switch (opciones) {
            case 0: 
                return;
            case 1:
                confirm('Tu pedido es ' + productos[0])
                break;
            case 2:
                confirm('Tu pedido es ' + productos[1])
                break;
            case 3:
                confirm('Tu pedido es ' + productos[2])
                break;
            case 4:
                confirm('Tu pedido es ' + productos[3])
                break
            default:
                alert('Su relleno no fue definido')
                break;
        }
    }
}

core()
console.log(core)
