const rgbaBTN=document.getElementById("rgba-btn");
const hexBTN=document.getElementById("hex-btn");
const colorName=document.getElementById("color");
const opacity=document.getElementById("opacity");


function addToHTML(colorGenerated){
    colorName.innerText=colorGenerated()
    document.body.style.backgroundColor=colorGenerated()
}


////////////Hex Color Generator
function getHexRandomColor(){
    const words=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let hexColor=""
    while(hexColor.length < 6 ){
        let randomSelect=Math.floor(Math.random() * words.length);
        hexColor+=words[randomSelect];
        
    }

    return `#${hexColor}`;
}


////////////RGB/RGBA Color Generator
function getRandomRGBAColor(){

    let O=1; // default opacity
    if(opacity.value <=1 && opacity.value >= "0.1"){
        O=opacity.value
    }

    let Red=Math.floor(Math.random() *255);
    let Green=Math.floor(Math.random() *255);
    let Blue=Math.floor(Math.random() *255);

    return `rgba(${Red},${Green},${Blue},${O})`;
   
}


rgbaBTN.addEventListener("click",()=>{
    // rgba color
    addToHTML(getRandomRGBAColor)
   

})

hexBTN.addEventListener("click",()=>{
    //hex color
    addToHTML(getHexRandomColor)
})

