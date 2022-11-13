let attack_btn_player1 = document.querySelector('.attack_btn_player1')
let attack_btn_player2 = document.querySelector('.attack_btn_player2')
let right_player1 = document.querySelector('.right')
let left_player1 = document.querySelector('.left')
let up_player1 = document.querySelector('.up')

let right_player2 = document.querySelector('.right_player2')
let left_player2 = document.querySelector('.left_player2')
let up_player2 = document.querySelector('.up_player2')

// if(gameStatus === 1){
    attack_btn_player1.addEventListener("touchstart",function(){
        
        Player1.attacking();
        
        console.log(gameStatus)    
    },false)
    attack_btn_player2.addEventListener("touchstart",function(){
        Player2.attacking();
        console.log('attack')    
    },false)

    attack_btn_player1.addEventListener("touchend",function(){
        Player1.attack = false 
    },false)
    attack_btn_player2.addEventListener("touchend",function(){
        Player2.attack = false
            
    },false)


    right_player1.addEventListener("touchstart",function(){
        Player1.speed.x = 5;   
    },false);
    right_player1.addEventListener("touchend",function(){
        Player1.speed.x = 0;   
    },false)

    left_player1.addEventListener("touchstart",function(){
        Player1.speed.x = -5;   
    },false);
    left_player1.addEventListener("touchend",function(){
        Player1.speed.x = 0;   
    },false)
    up_player1.addEventListener("touchstart",function(){
        if(Player1.speed.y == 0)
        Player1.speed.y = -10;   
    },false);




    right_player2.addEventListener("touchstart",function(){
        Player2.speed.x = 5;   
    },false);
    right_player2.addEventListener("touchend",function(){
        Player2.speed.x = 0;   
    },false)

    left_player2.addEventListener("touchstart",function(){
        Player2.speed.x = -5;   
    },false);
    left_player2.addEventListener("touchend",function(){
        Player2.speed.x = 0;   
    },false)

    up_player2.addEventListener("touchstart",function(){
        if(Player2.speed.y == 0)
        Player2.speed.y = -10;   
    },false);

// }

// обработчики ударов и передвижения
document.addEventListener('keydown',(EO)=>{
    EO=EO||window.event;
    console.log(EO.key)
    if(gameStatus === 1)
        switch(EO.key) {
            case 'd':
    
                Player1.speed.x = 5;
            break
            case 'a':
        
                Player1.speed.x = -5;
            break 
            case 'w':
                if(Player1.speed.y == 0)
                Player1.speed.y = -10;
            break 
            case 'ArrowRight':

                Player2.speed.x = 5;
            break
            case 'ArrowLeft':

                Player2.speed.x = -5;
            break
            case 'ArrowUp':
                if(Player2.speed.y == 0)
                Player2.speed.y = -10;
            break
            case 's':

                Player1.attacking();
            break
            case 'ArrowDown':

                Player2.attacking();
            break

        }
   
})

document.addEventListener('keyup',(EO)=>{
    EO=EO||window.event;
    switch(EO.key) {
        case 'd':
            Player1.speed.x = 0;
        break
        case 'a':
            Player1.speed.x = 0;
        break
        case 'ArrowRight':

            Player2.speed.x = 0;
        break
        case 'ArrowLeft':

            Player2.speed.x = 0;
        break
        case 's':

            Player1.attack = false;
        break
        case 'ArrowDown':
  
            Player2.attack = false;
        break     
    }    
    }
   
)






// document.addEventListener('keydown',(EO)=>{
//     EO=EO||window.event;
//     console.log(EO.key)
//     if(gameStatus === 1)
//         switch(EO.key) {
//             case 'd':
    
//                 Player1.speed.x = 5;
//             break
//             case 'a':
        
//                 Player1.speed.x = -5;
//             break 
//             case 'w':

//                 Player1.speed.y = -10;
//             break 
//             case 'ArrowRight':

//                 Player2.speed.x = 5;
//             break
//             case 'ArrowLeft':

//                 Player2.speed.x = -5;
//             break
//             case 'ArrowUp':

//                 Player2.speed.y = -10;
//             break
//             case 's':

//                 Player1.attacking();
//             break
//             case 'ArrowDown':

//                 Player2.attacking();
//             break

//         }
   
// })

// document.addEventListener('keyup',(EO)=>{
//     EO=EO||window.event;
//     switch(EO.key) {
//         case 'd':
//             Player1.speed.x = 0;
//         break
//         case 'a':
//             Player1.speed.x = 0;
//         break
//         case 'ArrowRight':

//             Player2.speed.x = 0;
//         break
//         case 'ArrowLeft':

//             Player2.speed.x = 0;
//         break
//         case 's':

//             Player1.attack = false;
//         break
//         case 'ArrowDown':
  
//             Player2.attack = false;
//         break     
//     }    
//     }
   
// )