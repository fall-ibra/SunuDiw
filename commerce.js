function valider() {
//si les valeurs des champs nom et prenom sont différentes du vide
if( (document.contact-form.name.value != "") && (document.contact-form.email.value != "") ) {
//les données sont ok, on peut envoyer le formulaire
return true;
}
else {
//sinon on affiche un message
alert("Merci de remplir les champs obligatoires");
//et on indique de ne pas envoyer le formulaire
return false;
}

const form = document.getElementById('contact-form');
 form.addEventListener('submit', function(event) {
    alert("ok merci !");
 }
};
