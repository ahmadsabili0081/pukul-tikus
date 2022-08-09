let TikusTerakhir;
let start = document.querySelector('.start');
let tikus = document.querySelectorAll('.tikusEl');
let lives = 10;
let livesEl = document.querySelector('.lives')
let score = 0;
let tampilScore = document.querySelector('.score');


start.addEventListener('click',(e) => {
  e.preventDefault()
  start.style.display = "none";
  mulaiGame();
  setInterval(munculkanTikus, 1000);
})
function randomTime(max,min){
  return Math.round(Math.random() * (max-min) + min);
}

function mulaiGame(){
let game__mole = document.querySelector('.game__mole');
  for(let i = 0; i < 9; i++){
    let bungkusEl = document.createElement('div');
    bungkusEl.className = "bungkusGame";
    let tanahEl = document.createElement('img');
    let tikusEl = document.createElement('img');
    tanahEl.className = "tanahEl";
    tanahEl.src = `../images/tanah.png`;
    tikusEl.classList = "tikusEl";
    tikusEl.src = `../images/tikus.png`;
    bungkusEl.appendChild(tanahEl)
    bungkusEl.appendChild(tikusEl)
    game__mole.appendChild(bungkusEl)
  }
  let bungkusEl = document.querySelectorAll('.bungkusGame');
  window.alert('aturan,pukul bagian pala, jika tidak nyawa mu akan habis!')
  randomMouse(bungkusEl);
}
function randomMouse(data){
  let tikus = Math.floor(Math.random() * data.length);
  let tikusMuncul = data[tikus];
  if(tikusMuncul === TikusTerakhir ){
    return randomMouse(data);
  }
  return tikusMuncul;
}
function munculkanTikus(){
  let time = randomTime(200,1000)
  let bungkusEl = document.querySelectorAll('.bungkusGame');
  let lubang = randomMouse(bungkusEl);
  lubang.classList.add('up');
  setTimeout(() => {
    lubang.classList.remove('up');
  },time);
}
let bungkusEl = document.querySelector('.game__mole')
bungkusEl.addEventListener('click',(e) => {
  let ambilHasil = e.target;
  if(ambilHasil.classList.contains('tikusEl')){
    score+= 10;
    tampilScore.innerHTML= score
  }else{
    lives--;
    livesEl.innerHTML = lives;
    if(lives < 1){
      window.alert('Kamu telah kalah');
      window.alert(' score kamu adalah ' + score);
      location.reload();
    }
  }
})

let matchM = window.matchMedia('(max-width: 370px)');
matchM.addListener(mediaFunc);
function mediaFunc(e){
  if(e.matches){
   document.querySelector('.container').classList.add('NoneScreen')
  }else{
    document.querySelector('.NoneScreen').classList.remove('NoneScreen')
  }
}
