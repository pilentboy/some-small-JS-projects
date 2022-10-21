const btn=document.querySelectorAll(".btn")
let food=document.querySelectorAll(".food")




function getBTNType(btn){
    if(btn.classList.contains("lunch")){
        return "lunch"
    }
    if(btn.classList.contains("dinner")){
        return "dinner"
    }
    if(btn.classList.contains("breakfast")){
        return "breakfast"
    }

}


//add NONE class according to the btn type
function filterFoods(foodType){
    food.forEach((e)=>{
        if(e.classList.contains(foodType) == false){
            e.classList.add("none")
        }else{
            e.classList.remove("none")
        }
    })
}

btn.forEach((filterBTN)=>{
    filterBTN.addEventListener("click",()=>{

        switch (getBTNType(filterBTN)){
            case "lunch":
                filterFoods("lunch")
                break;
            case "dinner":
                filterFoods("dinner")
                break; 
            case "breakfast":
                filterFoods("breakfast")
                break;
            default:
                filterFoods("food")          
                
        }

    })
})