const Counter=document.getElementById("counter");
const resetBTN=document.getElementById("reset");
const decreaseBTN=document.getElementById("decrease");
const IncreaseBTN=document.getElementById("increase");

const btns=document.querySelectorAll(".btn");




// //change counte color settings
function checkNumber(number){
    if( number >= 1){
        Counter.style.color="green";
    }else if(number < 0){
        Counter.style.color="red";}
    else{
        Counter.style.color="white";
    }
}


let count=0;
let timer ;

function decreasingCounter(){
    count--;
    Counter.innerText=count
    checkNumber(count)
}

function increasingCounter(){
    count++;
    Counter.innerText=count
    checkNumber(count)
}


btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        clearInterval(timer)

        // detect the btn clicked
        let buttonClicked=e.currentTarget.classList;
       
        if(buttonClicked.contains("decrease")){
            timer=setInterval(decreasingCounter,1000)
        }else if(buttonClicked.contains("increase")){
            timer=setInterval(increasingCounter,1000)

        }else{
           
            count=0
            checkNumber(count)
            Counter.innerText=count

        }
        

    })
})


