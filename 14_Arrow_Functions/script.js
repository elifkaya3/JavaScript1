// const topla=function(sayi1,sayi2){
//     return sayi1+sayi2;
// }
const topla=(sayi1,sayi2)=>sayi1+sayi2;//birden fazla parametre
console.log(topla(12,45));

const alan=(kenar)=>kenar**2;//tek parametreli durum
console.log(alan(5));

const MesajYaz=()=>console.log("selam");//parametre yok
MesajYaz();
/*içerisine ürünler ve vergi gönderilsin */
const fatura=(urunFiyat,vergiTutari)=>urunFiyat+vergiTutari*urunFiyat;
console.log(fatura(10,0.2));
console.log(fatura(20,0.2));
console.log(fatura(30,0.2));
console.log(fatura(10,0.2)+fatura(20,0.2)+fatura(30,0.2));

const fatura2=(urunFiyat1,vergiorani)=>{
    let toplam=0;
    for(let i=0;i<urunFiyat1.length;i++){
        let vergiliUrunFiyati=urunFiyat1[i]*(1+vergiorani);
        console.log(vergiliUrunFiyati);
        toplam+=vergiliUrunFiyati;
    }
    return toplam;
}
console.log(fatura2([10,20,30],0.2));

/*const fatura1=function(urunFiyatlari,vergiOranı){
let toplam=0;
    for(let i=0;i<urunFiyatlari.length;i++){
        let vergiliUrunFiyati=urunFiyatlari[i]*(1+vergiOranı);
        console.log(vergiliUrunFiyati);
        toplam+=vergiliUrunFiyati;
    }
    return toplam;
}
console.log(fatura1([10,20,30],0.2));*/