/* Instrucciones:
Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario un número por prompt o por input y guardarlo.
Debe calcular el factorial del número recibido.
Debe imprimir el resultado por consola o por el DOM.
Debe ser capaz de identificar si el dato de entrada es de tipo number, 
en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.*/

function ingresaNumero(){
    let num;
    while(true){
        let input = prompt ("Ingresa un número entero: ");
        num = parseInt(input);
        if(!isNaN(num) && num >= 0){
            return num;
        }else {
            Swal.fire({
                icon: "error",
                title: "Número invalido",
                text: "Por favor ingresa un número entero positivo.",
                confirmButtonColor: "#10403B"
            });
            return null;
        }

    }
}
    function calculoFactorial(num){
        let result = 1;
        for(let i =1; i <= num; i++){
            result*= i;
        }
        return result;
    }

    function calculo(){
        let num = ingresaNumero();
        if(num !== null){
            let factorial = calculoFactorial(num);
            document.getElementById("resultado").innerText = `El factorial de ${num} es: ${factorial}`;
        }
    }


