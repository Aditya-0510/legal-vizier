
// console.log("jhfddsd");


imgs = document.querySelectorAll(".boximg")

t = document.querySelectorAll(".boximg> .pname")

    for (let index = 0; index < imgs.length; index++) {
            imgs[index].addEventListener("click", () => {

            // t[index].style.color="#0b0c35"
            imgs[index].style.backgroundColor="#000000";
            // imgs[index].style.boxShadow = "-4px 0px 10px #000000"
            
            setTimeout(()=>{
                window.location.href = "http://www.google.com";
            },300)
           
        })

    }



