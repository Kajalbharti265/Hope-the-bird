let move_speed = 3, grativy = 0.5;
let bird = document.querySelector('.bird');
let imng = document.getElementById('bird-1');

let bird_props = bird.getBoundingClientRect();

let background =  document.querySelector('.background').getBoundingClientRect();
let score_val = document.querySelector('.score_val');
let message = document.querySelector('.message');
let score_title = document.querySelector('.score_title');

let game_state = 'Start';
imng.style.display = 'none';
message.classList.add('messageStyle');

document.addEventListener('keydown',(e) =>{
    if(e.key == 'Enter' && game_state != 'Play'){
        document.querySelector.forEach((e) =>{
        e.remove();
    });
    imng.style.display = 'block';
    bird.style.top = '40vh';
    game_state = 'Play';
    message.innerHTML = '';
    score_title.innerHTML = 'Score : ';
    score_val.innerHTML = '0';
    message.classList.remove('messageStyle');
    play();
}
});
function play(){
    function move(){
        if(game_state != 'Play') return;
    }
}