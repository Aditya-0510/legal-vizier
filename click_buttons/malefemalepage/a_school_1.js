
document.body.style.backgroundColor ="#0b1763"
function change_onclick() {
    bool = document.getElementById("gender").checked


    if (bool == true) {
        document.body.style.backgroundColor =  "#8124b3"
        document.querySelector(".box").innerHTML=`<div class="h">Ragging</div>
        <div class="bu">Strict Enforcement of the Prohibition of Ragging Act: Educational institutions must strictly enforce the provisions of the Prohibition of Ragging Act, 1999, which outlines the legal framework for combating ragging. This includes conducting awareness programs about the Act and its penalties.</div>
        <div class="bu">Formation of Anti-Ragging Committees: As mandated by the Act, every educational institution must constitute Anti-Ragging Committees to prevent and address instances of ragging. These committees should comprise faculty members, students, and representatives from the local community.</div>
        <div class="bu">Online Complaint Mechanisms: Establishing online portals or helplines where students can anonymously report incidents of ragging ensures prompt action and confidentiality. These mechanisms should be accessible and widely promoted among students.</div>
        <div class="bu">Surveillance and Monitoring: Educational institutions should deploy surveillance cameras in vulnerable areas on campus to deter ragging incidents and provide evidence for investigations. Regular monitoring and patrolling by security personnel can also help prevent ragging.</div>
        <div class="bu">Immediate Response Teams: Designating trained personnel or volunteers as part of Immediate Response Teams ensures swift action in case of ragging incidents. These teams should be equipped to intervene effectively and provide immediate assistance to victims.</div>
        <div class="bu">Legal Awareness Workshops: Organizing legal awareness workshops for students, faculty, and staff members educates them about their rights and responsibilities under the Prohibition of Ragging Act. Legal experts can provide insights into the legal consequences of ragging.</div>
        <div class="bu">Collaboration with Law Enforcement Agencies: Educational institutions should collaborate with local law enforcement agencies to handle ragging cases effectively. This includes timely reporting of incidents, conducting joint investigations, and prosecuting offenders.</div>
        <div class="bu">Victim Support Services: Establishing victim support services, such as counseling centers or helplines, ensures that victims of ragging receive necessary assistance and emotional support. These services should be accessible, confidential, and free of judgment.</div>
        <div class="bu">Regular Reviews and Audits: Conducting periodic reviews and audits of anti-ragging measures helps identify gaps in implementation and areas for improvement. Institutions should involve stakeholders in these assessments and take corrective actions as needed.</div>
        <div class="bu">Inclusion of Ragging Prevention in Curriculum: Integrating ragging prevention modules into the curriculum sensitizes students to the harmful effects of ragging and promotes a culture of respect and empathy among peers.</div>
    `
    }
    else{
        document.body.style.backgroundColor ="#0b1763"
        document.querySelector(".box").innerHTML=`<div class="h">Ragging</div>
        <div class="bu">Strict Enforcement of the Prohibition of Ragging Act: Educational institutions must strictly enforce the provisions of the Prohibition of Ragging Act, 1999, which outlines the legal framework for combating ragging. This includes conducting awareness programs about the Act and its penalties.</div>
        <div class="bu">Formation of Anti-Ragging Committees: As mandated by the Act, every educational institution must constitute Anti-Ragging Committees to prevent and address instances of ragging. These committees should comprise faculty members, students, and representatives from the local community.</div>
        <div class="bu">Online Complaint Mechanisms: Establishing online portals or helplines where students can anonymously report incidents of ragging ensures prompt action and confidentiality. These mechanisms should be accessible and widely promoted among students.</div>
        <div class="bu">Surveillance and Monitoring: Educational institutions should deploy surveillance cameras in vulnerable areas on campus to deter ragging incidents and provide evidence for investigations. Regular monitoring and patrolling by security personnel can also help prevent ragging.</div>
        <div class="bu">Immediate Response Teams: Designating trained personnel or volunteers as part of Immediate Response Teams ensures swift action in case of ragging incidents. These teams should be equipped to intervene effectively and provide immediate assistance to victims.</div>
        <div class="bu">Legal Awareness Workshops: Organizing legal awareness workshops for students, faculty, and staff members educates them about their rights and responsibilities under the Prohibition of Ragging Act. Legal experts can provide insights into the legal consequences of ragging.</div>
        <div class="bu">Collaboration with Law Enforcement Agencies: Educational institutions should collaborate with local law enforcement agencies to handle ragging cases effectively. This includes timely reporting of incidents, conducting joint investigations, and prosecuting offenders.</div>
        <div class="bu">Victim Support Services: Establishing victim support services, such as counseling centers or helplines, ensures that victims of ragging receive necessary assistance and emotional support. These services should be accessible, confidential, and free of judgment.</div>
        <div class="bu">Regular Reviews and Audits: Conducting periodic reviews and audits of anti-ragging measures helps identify gaps in implementation and areas for improvement. Institutions should involve stakeholders in these assessments and take corrective actions as needed.</div>
        <div class="bu">Inclusion of Ragging Prevention in Curriculum: Integrating ragging prevention modules into the curriculum sensitizes students to the harmful effects of ragging and promotes a culture of respect and empathy among peers.</div>
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