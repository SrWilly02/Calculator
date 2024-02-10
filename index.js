const display = document.getElementById("display");

function appendToDisplay(input){ //Mostrar los números
    display.value += input;
}

function clearDisplay(){ //Limpiar la calculadora
    display.value = "";
}

function calculate(){ //Realizar los cálculos
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
    
}