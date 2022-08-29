console.log("hola");
let val=document.getElementById("num");
const incrementar=document.getElementById("increment");
const decrementar=document.getElementById("decrement");
const resetear=document.getElementById("reset");
let num=parseInt(val.innerHTML);
//eventos
incrementar.addEventListener("click",()=>{
    num=num+1;
    val.classList.remove("incrementar");
    val.classList.remove("decrementar");
    val.classList.remove("resetear");
    setTimeout(() => {
        val.classList.add("incrementar");
        val.innerHTML=num;
    }, 100);
})

decrementar.addEventListener("click",()=>{
    num=num-1;
    val.classList.remove("decrementar");
    val.classList.remove("incrementar");
    val.classList.remove("resetear");
    setTimeout(() => {
        val.classList.add("decrementar");
        val.innerHTML=num;
    }, 100);
})
resetear.addEventListener("click",()=>{
    num=0;
    val.classList.remove("resetear");
    val.classList.remove("incrementar");
    val.classList.remove("decrementar");
    setTimeout(() => {
        val.classList.add("resetear");
        val.innerHTML=num;
    }, 200);
})