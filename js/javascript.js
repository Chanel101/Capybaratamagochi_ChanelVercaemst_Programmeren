//console.log("hallo wereld");//

//constante
const h1 = document.querySelector("h1");
const relax = document.querySelector("#relax");
const eten = document.querySelector("#eten");
const toilet = document.querySelector("#toilet");
const woestijnbtn = document.querySelector("#steen");
const zeebtn = document.getElementById("zee");
const gezondheidTekst = document.querySelector("#gezondheidProcent");
const etenTekst = document.querySelector("#hongerProcent");
const toiletTekst = document.querySelector("#toiletProcent");

const nameInput = document.getElementById("nameInput");
const button = document.getElementById("buttonnaam");
const dobbel = document.getElementById("dobbelsteen");
const h2 = document.querySelector("h2");
const body = document.querySelector("body");

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
let state_achtergrond = true

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


function updateTekst() {
    gezondheidTekst.textContent = "Gezondheid " + gezondheid + "%";
    etenTekst.textContent = "Honger " + honger + "%";
    toiletTekst.textContent = "Toilet " + poepen + "%";
}
// functies progressbar
function gezondheidOmlaag() {
    if (gezondheid > 0) {
        gezondheid -= 10;
    }
}

function hongerOmlaag() {
    if (honger > 0) {
        honger -= 10;
    }
}

function poep() {
    if (poepen == 100 && poepenStatus == false) {
        for (let i = 0; i < poepArray.length; i++) {
            setTimeout(() => {
                capyVeranderen.src = poepArray[i];
                poepAudio.play()
                poepenStatus = true;
            }, i * 1500);
        }
    }
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
        }, 1000);
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
        if (poepen <= 90) {
            poepen += 10;
        }
        setTimeout(() => {
            capyVeranderen.src = "images/Capybara.png";
            etenStatus = false;
        }, 1000);
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
        }, 1000);
    }
}
//console.log("gaat naar het toilet")

function woestijn() {
    if (state_achtergrond == true) {
        body.classList.add('woestijn');
        zeebtn.style.display ="none";
        state_achtergrond = false;
    } else {
        body.classList.remove('woestijn');
        zeebtn.style.display = "block";
        state_achtergrond = true;
    }
}
function zee() {
    if(state_achtergrond == true) {
        body.classList.add('zee');
        woestijnbtn.style.display ="none";
        state_achtergrond = false;
    } else {
        body.classList.remove('zee');
        woestijnbtn.style.display ="block";
        state_achtergrond = true;
    }
}

//addEventListener
button.addEventListener("click", naamInput);
dobbel.addEventListener("click", dobbelsteennaam);
relax.addEventListener('click', capyRelax);
eten.addEventListener('click', capyEten);
toilet.addEventListener('click', capyToilet);
woestijnbtn.addEventListener('click', woestijn);
zeebtn.addEventListener('click', zee);
//intervals
setInterval(updateTekst, 500);
setInterval(gezondheidOmlaag, 1000);
setInterval(hongerOmlaag, 1000);
setInterval(poep, 1000);
