
// Bienvenue Sozo
// fonction syntaxe function nomFonction(){}
/*
function direBonjour(){
    console.log("Bonjour!!!");
}

direBonjour();

function direBonjourAmi(monAmi){
    console.log(`Bonjour ${monAmi}`);
}

direBonjourAmi("Jean");
*/
/*exercice

let nom = prompt("Entrez votre nom!"),
    prenom = prompt( "Entrez votre prenom!"),
    age = prompt("Entrez votre age!");

function identifiant(nom, prenom, age){
    console.log(`Bonjour ${nom} ${prenom} ${age}`);
}
 identifiant(nom,prenom,age);
 */
 //valeur de retour return
 
 /*function direBonjour(){
    console.log("Bonjour!!!");
}

// direBonjour();

function bonjour(){
    return "Bonjour!!!"
}

let salution = bonjour();
console.log(salution);*/
//exercice
/*
let nb1 = Number(prompt("Entrez un nombre"));
    nb1 = Number(prompt("Entrez un nombre"));

function addition(nb1, nb2){
   return nb1 + nb2;
}

let resultat = addition(nb1,nb2);
console.log(addition(nb1,nb2));
*/
/*
// fonction flechée

let direBonjour = () =>{
    console.log("Bonjour!!!");
}

direBonjour();
*/

// tableau
/*
let tabfilms = ["Mavrik", "wakande", "Avatar"];

tabfilms[0];// pour voir le premier élément
console.log(tabfilms);// pour voir tous les elements du tableau
console.log(tabfilms.length);// pour voir la taille du tableau
tabfilms.push(prompt("Saisir ton films"));//pour  enrégistrer un éléments dans le tableau à la suite
console.log(tabfilms);
tabfilms.pop();// pour supprimer un élément le dernier élément
tabfilms.slice(1,1)// pour supprimer un élément à partir d'un élément pour le premier 1 et le nombre d'élément à supprimer à partir de cet indice
*/
/*
let randomTab = [15,true, ["edwige","Rose"],{nom: "linda"},() => {}];

console.log(randomTab);
console.log(randomTab[1]);
console.log("taille du tableau: "+ randomTab.length);
*/
/* // pour parcourir les éléments d'un tableau 
for(let i = 0; i < tabfilms.length; i++){
    console.log(tabfilms[i]);
}
*/
/*// pour parcourir les éléments d'un tableau
for( let film of tabfilms){
    console.log(`j'ai regargé le films ${film}`);
}
*/
/*
 // exop
let nb = 1000, i, tab=[i];

while(nb <= 1000){
    let declaration = prompt("Voulez vous entrez une valeur dans le tableau <<oui>> ou <<non>>");
        oui = true;
     if(declaration == true){
        i =prompt("Entrez un élément du tableau");
     }else{
       console.log("vous n'avez plus ou n'avez pas entré une valeur dans le tableau");
       for( let emt of tab){
           console.log(`vos données ${emt} => ${tab[i]}`);
           break;
       }
 }
}
*/
 
/*
 //programmation orientée objet
 let etudiand = {
    nom: "jean",
    age: 100,
    statuMatrimonial: "CELIBATAIRE",
    
    //methode
    presentation(){
        console.log(`Je m'appelle ${this.nom}, je suis agé de ${this.age} ans et je suis ${this.statuMatrimonial}`);       
    }
 };
  //pour afficher avec methode
etudiand.presentation();

*/

/* etudiand.nom;
 console.log(etudiand.nom);

 etudiand.nom = "sozo";// pour changer le nom 
 console.log(etudiand.nom);
 console.log(`Je m'appelle ${etudiand.nom}, je suis agé de ${etudiand.age} ans et je suis ${etudiand.statuMatrimonial}`);       
*/

//exercice
/*
let nb1 = Number(prompt("Entrez un nombre")),
    nb2 = Number(prompt("Entrez un deuxieme nombre"));

function parite(number){ 
     if(number % 2 == 0){
        console.log(`l'addition de ${number} et ${number} est pair`);
     }else{
        console.log(`l'addition de ${number} et ${number} est impair`);
     }
}

function addition(nb1,nb2){
    parite(nb1,nb2);
    console.log(`l'addition des deux nombres est ${  nb1 + nb2}`);

}  
addition();
*/
/* tableau
let tab = [1,2,3,4,5,6,7];

let parTab = (parametre) =>{
    for(let i of parametre){
        if(i % 2 != 0){
            console.log(`voici les nombres impair du tableau ${tab[i]}`);
        }
    }
}
parTab(tab);
*/ 
/*
 let mesFilms = [{nom: "avatar", annee: 2004},
                 {nom: "black", annee: 2003},
                 {nom: "yello", annee: 2002},
                 {nom: "green", annee: 2001}
                ];

let fct = (parametre) =>{
    let  pp = parametre[0];
    for(let film of parametre){
        if(pp.annee > film.annee){
            pp = film ;
        }   
    }
    console.log(`le plus vieux film est ${film}`);

}
fct(mesFilms);

*/

// utilisation des classes
let nom = prompt("Entrez votre nom"),
    prenom = prompt("Entrez votre prenom"),
    matiere = prompt("Entrez votre matiere");

class Personne{
    constructor(nom, prenom){
        this.nom = nom;
        this.prenom = prenom;
    }

    presentation(){
        console.log(`je m'appelle ${this.nom} ${this.prenom}`);
    }
}

class Professeur extends Personne {

    constructor(nom,prenom,matiere){
        super(nom,prenom);
        this.matiere = matiere;
    }

}
let kou = new Professeur(nom, prenom, matiere);
console.log(kou);
let perso = new Personne(nom, prenom);
console.log(perso);
/*
let koffi = new Personne();
console.log(koffi);

let audrey = new Personne();
console.log(audrey);
*/
/*
 let franklin = new Personne("Franklin","Delano");
 console.log(franklin);
 */
//exo
/*
 class Animal{
    constructor(nom) {
        this.nom = nom;
    }
 }

 let chat = new Animal("chat");
 console.log(chat);
 let chien = new Animal("Dog");
 console.log(chien);*/