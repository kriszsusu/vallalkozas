const header = document.querySelector("header");
const mainpage = document.querySelector(".main_page");
document.addEventListener("scroll",(e)=>{
    if(window.scrollY>=header.clientHeight/2){
        mainpage.style.marginTop=header.clientHeight;
        header.classList.add("fixed");
    }else{
        mainpage.style.marginTop=0;
        header.classList.remove("fixed");
    }
})