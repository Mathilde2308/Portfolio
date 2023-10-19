function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//IMAGES ALEATOIRES//

const images = ["ressources/Commun/img_flowers.png", "ressources/Commun/img_lavandes.svg", "ressources/Commun/img_mer.svg", "ressources/Commun/img_nuages.svg"]

const index = randomIntFromInterval(0, 3);

var image = document.getElementById("img_aleatoire");
image.src = images[index];

console.log(images[index]);

//BURGER MENU//

icons.AddEventListener("click", () => {
    nav.ClassList.toggle("active")
});

links.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});