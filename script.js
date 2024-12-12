// function playStart(){
//    const homeSrreen = document.getElementById('home-srreen')
//    homeSrreen.classList.add('hidden');

//    const playRound = document.getElementById('playround');
//    playRound.classList.remove()
// }

function hello (){
    const getEle = document.getElementById('letter');
    const value =  Aphabet();
    getEle.innerText = value;

    setbackground (value)
}

function playStart(){
    onclickhidden('home-srreen')
    onclickunhidden('playround')
    hello ()
}

function ckickUpKebord(event){
    const playar = event.key;
   console.log(event.key)
//    
   const letteralpha = document.getElementById('letter')
   const letteralphainer = letteralpha.innerText;
   console.log(letteralphainer,playar)
  

//    
   if(playar === letteralphainer){
    console.log('you win')
   }
   else{
        console.log('you missd')
   }
   playStart()
   removeBackground( letteralphainer);
}

document.addEventListener('keyup',  ckickUpKebord )
