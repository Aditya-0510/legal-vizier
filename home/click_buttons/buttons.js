
// console.log("jhfddsd");


imgs = document.querySelectorAll(".boximg")





t = document.querySelectorAll(".boximg> .pname")

    for (let index = 0; index < imgs.length; index++) {
            imgs[index].addEventListener("click", () => {

            // t[index].style.color="#0b0c35"
            imgs[index].style.backgroundColor="#000000";
            // imgs[index].style.boxShadow = "-4px 0px 10px #000000"
            
            setTimeout(()=>{
                window.location.href = "malefemalepage/index.html";
            },300)
           
        })

    }


// darmode button 


function changebutbg(){
    bool=document.getElementById("modebutton").checked

    btn=document.getElementById("modebutton")

    if (bool==true){
        btn.style.backgroundColor="black"
        document.head.innerHTML=`<meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        
        <link rel="stylesheet" href="buttons.css">`

    }
    else{

        btn.style.backgroundColor="#c6c6c6"

        document.head.innerHTML=`<meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="buttons_black.css"> 
        `
    }}
