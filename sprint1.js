//Simular el trabajo de un cajero electrónico

// Creo el array de datos (Punto1)
let datos = [
    {
        nombre: "Administrador",
        documento: 123456789,
        contraseña: 123,
        tipoDeUsuario: "admin",
    }, {
        nombre: "Cliente1",
        documento: 987654321,
        contraseña: 456,
        tipoDeUsuario: "cliente",
    }]

//Función run para iniciar el programa
function run() {


    // Programa que solicita datos (Punto 2)
    let documento = parseInt(prompt("Ingresa tu numero de documento: "))
    let contraseña = parseInt(prompt("Ingresa tu contraseña: "))

    if (documento == 123456789 && contraseña == 123) {
        alert("Estás registrado, Bienvenido Administrador")
    }else if (documento == 987654321 && contraseña == 456) {
        alert("Estás registrado, Bienvenido Cliente1")

    } else {
        alert("Usuario o Contraseña inválidos; ");
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
}
