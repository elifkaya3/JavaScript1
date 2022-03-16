const buton=document.querySelector("button");
const mainPopup=document.querySelector(".main-PopUp");
const close=document.querySelector(".close-PopUp");
buton.addEventListener("click",()=>
{
  mainPopup.style.display="block";

})
close.addEventListener("click",()=>{
  mainPopup.style.display="none";

})
mainPopup.addEventListener("click",(e)=>{
console.log(e.target)
  if(e.target.classname=="mainPopUp"||e.target.textContent=="Kapat"){
    mainPopup.style.display="none";
  }
})

