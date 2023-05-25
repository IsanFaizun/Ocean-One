var plasticBottles = document.getElementById("plasticBottles");
var totalPlasticBottles = document.getElementById("totalPlasticBottles");
var plasticCups = document.getElementById("plasticCups");
var totalPlasticCups = document.getElementById("totalPlasticCups");
var straws = document.getElementById("straws");
var totalStraws = document.getElementById("totalStraws");
var cottonSwabs = document.getElementById("cottonSwabs");
var totalCottonSwabs = document.getElementById("totalCottonSwabs");
var cigaretteButts = document.getElementById("cigaretteButts");
var totalCigaretteButts = document.getElementById("totalCigaretteButts");
var plasticResealableBags = document.getElementById("plasticResealableBags");
var totalPlasticResealableBags = document.getElementById("totalPlasticResealableBags");
var plasticClingWrap = document.getElementById("plasticClingWrap");
var totalPlasticClingWrap = document.getElementById("totalPlasticClingWrap");
var plasticSilverware = document.getElementById("plasticSilverware");
var totalPlasticSilverware = document.getElementById("totalPlasticSilverware");
var plasticStirrers = document.getElementById("plasticStirrers");
var totalPlasticStirrers = document.getElementById("totalPlasticStirrers");
var foodContainers = document.getElementById("foodContainers");
var totalFoodContainers = document.getElementById("totalFoodContainers");
var totalSemua = document.getElementById("totalSemua");

plasticCups.addEventListener('input', calculate);
plasticBottles.addEventListener('input', calculate);
straws.addEventListener('input', calculate);
cottonSwabs.addEventListener('input', calculate);
cigaretteButts.addEventListener('input', calculate);
plasticResealableBags.addEventListener('input', calculate);
plasticClingWrap.addEventListener('input', calculate);
plasticSilverware.addEventListener('input', calculate);
plasticStirrers.addEventListener('input', calculate);
foodContainers.addEventListener('input', calculate);

window.onload = function inputPlasticBottles(){
    totalPlasticBottles.textContent = 0;
    totalPlasticCups.textContent = 0;
    totalStraws.textContent = 0;
    totalCottonSwabs.textContent = 0;
    totalCigaretteButts.textContent = 0;
    totalPlasticResealableBags.textContent = 0;
    totalPlasticClingWrap.textContent = 0;
    totalPlasticSilverware.textContent = 0;
    totalPlasticStirrers.textContent = 0;
    totalFoodContainers.textContent = 0;
    totalAll.textContent = 0;
}

function inputPlasticBottles(){
    totalPlasticBottles.innerHTML = Number(plasticBottles.value) * 365;
}
function inputPlasticCups(){
    totalPlasticCups.innerHTML = Number(plasticCups.value) * 365;
}
function inputStraws(){
    totalStraws.innerHTML = Number(straws.value) * 365;
}
function inputCottonSwabs(){
    totalCottonSwabs.innerHTML = Number(cottonSwabs.value) * 365;
}
function inputCigaretteButts(){
    totalCigaretteButts.innerHTML = Number(cigaretteButts.value) * 365;
}
function inputPlasticResealableBags(){
    totalPlasticResealableBags.innerHTML = Number(plasticResealableBags.value) * 365;
}
function inputPlasticClingWrap(){
    totalPlasticClingWrap.innerHTML = Number(plasticClingWrap.value) * 365;
}
function inputPlasticSilverware(){
    totalPlasticSilverware.innerHTML = Number(plasticSilverware.value) * 365;
}
function inputPlasticStirrers(){
    totalPlasticStirrers.innerHTML = Number(plasticStirrers.value) * 365;
}
function inputFoodContainers(){
    totalFoodContainers.innerHTML = Number(foodContainers.value) * 365;
}

function calculate(){
    var value1 = parseFloat(totalPlasticBottles.textContent);
    var value2 = parseFloat(totalPlasticCups.textContent);
    var value3 = parseFloat(totalStraws.textContent);
    var value4 = parseFloat(totalCottonSwabs.textContent);
    var value5 = parseFloat(totalCigaretteButts.textContent);
    var value6 = parseFloat(totalPlasticResealableBags.textContent);
    var value7 = parseFloat(totalPlasticClingWrap.textContent);
    var value8 = parseFloat(totalPlasticSilverware.textContent);
    var value9 = parseFloat(totalPlasticStirrers.textContent);
    var value10 = parseFloat(totalFoodContainers.textContent);

    var result = value1 + value2 + value3 + value4 + value5 + value6 + value7 + value8 + value9 + value10;
    totalSemua.textContent = result;
}