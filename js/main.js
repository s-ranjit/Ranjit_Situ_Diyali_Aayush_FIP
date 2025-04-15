
(function () {
    "use strict";
    console.log('fired');

    let burger = document.querySelector("#button");
    let burgerCon = document.querySelector("#burger-con");

    function hamburgerMenu() {
        burger.classList.toggle("expanded");
        burgerCon.classList.toggle("slide-toggle");
    };

    burger.addEventListener("click", hamburgerMenu, false);
})();

// for product interactivity

const flavours = [
    {
        name: "Original",
        description: "A classic wheat flavour with a smooth and refreshing taste.",
        ingredients: "Wheat, Barley, Water",
        image: "images/original_165.png",
    },
    {
        name: "Peach",
        description: "A sweet and fruity flavour with a hint of peach.",
        ingredients: "Peach, Sugar, Water",
        image: "images/peach_165.png",
    },
    {
        name: "Mint",
        description: "A refreshing mint flavour that cools you down.",
        ingredients: "Mint, Sugar, Water",
        image: "images/mint_165.png",
    },
];

const buttons = document.querySelectorAll(".flavour-btn");
const title = document.querySelector(".flavour-display h3");
const description = document.querySelector(".flavour-display p:nth-of-type(1)");
const ingredients = document.querySelector(".flavour-display p:nth-of-type(2)");
const image = document.querySelector(".flavour-display img");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
       
        buttons.forEach((btn) => btn.classList.remove("active"));

        
        button.classList.add("active");

       
        const flavour = flavours.find(
            (f) => f.name.toLowerCase() === button.dataset.flavour
        );

        
        title.textContent = flavour.name;
        description.textContent = flavour.description;
        ingredients.textContent = `Main Ingredients: ${flavour.ingredients}`;
        image.src = flavour.image;
        image.alt = flavour.name;
    });
});