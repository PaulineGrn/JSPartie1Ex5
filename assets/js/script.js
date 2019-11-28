//Création d'une fonction
function division(){
  /*Création de variables des 2 nombres avec des getElementById pour relier
  les infos du formulaire et le JS*/
  var number1=document.getElementById("number1").value;
  var number2=document.getElementById("number2").value;
  /*if est une condition si l'utilisateur veut noter une lettre dans notre calcul
  is NaN(not a number) est-ce que le nombre n'est pas un nombre*/
  if(isNaN(number1)==true||isNaN(number2)==true){
    alert("erreur : ceci n'est pas un nombre");
    //else c'est pour dire sinon
  }else{
    //Si 2 n'est pas 0 alors on va pouvoir faire notre calcul
    if(number2!=0){
      //Création d'une variable pour le reste de la division des deux nombres
      var result=number1%number2;
      /*Création d'une alerte pour afficher le reste de la division dans une boîte
      de dialogue. Math.round permet d'arrondir à l'entier le plus proche par rapport au nombre*/
      alert(Math.round(result));
    }else{
      alert("erreur : division par 0 impossible");
    }
  }
}
