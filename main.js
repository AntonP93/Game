const main = document.querySelector('.main')
const main_buttons = document.querySelector('.main_buttons')
const btnControl = document.querySelector('.control')
const btnLastPlayer = document.querySelector('.lastPlayers')
const mainTab = document.querySelector('.main_tab')

if(window.innerWidth < window.innerHeight ){
alert('Переверни устройство')

}

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
Атака: '&#8595' `
},false)

if (window.innerWidth > window.innerHeight ) {
    btnStart.addEventListener('click',function(){
        btnStart.parentNode.removeChild(btnStart)
       startGame();
       gameStatus =1 
    },false) 
} 



