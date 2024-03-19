
document.body.style.backgroundColor ="#0b1763"
function change_onclick() {
    bool = document.getElementById("gender").checked


    if (bool == true) {
        document.body.style.backgroundColor =  "#8124b3"
        document.querySelector(".box").innerHTML=`<div class="h">Virus</div>
        <div class="bu">
Quarantine and Remove: If you suspect your computer is infected with a virus, immediately disconnect it from the internet and other devices to prevent the virus from spreading. Use antivirus software to scan and remove the virus from your system.
        </div>
        <div class="bu">
Document Damage: Document any damage or losses caused by the virus, such as data corruption, financial loss, or disruption of business operations. Keep detailed records of any expenses incurred as a result of the virus.
        </div>
        <div class="bu">
Report to Authorities: Depending on the severity of the virus and its impact, you may consider reporting it to law enforcement authorities. This is particularly important if the virus was part of a cyberattack or if it resulted in significant financial losses.
        </div>
        <div class="bu">
File a Lawsuit: If the virus was intentionally created and distributed by a malicious party, you may have grounds for a lawsuit. This could include claims for negligence, fraud, or intentional infliction of harm. Consult with a lawyer who specializes in cyber law or computer security to evaluate your legal options.
        </div>
        <div class="bu">
Notify Relevant Parties: If the virus compromised sensitive information or affected third parties, such as customers or business partners, you may be legally obligated to notify them of the breach. Laws regarding data breaches vary by jurisdiction, so be sure to comply with applicable regulations.
        </div>
        <div class="bu">
Review Contracts and Insurance Policies: Review any contracts or insurance policies that may be relevant to the virus incident. This could include agreements with vendors, service providers, or cybersecurity insurance coverage. Determine if there are any contractual obligations or insurance claims that need to be addressed.
        </div>
        <div class="bu">
Improve Security Measures: Take proactive steps to strengthen your cybersecurity defenses and prevent future virus infections. This could include implementing robust antivirus software, conducting regular security audits, and providing training for employees on cybersecurity best practices.
        </div>
        <div class="bu">
Seek Compensation: If you suffered financial losses or damages as a result of the virus, explore options for seeking compensation. This could involve filing insurance claims, pursuing restitution from the responsible parties, or seeking compensation through a civil lawsuit.
        </div>
`
    }
    else{
        document.body.style.backgroundColor ="#0b1763"
        document.querySelector(".box").innerHTML=`<div class="h">Virus</div>
        <div class="bu">
Quarantine and Remove: If you suspect your computer is infected with a virus, immediately disconnect it from the internet and other devices to prevent the virus from spreading. Use antivirus software to scan and remove the virus from your system.
        </div>
        <div class="bu">
Document Damage: Document any damage or losses caused by the virus, such as data corruption, financial loss, or disruption of business operations. Keep detailed records of any expenses incurred as a result of the virus.
        </div>
        <div class="bu">
Report to Authorities: Depending on the severity of the virus and its impact, you may consider reporting it to law enforcement authorities. This is particularly important if the virus was part of a cyberattack or if it resulted in significant financial losses.
        </div>
        <div class="bu">
File a Lawsuit: If the virus was intentionally created and distributed by a malicious party, you may have grounds for a lawsuit. This could include claims for negligence, fraud, or intentional infliction of harm. Consult with a lawyer who specializes in cyber law or computer security to evaluate your legal options.
        </div>
        <div class="bu">
Notify Relevant Parties: If the virus compromised sensitive information or affected third parties, such as customers or business partners, you may be legally obligated to notify them of the breach. Laws regarding data breaches vary by jurisdiction, so be sure to comply with applicable regulations.
        </div>
        <div class="bu">
Review Contracts and Insurance Policies: Review any contracts or insurance policies that may be relevant to the virus incident. This could include agreements with vendors, service providers, or cybersecurity insurance coverage. Determine if there are any contractual obligations or insurance claims that need to be addressed.
        </div>
        <div class="bu">
Improve Security Measures: Take proactive steps to strengthen your cybersecurity defenses and prevent future virus infections. This could include implementing robust antivirus software, conducting regular security audits, and providing training for employees on cybersecurity best practices.
        </div>
        <div class="bu">
Seek Compensation: If you suffered financial losses or damages as a result of the virus, explore options for seeking compensation. This could involve filing insurance claims, pursuing restitution from the responsible parties, or seeking compensation through a civil lawsuit.
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