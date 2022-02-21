/*exercice 5 :jeu feuille,pierre,ciseaux

A partir de ce code faire un programme qui permet de jouer a feuille, pierre ,ciseaux contre un robot.
Le premier entre l'utilisateur et le robot à 3 point gagne.
Vous devez choisir votre coup,afficher le score progressivement et le gagnant au terme du jeu .

*/

let scoreJoueur=0;
let scoreRobot=0;

let btn1 = document.createElement("BUTTON"); 
btn1.appendChild(document.createTextNode("Pierre"));  
document.querySelector("body").appendChild(btn1); 
btn1.style.color="tomato";                                             


let btn2 = document.createElement("BUTTON"); 
btn2.appendChild(document.createTextNode("Feuille")); 
document.querySelector("body").appendChild(btn2); 
btn2.style.color="purple";  

let btn3 = document.createElement("BUTTON"); 
btn3.appendChild(document.createTextNode("Ciseaux")); 
document.querySelector("body").appendChild(btn3); 
btn3.style.color="blue";   


let toutButton =document.querySelectorAll('button');
console.log(toutButton);

let coup = document.createElement('p');
coup.appendChild(document.createTextNode("Choisissez soit Pierre, soit Feuille ,soit Ciseaux"));
document.querySelector("body").appendChild(coup);

let coupJoueur= document.createElement('p');
document.querySelector("body").appendChild(coupJoueur); 

let coupRobot= document.createElement('p');
document.querySelector("body").appendChild(coupRobot); 

let choicePlayer="";
let choiceBot="";
const coups=["Pierre","Feuille","Ciseaux"];

function creeNbAleatoire(){
return Math.floor(Math.random()*3);
};




btn1.addEventListener('click', function() {
    choicePlayer="Pierre";
    choiceBot=coups[creeNbAleatoire()];
    coupRobot.innerText="Robot : " + choiceBot;
    coupJoueur.innerText="Joueur : "+ choicePlayer;
    compareChoix(choicePlayer,choiceBot);
      
  });

btn2.addEventListener('click', function() {
    choicePlayer="Feuille";
    choiceBot=coups[creeNbAleatoire()];
    coupRobot.innerText="Robot : " + choiceBot;
    coupJoueur.innerText="Joueur : "+ choicePlayer;
    compareChoix(choicePlayer,choiceBot);
    
    
  });

  btn3.addEventListener('click', function() {
    choicePlayer="Ciseaux";
    choiceBot=coups[creeNbAleatoire()];
    coupRobot.innerText="Robot : " + choiceBot;
    coupJoueur.innerText="Joueur : "+ choicePlayer;

    compareChoix(choicePlayer,choiceBot);
    
    
  });
  

  function compareChoix(choicePlayer,choiceBot){

    if( (choicePlayer ==="Pierre" && choiceBot === "Feuille") || (choicePlayer ==="Ciseaux" && choiceBot === "Pierre") ||(choicePlayer ==="Feuille" && choiceBot === "Ciseaux")){
        scoreRobot++;
        console.log("robot score :" + scoreRobot +"- score joueur :"+ scoreJoueur);
        if(scoreRobot === 3)
            document.write("robot gagne");


      }else if((choicePlayer ==="Feuille" && choiceBot === "Pierre") || (choicePlayer ==="Pierre" && choiceBot === "Ciseaux") ||(choicePlayer ==="Ciseaux" && choiceBot === "Feuille")){
        scoreJoueur++;
        console.log("robot score :" + scoreRobot +"- score joueur : "+ scoreJoueur);
        if(scoreJoueur === 3)
            document.write("Joueur gagne");



      }
  }






