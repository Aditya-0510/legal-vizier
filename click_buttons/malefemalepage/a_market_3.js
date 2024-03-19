
document.body.style.backgroundColor ="#0b1763"
function change_onclick() {
    bool = document.getElementById("gender").checked


    if (bool == true) {
        document.body.style.backgroundColor =  "#8124b3"
        document.querySelector(".box").innerHTML=`<div class="h">False Advertising</div>
        <div class="bu">
            Gather Evidence: Collect evidence of the false advertising, including advertisements, product labels, promotional materials, and any communications with the advertiser.
        </div>
        <div class="bu">
            Consult a Lawyer: Seek legal advice from a lawyer specializing in consumer protection or advertising law. They can assess the situation and advise on the best course of action.
        </div>
        <div class="bu">
            File a Complaint: File a complaint with relevant regulatory authorities such as the Advertising Standards Council of India (ASCI), the Consumer Protection Authority, or the Competition Commission of India (CCI).
        </div>
        <div class="bu">
            Cease and Desist Letter: Send a cease and desist letter to the advertiser demanding them to stop the false advertising practices. This letter may also request compensation for any damages incurred.
        </div>
        <div class="bu">
            Legal Action: Consider taking legal action against the advertiser for false advertising. This may involve filing a lawsuit for damages or seeking injunctive relief to stop the misleading advertisements.
        </div>
`
    }
    else{
        document.body.style.backgroundColor ="#0b1763"
        document.querySelector(".box").innerHTML=`<div class="h">False Advertising</div>
        <div class="bu">
            Gather Evidence: Collect evidence of the false advertising, including advertisements, product labels, promotional materials, and any communications with the advertiser.
        </div>
        <div class="bu">
            Consult a Lawyer: Seek legal advice from a lawyer specializing in consumer protection or advertising law. They can assess the situation and advise on the best course of action.
        </div>
        <div class="bu">
            File a Complaint: File a complaint with relevant regulatory authorities such as the Advertising Standards Council of India (ASCI), the Consumer Protection Authority, or the Competition Commission of India (CCI).
        </div>
        <div class="bu">
            Cease and Desist Letter: Send a cease and desist letter to the advertiser demanding them to stop the false advertising practices. This letter may also request compensation for any damages incurred.
        </div>
        <div class="bu">
            Legal Action: Consider taking legal action against the advertiser for false advertising. This may involve filing a lawsuit for damages or seeking injunctive relief to stop the misleading advertisements.
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