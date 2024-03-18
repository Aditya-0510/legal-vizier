
butheadp=document.querySelector(".buthead>.p")
butheadt=document.querySelector(".buthead>.t")
boximg=document.querySelectorAll(".boximg img")
pname=document.querySelectorAll(".pname")



document.body.style.background= "linear-gradient(to right,#05090e,#3c4257)";
butheadp.style.color="#ffefd7"
butheadt.style.color="#fed287"
pname=document.querySelectorAll(".pname")

for (let i = 0; i < pname.length; i++) {
    boximg[i].style.boxShadow= "2px 2px 15px #ffffff"; 
    pname[i].style.color="#ffffff"
    
}

imgs = document.querySelectorAll(".boximg")
images = document.querySelectorAll(".boximg>img")
text = document.querySelectorAll(".boximg> .pname")
t = document.querySelectorAll(".boximg> .t")
    for (let index = 0; index < imgs.length; index++) {
        imgs[index].addEventListener("click", () => {
            images[index].style.filter="brightness(0.75)";
            images[index].style.border = "5px solid rgb(255, 198, 65)"
            text[index].style.color="rgb(255, 198, 65)"
            t[index].style.color="rgb(255, 198, 65)"
            if(index==0){
            setTimeout(()=>{
                window.location.href = "click_buttons/buttons_police.html";
            },200)}
            if(index==1){
            setTimeout(()=>{
                window.location.href = "click_buttons/buttons_street.html";
            },200)}
            if(index==6){
            setTimeout(()=>{
                window.location.href = "click_buttons/button_cyber.html";
            },200)}
            if(index==5){
            setTimeout(()=>{
                window.location.href = "click_buttons/button_residence.html";
            },200)}
            if(index==3){
            setTimeout(()=>{
                window.location.href = "click_buttons/button_school.html";
            },200)}
            if(index==2){
            setTimeout(()=>{
                window.location.href = "click_buttons/buttons_publicspaces.html";
            },200)}
            if(index==4){
            setTimeout(()=>{
                window.location.href = "click_buttons/buttons_market.html";
            },200)}
           
        })

    }


// darmode button 


function changebutbg(){
    bool=document.getElementById("modebutton").checked
    butheadp=document.querySelector(".buthead>.p")
    butheadt=document.querySelector(".buthead>.t")
    pname=document.querySelectorAll(".pname")
   


    if (bool==true){
        document.body.style.background= "linear-gradient(to right,#d3dbf6,#c2cfff)";
        
        butheadp.style.color="#000000"
        butheadt.style.color="#060b15"
        

        for (let i = 0; i < pname.length; i++) {
            pname[i].style.color="#000000";

            
        }
    }
    else{

        document.body.style.background= "linear-gradient(to right,#05090e,#3c4257)";
        butheadp.style.color="#ffefd7"
        butheadt.style.color="#fed287"
        

        for (let i = 0; i < pname.length; i++) {
            pname[i].style.color="#ffffff"
            
        }


        
    }}

function creator(){
    window.location.href = "creator/creator.html";

}
function about(){
    window.location.href = "About/index.html";

}