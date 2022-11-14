const main = document.querySelector('.main')
const main_buttons = document.querySelector('.main_buttons')


console.log(window.innerWidth,window.innerHeight)
if(window.innerWidth < window.innerHeight ){
alert('Переверни устройство')
}

window.addEventListener('resize',function(){
    if(window.innerWidth < window.innerHeight ){
        alert('Переверни устройство')
        }
})
main_buttons.innerHTML = `
<input class='btn start_game'type='button'  value='Cтарт игры!'>
<input class='btn lastPlayers' type='button'  value='Таблица игроков'>
<input class='btn control'type='button'  value='Управлене'>`



const btnStart = document.querySelector('.start_game')
const btnControl = document.querySelector('.control')
const btnLastPlayer = document.querySelector('.lastPlayers')
const mainTab = document.querySelector('.main_tab')


btnControl.addEventListener('click', function(){
mainTab.innerHTML = `<div class="main_tab_title">
Управлене персонажем
</div>
<div class="main_tab_content">
Игрок1:<br>
Движение: 'w'(прыжок),'d'(вправо), 'a'(влево)
<br>
Атака: 's'
</div>
<div class="main_tab_content">
Игрок2:<br>
Движение: '&#8593'(прыжок),'&#8594'(вправо), '&#8592'(влево) <br>
Атака: '&#8595'
</div> 
<input class='btn btn_close' type='button'  value='Закрыть'> `
const btnClose = document.querySelector('.btn_close')
btnClose.addEventListener('click',function(){
    btnClose.parentNode.innerHTML = '';
},false)
},false)



if (window.innerWidth > window.innerHeight ) {
    btnStart.addEventListener('click',function(){
        btnStart.parentNode.innerHTML ='';
        mainTab.innerHTML = '';
        main_buttons.innerHTML = `<input class='btn btn_view_control' type='button'  value='Кнопки управления'> 
        <input class='btn btn_sound'type='button'  value='Звук'> `
       startGame();

       gameStatus =1
       
       const btnSound = document.querySelector('.btn_sound');
       btnSound.addEventListener('click',function(){
            if(!clickAudio.paused){
                soundOff();
            } else {
                clickAudio.play();
            } 
       })

       const btnViewControl = document.querySelector('.btn_view_control');
       btnViewControl.addEventListener('click',function(){
        const btnsControlPlayer = document.querySelector('.wrap_btn_controlPlayer');
            if(btnsControlPlayer.children.length){
                btnsControlPlayer.innerHTML = '';
            } else {
                btnsControlPlayer.innerHTML = `
                <div class="control_btn control_btn__player1">
                    <div class="up"></div>
                    <div class="left"></div>
                    <div class="right"></div>
                </div>
                <div class="control_btn attack_btn_player1">
                </div>
                <div class="control_btn control_btn_player2">
                    <div class="up up_player2"></div>
                    <div class="left left_player2"></div>
                    <div class="right right_player2"></div>
                </div>
                <div class="control_btn attack_btn_player2">
                </div>`;
            }
       })

    },false) 
} 










