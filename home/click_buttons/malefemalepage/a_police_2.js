
document.body.style.backgroundColor ="#0b1763"
function change_onclick() {
    bool = document.getElementById("gender").checked


    if (bool == true) {
        document.body.style.backgroundColor =  "#8124b3"
        document.querySelector(".box").innerHTML=`<div class="h">Dealing with Police Harassment</div>
        <div class="bu">Document the Incident: If possible, document the incident by recording details such as the date, time, location, and names/badge numbers of the officers involved. This documentation may be useful if you decide to file a complaint or seek legal assistance later.</div>
        <div class="bu">File a Complaint: If you believe that your rights have been violated, consider filing a complaint with the appropriate authorities. In India, you can file a complaint with the State Human Rights Commission or the National Human Rights Commission.</div>
        <div class="bu">Know Your Rights: Familiarize yourself with your legal rights as a citizen. You have the right to be treated with dignity and respect by law enforcement officials.</div>
        <div class="bu">Stay Calm and Composed: If you encounter police harassment, try to remain calm and composed. Avoid escalating the situation through argument or confrontation.</div>
        <div class="bu">Know When to Seek Legal Help: In cases of serious harassment or abuse by the police, it may be necessary to seek legal assistance. A qualified lawyer can advise you on your rights and options for legal recourse.</div>`
    }
    else{
        document.body.style.backgroundColor ="#0b1763"
        document.querySelector(".box").innerHTML=`<div class="h">Dealing with Police Harassment</div>
        <div class="bu">Document the Incident: If possible, document the incident by recording details such as the date, time, location, and names/badge numbers of the officers involved. This documentation may be useful if you decide to file a complaint or seek legal assistance later.</div>
        <div class="bu">File a Complaint: If you believe that your rights have been violated, consider filing a complaint with the appropriate authorities. In India, you can file a complaint with the State Human Rights Commission or the National Human Rights Commission.</div>
        <div class="bu">Know Your Rights: Familiarize yourself with your legal rights as a citizen. You have the right to be treated with dignity and respect by law enforcement officials.</div>
        <div class="bu">Stay Calm and Composed: If you encounter police harassment, try to remain calm and composed. Avoid escalating the situation through argument or confrontation.</div>
        <div class="bu">Know When to Seek Legal Help: In cases of serious harassment or abuse by the police, it may be necessary to seek legal assistance. A qualified lawyer can advise you on your rights and options for legal recourse.</div>`
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