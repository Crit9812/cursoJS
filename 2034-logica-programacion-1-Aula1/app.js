let numeroMax = 100;
let numSecret = Math.floor(Math.random()*numeroMax)+1;
let contador = 1;
let numUsuario;
//let palabraVez = "vez"
let maxIntentos = 6;
while(numUsuario != numSecret){
    numUsuario = parseInt(prompt(`Ingresa un numero entre 1 y ${numeroMax}`));
    if(numUsuario == numSecret){
        alert(`acertaste, el numero es: ${numSecret}, lo hiciste en: ${contador} ${contador == 1 ?  "vez" : "veces"}`);
    }else{
        if(numUsuario < numSecret){
            alert("el numero secreto es mayor")
        }else{
            alert("el numero secreto es menor")
        }
        contador ++;
        //palabraVez = "veces";

        if(contador > maxIntentos){
            alert(`Ya excedite el numero de intentos: ${maxIntentos}`);
            break;
        }
    }
    
}
