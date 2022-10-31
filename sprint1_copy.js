//Simular el trabajo de un cajero electrónico
// Creo el array de datos (Punto1)
let datos = [
    {
        nombre: "Administrador",
        documento: 12345,
        contraseña: 123,
        tipoDeUsuario: 1,
    }, {
        nombre: "Cliente1",
        documento: 54321,
        contraseña: 456,
        tipoDeUsuario: 2,
    }]

let cajero = [

    { billetes5: "" },
    { billetes10: "" },
    { billetes20: "" },
    { billetes50: "" },
    { billetes100: "" }

]

let totalPorDenominacion = []

//Función run para iniciar el programa
function run() {

    // Programa que solicita datos (Punto 2)

    function solicitarDatos() {
        documento = parseInt(prompt("Ingresa tu numero de documento: "))
        contraseña = parseInt(prompt("Ingresa tu contraseña: "))
    }

    // Solicitar la cantidad de billetes y Almacenar esta información en un array de objetos (Punto 3 y 4)
    let valorIngresado = 0

    function ingresarCantidad(nMil) {
        valorIngresado = parseInt(prompt(`¿Cuántos billetes de ${nMil} deseas ingresar?:`))
        return valorIngresado
    }

    function llenarCajero() {
        cajero[0].billetes5 = ingresarCantidad("5mil")
        cajero[1].billetes10 = ingresarCantidad("10mil")
        cajero[2].billetes20 = ingresarCantidad("20mil")
        cajero[3].billetes50 = ingresarCantidad("50mil")
        cajero[4].billetes100 = ingresarCantidad("100mil")
    }

    function ejecutarCliente() {
        if (totalGeneral == 0 ) {
            console.log("Cajero en mantenimiento, vuelva pronto.")
            
        } else {
            let dineroARetirar = parseInt(prompt("¿Cuánto dinero deseas retirar?: "))
            
            console.log(`El dinero disponible para retirar es ${totalGeneral} pesos`)
            console.table(cajero)

            //Punto 8   .|.
 AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        }
    }
  


    let totalGeneral = 0;


    // Ciclo que pregunta de nuevo si el usuario no existe (Punto 2)

    solicitarDatos()
    if (documento == 12345 && contraseña == 123) {
        alert("Estás registrado, Bienvenido Administrador")
        llenarCajero()

        /*  mostrar en consola la suma por cada denominación
         y el total general(Punto5) */

        function totalBilletes(_elemento, _nmil) {
            let _totalBilletes = _elemento * _nmil
            console.log(`Hay ${_totalBilletes} pesos en billetes de ${_nmil}`)
            return totalPorDenominacion.push(_totalBilletes)
        }

        totalBilletes(cajero[0].billetes5, 5000)
        totalBilletes(cajero[1].billetes10, 10000)
        totalBilletes(cajero[2].billetes20, 20000)
        totalBilletes(cajero[3].billetes50, 50000)
        totalBilletes(cajero[4].billetes100, 100000)

        totalGeneral = 0;
        totalPorDenominacion.forEach((element) => {
            totalGeneral += element
        });

        console.log(`El dinero disponible es ${totalGeneral} pesos`)
        console.log("El cajero está cargado")

        /*  Punto 6 volver a solicitar usuario y contraseña, si es administrador, 
        se repite el mismo proceso, sumar a la cantidad actual */

        function llenarCajero2() {
            cajero[0].billetes5 += ingresarCantidad("5mil")
            cajero[1].billetes10 += ingresarCantidad("10mil")
            cajero[2].billetes20 += ingresarCantidad("20mil")
            cajero[3].billetes50 += ingresarCantidad("50mil")
            cajero[4].billetes100 += ingresarCantidad("100mil")
        }

        solicitarDatos()
        if (documento == 12345 && contraseña == 123) {
            alert("Estás registrado, Bienvenido Administrador")
            llenarCajero2()

            /*   mostrar en consola la suma por cada denominación y el total general */

            totalPorDenominacion.splice(0, 5)

            totalBilletes(cajero[0].billetes5, 5000)
            totalBilletes(cajero[1].billetes10, 10000)
            totalBilletes(cajero[2].billetes20, 20000)
            totalBilletes(cajero[3].billetes50, 50000)
            totalBilletes(cajero[4].billetes100, 100000)

            totalGeneral = 0

            totalPorDenominacion.forEach((element) => {
                totalGeneral += element
            });
            console.log(`El dinero disponible es ${totalGeneral} pesos`)
            console.log("El cajero está cargado")

        } else if (documento == 54321 && contraseña == 456) {
            alert("Estás registrado, Bienvenido Cliente1")
            ejecutarCliente()
        } else {
            alert("Usuario o Contraseña inválidos: ");
            run()
        }


        /*    si es cliente debe proseguir de la siguiente manera:
        Si el cajero no tiene dinero cargado, debe aparecer un mensaje en 
        consola: “Cajero en mantenimiento, vuelva pronto.” Y reiniciar desde el 
        inicio. */


    } else if (documento == 54321 && contraseña == 456) {
        alert("Estás registrado, Bienvenido Cliente1")
        ejecutarCliente()




    } else {
        alert("Usuario o Contraseña inválidos: ");
        run()
    }




}


/*  datos.forEach(encontrar)
 
 function encontrar(elemento) {
     let documentoEncontrado = elemento.documento == "123456789"
 
     if (documentoEncontrado) {
         console.log("Estás Registrado, Bienvenido Administrador")
     } else {
         console.log("No estás registrado en la base de datos")
         function run(){}
     }
       
     
 } */

