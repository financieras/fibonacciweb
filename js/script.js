// Función para calcular la sucesión de Fibonacci
function calcularFibonacci(n) {
    var fibonacci = [0, 1]; // Inicializar la sucesión de Fibonacci con los primeros dos números
    for (var i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; // Calcular el siguiente número de Fibonacci
    }
    return fibonacci;
}

// Función para actualizar la página con los valores de la sucesión de Fibonacci
function mostrarFibonacci() {
    var inputNumero = document.getElementById("number-input");
    var n = parseInt(inputNumero.value); // Obtener el valor de n del formulario
    var fibonacci = calcularFibonacci(n); // Calcular la sucesión de Fibonacci

    // Crear una lista con los valores de la sucesión de Fibonacci
    var listaFibonacci = "<ol>";
    for (var i = 0; i < n; i++) {
        listaFibonacci += "<li>" + fibonacci[i] + "</li>"; // Agregar cada valor de Fibonacci a la lista
    }
    listaFibonacci += "</ol>";

    // Actualizar el contenido del elemento con id "fibonacci-sequence" con la lista de Fibonacci
    document.getElementById("fibonacci-sequence").innerHTML = listaFibonacci;
}

// Obtener referencia al botón y agregar un evento click que llame a la función mostrarFibonacci
document.getElementById("calcular-button").addEventListener("click", mostrarFibonacci);
