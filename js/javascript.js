//console.log("hallo wereld");//

//constante
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
//buttons onder de capybara
const relax = document.querySelector("#relax");
const eten = document.querySelector("#eten");
const toilet = document.querySelector("#toilet");
const woestijnbtn = document.querySelector("#steen");
const zeebtn = document.getElementById("zee");
//Tekst bij de progress
const gezondheidTekst = document.querySelector("#gezondheidProcent");
const etenTekst = document.querySelector("#hongerProcent");
const toiletTekst = document.querySelector("#toiletProcent");
//naam kiezen
const nameInput = document.getElementById("nameInput");
const button = document.getElementById("buttonnaam");
const dobbel = document.getElementById("dobbelsteen");

//variabele
//naam kunnen randomizen voor de capybara met een lijst
let namenArray = ["Bob", "Rik", "Gert-Jan", "Berta", "Anna", "Casper", "Gerda", "Geertruida", "Margriet", "Titus", "Ingmar", "Ingrid", "Loeta", "Daphne", "Agnes", "Dok", "Jade", "Sophia", "Niels", "Tamara", "Mariska", "Diego", "Javier", "Demi", "Merel", "Mart", "Alexi", "Nilesh", "Lev", "Jasmine", "Valérie"]
let randomNaam;
let capyNaam;
//progress procent
let gezondheid = 100;
let honger = 100;
let poepen = 0;

//buttons wanneer je klikt dat die veranderen
let capyVeranderen = document.querySelector("#capybara");
let relaxStatus = false;
let etenStatus = false;
let toiletStatus = false;
let poepenStatus = false;

//audio wanneer je op een button klikt
let waterAudio = new Audio("sound/watersplash.mp3");
let etenAudio = new Audio("sound/munchin.mp3");
let toiletAudio = new Audio("sound/toilet.mp3");
let poepAudio = new Audio("sound/plop.mp3");

//Lijst met afbeeldingen die na elkaar afspelen
let poepArray = ["images/poep1.png", "images/poep2.png", "images/poep3.png", "images/poep4.png", "images/poep5.png"]

//om de capybara in een andere omgeving te hebben
let state_achtergrond = true

//functies naam
// bron:Mariska, voor de display van de buttons. Ik wou ze graag weg hebben wanneer je een naam hebt gekozen zodat je een vaste naam krijgt voor je capybara. Daarom gebruik ik wanneer h1 en h2 veranderen dat buttons die naast het Input veld staan dat die verdwijnen.
//de nameInput.value haalt de waarde op van wat de gebruiker in het Inputveld heeft getypt.
function naamInput() {
    capyNaam = nameInput.value;
    h1.textContent = "Yaaay, " + capyNaam;
    h2.textContent = "Ik ben " + capyNaam;
    nameInput.style.display = "none";
    button.style.display = "none";
    dobbel.style.display = "none";
}

//Hiermee klik je op de button met de dobbelsteen om een random naam te genereren die ik in een lijst heb gezet en die bevat 31 namen. Wanneer de functie word uitgevoerd dan begint hij van 0 dus moet er in Math.random het aantal staan van 30.
//nameInput.value krijgt dan een random naam wanneer er op de button geklikt word.
function dobbelsteennaam() {
    let randomGetal = Math.floor(Math.random() * 30);
    let randomNaam = namenArray[randomGetal];
    capyNaam = randomNaam;
    nameInput.value = capyNaam;
}

//deze functie werkt de tekst bij, bij de progress en voegt ook een percentage er aan toe. Hiermee kan de variabele in het midden veranderen.
function updateTekst() {
    gezondheidTekst.textContent = "Gezondheid " + gezondheid + "%";
    etenTekst.textContent = "Honger " + honger + "%";
    toiletTekst.textContent = "Toilet " + poepen + "%";

}
// functies progressbar
//Deze functie zorgt er voor dat de variabele gezondheid verlaagt met 5 wanneer die groter is dan 0.
function gezondheidOmlaag() {
    if (gezondheid > 0) {
        gezondheid -= 5;
    }
}

//Deze functie verlaagt de honger met het aantal 10 wanneer die groter is dan 0.
function hongerOmlaag() {
    if (honger > 0) {
        honger -= 10;
    }
}

//wanneer het percentage 100 is van toiletbehoefte dan gaat de capybara poepen en speelt de lijst af met de afbeeldingen die ik er in heb gezet.
//Daarnaast speelt hij dan ook een geluid af.
//loop  for wordt gebruikt zodat wanneer de lengte van de poepArray kleiner is dan i dan wordt er iedere keer 1 opgeteld. Dus dan komt er iedere keer een andere afbeelding. 
//door i * 1500 millisecondes te doen speelt iedere afbeelding van de array af na een bepaalde tijd. Als ik anders gewoon 1500 had geschreven komen alle afbeeldingen op hetzelfde moment en zit er geen pauze tussen.
//bron eigen onderzoek geluid: https://noaheakin.medium.com/adding-sound-to-your-js-web-app-f6a0ca728984
//bron: https://pixabay.com/sound-effects/
//bron: diego voor de tijd tussen de afbeeldingen wanneer de capybara poept.
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
//De afbeelding veranderd wanneer er op de button gedrukt word en na een tijd van 2000 millisecondes veranderd hij terug naar de originele foto van de capybara.
//bron: https://noaheakin.medium.com/adding-sound-to-your-js-web-app-f6a0ca728984
//bron: https://pixabay.com/sound-effects/
//bron: Mart heeft me geholpen met ervoor zorgen dat de afbeelding veranderd wanneer ik op een button klik.
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

//De afbeelding veranderd wanneer er op de button gedrukt word en na een tijd van 500 millisecondes veranderd hij terug naar de originele foto van de capybara.
//Daarnaast iedere keer dat er op de button eten gedrukt wordt komt er 10 bij het toiletgebruik percentage, dit zolang toiletgebruik kleiner of gelijk is aan 90.
//bron: https://noaheakin.medium.com/adding-sound-to-your-js-web-app-f6a0ca728984
//bron: https://pixabay.com/sound-effects/
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
        }, 500);
    }
}

//De afbeelding veranderd wanneer er op de button gedrukt word en na een tijd van 2000 millisecondes veranderd hij terug naar de originele foto van de capybara.
//bron: https://noaheakin.medium.com/adding-sound-to-your-js-web-app-f6a0ca728984
//bron: https://pixabay.com/sound-effects/
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
        }, 2000);
    }
}
//console.log("gaat naar het toilet")
//Je kan de achtergrond veranderen naar de woestijn en verdwijnt de button van de zee. Dan moet je vervolgens terug klikken op de woestijn button om terug te gaan naar de originele achtergrond.
function woestijn() {
    if (state_achtergrond == true) {
        body.classList.add('woestijn');
        zeebtn.style.display = "none";
        state_achtergrond = false;
    } else {
        body.classList.remove('woestijn');
        zeebtn.style.display = "block";
        state_achtergrond = true;
    }
}

//Je kan de achtergrond veranderen naar de zee en verdwijnt de button van de woestijn. Dan moet je vervolgens terug klikken op de zee button om terug te gaan naar de originele achtergrond.
function zee() {
    if (state_achtergrond == true) {
        body.classList.add('zee');
        woestijnbtn.style.display = "none";
        state_achtergrond = false;
    } else {
        body.classList.remove('zee');
        woestijnbtn.style.display = "block";
        state_achtergrond = true;
    }
}

//wanneer gezondheid en honger op 0 staan dan komt de afbeelding dat de capybara dood gaat. Ook wanneer alleen gezondheid of honger op 0 staat dan gaat de capybara dood.
function capydood() {
    if (gezondheid == 0 || honger == 0) {
        capyVeranderen.src = "images/capybaratong.png";
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
setInterval(gezondheidOmlaag, 5000);
setInterval(hongerOmlaag, 5000);
setInterval(poep, 1000);
setInterval(capydood, 500);