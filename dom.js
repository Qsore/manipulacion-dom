const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafo = document.querySelector(".parrafo");
const pid = document.querySelector("#pid");
const input = document.querySelector("input");
const input1 = document.querySelector(".numero1");
const input2= document.querySelector(".numero2");
const btn= document.querySelector("#btnCalcular")
const resultado = document.querySelector("#resultado");
const form = document.querySelector(".Sumar");
console.log({
    h1,
    p,
    parrafo,
    pid,
    input
});
console.log(input.value);
h1.classList.add("Tablet");
h1.classList.remove("Tablet");

/*
const img = document.createElement("img");
img.setAttribute("src","images.jpg");
console.log(img);
pid.appendChild(img);
*/

form.addEventListener("submit",sumarInputValues);
function sumarInputValues(evento){
    evento.preventDefault();
    const sumainputs = parseFloat(input1.value) + parseFloat(input2.value);
    resultado.innerText = "Resultado es : " + sumainputs;
}

function dimosClick(){
    let sumainputs = parseFloat(input1.value) + parseFloat(input2.value);
    resultado.innerText = "Resultado es : " + sumainputs;
}