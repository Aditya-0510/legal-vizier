
document.body.style.backgroundColor ="#0b1763"
function change_onclick() {
    bool = document.getElementById("gender").checked


    if (bool == true) {
        document.body.style.backgroundColor =  "#8124b3"
        document.querySelector(".box").innerHTML=`<div class="h">Domestic Violence</div>
        <div class="bu">
            Emergency Assistance: Married women have access to call Dial 100 for immediate assistance from the police and designated Protection Officers under the Prevention of Domestic Violence Act.
        </div>
        <div class="bu">
            Legal Remedies: Aggrieved women can either call the police to their location or file a complaint under section 498A of the Indian Penal Code for appropriate action against the perpetrators.
        </div>
        <div class="bu">
            Protection from Harassment: Women have the right to seek protection from physical harassment and property violations under the relevant provisions of the Domestic Violence Act.
        </div>
        <div class="bu">
            Rescue Facilities: Government-operated rescue homes provide safe accommodations for victims of domestic violence, ensuring their safety and well-being.
        </div>
        <div class="bu">
            Transportation Assistance: Government vehicles are provided for the transportation of victims to safe locations or shelters as needed.
        </div>
        <div class="bu">
            Legal Aid Services: Government legal aid officials are available to provide assistance to victims in navigating the legal process and seeking justice.
        </div>
        <div class="bu">
            Direct Intervention: Mechanisms are in place for government authorities to intervene directly at the location where children or senior citizens are being deprived or harassed by suspects or accused individuals.
        </div>
        <div class="bu">
            Protection of Senior Citizens: Senior citizens facing neglect or harassment at home are safeguarded under the provisions of the Senior Citizens Act, which ensures their rights and well-being.
        </div>
        <div class="bu">
            Protection of Property: Provisions exist to protect the property of senior citizens from aggressors or those seeking to exploit or harm them financially.
        </div>
`
    }
    else{
        document.body.style.backgroundColor ="#0b1763"
        document.querySelector(".box").innerHTML=`<div class="h">Domestic Violence</div>
        <div class="bu">
            National Legal Services Authority of India: https://nalsa.gov.in/ - This government body provides free legal aid services across India. Men facing legal issues, including domestic violence, can reach out for guidance and assistance.
        </div>
        <div class="bu">
            Men's Rights Groups: While not as prominent as women's rights groups, some organizations advocate for men's legal rights in India. You can search online for groups operating in your area.
        </div>
        <div class="bu">
            Men's Support Groups: While still evolving, there are men's support groups forming across India. These groups provide a safe space for men to share experiences, find support, and connect with others. Look online or reach out to local NGOs for information on nearby groups.
        </div>
        <div class="bu">
            Brotherhoods/Mentorship Programs: Some organizations offer brotherhood or mentorship programs specifically for men. These programs can provide guidance, support, and a sense of belonging.
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