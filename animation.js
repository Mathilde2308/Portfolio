function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const images = ["img/img_lavandes.svg", "img/img_flowers.png", "img/img_nuages.svg", "img/img_mer.svg"]

const index = randomIntFromInterval(0, 3);

var image = document.getElementById("img_aleatoire");
image.src = images[index];

console.log(images[index]);
