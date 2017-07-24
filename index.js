const stopBtn = document.getElementById('stopButton');
const slowBtn = document.getElementById('slowButton');
const goBtn = document.getElementById('goButton');
const lights = document.getElementsByClassName('bulb')
console.log(lights[0]);
(function() {
  'use strict';

stopBtn.addEventListener('click', function(){
  lights[0].style.background = 'red';
  stopBtn.addEventListener('click', function(){
    lights[0].style.background = 'black';
  })
})

slowBtn.addEventListener('click', function(){
  lights[1].style.background = 'yellow';
  slowBtn.addEventListener('click', function(){
    lights[1].style.background = 'black';
  })
})

goBtn.addEventListener('click', function(){
  lights[2].style.background = 'green';
  goBtn.addEventListener('click', function(){
    lights[2].style.background = 'black';
  })
})
})();
