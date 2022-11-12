let attack_btn_player1 = document.querySelector('.attack_btn_player1')
let attack_btn_player2 = document.querySelector('.attack_btn_player2')

attack_btn_player1.addEventListener("touchstart",function(){
    Player1.attacking();
    console.log('attack')    
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