const correctAnswers=["E","E","E","E","E","E","E","E"];
const form=document.querySelector("form");
const result=document.querySelector(".result");

form.addEventListener("submit",e=>{
    e.preventDefault();//bu sayede submit sayfayı yenilemeyecek.
    let score=0;
    const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value,form.q7.value,form.q8.value];
    userAnswers.forEach((answer,index)=>{
        if(answer==correctAnswers[index])
        { 
            score+=12.5;
        }
    })
    console.log(score);
    result.classList.remove("result-none");
    // result.textContent=`%${score} Ofise dönmek istiyorsunuz.`;
    result.querySelector("span").textContent=`%${score}`;    
    
    let score2=0;
    const animateScore=setInterval(()=>{
        result.querySelector("span").textContent=`%${score2}`;
        if(score2>=score){
            clearInterval(animateScore);
        }else{
            score2++;
        }
    },100)
})
    
