const buton=document.querySelector("button");
const mainpopup=document.querySelector(".main-popup");
const close=document.querySelector("close-popup");

buton.addEventListener("click",()=>{
mainpopup.style.display="block";}
)
close.addEventListener("click",()=>{
    mainPopup.style.display="none";
  
  })
  mainPopup.addEventListener("click",(e)=>{
  console.log(e.target)
    if(e.target.classname=="mainPopUp"||e.target.textContent=="Kapat"){
      mainPopup.style.display="none";
    }
  })
  
  