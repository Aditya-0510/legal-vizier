
document.body.style.backgroundColor ="#0b1763"
function change_onclick() {
    bool = document.getElementById("gender").checked


    if (bool == true){
        document.body.style.backgroundColor =  "#8124b3"
        document.querySelector(".box").innerHTML=` <div class="h">Fight</div>
        <div class="bu">Report to Authorities: If the fight involves criminal behavior or poses a threat to safety, individuals should report the incident to the police immediately. Provide details of the altercation, including the location, time, and description of those involved.</div>
        <div class="bu">Document Injuries and Damage: Seek medical attention for any injuries sustained during the fight and document them with photographs or medical records. If there is property damage, such as broken belongings or damage to vehicles, document this as well.</div>
        <div class="bu">Witness Statements: Gather contact information from any witnesses to the altercation. Witness statements can provide crucial evidence in legal proceedings and help corroborate your version of events.</div>
        <div class="bu">Restraint Orders: If the altercation involves ongoing threats or harassment from the other party, individuals can seek restraining orders or injunctions from the court to prevent further contact or harassment.</div>
        <div class="bu">Alternative Dispute Resolution (ADR): In some cases, parties involved in a fight may choose to resolve their dispute through mediation or other forms of alternative dispute resolution. A neutral third party can facilitate negotiations and help reach a mutually agreeable resolution without going to court.</div>
        <div class="bu">Legal Representation: Consider consulting with a lawyer who specializes in criminal defense or personal injury law. A lawyer can provide guidance on your legal rights, options, and potential courses of action.</div>
        <div class="bu">Filing Charges: If criminal behavior occurred during the fight, such as assault or battery, individuals can press charges against the other party. This involves filing a formal complaint with law enforcement and cooperating with the subsequent investigation and legal proceedings.</div>
        <div class="bu">Civil Lawsuit: In addition to criminal charges, individuals may choose to file a civil lawsuit against the other party for damages. This could include compensation for medical expenses, lost wages, pain and suffering, and other losses resulting from the altercation.</div>
        <div class="bu">Self-Defense: If you were defending yourself or others during the altercation, be prepared to provide evidence supporting your claim of self-defense. This could include witness statements, physical evidence, and testimony from experts.</div>
        <div class="bu">Follow Legal Process: Cooperate with law enforcement, legal authorities, and any court proceedings related to the altercation. Adhering to the legal process ensures that your rights are protected and that justice is served.</div>
`
    }
    else{
        document.body.style.backgroundColor ="#0b1763"
        document.querySelector(".box").innerHTML=` <div class="h">Fight</div>
        <div class="bu">Report to Authorities: If the fight involves criminal behavior or poses a threat to safety, individuals should report the incident to the police immediately. Provide details of the altercation, including the location, time, and description of those involved.</div>
        <div class="bu">Document Injuries and Damage: Seek medical attention for any injuries sustained during the fight and document them with photographs or medical records. If there is property damage, such as broken belongings or damage to vehicles, document this as well.</div>
        <div class="bu">Witness Statements: Gather contact information from any witnesses to the altercation. Witness statements can provide crucial evidence in legal proceedings and help corroborate your version of events.</div>
        <div class="bu">Restraint Orders: If the altercation involves ongoing threats or harassment from the other party, individuals can seek restraining orders or injunctions from the court to prevent further contact or harassment.</div>
        <div class="bu">Alternative Dispute Resolution (ADR): In some cases, parties involved in a fight may choose to resolve their dispute through mediation or other forms of alternative dispute resolution. A neutral third party can facilitate negotiations and help reach a mutually agreeable resolution without going to court.</div>
        <div class="bu">Legal Representation: Consider consulting with a lawyer who specializes in criminal defense or personal injury law. A lawyer can provide guidance on your legal rights, options, and potential courses of action.</div>
        <div class="bu">Filing Charges: If criminal behavior occurred during the fight, such as assault or battery, individuals can press charges against the other party. This involves filing a formal complaint with law enforcement and cooperating with the subsequent investigation and legal proceedings.</div>
        <div class="bu">Civil Lawsuit: In addition to criminal charges, individuals may choose to file a civil lawsuit against the other party for damages. This could include compensation for medical expenses, lost wages, pain and suffering, and other losses resulting from the altercation.</div>
        <div class="bu">Self-Defense: If you were defending yourself or others during the altercation, be prepared to provide evidence supporting your claim of self-defense. This could include witness statements, physical evidence, and testimony from experts.</div>
        <div class="bu">Follow Legal Process: Cooperate with law enforcement, legal authorities, and any court proceedings related to the altercation. Adhering to the legal process ensures that your rights are protected and that justice is served.</div>
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