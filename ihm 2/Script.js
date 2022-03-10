// JavaScript source code
var compteur =0
const buton = document.querySelector('#step1 button').addEventListener('click', envoiemessage)
const buton2 = document.querySelector('#step2 button').addEventListener('click', calcule)
const buton3 = document.querySelector('#boldOn').addEventListener('click', function () { document.querySelector('#step3 p').className = 'boldText' })
const buton4 = document.querySelector('#boldOff').addEventListener('click', function () { document.querySelector('#step3 p').classList.remove("boldText")})
const buton5 = document.querySelector('#italicOn').addEventListener('click', function () { document.querySelector('#step3 p').className = 'italicText' })
const buton6 = document.querySelector('#italicOff').addEventListener('click', function () { document.querySelector('#step3 p').classList.remove("italicText") })
const buton7 = document.querySelector('#underlineOn').addEventListener('click', function () { document.querySelector('#step3 p').className = 'underlineText' })
const buton8 = document.querySelector('#underlineOff').addEventListener('click', function () { document.querySelector('#step3 p').classList.remove("underlineText") })
const buton9 = document.querySelector('#redTextOn').addEventListener('click', function () { document.querySelector('#step3 p').className = 'redText' })
const buton10 = document.querySelector('#redTextOff').addEventListener('click', function () { document.querySelector('#step3 p').classList.remove("redText") })
let i = 0
console.log(i)
function envoiemessage() {
    console.log('bouton cliquer')
    compteur = compteur + 1
    console.log(compteur)
    var newcontent = document.createTextNode(compteur);
    var currentDiv = document.querySelector('#step1 output');
    if (i = 1) {
        document.querySelector('#step1 output').removeChild('output')
    }
    currentDiv.appendChild(newcontent);
    i=1
}

function calcule (){
    let element = document.querySelectorAll('.statInput')
    let number
    let somme = 0
    let produit = 1
    let max = element[0].textContent
    let min = element[0].textContent
    for (let i = 0; i < element.length; i++) {
        number = element[i].textContent
        number = parseInt(number, 10)
        somme = somme + number
        produit = produit * number
        if (number > max) {
            max = number
        }
        if (number < min) {
            min = number
        }
    }
    let moyenne = somme / element.length
    var newcontent = document.createTextNode(somme);
    var currentDiv = document.querySelector('#statSum');
    currentDiv.appendChild(newcontent);
    newcontent = document.createTextNode(produit);
    currentDiv = document.querySelector('#statProduct');
    currentDiv.appendChild(newcontent);
    newcontent = document.createTextNode(moyenne);
    currentDiv = document.querySelector('#statMean');
    currentDiv.appendChild(newcontent);
    newcontent = document.createTextNode(max);
    currentDiv = document.querySelector('#statMax');
    currentDiv.appendChild(newcontent);
    newcontent = document.createTextNode(min);
    currentDiv = document.querySelector('#statMin');
    currentDiv.appendChild(newcontent);
}