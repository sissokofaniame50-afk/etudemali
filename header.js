 const hamburger=document.getElementById("hamburger");
        const menu=document.querySelector(".menu");
        const close=document.getElementById("close");
        hamburger.addEventListener("click",()=>{
            if(menu.style.display==="flex"){
                menu.style.display="none";
            }else{
                menu.style.display="flex";
            }
        });document.querySelectorAll(".menu li a").forEach(link=>{
            link.addEventListener("click",()=>{menu.style.display="none";});
        });close.addEventListener("click",()=>{
            menu.style.display="none";
        });
