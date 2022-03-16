const buton=document.querySelector("button");
/*buton.addEventListener("click",()=>{
  alert("Tıklandı.");
})
const li=document.querySelector("li");
li.addEventListener("click",()=>{
  alert("TIKTIKTIK");
})*/
const liElemanlrı=document.querySelectorAll("li");
    liElemanlrı.forEach(li=>{
      li.addEventListener("click",e=>{
        /*alert(e.target);*/
        /* e.target.style.color="blue";*/
        e.target.remove();
      }
      )
    }
);
const ul=document.querySelector("ul");
buton.addEventListener("click",()=>{
    const li=document.createElement("li");
    li.textContent="JavaScript";
    ul.append(li);//sona ekleme yapar.
    ul.prepend(li);//basa ekleme yapar.
  }
);