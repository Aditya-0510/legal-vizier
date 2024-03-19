
document.body.style.backgroundColor ="#0b1763"
function change_onclick() {
    bool = document.getElementById("gender").checked


    if (bool == true) {
        document.body.style.backgroundColor =  "#8124b3"
        document.querySelector(".box").innerHTML=`<div class="h">Rent Issues</div>
        <div class="bu">
Notice to Pay Rent: The landlord typically begins by issuing a notice to pay rent or quit the premises. This notice informs the tenant of the overdue rent and gives them a specified period (usually 3 to 5 days) to pay the outstanding amount.
        </div>
        <div class="bu">
Demand Letter: If the tenant fails to pay rent after receiving the notice, the landlord can send a formal demand letter requesting payment within a specific timeframe. The letter should outline the consequences of non-payment, such as eviction proceedings.
        </div>
        <div class="bu">
Eviction Proceedings: If the tenant still does not pay rent, the landlord may initiate eviction proceedings by filing a lawsuit in the appropriate court. The tenant will receive a summons to appear in court, where a judge will hear both sides of the case.
        </div>
        <div class="bu">
Court Judgment: If the court rules in favor of the landlord, a judgment for possession of the premises may be issued, allowing the landlord to evict the tenant. Additionally, the court may order the tenant to pay any outstanding rent owed, along with any legal fees incurred by the landlord.
        </div>
        <div class="bu">
Writ of Possession: If the tenant still refuses to vacate the premises after the court judgment, the landlord can obtain a writ of possession from the court. This legal document authorizes law enforcement to physically remove the tenant and their belongings from the rental property.
        </div>
      
`
    }
    else{
        document.body.style.backgroundColor ="#0b1763"
        document.querySelector(".box").innerHTML=`<div class="h">Rent Issues</div>
        <div class="bu">
Notice to Pay Rent: The landlord typically begins by issuing a notice to pay rent or quit the premises. This notice informs the tenant of the overdue rent and gives them a specified period (usually 3 to 5 days) to pay the outstanding amount.
        </div>
        <div class="bu">
Demand Letter: If the tenant fails to pay rent after receiving the notice, the landlord can send a formal demand letter requesting payment within a specific timeframe. The letter should outline the consequences of non-payment, such as eviction proceedings.
        </div>
        <div class="bu">
Eviction Proceedings: If the tenant still does not pay rent, the landlord may initiate eviction proceedings by filing a lawsuit in the appropriate court. The tenant will receive a summons to appear in court, where a judge will hear both sides of the case.
        </div>
        <div class="bu">
Court Judgment: If the court rules in favor of the landlord, a judgment for possession of the premises may be issued, allowing the landlord to evict the tenant. Additionally, the court may order the tenant to pay any outstanding rent owed, along with any legal fees incurred by the landlord.
        </div>
        <div class="bu">
Writ of Possession: If the tenant still refuses to vacate the premises after the court judgment, the landlord can obtain a writ of possession from the court. This legal document authorizes law enforcement to physically remove the tenant and their belongings from the rental property.
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