//Simular el trabajo de un cajero electrónico

// USAR LA FUNCION "RUN()" CUANTAS VECES SE DESEE PARA VOLVER A EJECUTAR //

console.log("Bienvenido al Cajero JS")
alert(`Ejecute la función "run()" en la consola para iniciar`)

let datos = [
    {
        nombre: "Administrador",
        documento: 12345,
        contraseña: 123,
        tipoDeUsuario: 1,
    }, {
        nombre: "Cliente",
        documento: 54321,
        contraseña: 456,
        tipoDeUsuario: 2,
    }]

let cajero = [

    { billetes5: 0 },
    { billetes10: 0 },
    { billetes20: 0 },
    { billetes50: 0 },
    { billetes100: 0 }
]

let totalPorDenominacion = []                       // Array de valores de los billetes

let billetesExtraidos = [0, 0, 0, 0, 0]             // Array de billetes que estoy sacando

let totalGeneral = 0

//Función run para iniciar el programa
function run() {



    function solicitarDatos() {
        documento = parseInt(prompt("Ingresa tu numero de documento: "))
        contraseña = parseInt(prompt("Ingresa tu contraseña: "))
    }


    function ingresarCantidad(nMil) {
        let valorIngresado = parseInt(prompt(`¿Cuántos billetes de ${nMil} deseas ingresar?:`))
        return valorIngresado
    }

    function llenarCajero() {
        cajero[0].billetes5 += ingresarCantidad("5mil")
        cajero[1].billetes10 += ingresarCantidad("10mil")
        cajero[2].billetes20 += ingresarCantidad("20mil")
        cajero[3].billetes50 += ingresarCantidad("50mil")
        cajero[4].billetes100 += ingresarCantidad("100mil")
    }


    function totalBilletes(elemento, nMil) {
        let totalBilletes = elemento * nMil
        console.log(`Hay ${totalBilletes} pesos en billetes de ${nMil}`)
        return totalPorDenominacion.push(totalBilletes)
    }

    function mostrarTotalGeneral() {
        totalGeneral = 0
        totalPorDenominacion.forEach((element) => {
            totalGeneral += element
        });

        console.log(`El dinero disponible es ${totalGeneral} pesos`)
        console.log("El cajero está cargado")
    }

    //          AQUÍ LOS PERMISOS PARA CADA USUARIO DEL CAJERO             //

    function adminLog() {
        llenarCajero()
        totalBilletes(cajero[0].billetes5, 5000)
        totalBilletes(cajero[1].billetes10, 10000)
        totalBilletes(cajero[2].billetes20, 20000)
        totalBilletes(cajero[3].billetes50, 50000)
        totalBilletes(cajero[4].billetes100, 100000)
        mostrarTotalGeneral()

    }

    function clienteLog() {
        if (totalGeneral === 0) {
            alert("Cajero en mantenimiento, vuelva pronto.")
        } else {
            let dineroARetirar = parseInt(prompt("¿Cuánto dinero deseas retirar?: "))

            console.log(`Hay ${totalPorDenominacion[0]} en ${cajero[0].billetes5} billetes de 5mil`)
            console.log(`Hay ${totalPorDenominacion[1]} en ${cajero[1].billetes10} billetes de 10mil`)
            console.log(`Hay ${totalPorDenominacion[2]} en ${cajero[2].billetes20} billetes de 20mil`)
            console.log(`Hay ${totalPorDenominacion[3]} en ${cajero[3].billetes50} billetes de 50mil`)
            console.log(`Hay ${totalPorDenominacion[4]} en ${cajero[4].billetes100} billetes de 100mil`)
            console.log(`El dinero disponible para retirar es ${totalGeneral} pesos`)

            dineroARetirar = parseInt(dineroARetirar / 5000) * 5000 // Esta fórmula redondea el valor ingresado

            console.log(`El valor a retirar es de ${dineroARetirar}`)
            alert(`El valor a retirar es de ${dineroARetirar}`)

            console.log("Retirando...")

            if (dineroARetirar > totalGeneral) {
                console.log(`El monto solicitado excede la cantidad disponible, ejecute "run()" en la consola de nuevo`)
                alert(`El monto solicitado excede la cantidad disponible, ejecute "run()" en la consola de nuevo`)
            } else {

                totalGeneral = totalGeneral - dineroARetirar
                let dineroExtraido = false
                while (dineroExtraido === false) {                    // De cuales y cuantos billetes entrega el dinero

                    if (dineroARetirar >= 100000 && cajero[4].billetes100 > 0) {  // que haya suficiente dinero && que haya suficientes billetes de esa denominación
                        dineroARetirar = dineroARetirar - 100000
                        totalPorDenominacion[4] = totalPorDenominacion[4] - 100000   // resto el valor de cada billete
                        cajero[4].billetes100 = cajero[4].billetes100 - 1
                        billetesExtraidos[4] = billetesExtraidos[4] + 1        // Sumo cada billete que sale en un Array
                    }
                    else if (dineroARetirar >= 50000 && cajero[3].billetes50 > 0) {
                        dineroARetirar = dineroARetirar - 50000
                        totalPorDenominacion[3] = totalPorDenominacion[3] - 50000
                        cajero[3].billetes50 = cajero[3].billetes50 - 1
                        billetesExtraidos[3] = billetesExtraidos[3] + 1
                    }
                    else if (dineroARetirar >= 20000 && cajero[2].billetes20 > 0) {
                        dineroARetirar = dineroARetirar - 20000
                        totalPorDenominacion[2] = totalPorDenominacion[2] - 20000
                        cajero[2].billetes20 = cajero[2].billetes20 - 1
                        billetesExtraidos[2] = billetesExtraidos[2] + 1
                    }
                    else if (dineroARetirar >= 10000 && cajero[1].billetes10 > 0) {
                        dineroARetirar = dineroARetirar - 10000
                        totalPorDenominacion[1] = totalPorDenominacion[1] - 10000
                        cajero[1].billetes10 = cajero[1].billetes10 - 1
                        billetesExtraidos[1] = billetesExtraidos[1] + 1
                    }
                    else if (dineroARetirar >= 5000 && cajero[0].billetes5 > 0) {
                        dineroARetirar = dineroARetirar - 5000
                        totalPorDenominacion[0] = totalPorDenominacion[0] - 5000
                        cajero[0].billetes5 = cajero[0].billetes5 - 1
                        billetesExtraidos[0] = billetesExtraidos[0] + 1
                    }
                    if (dineroARetirar == 0) {
                        dineroExtraido = true
                    }

                }

                console.log(`Quedan ${totalPorDenominacion[0]} en ${cajero[0].billetes5} billetes de 5mil`)
                console.log(`Quedan ${totalPorDenominacion[1]} en ${cajero[1].billetes10} billetes de 10mil`)
                console.log(`Quedan ${totalPorDenominacion[2]} en ${cajero[2].billetes20} billetes de 20mil`)
                console.log(`Quedan ${totalPorDenominacion[3]} en ${cajero[3].billetes50} billetes de 50mil`)
                console.log(`Quedan ${totalPorDenominacion[4]} en ${cajero[4].billetes100} billetes de 100mil`)
                console.log(`¡Actualización!: ahora el cajero tiene ${totalGeneral} pesos`)


                console.log(`Fueron entregados ${billetesExtraidos[0]} en billetes de 5mil`)
                console.log(`Fueron entregados ${billetesExtraidos[1]} en billetes de 10mil`)
                console.log(`Fueron entregados ${billetesExtraidos[2]} en billetes de 20mil`)
                console.log(`Fueron entregados ${billetesExtraidos[3]} en billetes de 50mil`)
                console.log(`Fueron entregados ${billetesExtraidos[4]} en billetes de 100mil`)

                alert("Gracias por usar nuestros servicios. Para más retiros ejecute 'run()'")

            }
        }

    }

    //Sección Principal donde todo Ocurre//
    let usuarioExiste = true

    do {
        solicitarDatos()
        if (documento == 12345 && contraseña == 123) {
            totalPorDenominacion.splice(0, 5)
            alert("Estás registrado, Bienvenido Administrador")
            usuarioExiste = true
            adminLog()

        } else if (documento == 54321 && contraseña == 456) {
            alert("Estás registrado, Bienvenido Cliente")
            usuarioExiste = true
            clienteLog()

        } else {
            alert("Usuario o Contraseña inválidos: ");
            usuarioExiste = false
        }
    } while (usuarioExiste === false);

}

