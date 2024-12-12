function onclickhidden(element){
    const elements = document.getElementById(element);
    elements.classList.add('hidden');
}

function onclickunhidden(element){
  const elements = document.getElementById(element);
  elements.classList.remove('hidden');
}

function Aphabet(){
    const leter  = 'qwertpoiuyasdfglkjhzxcvbnm';
    const alphabet = leter.split('');
    
    const rendom = Math.random()*26;
    const rounded = Math.round(rendom);
    console.log(rounded)

    const index = alphabet[rounded];
    return index;
    
}

function setbackground (element){
     const background = document.getElementById(element);
     background.classList.add('bg-orange-400')
}


function removeBackground(element){
  const elementt = document.getElementById(element);
  elementt.classList.remove('bg-orange-400');
}