
document.body.style.backgroundColor ="#0b1763"
function change_onclick() {
    bool = document.getElementById("gender").checked


    if (bool == true) {
        document.body.style.backgroundColor =  "#8124b3"
        document.querySelector(".box").innerHTML=`<div class="h">Harassment </div>
        <div class="bu">Filing a Police Complaint: Victims of harassment can file a complaint with the local police station. The police may investigate the incident and take appropriate action against the perpetrator under relevant sections of the Indian Penal Code (IPC) or other applicable laws.</div>
        <div class="bu">Seeking Protection Orders: Victims can apply for protection orders, such as restraining orders or injunctions, from the court to prevent the harasser from contacting or approaching them.</div>
        <div class="bu">Initiating Legal Proceedings: Victims can initiate legal proceedings against the harasser by filing a case in the appropriate court. This may include civil cases for damages or compensation, or criminal cases for offenses such as assault, sexual harassment, or stalking.</div>
        <div class="bu">Reporting to Specialized Authorities: In cases of specific types of harassment, such as sexual harassment or workplace harassment, victims can report the incident to specialized authorities. For example, sexual harassment at the workplace can be reported to the Internal Complaints Committee (ICC) established under the Sexual Harassment of Women at Workplace (Prevention, Prohibition, and Redressal) Act, 2013.</div>
        <div class="bu">Seeking Legal Assistance: Victims can seek legal assistance from lawyers or legal aid organizations to understand their rights, options, and the legal process. Legal professionals can provide guidance, representation, and support throughout the legal proceedings.</div>
        <div class="bu">Mediation or Alternative Dispute Resolution (ADR): In some cases, victims may choose to resolve the dispute through mediation or alternative dispute resolution mechanisms. This involves facilitated negotiation between the parties with the assistance of a neutral third party.</div>
        <div class="bu">Advocating for Legal Reforms: Victims and advocacy groups can advocate for legal reforms to strengthen laws against harassment, improve access to justice, and ensure better protection for victims. This may involve lobbying policymakers, raising awareness, and participating in public campaigns.</div>`
    }
    else{
        document.body.style.backgroundColor ="#0b1763"
        document.querySelector(".box").innerHTML=`<div class="h">Harassment </div>
        <div class="bu">Filing a Police Complaint: Victims of harassment can file a complaint with the local police station. The police may investigate the incident and take appropriate action against the perpetrator under relevant sections of the Indian Penal Code (IPC) or other applicable laws.</div>
        <div class="bu">Seeking Protection Orders: Victims can apply for protection orders, such as restraining orders or injunctions, from the court to prevent the harasser from contacting or approaching them.</div>
        <div class="bu">Initiating Legal Proceedings: Victims can initiate legal proceedings against the harasser by filing a case in the appropriate court. This may include civil cases for damages or compensation, or criminal cases for offenses such as assault, sexual harassment, or stalking.</div>
        <div class="bu">Reporting to Specialized Authorities: In cases of specific types of harassment, such as sexual harassment or workplace harassment, victims can report the incident to specialized authorities. For example, sexual harassment at the workplace can be reported to the Internal Complaints Committee (ICC) established under the Sexual Harassment of Women at Workplace (Prevention, Prohibition, and Redressal) Act, 2013.</div>
        <div class="bu">Seeking Legal Assistance: Victims can seek legal assistance from lawyers or legal aid organizations to understand their rights, options, and the legal process. Legal professionals can provide guidance, representation, and support throughout the legal proceedings.</div>
        <div class="bu">Mediation or Alternative Dispute Resolution (ADR): In some cases, victims may choose to resolve the dispute through mediation or alternative dispute resolution mechanisms. This involves facilitated negotiation between the parties with the assistance of a neutral third party.</div>
        <div class="bu">Advocating for Legal Reforms: Victims and advocacy groups can advocate for legal reforms to strengthen laws against harassment, improve access to justice, and ensure better protection for victims. This may involve lobbying policymakers, raising awareness, and participating in public campaigns.</div>
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