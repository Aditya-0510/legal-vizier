
document.body.style.backgroundColor ="#0b1763"
function change_onclick() {
    bool = document.getElementById("gender").checked


    if (bool == true) {
        document.body.style.backgroundColor =  "#8124b3"
        document.querySelector(".box").innerHTML=` <div class="h">Scam Calls</div>
        <div class="bu">
            Hang Up: The first step is to simply hang up the phone. Do not engage with the caller or provide
            them with any personal information.
        </div>
        <div class="bu">
            Report the Call: You can report scam calls to the appropriate authorities. In the United States, you
            can report them to the Federal Trade Commission (FTC) at ftc.gov/complaint. In other countries,
            check with your local consumer protection agency or telecommunications regulator.
        </div>
        <div class="bu">
            Block the Number: If possible, block the number from which the scam call originated. This can help
            prevent further attempts from the same caller.
        </div>
        <div class="bu">
            Contact Your Phone Service Provider: Inform your phone service provider about the scam call. They
            may have resources or services to help block or filter scam calls in the future.
        </div>
        <div class="bu">
            Consider Legal Action: If you believe you have been a victim of fraud or if the scam call has
            resulted in financial loss, you may consider seeking legal advice. Contact a lawyer who specializes
            in consumer protection or fraud cases to discuss your options.
        </div>
        <div class="bu">
            Educate Yourself: Stay informed about common scam tactics and learn how to recognize them. Websites
            like the FTC's consumer information page offer resources and tips for identifying and avoiding
            scams.
        </div>
        <div class="bu">
            Protect Your Personal Information: Be cautious about sharing personal information, especially over
            the phone. Legitimate organizations typically won't ask for sensitive information like your Social
            Security number or banking details over the phone.
        </div>
`
    }
    else{
        document.body.style.backgroundColor ="#0b1763"
        document.querySelector(".box").innerHTML=` <div class="h">Scam Calls</div>
        <div class="bu">
            Hang Up: The first step is to simply hang up the phone. Do not engage with the caller or provide
            them with any personal information.
        </div>
        <div class="bu">
            Report the Call: You can report scam calls to the appropriate authorities. In the United States, you
            can report them to the Federal Trade Commission (FTC) at ftc.gov/complaint. In other countries,
            check with your local consumer protection agency or telecommunications regulator.
        </div>
        <div class="bu">
            Block the Number: If possible, block the number from which the scam call originated. This can help
            prevent further attempts from the same caller.
        </div>
        <div class="bu">
            Contact Your Phone Service Provider: Inform your phone service provider about the scam call. They
            may have resources or services to help block or filter scam calls in the future.
        </div>
        <div class="bu">
            Consider Legal Action: If you believe you have been a victim of fraud or if the scam call has
            resulted in financial loss, you may consider seeking legal advice. Contact a lawyer who specializes
            in consumer protection or fraud cases to discuss your options.
        </div>
        <div class="bu">
            Educate Yourself: Stay informed about common scam tactics and learn how to recognize them. Websites
            like the FTC's consumer information page offer resources and tips for identifying and avoiding
            scams.
        </div>
        <div class="bu">
            Protect Your Personal Information: Be cautious about sharing personal information, especially over
            the phone. Legitimate organizations typically won't ask for sensitive information like your Social
            Security number or banking details over the phone.
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