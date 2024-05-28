//console.log("hallo wereld");//

//constante
const h1 = document.querySelector("h1");
const relax = document.querySelector("#relax");
const eten = document.querySelector("#eten");
const toilet = document.querySelector("#toilet");

const gezondheidTekst = document.querySelector("#gezondheidProcent");
const etenTekst = document.querySelector("#hongerProcent");
const toiletTekst = document.querySelector("#toiletProcent");

const nameInput = document.getElementById("nameInput");
const button = document.getElementById("buttonnaam");
const dobbel = document.getElementById("dobbelsteen");
const h2 = document.querySelector("h2");


//variabele
let namenArray = ["Bob", "Rik", "Gert-Jan", "Berta", "Anna", "Casper", "Gerda", "Geertruida", "Margriet", "Titus", "Ingmar", "Ingrid", "Loeta", "Daphne", "Agnes", "Dok", "Jade", "Sophia", "Niels", "Tamara", "Mariska", "Diego", "Javier", "Demi", "Merel", "Mart", "Alexi", "Nilesh", "Lev", "Jasmine", "Valérie"]
let randomNaam;
let capyNaam;

let gezondheid = 100;
let honger = 100;
let poepen = 0;

let capyVeranderen = document.querySelector("#capybara");
let relaxStatus = false;
let etenStatus = false;
let toiletStatus = false;
let poepenStatus = false;

let waterAudio = new Audio("sound/watersplash.mp3");
let etenAudio = new Audio("sound/munchin.mp3");
let toiletAudio = new Audio("sound/toilet.mp3");
let poepAudio = new Audio("sound/plop.mp3");

let poepArray = ["/images/poep1.png", "/images/poep2.png", "/images/poep3.png", "/images/poep4.png", "/images/poep5.png"]
//bron: https://noaheakin.medium.com/adding-sound-to-your-js-web-app-f6a0ca728984


//functies naam
function naamInput() {
    capyNaam = nameInput.value;
    h2.textContent = "Ik ben " + capyNaam;
    h1.textContent = "Yaaay, " + capyNaam;
    nameInput.style.display = "none";
    button.style.display = "none";
    dobbel.style.display = "none";
}
// bron:mariska

function dobbelsteennaam() {
    let randomGetal = Math.floor(Math.random() * 30);
    let randomNaam = namenArray[randomGetal];
    capyNaam = randomNaam;
    nameInput.value = capyNaam;
}

// functies progressbar
function gezondheidOmlaag() {
    if (gezondheid > 0) {
        gezondheid -= 10;
    }
    gezondheidTekst.textContent = "Gezondheid " + gezondheid + "%";
}

function hongerOmlaag() {
    if (honger > 0) {
        honger -= 10;
    }
    etenTekst.textContent = "Honger " + honger + "%";
}

function toiletbehoefteOmhoog() {
    if (poepen < 100) {
        poepen += 5;
    }
    toiletTekst.textContent = "Toilet " + poepen + "%";
}

function poep() {
    if (poepen == 100 && poepenStatus == false) {
        poepPlay()
       for (let i = 0; i < poepArray.length; i++) {
        setTimeout(() => {
            capyVeranderen.src = poepArray[i];
            poepenStatus = true;
        }, i * 1000);
       }
    }
}

function poepPlay() {
    poepAudio.play()
}

//functies buttons 
function capyRelax() {
    if (relaxStatus == false) {
        capyVeranderen.src = "images/wellnesscapybara.png";
        relaxStatus = true
        waterAudio.play();
        gezondheid = 100;
        setTimeout(() => {
            capyVeranderen.src = "images/Capybara.png";
            relaxStatus = false;
        }, 2000);
    }
}
//console.log("poep");
//console.log("Ik moet relaxen.")

function capyEten() {
    if (etenStatus == false) {
        capyVeranderen.src = "images/etencapybara.png";
        etenStatus = true
        etenAudio.play();
        honger = 100;
        if (poepen + 10 <= 100) {
            poepen += 10;
        } else {
            poepen = 100
        }
        setTimeout(() => {
            capyVeranderen.src = "images/Capybara.png";
            etenStatus = false;
        }, 10000);
    }
}

function capyToilet() {
    if (toiletStatus == false) {
        capyVeranderen.src = "images/toiletcapybara.png";
        toiletStatus = true;
        poepenStatus = false;
        toiletAudio.play()
        poepen = 0;
        setTimeout(() => {
            capyVeranderen.src = "images/Capybara.png";
            toiletStatus = false;
        }, 5000);
    }
}
//console.log("gaat naar het toilet")

//addEventListener
button.addEventListener("click", naamInput);
dobbel.addEventListener("click", dobbelsteennaam);
relax.addEventListener('click', capyRelax);
eten.addEventListener('click', capyEten);
toilet.addEventListener('click', capyToilet);

//intervals
setInterval(gezondheidOmlaag, 3000);
setInterval(hongerOmlaag, 3000);
setInterval(toiletbehoefteOmhoog, 2000);
setInterval(poep, 1000);