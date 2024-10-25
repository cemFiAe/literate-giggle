function translateGerman() {
  document.getElementById('nav-menu').innerHTML='MENÜ';
  document.getElementById('nav-location').innerHTML='Standort';
  document.getElementById('nav-about').innerHTML='Über Uns';
  document.getElementById('sub_h1').innerHTML='DIE BESTEN RAMEN IN DER STADT';
  document.getElementById('h2_howto').innerHTML='WIE MAN BESTELLT';
  document.getElementById('pickNoodle').innerHTML='<img class="noodle_png" src="./assets/img/2_section_how_to_order/PNG/noodle.png" alt=""> Wähle deine Nudel';
  document.getElementById('pickBroth').innerHTML=' <img class="broth_png" src="./assets/img/2_section_how_to_order/PNG/broth.png" alt=""> Wähle deine Brühe';
  document.getElementById('pickTopping').innerHTML=' <img class="egg_png" src="./assets/img/2_section_how_to_order/PNG/egg.png" alt=""> Füge Toppings hinzu';
  document.getElementById('menu').innerHTML='UNSER MENÜ';
 
  var elements = document.getElementsByClassName("chicken");
for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = "Hähnchen";
}

var elements = document.getElementsByClassName("beef");
for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = "Rind";
}

var elements = document.getElementsByClassName("shrimp");
for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = "Garnele";
}
  

  document.getElementById('header4').innerHTML='Finde uns hier';
  


}