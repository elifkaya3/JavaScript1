// const selam=document.querySelector('p');
// //console.log(selam.innerText);
// selam.innerText="işte bak değiştirdim.";

// //const topheader=document.querySelector("#topheader");
// const topheader=document.getElementById("topheader");
// console.log(topheader);
// topheader.innerText="BAŞLIK";

// const paragraflar=document.querySelectorAll("p");
// console.log(paragraflar);
// paragraflar.forEach(p=>
//     {
//         console.log(p.innerText);
//         p.innerText+=" işte ben ekledim.";
//     }
// )

const icerik=document.querySelector(".content");
console.log(icerik);
console.log(icerik.innerHTML);
icerik.innerHTML+="<h2>bu da alt başlık</h2>";

const ogrenciler=["recep","mikail","aslı"];
// icerik.innerHTML+="<ul>";
ogrenciler.forEach(ogrenci=>
    {
        icerik.innerHTML+=`<li>${ogrenci}</li>`;
    }
)
// icerik.innerHTML+="</ul>";
