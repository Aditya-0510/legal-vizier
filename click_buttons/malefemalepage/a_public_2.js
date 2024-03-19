
document.body.style.backgroundColor ="#0b1763"
function change_onclick() {
    bool = document.getElementById("gender").checked


    if (bool == true) {
        document.body.style.backgroundColor =  "#8124b3"
        document.querySelector(".box").innerHTML=`<div class="h">Theft</div>
        <div class="bu">Filing a First Information Report (FIR): Report the theft to the police by filing an FIR at the nearest police station. Provide detailed information about the stolen property, including descriptions, value, and any identifying marks or serial numbers.</div>
        <div class="bu">Cooperating with the Investigation: Work with law enforcement authorities to provide any necessary information or evidence to aid in their investigation. This may include providing witness statements, CCTV footage, or other relevant documentation.</div>
        <div class="bu">Recovery of Stolen Property: If the stolen property is recovered by the police, the owner can claim it back by providing proof of ownership, such as receipts or photographs. The police may return the property once the investigation is complete.</div>
        <div class="bu">Legal Action Against the Perpetrator: If the identity of the thief is known, the victim can consider taking legal action against them. This may involve filing a civil lawsuit for damages or seeking restitution as part of a criminal case.</div>
        <div class="bu">Insurance Claim: If the stolen property is insured, the victim can file an insurance claim to recover the value of the stolen items. Provide the insurance company with all necessary documentation, including the FIR and proof of ownership, to support the claim.</div>
        <div class="bu">Seeking Legal Advice: Victims of theft may benefit from seeking legal advice from a qualified attorney. A lawyer can provide guidance on the legal process, rights, and options available to the victim, as well as represent them in legal proceedings if necessary.</div>
`
    }
    else{
        document.body.style.backgroundColor ="#0b1763"
        document.querySelector(".box").innerHTML=`<div class="h">Theft</div>
        <div class="bu">Filing a First Information Report (FIR): Report the theft to the police by filing an FIR at the nearest police station. Provide detailed information about the stolen property, including descriptions, value, and any identifying marks or serial numbers.</div>
        <div class="bu">Cooperating with the Investigation: Work with law enforcement authorities to provide any necessary information or evidence to aid in their investigation. This may include providing witness statements, CCTV footage, or other relevant documentation.</div>
        <div class="bu">Recovery of Stolen Property: If the stolen property is recovered by the police, the owner can claim it back by providing proof of ownership, such as receipts or photographs. The police may return the property once the investigation is complete.</div>
        <div class="bu">Legal Action Against the Perpetrator: If the identity of the thief is known, the victim can consider taking legal action against them. This may involve filing a civil lawsuit for damages or seeking restitution as part of a criminal case.</div>
        <div class="bu">Insurance Claim: If the stolen property is insured, the victim can file an insurance claim to recover the value of the stolen items. Provide the insurance company with all necessary documentation, including the FIR and proof of ownership, to support the claim.</div>
        <div class="bu">Seeking Legal Advice: Victims of theft may benefit from seeking legal advice from a qualified attorney. A lawyer can provide guidance on the legal process, rights, and options available to the victim, as well as represent them in legal proceedings if necessary.</div>
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