
document.body.style.backgroundColor ="#0b1763"
function change_onclick() {
    bool = document.getElementById("gender").checked


    if (bool == true) {
        document.body.style.backgroundColor =  "#8124b3"
        document.querySelector(".box").innerHTML=`<div class="h">Road Rage</div>
        <div class="bu">Avoid Provocation: It's important for the individual to avoid escalating the situation by responding to the aggressive behavior with aggression of their own. They should refrain from making eye contact, gesturing, or engaging in verbal exchanges with the aggressive driver.</div>
        <div class="bu">Document the Incident: If it's safe to do so, the individual should try to document the incident by taking note of the license plate number, make and model of the vehicle, and any identifying features of the aggressive driver. They can also take photographs or videos of the scene if possible.</div>
        <div class="bu">Report to Authorities: The individual should report the incident to the authorities as soon as possible. They can contact the local police department or dial the emergency hotline (such as 112 in India) to report aggressive driving behavior or road rage incidents.</div>
        <div class="bu">Provide Information: When reporting the incident to the authorities, the individual should provide as much information as possible, including a description of the events leading up to the road rage incident, the behavior of the aggressive driver, and any damage or injuries resulting from the incident.</div>
`
    }
    else{
        document.body.style.backgroundColor ="#0b1763"
        document.querySelector(".box").innerHTML=`<div class="h">Road Rage</div>
        <div class="bu">Avoid Provocation: It's important for the individual to avoid escalating the situation by responding to the aggressive behavior with aggression of their own. They should refrain from making eye contact, gesturing, or engaging in verbal exchanges with the aggressive driver.</div>
        <div class="bu">Document the Incident: If it's safe to do so, the individual should try to document the incident by taking note of the license plate number, make and model of the vehicle, and any identifying features of the aggressive driver. They can also take photographs or videos of the scene if possible.</div>
        <div class="bu">Report to Authorities: The individual should report the incident to the authorities as soon as possible. They can contact the local police department or dial the emergency hotline (such as 112 in India) to report aggressive driving behavior or road rage incidents.</div>
        <div class="bu">Provide Information: When reporting the incident to the authorities, the individual should provide as much information as possible, including a description of the events leading up to the road rage incident, the behavior of the aggressive driver, and any damage or injuries resulting from the incident.</div>
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