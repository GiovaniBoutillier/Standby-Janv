function changer() {
document.getElementById('titre').innerHTML = "<h1><span>Faites vos </span>jeux,<span> Rien ne va </span>plus !!</span></h1>";
document.getElementById('pst').innerHTML="<h2>Vous aimez les jeux de Casino ?!?</h2><h3> Ce site est fait pour vous !</h3><h4> Vous aurez la possibilité de jouer à 3 jeux incontournables du Casino : le Poker, la Roulette, et le BlackJack !<h4>";
document.getElementById('btnYes1').setAttribute('value',"Oui");
document.getElementById('btnNo1').setAttribute('value',"Non");
document.getElementById('btnYes2').setAttribute('value',"Oui");
document.getElementById('btnNo2').setAttribute('value',"Non");
document.getElementById('btnYes3').setAttribute('value',"Oui");
document.getElementById('btnNo3').setAttribute('value',"Non");
document.getElementById('question1').innerHTML = "Aimez vous le poker ? ";
document.getElementById('question2').innerHTML = "Aimez vous la roulette ? ";
document.getElementById('question3').innerHTML = "Aimez vous le BlackJack ? ";
document.getElementById('bouton').innerHTML = "<h3>Contact</h3>";
}

// document.getElementById('mauvaisprenom').innerHTML ="<p>Erreur <p>"
// document.getElementById('mauvaisnom').innerHTML ="<p>Erreur <p>"
// document.getElementById('mauvaismail').innerHTML ="<p>Erreur <p>"

function push() {
var prenom = document.getElementById('prenom').value;
var nom = document.getElementById('nom').value;
var email = document.getElementById('email').value;

var filter = /^[a-zA-Z]+$/;
var filtermail= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]{2,}\.[a-z]{2,4}$/;

var prenomOK = filter.test(prenom);
var nomOK= filter.test(nom);
var mailOK= filtermail.test(email);

//PRENOM//

if(prenomOK){
  document.getElementById('mauvaisprenom').innerHTML ="<p style='color:green'> ✔ ok <p>";
}
else{
  document.getElementById('mauvaisprenom').innerHTML ="<p>✘ Erreur <p>";
}

//NOM//
if(nomOK){
  document.getElementById('mauvaisnom').innerHTML ="<p style='color:green'> ✔ ok<p>";
}
else{
  document.getElementById('mauvaisnom').innerHTML ="<p> ✘ Erreur <p>";
}



//MAIL//
if(mailOK){
  document.getElementById('mauvaismail').innerHTML ="<p style='color:green'> ✔ ok<p>";
}
else{
  document.getElementById('mauvaismail').innerHTML ="<p> ✘ Erreur <p>";
}



if(prenomOK && nomOK && mailOK){
  alert("Message envoyé ! ");
}
else{
  alert("ERREUR ! Verifiez la saisie du texte ! ");
}

}
