
document.body.style.backgroundColor ="#0b1763"
function change_onclick() {
    bool = document.getElementById("gender").checked


    if (bool == true) {
        document.body.style.backgroundColor =  "#8124b3"
        document.querySelector(".box").innerHTML=`<div class="h">Online Impersonation</div>
        <div class="bu">
Cease and Desist Letter: If you know the individual or entity impersonating you, you can send them a cease and desist letter demanding that they stop their impersonation immediately. This letter should be drafted by a lawyer to ensure its effectiveness.
        </div>
        <div class="bu">
Report to Authorities: Contact law enforcement authorities and file a report about the impersonation. Provide them with any evidence you have, such as screenshots or recordings of the impersonation.
        </div>
        <div class="bu">
Contact Platform or Website: If the impersonation is happening on a social media platform, website, or online forum, report it to the platform's administrators. Most platforms have policies against impersonation and will take action to remove the offending content or account.
        </div>
        <div class="bu">
Trademark or Copyright Infringement: If the impersonator is using your name, likeness, or other protected intellectual property, you may have grounds for a trademark or copyright infringement lawsuit. Consult with a lawyer who specializes in intellectual property law to explore your options.
        </div>
        <div class="bu">
Defamation Lawsuit: If the impersonation involves spreading false or defamatory information about you, you may be able to file a defamation lawsuit against the impersonator. Again, seek legal advice to determine the best course of action.
        </div>
        <div class="bu">
Identity Theft Reporting: If the impersonation involves identity theft or fraud, report it to the relevant authorities, such as the Federal Trade Commission (FTC) in the United States or the police in your local jurisdiction. They can assist you in taking steps to protect your identity and financial accounts.
        </div>
        <div class="bu">
            Monitor Your Online Presence: Regularly monitor your online presence to detect any instances of impersonation or unauthorized use of your identity. Set up Google Alerts for your name and periodically search for yourself on social media platforms and other websites.            </div>
        </div>
`
    }
    else{
        document.body.style.backgroundColor ="#0b1763"
        document.querySelector(".box").innerHTML=`<div class="h">Online Impersonation</div>
        <div class="bu">
Cease and Desist Letter: If you know the individual or entity impersonating you, you can send them a cease and desist letter demanding that they stop their impersonation immediately. This letter should be drafted by a lawyer to ensure its effectiveness.
        </div>
        <div class="bu">
Report to Authorities: Contact law enforcement authorities and file a report about the impersonation. Provide them with any evidence you have, such as screenshots or recordings of the impersonation.
        </div>
        <div class="bu">
Contact Platform or Website: If the impersonation is happening on a social media platform, website, or online forum, report it to the platform's administrators. Most platforms have policies against impersonation and will take action to remove the offending content or account.
        </div>
        <div class="bu">
Trademark or Copyright Infringement: If the impersonator is using your name, likeness, or other protected intellectual property, you may have grounds for a trademark or copyright infringement lawsuit. Consult with a lawyer who specializes in intellectual property law to explore your options.
        </div>
        <div class="bu">
Defamation Lawsuit: If the impersonation involves spreading false or defamatory information about you, you may be able to file a defamation lawsuit against the impersonator. Again, seek legal advice to determine the best course of action.
        </div>
        <div class="bu">
Identity Theft Reporting: If the impersonation involves identity theft or fraud, report it to the relevant authorities, such as the Federal Trade Commission (FTC) in the United States or the police in your local jurisdiction. They can assist you in taking steps to protect your identity and financial accounts.
        </div>
        <div class="bu">
            Monitor Your Online Presence: Regularly monitor your online presence to detect any instances of impersonation or unauthorized use of your identity. Set up Google Alerts for your name and periodically search for yourself on social media platforms and other websites.            </div>
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