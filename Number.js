let secret=Math.trunc(Math.random()*20)+1;
let count=20;
let maxi=0;
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(typeof guess);
    if(!guess){
        document.querySelector('.message').textContent='No number!';
    }
   else if(guess===secret){
    document.querySelector('.message').textContent='Correct Number hurrah!';
    document.querySelector('body').style.backgroundColor= '#226';
    document.querySelector('.number').textContent=secret;
    maxi=Math.max(maxi,count);
    document.querySelector('.highscore').textContent='highscore:'+maxi;
   }
   else if(guess>secret){
    if(count>1){
    document.querySelector('.message').textContent='Too high';
    count--;
    document.querySelector('.score').textContent=count;}
    else{
        document.querySelector('.message').textContent='You Lost!!';
        document.querySelector('.score').textContent=0;
    }
   }
   else{
    if(count>1){
    document.querySelector('.message').textContent='Too Low';
    count--;
    document.querySelector('.score').textContent=count;}
    else{
        document.querySelector('.score').textContent=0;
        document.querySelector('.message').textContent='You lost!!';
    }
   }
})

document.querySelector('.again').addEventListener('click',function(){
    secret=Math.trunc(Math.random()*20)+1;
    count=20;
    document.querySelector('.score').textContent=count;
    document.querySelector('.number').textContent='?';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.guess').value='';
    document.querySelector('.message').textContent='Start Guessing..';
})
