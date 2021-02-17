$(document).ready(function() {
    var rellax = new Rellax('.rellax');
});

$('.icon').click(toggleNav);
var collapsed = true;
function toggleNav(){
    if(collapsed){
        $('.nav').animate({height: '250px'});
        collapsed = false;
    }  
    else{
        $('.nav').animate({height: '72px'});
        collapsed = true;
    } 
    
}
// document.getElementById('menu-icon').addEventListener('click', ()=>{
//     document.getElementById('nav-container').style.height = '200px';
// });


