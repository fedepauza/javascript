// Las delicias de estrella Mágica, ahora podes realizar tu pedidio online!

function validacioDatos (dato) {
    return !isNaN(dato)
}

function validarNumeros (pregunta) {
    const numero = Number(prompt(pregunta))
    const validado = validacioDatos(numero)

    while(!validado){
        alert('Por favor escribir un numero')

        numero = Number(prompt(pregunta))
        validado = validacioDatos(numero)
    }
}

const pedidos = ['Torta de cumpleaños', 'Torta de casamiento', 'Cookies', 'Alfajores caseros']

console.log(pedidos)

function menuPrincipal () {
    let bandera = true
    
    while (bandera) {
        
        let opciones = validarNumeros ('Las delicias de Estrella Mágica\n\n  1- Relizar un pedido\n  2- Consultar mi pedido\n  3- ¿Cómo realizo mi pedido?\n  4- Sabores a elegir\n\n')
        
        

        switch (opciones) {
                case 0:
                    return
                case 1: 
                    validarNumeros = ('¿Qué vas a pedir?\n\n  1- Torta de cumpleaños\n  2- Torta de casamiento\n  3- Cookies\n  4- Alfajores caseros\n  5- Otros\n\n')
                    while(Number === 1){
                        prompt('¿Qué vas a pedir?\n\n  1- Torta de cumpleaños\n  2- Torta de casamiento\n  3- Cookies\n  4- Alfajores caseros\n  5- Otros\n\n')
                    }
                    break
                case 2:
                    numeroDePedido = Number(prompt('Cual es tu numero de pedido?'))
                    break
                case 3: 
                    alert('Segui los siguientes pasos\n\n 1- En el menu principal elegi la opcion 1\n 2- Elegi el tipo de producto\n 3- Selecciona el tipo de relleno')
                case 4:
                    alert('Podes elegir entre los siguientes sabores:\n\n - Crema bariloche\n - Oreo\n - Crema y frutillas\n - Crema y duraznos\n')
        }
    }
}



menuPrincipal()
