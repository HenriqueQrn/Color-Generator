const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    
    var percents = randomNumber(0, 101) + "%";
    var percentl = randomNumber(0, 101) + "%";

    const h = randomNumber(0, 361);
    const s = percents;
    const l = percentl;

    const nmbrs = `${h}, ${s}, ${l}`;
    const hsl = `hsl(${h}, ${s}, ${l})`;

    color.textContent = nmbrs;
    document.body.style.backgroundColor = hsl;
    
});