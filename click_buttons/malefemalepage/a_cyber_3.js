
document.body.style.backgroundColor ="#0b1763"
function change_onclick() {
    bool = document.getElementById("gender").checked


    if (bool == true) {
        document.body.style.backgroundColor =  "#8124b3"
        document.querySelector(".box").innerHTML=`<div class="h">Cyber Bullying</div>
        <div class="bu">
In cases of cyber fraud, victims must report the incident to the National Cyber Crime Reporting Portal (NCRP) and provide details of the loss incurred.
        </div>
        <div class="bu">
Victims can also send a message to the toll-free number 1930 to notify authorities of the crime.
        </div>
        <div class="bu">
Upon receipt of the message, authorities promptly freeze the lost amount.
        </div>
        <div class="bu">
Subsequently, the police contact the victim to file an FIR for investigation.
        </div>
        <div class="bu">
Throughout the process, the police gather statements from the victim and banks regarding the loss.
        </div>
        <div class="bu">
Following this, the system facilitates the refund of the amount from the accused's account to the victim without delay, bypassing the need for a court process.
        </div>
        <div class="bu">
The government's stringent mechanisms are actively combating cyber fraud, including data theft, morphing, and hacking.
        </div>
`
    }
    else{
        document.body.style.backgroundColor ="#0b1763"
        document.querySelector(".box").innerHTML=`<div class="h">Cyber Bullying</div>
        <div class="bu">
In cases of cyber fraud, victims must report the incident to the National Cyber Crime Reporting Portal (NCRP) and provide details of the loss incurred.
        </div>
        <div class="bu">
Victims can also send a message to the toll-free number 1930 to notify authorities of the crime.
        </div>
        <div class="bu">
Upon receipt of the message, authorities promptly freeze the lost amount.
        </div>
        <div class="bu">
Subsequently, the police contact the victim to file an FIR for investigation.
        </div>
        <div class="bu">
Throughout the process, the police gather statements from the victim and banks regarding the loss.
        </div>
        <div class="bu">
Following this, the system facilitates the refund of the amount from the accused's account to the victim without delay, bypassing the need for a court process.
        </div>
        <div class="bu">
The government's stringent mechanisms are actively combating cyber fraud, including data theft, morphing, and hacking.
        </div>
`
    }



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
        <!-- <link rel="stylesheet" href="style_dark.css"> -->
        <link rel="stylesheet" href="style.css">`

    }
    else{

        btn.style.backgroundColor="#c6c6c6"

        document.head.innerHTML=`<meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="style_dark.css"> 
        <!--<link rel="stylesheet" href="style.css">-->`
    }}

    function creator(){
        window.location.href = "https://aditya-0510.github.io/legal-vizier/creator/creator.html";
    
    }
    function about(){
        window.location.href = "https://aditya-0510.github.io/legal-vizier/About/index.html";
    
    }