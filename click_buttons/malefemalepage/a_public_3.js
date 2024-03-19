
document.body.style.backgroundColor ="#0b1763"
function change_onclick() {
    bool = document.getElementById("gender").checked


    if (bool == true){
        document.body.style.backgroundColor =  "#8124b3"
        document.querySelector(".box").innerHTML=`<div class="h">Encountered Illegal activity</div>
        <div class="bu">File a Complaint or Lawsuit: Depending on the nature of the illegal activity and the harm it has caused, you may choose to file a formal complaint or lawsuit against the individuals or entities responsible. This could involve civil litigation for damages or seeking injunctive relief to stop the illegal activity.</div>
        <div class="bu">Support Legal Action: If the illegal activity affects others in your community or industry, consider supporting collective legal action, such as class-action lawsuits or advocacy campaigns. Working together can amplify your efforts and increase the likelihood of success.</div>
        <div class="bu">Advocate for Change: If the illegal activity is indicative of broader systemic issues or gaps in regulations, advocate for policy changes or reforms to address the underlying issues. This could involve lobbying lawmakers, raising awareness, or participating in public advocacy campaigns.</div>
        
`
    }
    else{
        document.body.style.backgroundColor ="#0b1763"
        document.querySelector(".box").innerHTML=`<div class="h">Encountered Illegal activity</div>
        <div class="bu">File a Complaint or Lawsuit: Depending on the nature of the illegal activity and the harm it has caused, you may choose to file a formal complaint or lawsuit against the individuals or entities responsible. This could involve civil litigation for damages or seeking injunctive relief to stop the illegal activity.</div>
        <div class="bu">Support Legal Action: If the illegal activity affects others in your community or industry, consider supporting collective legal action, such as class-action lawsuits or advocacy campaigns. Working together can amplify your efforts and increase the likelihood of success.</div>
        <div class="bu">Advocate for Change: If the illegal activity is indicative of broader systemic issues or gaps in regulations, advocate for policy changes or reforms to address the underlying issues. This could involve lobbying lawmakers, raising awareness, or participating in public advocacy campaigns.</div>
        
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