/*let nom;//déclaration de variable
nom= "jks";// affectation de variable
//camelCase
let nomEtudiant = "valeur"// déclaration de variable avec sa valeur 

const nomDeLaVariable = 100;// déclaration de constante

console.log();//pour afficher des avleurs à l'écran
prompt();// afficher un message avec la possibilité de répondre 

// la probilité d'associé let et prompt pour saisir des valeur 
let name = prompt("Entrez votre nom ")*/

/*let nom = prompt("Entrez votre nom"), 
    prenom = prompt("Entrez votre prenom");

console.log(nom, prenom);
console.log("bienvenue" + nom, prenom)

// concatener ie ajouter une phrase qui va s'afficher avec la variable saisie
// console.log("bienvenue" + nom, prenom)
*/
//condition
// if garde les mêmes propriétés vu en c 

/*let number = Number(
    prompt("Veuillez choisir un nombre")
    );
// pour avoir le type que tu veux il faut convertir dans le type qu'on veut 
// pour les types numérique il faut la fonction Number
console.log(typeof number);//pour voir le type de la variable entrer
console.log(number + 1);

if(number > 0){
    console.log("positif");
}if else(number < 0){
    console.log("négative");
}else {
    console.log("nul";)
}

let sexe = prompt("Quelle est votre sexe, f pour féminin, m pour masculin");
    fesse = prompt("Est ce que tu as fesse ? o pour oui et n pour non");

if(sexe == "f" && fesse == "o"){
    console.log("Ton avenir est coller derriere toi");
}else {
    console.log("travaille dur,.. sinon humm");
}
*/
/*let lundi = "kodjo",
    mardi = "ablam",
    mercredi = "kokou",
    jeudi = "yao",
    vendredi = "koffi",
    samedi = "komi",
    dimanche = "kossi";
*/
/*
let prenom =prompt("Entrez votre prenom");

switch (prenom) {
    case "kodjo":
        console.log("Vous êtes né un Lundi");
        break;
    case "alban":
        console.log("Vous êtes né un Mardi");
        break;
    case "kokou":
        console.log("Vous êtes né un Mercredi");
        break;
    case "yao":
        console.log("Vous êtes né un jeudi");
        break;
    case "koffi":
        console.log("Vous êtes né un vendredi");
        break;
    case "komi":
        console.log("Vous êtes né un samedi");
        break;
    case "kossi":
        console.log("Vous êtes né un dimache");
        break;
    default:
        console.log("Votre prenom est errone");
        break;
}
*/

 // boucle while et for
/*
 let specialite = prompt("Quelle spécialité faites vous ?");
 while(specialite != "IT") {
    console.log("tu n'as pas ta place ici");
    specialite = prompt("Quelle spécialité faites vous ?");
 }
*/
/*
 let nbr = 1;
 while(nbr < 6){
    console.log("inferieur");
    nbr++;
 }*/

/*/ for(let i = 0; i < 5 ; i++){
    console.log(`tour ${i}`);
 }
 */
/* //Exercice 1
let maths = Number(prompt("Donnez nous votre note en Maths")),
    physique = Number(prompt("Donnez nous votre note en Physique")),
    philo = Number(prompt("Donnez nous votre note en Philosophie")),
    svt = Number(prompt("Donnez votre note en svt"));

let moy;
moy = (maths + physique + philo + svt)/4;

console.log("votre moyenne est:" + moy);

if(moy < 10){
    console.log("Recaler");
}else if(moy == 10){
    console.log("passe");
}else{
    console.log("bravo");
} */
 
 /* // Exercice 2
let jour=prompt("Entrez un jour"),

 switch (jour) {
    case "lundi":
        console.log("Demain sera Mardi");
        break;
    case "mardi":
        console.log("Demain sera Mercredi");
        break;
    case "mercredi":
        console.log("Demain sera Jeudi");
        break;
    case "jeudi":
        console.log("Demain sera Vendredi");
        break;
    case "vendredi":
        console.log("Demain sera Samedi");
        break;
    case "samedi":
        console.log("Demain sera Dimanche");
        break;
    case "dimanche":
        console.log("Demain sera Lundi");
    default:
        console.log(" humm");
        break;
 } 
 */ 
 // Exercice
/*
let h = Number(prompt("Entrez l'heure")),
    m = Number(prompt("Entrez la minute")),
    s = Number(prompt("Entrez la seconde"));


if(s>=0 && s < 59){
    s=s+1;
}else if(s==59){
    if(m >= 0 && m < 59){
        s=0;
        m=m+1;
    }else if(m==59){
        if(h>=0 && h<23){
            s=0;
            m=0;
            h=h+1;
        }else if(h==23){
            s=0
            m=0;
            h=0;
        }
    }
}
console.log("Dans une seconde il sera",h,"h",m,"min",s);
*/
//exercice 

let nb = Number(prompt("Quelle table de multiplication voulez vous implémentez")),
    i = 0;
    
for(i ; i <= 12; i++){

    console.log(`${nb} * ${i} = ${nb*i}`);
}



