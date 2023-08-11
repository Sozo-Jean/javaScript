/*
// Exercice
//reste à corriger
class Personnage{
    constructor(nom){
        this.nom = nom;
    }
    experience = 0;
    niveau = 100 ;
    arme = [{nom:"épée",puissance:20},
          {nom:"mateau",puissance:10},
          {nom:"fusil",puissance:35}]
    presentation(){
        console.log(`je m'appelle ${this.nom}`);
    }
    attaque(Personne, outils){
        switch (outils) {
            case "épée":
                Personne.niveau = Personne.niveau - 20;
                console.log(`${Personne.nom} attaque 
                ${Personnage.nom} avec ${outils.arme} et il lui reste ${Personnage.niveau}`);
                break;
            case "mateau":
                Personne.niveau = Personne.niveau - 10;
                console.log(`${Personne.nom} a attaqué 
                ${Personnage.nom} avec ${outils.arme} et il lui reste ${Personnage.niveau}`);
                break;
            case "fusil":
                Personne.niveau = Personne.niveau - 35;
                console.log(`${Personne} attaque 
                ${Personnage.nom} avec ${outils.arme} et il lui reste ${Personnage.niveau}`);
                break;
            default:
                console.log(`${Personne} attaque 
                ${Personnage.nom} avec ${outils.arme} et il lui reste ${Personnage.niveau}`);
                break;
        }
    
    }
       
}


let luffy = new Personnage("luffy");
let zoro = new Personnage("zoro");


 luffy.attaque(zoro, "mateau");*/

 class Acteur {
    constructor(nom,prenom,age){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    star = false;
 }
  
/*class Jean extends Acteur{
    constructor(nom,prenom,age,domaine,specialite){
        super(nom,prenom,age);
        this.domaine = domaine;
        this.spcialite = specialite;

    }
}*/

class Etudiant extends Acteur{
    constructor(nom,prenom,age,filiere){
        super(nom,prenom,age);
        this.filiere = filiere;
    }
    note = [];
    moyenne(){
        let noteTotal=0
        let notecoef;
        let sommeCoef= 0
         
        let  moy
        if(this.note.length < 1){
            console.log(`on ne peut pas calculer la moyenne ${this.nom}`);
        }else{
            for (let elt of this.note) {
                notecoef= elt.note * elt.coef
                noteTotal = notecoef + noteTotal 
                sommeCoef = sommeCoef + elt.coef
                
            }
            moy= noteTotal/sommeCoef;
            console.log(`on peut effectuer le calcul de la moyenne ${this.nom} et la moyenne est ${moy}`);
        }  
    }

    entrez(){
        let declaration = prompt("voulez vous entrez un matiere <<oui>> ou <<non>> ?")
        
        if (declaration === oui) {
           let matiere=prompt("Entrez la matiere")
            let note=Number(prompt("Entrez la note"))
            let coef=Number(prompt("Entrez le coeficient")) 
            this.note.push({ matiere, note, coef});
           return this.entrez();
        }else{
            return 0;
        }
    }
   
}

let jean = new Etudiant ("sozo","jean", 14,"GEII");
jean.entrez();
console.log(jean);
jean.moyenne()
