const notlar = [12,45,36,78,89,35,54,94,78,66,23];
/*{
//     dersler: [
        { ad: "Edebiyat", not: 38},
        { ad: "Matematik", not: 89},
        { ad: "Mobil", not: 25},
        { ad: "Fizik", not: 79},
        { ad: "Angular", not: 12},
        { ad: "Biyoloji", not: 99 },
        { ad: "Kimya", not: 69 },
        { ad: "Beden", not: 49},
        { ad: "Web", not: 56}
    ]
};*/
const divnotlar=document.querySelector("#notlar");
let htmlNotlar=``;
  notlar.forEach(not=>
      {
         sinif="basarili";
         if(not<50) sinif="basarisiz";
         htmlNotlar+=`<p class=${sinif}>${not}</p>`
    //       if (notlar <= 50) {
    //     notlar.innertext+=`<div>("class", "Başarılı")</div>`;
    // }
    // else {
    //     notlar.innertext+=`<div>("class", "Başarısız")</div>`;
    // }
    //       notlar.innertext+=`<li>${not}</li>`;
    //   }
      })
    divnotlar.innerHTML=htmlNotlar;

console.log(notlar);