
document.body.style.backgroundColor ="#0b1763"
function change_onclick() {
    bool = document.getElementById("gender").checked


    if (bool == true) {
        document.body.style.backgroundColor =  "#8124b3"
        document.querySelector(".box").innerHTML=`<div class="h">Encountered Protest (Road Block)</div>
        <div class="bu">Respect the Right to Protest: Recognize that protesting is a fundamental right guaranteed by the constitution. While it may be inconvenient, protesters have the right to express their grievances peacefully.
            "Article 19(1)(b): All citizens shall have the right to assemble peaceably and without arms."
            </div>
        <div class="bu">Follow Authorities' Instructions: If law enforcement is present, follow their instructions and guidance. They are responsible for maintaining public safety and may provide directions on how to proceed safely.</div>
        <div class="bu">Report Illegal Activity: If you witness any illegal activity during the protest, such as violence or property damage, report it to the authorities immediately. Provide as much detail as possible to assist with their investigation</div>`
    }
    else{
        document.body.style.backgroundColor ="#0b1763"
        document.querySelector(".box").innerHTML=`<div class="h">Encountered Protest (Road Block)</div>
        <div class="bu">Respect the Right to Protest: Recognize that protesting is a fundamental right guaranteed by the constitution. While it may be inconvenient, protesters have the right to express their grievances peacefully.
            "Article 19(1)(b): All citizens shall have the right to assemble peaceably and without arms."
            </div>
        <div class="bu">Follow Authorities' Instructions: If law enforcement is present, follow their instructions and guidance. They are responsible for maintaining public safety and may provide directions on how to proceed safely.</div>
        <div class="bu">Report Illegal Activity: If you witness any illegal activity during the protest, such as violence or property damage, report it to the authorities immediately. Provide as much detail as possible to assist with their investigation</div>`
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