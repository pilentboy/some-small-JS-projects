
let reviews=[
    {
        id:1,
        name : "John",
        job : "Developer",
        description:`I'm a developer. I can build websites
        without any problem . the firt project is Free!
        `,
        image : "./images/1.jpg"
    },
    {
        id:2,
        name : "Mark",
        job : "Designer",
        description:`I'm a Designer. check out my projects at
        wwww.markDesigns.com
        `,
        image : "./images/2.jpg"
    },
    {
        id:3,
        name : "Mary",
        job : "Designer",
        description:`I'm a Designer. I'm not the best 
        but I try to be my best
        `,
        image : "./images/3.jpg"
    }
]


// get btns
let arrowBTNs=document.querySelectorAll(".arrow");
let item=document.querySelector(".item");
let randomBTN=document.querySelector(".btn");

//get other elemetns
let userImage=document.querySelector(".userImage");
let userName=document.querySelector(".userName");
let userJob=document.querySelector(".userJob");
let userDesciption=document.querySelector(".userDescription");





// item index displaying
let index=0


// display first item according to the index
window.addEventListener("DOMContentLoaded",()=>{
    displayItems(index)

})


function displayItems(index){
    userName.innerHTML=reviews[index].name
    userJob.innerHTML=reviews[index].job
    userDesciption.innerHTML=reviews[index].description
    userImage.src=reviews[index].image
}


// to right
function rightArrow(){
    index++;

    if(index == reviews.length){
        index=0;
    }

}

// to left
function leftArrow(){

    if(index == 0){
        index=reviews.length;
    }

    index--;


}

randomBTN.addEventListener("click",()=>{
    index=Math.floor(Math.random() * reviews.length)
    displayItems(index);
})



arrowBTNs.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        let detectBTN=e.currentTarget.classList;
        if(detectBTN.contains("right")){
            rightArrow()
        }else{
            leftArrow()
        }
        displayItems(index);
    })
})
