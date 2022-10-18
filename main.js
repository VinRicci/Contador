const contador = document.getElementById("cont");
console.log(contador);
const sumar = document.getElementById("inc");
const restar = document.getElementById("dec");
const reiniciar = document.getElementById("rest");

let num = 0;

sumar.addEventListener("click", ()=>{
    num++;
    contador.innerHTML = num;
})

restar.addEventListener("click", ()=>{
    num--;
    contador.innerHTML = num;
})

reiniciar.addEventListener("click", ()=>{
    num = 0;
    contador.innerHTML = num;
})