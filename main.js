const main = document.querySelector('.main')
const main_buttons = document.querySelector('.main_buttons')
let playerName1;
let playerName2;
let resultGame;
let winList = [];

let namePlayers = false;
const ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
let updatePassword;
const stringName='PLASTUN_FIGHT_TABLEOFRECORDS';
console.log(window.innerWidth,window.innerHeight)


window.addEventListener('resize',function(){
    if(window.innerWidth < window.innerHeight ){
        alert('Переверни устройство')
        }
})




main_buttons.innerHTML = `
<input class='btn start_game'type='button'  value='Cтарт игры!'>
<input class='btn lastPlayers' type='button'  value='Победители'>
<input class='btn control'type='button'  value='Управление'>`



const btnStart = document.querySelector('.start_game')
const btnControl = document.querySelector('.control')
const btnLastPlayer = document.querySelector('.lastPlayers')
const mainTab = document.querySelector('.main_tab')

btnLastPlayer.addEventListener('click',function(){
    
    mainTab.innerHTML = '';
    console.log(winList[0])
    for(let i = 0; i < 10;i++ ){
        if(winList[i]){
            let winName = document.createElement('div');
            winName.className = 'player_Name_win';
            winName.innerHTML = winList[i];
            mainTab.appendChild(winName)
        }   
    }

})
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


function chek(){
    if ( !playerName1 || !playerName2) {
        alert('Вы не ввели имя игрока!')
    } else {
        namePlayers = true;    
    }
    

}
function playerName(){
    mainTab.innerHTML = `<div class="wrap_name_player">
    <div class="title_name">Игрок 1:</div>
    <input class='player_name player_name_1' type="text" name="player" style="width: 25%; height: 5%; ">
    <div class="title_name">Игрок 2:</div>
    <input class='player_name player_name_2' type="text" name="player" style="width: 25% ;height: 10%">
    <input class='btn btn_save_name'type='button'  value='Сохранить'>
</div>`;
    
    const btnSaveName = document.querySelector('.btn_save_name')
    const namePlayer1input = document.querySelector('.player_name_1')
    const namePlayer2input = document.querySelector('.player_name_2')
    namePlayer1input.addEventListener('change',function(){
        playerName1 =  namePlayer1input.value   
    })
    namePlayer2input.addEventListener('change',function(){
        playerName2 =  namePlayer2input.value   
    }) 
    btnSaveName.addEventListener('click',function(){
        chek()
        if(namePlayers){
            mainTab.innerHTML = ''
        }
    },false)           
}

function playerWin(player){
    soundOff()
    
    if(!player){
        resultGame = 'Ничья'       
    } else {
        resultGame = player   
    } 
    if(mainTab.childNodes.length == 0){
        main_buttons.innerHTML = ''
        wrapStart.style.display = 'none';
        if(!player){

            mainTab.innerHTML = `
        <div class="win_tab">
            <div class="text_win_tab">"${resultGame}"</div>
            <input class='btn  btn_new_game' type='button'  value='Реcтарт!'>
        </div> `    
        } else{
            mainTab.innerHTML = `
        <div class="win_tab">
            <div class="text_win_tab">Победил игрок "${resultGame}"</div>
            <input class='btn btn_save_win' type='button'  value='Записать победителя'>
            <input class='btn  btn_new_game' type='button'  value='Реванш!'>
        </div> `
        }
        
        const btnSavewin = document.querySelector('.btn_save_win');
        const btnNewgame = document.querySelector('.btn_new_game'); 
        btnNewgame.addEventListener('click',function(){
            console.log('Реванш')
            window.location.reload(false);    
        })

        btnSavewin.addEventListener('click',function(){
            storeInfo(); 
            console.log('eexp')
        })

    }
}


if (window.innerWidth > window.innerHeight ) {
    btnStart.addEventListener('click',function(){
        playerName()
        if(namePlayers){
            btnStart.parentNode.innerHTML ='';
            mainTab.innerHTML = '';
            main_buttons.innerHTML = `<input class='btn btn_view_control' type='button'  value='Убрать кнопки'> 
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
                }
            })

        }
        
    },false) 
} 

window.onbeforeunload=befUnload;

function befUnload(EO) {
  EO=EO||window.event;
  if (gameStatus === 1)
    EO.returnValue='Придется начинать сначала!';
};

function storeInfo() {
	updatePassword = Math.random();
    console.log(playerName1,playerName2)
	$.ajax({
		url: ajaxHandlerScript, type: 'POST', cache: false, dataType: 'json',
		data: { f: 'LOCKGET', n: stringName, p: updatePassword },
		success: lockGetReady, error: errorHandler
	}
	);
}

function lockGetReady(callresult) {
	if (callresult.error != undefined)
		alert(callresult.error);
	else {
        const info=JSON.parse(callresult.result);
        info.unshift(resultGame)
		$.ajax({
			url: ajaxHandlerScript, type: 'POST', cache: false, dataType: 'json',
			data: {
				f: 'UPDATE', n: stringName,
				v: JSON.stringify(info), p: updatePassword
			},
			success: updateReady, error: errorHandler
		}
		);
	}
}

function restoreInfo() {
    $.ajax(
        {
            url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
            data : { f : 'READ', n : stringName },
            success : readReady, error : errorHandler
        }
    );
}

function readReady(callresult) {
    if ( callresult.error!=undefined )
        alert(callresult.error);
    else if ( callresult.result!="" ) {
        const info=JSON.parse(callresult.result);
        winList = info;
        console.log(info)
    }
}

function updateReady(callresult) {
	if (callresult.error != undefined)
		alert(callresult.error);
}

function errorHandler(jqXHR, statusStr, errorStr) {
	alert(statusStr + ' ' + errorStr);
}


restoreInfo();




