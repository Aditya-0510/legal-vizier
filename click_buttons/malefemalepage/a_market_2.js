
document.body.style.backgroundColor ="#0b1763"
function change_onclick() {
    bool = document.getElementById("gender").checked


    if (bool == true) {
        document.body.style.backgroundColor =  "#8124b3"
        document.querySelector(".box").innerHTML=`  <div class="h">Substandard or Counterfeit Product</div>
        <div class="bu">Gather Evidence:
            Keep the product and the receipt (if available).
            Take pictures of the product highlighting the substandard quality or the fake branding elements.
            If possible, note down the date and location of purchase.
            </div>
        <div class="bu"> File a Complaint:
            There are multiple avenues for complaint depending on the severity of the issue:
            Seller: Start by contacting the seller (shopkeeper, online marketplace) and requesting a replacement, repair, or refund. Present your evidence and explain the issue clearly.
            Consumer Forum: If the seller is unresponsive, you can file a complaint with your district consumer forum. The Consumer Protection Act, 2019 empowers consumers to seek redressal for faulty or counterfeit products.
            Department of Consumer Affairs: You can also lodge a complaint with the Department of Consumer Affairs through their online portal here: https://consumerhelpline.gov.in/.
            </div>
        <div class="bu">Legal Metrology Department (For Substandard Quantity):

            If the issue is related to a pre-packaged product with inaccurate weight or quantity, you can file a complaint with the Legal Metrology Department. They are responsible for enforcing weight and measure regulations.
            
            </div>
        <div class="bu">Reporting Counterfeit Products:

            Intellectual Property Office (IPO): If the product is a counterfeit of a branded item, you can report it to the Intellectual Property Office.
            Brand Owner: Many brands have dedicated channels for reporting counterfeit products. You can find their contact information on the brand's website.
            </div>
        <div class="bu">Additional Tips:
            Keep copies of all your complaints and communication with the seller or authorities.
            Be aware that legal proceedings can take time.
            </div>
       
`
    }
    else{
        document.body.style.backgroundColor ="#0b1763"
        document.querySelector(".box").innerHTML=`  <div class="h">Substandard or Counterfeit Product</div>
        <div class="bu">Gather Evidence:
            Keep the product and the receipt (if available).
            Take pictures of the product highlighting the substandard quality or the fake branding elements.
            If possible, note down the date and location of purchase.
            </div>
        <div class="bu"> File a Complaint:
            There are multiple avenues for complaint depending on the severity of the issue:
            Seller: Start by contacting the seller (shopkeeper, online marketplace) and requesting a replacement, repair, or refund. Present your evidence and explain the issue clearly.
            Consumer Forum: If the seller is unresponsive, you can file a complaint with your district consumer forum. The Consumer Protection Act, 2019 empowers consumers to seek redressal for faulty or counterfeit products.
            Department of Consumer Affairs: You can also lodge a complaint with the Department of Consumer Affairs through their online portal here: https://consumerhelpline.gov.in/.
            </div>
        <div class="bu">Legal Metrology Department (For Substandard Quantity):

            If the issue is related to a pre-packaged product with inaccurate weight or quantity, you can file a complaint with the Legal Metrology Department. They are responsible for enforcing weight and measure regulations.
            
            </div>
        <div class="bu">Reporting Counterfeit Products:

            Intellectual Property Office (IPO): If the product is a counterfeit of a branded item, you can report it to the Intellectual Property Office.
            Brand Owner: Many brands have dedicated channels for reporting counterfeit products. You can find their contact information on the brand's website.
            </div>
        <div class="bu">Additional Tips:
            Keep copies of all your complaints and communication with the seller or authorities.
            Be aware that legal proceedings can take time.
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