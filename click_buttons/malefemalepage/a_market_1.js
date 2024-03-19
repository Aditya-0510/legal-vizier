
document.body.style.backgroundColor ="#0b1763"
function change_onclick() {
    bool = document.getElementById("gender").checked


    if (bool == true) {
        document.body.style.backgroundColor =  "#8124b3"
        document.querySelector(".box").innerHTML=`<div class="h">laws for overcharging/short- changing/weighing inaccuracy in market place
        </div>
        <div class="bu">
In the market, offenses related to weights and measures, as well as food adulteration, result in incalculable losses for consumers. 
        </div>
        <div class="bu">
Contact information for Weights and Measures officers and police officers is prominently displayed on signage, allowing consumers to report instances of underweight goods.
        </div>
        <div class="bu">
Consumers have access to the Food Administration and Prevention Department for regular inspections of food items in the market and verification of the FSSAI (Food Safety and Standards Authority of India) certification on food packaging.
        </div>
        <div class="bu">
Vigilant groups and assisting public officials operate in the markets, collaborating with authorities to address issues effectively.
        </div>
        <div class="bu">
Charts outlining penal sections are prominently displayed in the markets to deter irregularities by potential offenders.
        </div>
`
    }
    else{
        document.body.style.backgroundColor ="#0b1763"
        document.querySelector(".box").innerHTML=`<div class="h">laws for overcharging/short- changing/weighing inaccuracy in market place
        </div>
        <div class="bu">
In the market, offenses related to weights and measures, as well as food adulteration, result in incalculable losses for consumers. 
        </div>
        <div class="bu">
Contact information for Weights and Measures officers and police officers is prominently displayed on signage, allowing consumers to report instances of underweight goods.
        </div>
        <div class="bu">
Consumers have access to the Food Administration and Prevention Department for regular inspections of food items in the market and verification of the FSSAI (Food Safety and Standards Authority of India) certification on food packaging.
        </div>
        <div class="bu">
Vigilant groups and assisting public officials operate in the markets, collaborating with authorities to address issues effectively.
        </div>
        <div class="bu">
Charts outlining penal sections are prominently displayed in the markets to deter irregularities by potential offenders.
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