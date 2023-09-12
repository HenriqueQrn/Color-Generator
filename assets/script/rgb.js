const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    
    const r = randomNumber(0, 256);
    const g = randomNumber(0, 256);
    const b = randomNumber(0, 256);

    const nmbrs = `${r}, ${g}, ${b}`;
    const rgb = `rgb(${r}, ${g}, ${b})`;

    color.textContent = nmbrs;
    document.body.style.backgroundColor = rgb;
    
});