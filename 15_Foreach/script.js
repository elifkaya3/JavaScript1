let ogrenciler=["Aslı","Doğukan","Elif","Berrak","Mehtap","Aydın"];
ogrenciler.forEach(
    function(){
        console.log("Selam ");
    }
)

const ulmain=document.querySelector(".main"); //classı main olan etiketi seç ve ulmain değişkenine ata
let html=``;
ogrenciler.forEach(
    ogrenci =>{
        //console.log(ogrenci);
        html+=`<li>${ogrenci}</li>`;
    }
)
console.log(html);
ulmain.innerHTML=html;

const pDegeri=document.querySelector("p");
pDegeri.innerText="Selam ben yeni paragraf";