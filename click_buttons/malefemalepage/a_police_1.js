
document.body.style.backgroundColor ="#0b1763"
function change_onclick() {
    bool = document.getElementById("gender").checked


    if (bool == true) {
        document.body.style.backgroundColor =  "#8124b3"
        document.querySelector(".box").innerHTML=`
        <div class="h">Legal Rights after getting arrested</div>

        <div class="bu">Presence of Female Police Officer: The Code of Criminal Procedure (CrPC) mandates that when a woman is to be arrested, the arrest must be made by a female police officer or with the assistance of a female police officer.</div>
        <div class="bu">Privacy and Modesty: During the arrest, special care must be taken to ensure the privacy and modesty of the woman. Female police officers are required to conduct searches and other procedures in a manner that respects the dignity of the woman.</div>
        <div class="bu">Avoiding Night Arrests: In non-serious offenses, the police are generally advised to avoid making arrests of women during the night hours, unless there are exceptional circumstances..</div>
        <div class="bu">Presence of Legal Guardian: If the woman being arrested is a minor or otherwise incapable of understanding the proceedings, the police must ensure the presence of her legal guardian or a person who can assist her during the arrest process.</div>
        <div class="bu">Recording Statement: The police must record the statement of the woman accurately and in a manner that ensures her understanding of the charges against her. This statement must be signed by the woman or her legal representative.</div>
        <div class="bu">Medical Examination: If there are allegations of physical or sexual assault, the woman has the right to request a medical examination to document any injuries and gather evidence..</div>









        <div class="bu">Individuals may be arrested by the Police under various circumstances, and if taken into custody outside the Police Station (PS), they must be brought to the Police Station for formal arrest procedures.</div>
        <div class="bu">If a person is arrested under preventive provisions of the law, the Police must release the suspect or detainee after completing the Boundover procedure within 24 hours of their arrest.</div>
        <div class="bu">In cases involving minor offenses punishable by up to 7 years of imprisonment, the Police must consider Section 41A of the Criminal Procedure Code (CrPC). The accused may be released from police custody with instructions to cooperate with further investigation.</div>
        <div class="bu">If the charges against an individual carry a punishment period exceeding 7 years, the Police must arrest the accused and present them before the Honourable Court with a jail warrant.</div>
        <div class="bu">It is essential for arrested individuals to undergo a health check-up at a hospital to ensure their well-being.</div>
        <div class="bu">Interrogation of arrested persons by the police should be conducted without resorting to physical harm.</div>
        <div class="bu">The Police are obligated to inform the arrest details to the blood relatives or any other close associates of the accused person.</div>
        <div class="bu">Arrested individuals should be advised to seek legal counsel for future legal assistance. If the accused is unable to engage an Advocate due to financial constraints, the State must provide free legal aid.o	Any accused, regardless of the severity of the offense, has the right to seek interim bail from the court, except in cases falling under Preventive Detention Law, where bail provisions are unavailable. Detainees must remain in jail until the completion of 12 months.</div>
        
        
        
        
        
        
        
        
        
        
        `
    }
    else{
        document.body.style.backgroundColor ="#0b1763"
        document.querySelector(".box").innerHTML=`<div class="h">Legal Rights after getting arrested</div>
        <div class="bu">Individuals may be arrested by the Police under various circumstances, and if taken into custody outside the Police Station (PS), they must be brought to the Police Station for formal arrest procedures.</div>
        <div class="bu">If a person is arrested under preventive provisions of the law, the Police must release the suspect or detainee after completing the Boundover procedure within 24 hours of their arrest.</div>
        <div class="bu">In cases involving minor offenses punishable by up to 7 years of imprisonment, the Police must consider Section 41A of the Criminal Procedure Code (CrPC). The accused may be released from police custody with instructions to cooperate with further investigation.</div>
        <div class="bu">If the charges against an individual carry a punishment period exceeding 7 years, the Police must arrest the accused and present them before the Honourable Court with a jail warrant.</div>
        <div class="bu">It is essential for arrested individuals to undergo a health check-up at a hospital to ensure their well-being.</div>
        <div class="bu">Interrogation of arrested persons by the police should be conducted without resorting to physical harm.</div>
        <div class="bu">The Police are obligated to inform the arrest details to the blood relatives or any other close associates of the accused person.</div>
        <div class="bu">Arrested individuals should be advised to seek legal counsel for future legal assistance. If the accused is unable to engage an Advocate due to financial constraints, the State must provide free legal aid.o	Any accused, regardless of the severity of the offense, has the right to seek interim bail from the court, except in cases falling under Preventive Detention Law, where bail provisions are unavailable. Detainees must remain in jail until the completion of 12 months.</div>`
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