const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const randomTransp = (min, max) => Math.random() * (max - min) + min;
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){

    var transp = randomTransp(0, 1.01);
    
    var percents = randomNumber(0, 101) + "%";
    var percentl = randomNumber(0, 101) + "%";

    const h = randomNumber(0, 361);
    const s = percents;
    const l = percentl;
    const a = transp.toFixed(2);

    const nmbrs = `${h}, ${s}, ${l}, ${a}`;
    const hsla = `hsla(${h}, ${s}, ${l}, ${a})`;

    color.textContent = nmbrs;
    document.body.style.backgroundColor = hsla;
    
});