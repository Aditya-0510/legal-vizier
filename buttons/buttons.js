


imgs = document.querySelectorAll(".boximg")
images = document.querySelectorAll(".boximg>img")
text = document.querySelectorAll(".boximg> .pname")
t = document.querySelectorAll(".boximg> .t")
    for (let index = 0; index < imgs.length; index++) {
        imgs[index].addEventListener("click", () => {
            images[index].style.filter="brightness(0.75)";
            images[index].style.border = "5px solid rgb(255, 198, 65)"
            text[index].style.color="rgb(255, 198, 65)"
            t[index].style.color="rgb(255, 198, 65)"
            setTimeout(()=>{
                window.location.href = "http://www.google.com";
            },200)
           
        })

    }



