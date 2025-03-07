let move_speed = 3, grativy = 0.5;
let bird = document.querySelector('.bird');
let imng = document.getElementById('bird-1');

let bird_props = bird.getBoundingClientRect();

let background =  document.querySelector('.background').getBoundingClientRect();
let score_val = document.querySelector('.score_val');
let message = document.querySelector('.message');
let score_title = document.querySelector('.score_title');

let game_state = 'Start';
img.style.display = 'none';
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
        let pipe_sprite = document.querySelector('pipe_sprite');
        pipe_sprite.forEach((element) => {
            let pipe_sprite_props = element.getBoundingClientRect();
            bird_props = bird.getBoundingClientRect();

            if(pipe_sprite_props.right <= 0){
                element.remove();
            }
            else{
                if(bird_props.left < pipe_sprite_props.left + pipe_sprite_props
                    .width && bird_props.left + bird_props.width > pipe_sprite_props
                .left && bird_props.top < pipe_sprite_props.top + pipe_sprite_props
                .height && bird_props.top + bird_props.height > 
                pipe_sprite_props.top){
                    game_state = 'End';
                    message.innerHTML = 'Game Over'.fontcolor('red') +
                    '<br>Press Ebter To Restart';
                    message.classList.add('messageStyle');
                    imng.style.display = 'none';
                    return;
                }
                else{
                    if(pipe_sprite_props.right < bird_props.left &&
                        pipe_sprite_props.right + move_speed >= bird_props.left
                        && element.increase_score == '1'){
                            score_val.innerHTML =+ score_val.innerHTML + 1;
                        }
                        element.style.left = pipe_sprite_props.left - move_speed + 
                        'px';
                }
            }
        });
        requestAnimationFrame(move);

    }
    requestAnimationFrame(move);
}
    let bird_dy = 0;
    function apply_gravity(){
        if(game_state != 'Play') return;
        bird_dy = bird_dy + grativy;
        document.addEventListener('keydown', (e) => {
            if(e.key == 'ArrowUp' || e.key == ' '){
            <img src= "img"
            }
        })
    }
    
