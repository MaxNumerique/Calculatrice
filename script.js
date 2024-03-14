//====================================================================================
//====================================================================================
//====================================================================================
 
let input = "";
let ecran = document.querySelector(".résultat");

function ajouterEcran() {
    ecran.textContent = input;
}

function updateScreen () {
    document.getElementsByClassName('résultat').value = input;
}

function inputChiffre (number) {
    input += number;
    ajouterEcran();  
    ajusterTaillePolice();
}

function inputOperation(operator) {
    input += operator;
    ajouterEcran();
    ajusterTaillePolice();
}

function clearAll() {
    ecran.textContent = "";
    input = "";
    ajusterTaillePolice();
}

// function clearOne() {
//     input = input.substr(0, input.length - 1);
//     ajouterEcran();
// }

function clearOne() {
    if (!isNaN(input)) {
        input = input.toString();
    }
    input = input.slice(0, input.length - 1);
    ajouterEcran();
    ajusterTaillePolice();
}

function result() {
    try {
        input = eval(input);
        ajouterEcran();
        ajusterTaillePolice();
    } catch (error) {
        input = "Petit malin !";
        ajouterEcran();
        ajusterTaillePolice();
    }
}

function ajusterTaillePolice() {
    let largeurEcran = ecran.offsetWidth;
    let taillePolice = 55;
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    context.font = taillePolice + 'px sans-serif'; 

    let texteLargeur = context.measureText(input).width;

    if (texteLargeur > largeurEcran) {
        while (texteLargeur > largeurEcran && taillePolice > 10) {
            taillePolice--;
            context.font = taillePolice + 'px sans-serif'; 
            texteLargeur = context.measureText(input).width; 
        }
    } else {
        taillePolice = 55;
    }
    ecran.style.fontSize = taillePolice + 'px';
}


document.addEventListener('keydown', function(event){
    let key = event.key;

    switch (key) {
        case event = "1":
            inputChiffre("1");
            break;
        case event = "2":
            inputChiffre("2");
            break;
        case event = "3":
            inputChiffre("3");
            break;
        case event = "4":
            inputChiffre("4");
            break;
        case event = "5":
            inputChiffre("5");
            break;  
        case event = "6":
            inputChiffre("6");
            break;
        case event = "7":
            inputChiffre("7");
            break;
        case event = "8":
            inputChiffre("8");
            break;
        case event = "9":
            inputChiffre("9");
            break;
        case event = "0":
            inputChiffre("0");
            break;        
        case event = "*":
            inputOperation("*");
            break;  
        case event = "/":
            inputOperation("/");
            break;  
        case event = "+":
            inputOperation("+");
            break;   
        case event = "-":
            inputOperation("-");
            break;                  
        case event = "=":
            result();
            break;
        case event = "Enter":
            result(12);
            break;
        case event = "Backspace":
            clearOne();
            break;
        case event = "Delete":
            clearAll();
            break;   
            default:
            break;
    }
});









// Afficher Heure Numerique
//==========================================================
function afficherHeureNum() {
    const dateNum = new Date();
    let heuresNum = dateNum.getHours();
    let minutesNum = dateNum.getMinutes();
    let secondesNum = dateNum.getSeconds();
    heuresNum = heuresNum < 10 ? '0' + heuresNum : heuresNum; 
    minutesNum = minutesNum < 10 ? '0' + minutesNum : minutesNum;
    secondesNum = secondesNum < 10 ? '0' + secondesNum : secondesNum;
    let heureNumerique = heuresNum + ' : ' + minutesNum;
    document.getElementById('horloge_numeriques').innerText = heureNumerique;
}
setInterval(afficherHeureNum, 1000);