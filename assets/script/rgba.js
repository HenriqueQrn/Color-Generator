const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const randomTransp = (min, max) => Math.random() * (max - min) + min;
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    
    var transp = randomTransp(0, 1.01);

    const r = randomNumber(0, 256);
    const g = randomNumber(0, 256);
    const b = randomNumber(0, 256);
    const a = transp.toFixed(2);

    const nmbrs = `${r}, ${g}, ${b}, ${a}`;
    const rgba = `rgba(${r}, ${g}, ${b}, ${a})`;

    color.textContent = nmbrs;
    document.body.style.backgroundColor = rgba;
    
});