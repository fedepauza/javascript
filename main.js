const rellenos = ['Crema bariloche', 'Oreo', 'Crema y frutillas', 'Crema y duraznos']
const productos = ['Torta de cumpleaños', 'Torta de casamiento', 'Cookies', 'Alfajores caseros']
const pasosASeguir = ('Segui los siguientes pasos\n\n 1- En el menu principal elegi la opcion 1\n 2- Elegi el tipo de producto\n 3- Selecciona el tipo de relleno')

/**
 * Valida si el dato ingresado es un número.
 * 
 * @param {any} dato - El dato a validar.
 * @returns {boolean} - Devuelve `true` si el dato es un número, de lo contrario `false`.
 */
function validacionDatos(dato) {
    return !isNaN(dato);
}

/**
 * Solicita al usuario un número mediante un `prompt`, lo valida, y lo ajusta al índice de un array.
 * 
 * @param {string} pregunta - La pregunta que se mostrará al usuario.
 * @returns {number} - Devuelve el índice seleccionado por el usuario (ajustado en base 0).
 */
function validarNumeros(pregunta) {
    
    let numero = Number(prompt(pregunta));

    while (isNaN(numero) || numero < 1 || numero > rellenos.length) {
        alert('Por favor escribir un número válido');
        numero = Number(prompt(pregunta));
    }
    return numero - 1;
}

/**
 * Permite al usuario elegir un producto y un relleno, mostrando confirmaciones al final.
 * También permite agregar un producto personalizado a la lista.
 * 
 * Flujo de la función:
 * - Muestra un menú de productos.
 * - El usuario selecciona un producto.
 * - Si elige "Otros", puede agregar un nuevo producto.
 * - Luego elige un relleno para el producto seleccionado.
 */
function productoElegido() {

    let bandera = true;

    while (bandera) {
        const realizarPedido = Number(prompt('¿Qué vas a pedir?\n\n  1- Torta de cumpleaños\n  2- Torta de casamiento\n  3- Cookies\n  4- Alfajores caseros\n  5- Otros\n\n'));

        switch (realizarPedido) {
            case 0:
                bandera = false;
                return;
            case 1:
            case 2:
            case 3:
            case 4:
                const rellenoElegido = validarNumeros(
                    '¿Qué relleno vas a querer?\n\n 1- Crema bariloche\n 2- Oreo\n 3- Crema y frutillas\n 4- Crema y duraznos\n'
                );
                bandera = confirm(`Elegiste ${productos[realizarPedido - 1]} con relleno de ${rellenos[rellenoElegido]}`);
                break;
            case 5:
                const productoNuevo = prompt('¿Qué producto te gustaría agregar?');
                if (productoNuevo) {
                    productos.push(productoNuevo);
                    const rellenoNuevo = validarNumeros(
                        '¿Qué relleno vas a querer?\n\n 1- Crema bariloche\n 2- Oreo\n 3- Crema y frutillas\n 4- Crema y duraznos\n'
                    );
                    bandera = confirm(`Elegiste ${productoNuevo} con relleno de ${rellenos[rellenoNuevo]}`);
                }
                break;
            default:
                alert('Por favor elige un producto válido');
                break;
        }
    }
}

/**
 * Muestra el menú principal y permite al usuario interactuar con las opciones disponibles.
 * 
 * Opciones del menú:
 * - `1`: Realizar un pedido (llama a la función `productoElegido`).
 * - `2`: Consultar un pedido (pide al usuario un número de pedido y lo muestra).
 * - `3`: Mostrar las instrucciones para realizar un pedido.
 * - `4`: Mostrar los sabores disponibles.
 * - `0`: Salir de la aplicación.
 */
function core() {

    let bandera = true;

    while (bandera) {
        const opciones = Number(prompt('Las delicias de Estrella Mágica  ♥\n\n  1- Realizar un pedido\n  2- Consultar mi pedido\n  3- ¿Cómo realizo mi pedido?\n  4- Sabores a elegir\n\n'));

        switch (opciones) {
            case 0:
                bandera = false;
                return;
            case 1:
                productoElegido();
                break;
            case 2:
                const numeroPedido = prompt('¿Cuál es tu número de pedido?');
                alert('Proximamente...');
                break;
            case 3:
                alert(pasosASeguir);
                break;
            case 4:
                alert(`Podés elegir entre los siguientes sabores:\n\n - ${rellenos.join('\n - ')}`);
                break;
            default:
                alert('No tenemos esa opción.');
                break;
        }
    }
}

core()