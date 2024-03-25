
function makeBubble(){
    var clutter="" ;
    for(var i =1;i<=133;i++){
        clutter += `  <div class="buble">${Math.floor(Math.random()*10 +1)}</div>`;
    }
    document.querySelector('.pbtm').innerHTML =clutter;
}
var time =60;
function runTimer(){
   var timer = setInterval(function(){
    if(time >0){
        time--;
        document.querySelector('#timeval').innerHTML =`${time}`;
    }
    else{
        clearInterval(timer);
        document.querySelector(".pbtm").innerHTML =`<h1>Game Over</h1>`;
    }
      },1000);
}
var hitval =0;
function hitgenerator(){
      hitval = Math.floor(Math.random()*10 +1);
      document.querySelector('#hitval').innerHTML =`${hitval}`;
}
var score =0;
function scorechange(){
    //document.getElementsByClassName('buble').;
 var val= parseInt(document.getElementById('scoreval').textContent) +10;
 document.getElementById('scoreval').textContent =val;
};

document.querySelector('.pbtm').addEventListener('click',function(details){
    var clickedval = parseInt(details.target.textContent);
    if(hitval === clickedval){
        scorechange();
        makeBubble();
        hitgenerator();
        console.log('clcked');
    }
   
    
});
makeBubble();
runTimer();
hitgenerator();


//event bubling
//jispe click karonge wo element par event raise hoga ,aur event listner
//naa milne par event element ke parent par listner dhundhega,waha bhi naa milne par event
//parent ke parent ke parent par listner dhundega