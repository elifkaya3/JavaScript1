const form=document.querySelector("form");
const message=document.querySelector(".message");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const userName=form.userName.value;
    const userNameModel=/^[a-z]{6,10}$/;
    if(userNameModel.test(userName)){
        // alert("Başarılı");
        message.textContent="Başarılı";
        form.userName.setAttribute("class","success");
    }else{
        // alert("Başarısız");
        message.textContent="tamamı küçük harf ve sayı girişi olmalı ";
        form.userName.setAttribute("class","error");
    }
    
    
    // for(let i=0;i<userName.lenght;i++){
    //     if(userName.charCodeAt(i)<91||userName.charCodeAt(i)>102){
    //         alert("YanlışGirişYaptınız lütfen a ile f arasında harfleri giriniz.")
    //     }else{
    //         alert("Merhaba " + form.userName.value);
    //     }
    // }
    // console.log(form.userName.value);
}) 