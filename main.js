const contador = document.getElementById("cont");
console.log(contador);
const sumar = document.getElementById("inc");
const restar = document.getElementById("dec");
const reiniciar = document.getElementById("rest");

let num = 0;
if(num == 0 ){
    contador.style.color = "white";
}

sumar.addEventListener("click", ()=>{
    num++;
    contador.innerHTML = num;
    if(num > 0 ){
        contador.style.color = "green";
    }else if(num == 0){
        contador.style.color = "white";
    }
})

restar.addEventListener("click", ()=>{
    num--;
    contador.innerHTML = num;
    if(num < 0 ){
        contador.style.color = "red";
    }else if(num == 0){
        contador.style.color = "white";
    }
})

reiniciar.addEventListener("click", ()=>{
    num = 0;
    contador.innerHTML = num;
    if(num == 0 ){
        contador.style.color = "white";
    }
})

