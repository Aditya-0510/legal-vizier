
document.body.style.backgroundColor ="#0b1763"
function change_onclick() {
    bool = document.getElementById("gender").checked


    if (bool == true) {
        document.body.style.backgroundColor =  "#8124b3"
        document.querySelector(".box").innerHTML=` <div class="h">Assaulted by Teacher/Authority </div>
        <div class="bu">If assaulted by a teacher, take these legal steps:</div>
        <div class="bu">Report the assault to the police.</div>
        <div class="bu">Seek medical attention for any injuries.</div>
        <div class="bu">Document evidence, such as witness statements and photographs.</div>
        <div class="bu">Inform school authorities about the assault.</div>
        <div class="bu">Consider consulting a lawyer for legal guidance.</div>
        <div class="bu">Cooperate with law enforcement during the investigation.</div>
        <div class="bu">File a civil lawsuit for damages if necessary.</div>
        <div class="bu">Request protection orders if safety is a concern.</div>
        <div class="bu">Follow up on the case's progress with authorities.</div>
        <div class="bu">Consider advocating for changes in school policies to prevent future incidents.</div>
       
`
    }
    else{
        document.body.style.backgroundColor ="#0b1763"
        document.querySelector(".box").innerHTML=` <div class="h">Assaulted by Teacher/Authority </div>
        <div class="bu">If assaulted by a teacher, take these legal steps:</div>
        <div class="bu">Report the assault to the police.</div>
        <div class="bu">Seek medical attention for any injuries.</div>
        <div class="bu">Document evidence, such as witness statements and photographs.</div>
        <div class="bu">Inform school authorities about the assault.</div>
        <div class="bu">Consider consulting a lawyer for legal guidance.</div>
        <div class="bu">Cooperate with law enforcement during the investigation.</div>
        <div class="bu">File a civil lawsuit for damages if necessary.</div>
        <div class="bu">Request protection orders if safety is a concern.</div>
        <div class="bu">Follow up on the case's progress with authorities.</div>
        <div class="bu">Consider advocating for changes in school policies to prevent future incidents.</div>
       
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