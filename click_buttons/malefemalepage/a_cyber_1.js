
document.body.style.backgroundColor ="#0b1763"
function change_onclick() {
    bool = document.getElementById("gender").checked


    if (bool == true) {
        document.body.style.backgroundColor =  "#8124b3"
        document.querySelector(".box").innerHTML=` <div class="h">Fake Websites</div>
        <div class="bu">
Cease and Desist Letter: A cease and desist letter can be sent to the operator of the fake website, demanding that they stop using copyrighted material, trademarks, or engaging in fraudulent activities.
        </div>
        <div class="bu">
Legal Action for Fraud: Victims of fraudulent websites may pursue legal action against the operators for fraud. This could involve filing a civil lawsuit to seek damages for financial losses incurred as a result of the scam.
        </div>
        <div class="bu">
Complaint to Consumer Protection Agencies: Victims can file complaints with consumer protection agencies, such as the Federal Trade Commission (FTC) in the United States or similar agencies in other countries. These agencies may investigate the website and take enforcement actions against the operators.
        </div>
        <div class="bu">
Report to Law Enforcement: Reporting the fake website to law enforcement authorities can prompt investigations into criminal activities, such as identity theft, phishing, or online fraud. Law enforcement agencies may take action to shut down the website and prosecute the perpetrators.
        </div>
        <div class="bu">
Domain Name Dispute Resolution: If the fake website is using a domain name that infringes on a trademark or is registered in bad faith, legal action can be taken through domain name dispute resolution processes, such as those provided by the Internet Corporation for Assigned Names and Numbers (ICANN).
        </div>
        <div class="bu">
            Seek Injunctions: Victims may seek injunctive relief from the court to prevent the operators of the fake website from continuing their illegal activities. Injunctions can order the removal of infringing content or the shutdown of the website.

        </div>
        <div class="bu">Coordination with Internet Service Providers (ISPs): Working with ISPs to block access to the fake website or remove infringing content can be another legal avenue for combating online fraud.

</div>
            <div class="bu">
        International Legal Assistance: In cases where the fake website operates across borders, victims may seek international legal assistance through mutual legal assistance treaties (MLATs) or other mechanisms to coordinate investigations and enforcement actions with law enforcement agencies in other countries.


        </div>
`
    }
    else{
        document.body.style.backgroundColor ="#0b1763"
        document.querySelector(".box").innerHTML=` <div class="h">Fake Websites</div>
        <div class="bu">
Cease and Desist Letter: A cease and desist letter can be sent to the operator of the fake website, demanding that they stop using copyrighted material, trademarks, or engaging in fraudulent activities.
        </div>
        <div class="bu">
Legal Action for Fraud: Victims of fraudulent websites may pursue legal action against the operators for fraud. This could involve filing a civil lawsuit to seek damages for financial losses incurred as a result of the scam.
        </div>
        <div class="bu">
Complaint to Consumer Protection Agencies: Victims can file complaints with consumer protection agencies, such as the Federal Trade Commission (FTC) in the United States or similar agencies in other countries. These agencies may investigate the website and take enforcement actions against the operators.
        </div>
        <div class="bu">
Report to Law Enforcement: Reporting the fake website to law enforcement authorities can prompt investigations into criminal activities, such as identity theft, phishing, or online fraud. Law enforcement agencies may take action to shut down the website and prosecute the perpetrators.
        </div>
        <div class="bu">
Domain Name Dispute Resolution: If the fake website is using a domain name that infringes on a trademark or is registered in bad faith, legal action can be taken through domain name dispute resolution processes, such as those provided by the Internet Corporation for Assigned Names and Numbers (ICANN).
        </div>
        <div class="bu">
            Seek Injunctions: Victims may seek injunctive relief from the court to prevent the operators of the fake website from continuing their illegal activities. Injunctions can order the removal of infringing content or the shutdown of the website.

        </div>
        <div class="bu">Coordination with Internet Service Providers (ISPs): Working with ISPs to block access to the fake website or remove infringing content can be another legal avenue for combating online fraud.

</div>
            <div class="bu">
        International Legal Assistance: In cases where the fake website operates across borders, victims may seek international legal assistance through mutual legal assistance treaties (MLATs) or other mechanisms to coordinate investigations and enforcement actions with law enforcement agencies in other countries.


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