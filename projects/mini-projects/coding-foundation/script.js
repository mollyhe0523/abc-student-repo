var number = 4;
var container = document.getElementById('container')

function create(){
  number = document.getElementById('number').value

  // create the desired number of checkbox through for loop
  for (i=0; i<number; i++){
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    container.appendChild(checkbox);
  }
}
