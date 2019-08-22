import _ from 'lodash';
import './style.css'
import './print.css'
import Icon from './icon.png'
import validate from './validate.js';
import literalsFunc from './features'


function sample() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Welcome', 'to', 'instagram'], ' ');
  element.classList.add('hello');// adding styles

  //creating a button element
  const btn =  document.getElementById("login")
  btn.classList.add('print')

  var x = document.getElementById("name").value;
  console.log(`x is ${x}`)
  btn.addEventListener('click', function(){validate(x);});
  // btn.onclick = validate(x);
  //creating image element 
  const myIcon = new Image();
  myIcon.src = Icon;

  //appending elements into the div 
  element.appendChild(myIcon);
  element.appendChild(btn);

  var para = document.createElement('p');

  //calling function defined in features.js
  var name = literalsFunc()
  para.textContent = name;

  element.appendChild(para);
  return element;

  
}

document.body.appendChild(sample());
