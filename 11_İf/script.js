const yas=45;
if(yas>18)
{
    console.log("Ehliyet alabilir");
}
else{
    console.log("ehliyet alamaz");
}

// const sifre="sdsdds";
// if(sifre.length>=12){
//     console.log("Çok Güçlü Şifre");

// }
// else if(sifre.length>=8)
// {
//     console.log("Güçlü Şifre");

// }
// else{
//     console.log("Lütfen Daha Güçlü Şifre Giriniz");

// }

const sifre="jkgsajhag";
if(sifre.length>=12 && sifre.includes('!'))
{
    console.log("Kralsın kral ,ş,fre böyle olur");

}

let ad='Recep';
if(ad=="Mikail"||ad=="Berkay"){
    console.log("Yetkili Giriş TAMAMLANDI");
}
else{
    console.log("Lütfen yöneticen gerekli izni alınız");
}

let ad1='Mikail';
if(ad1=="Mikail"||ad1=="Berkay"){
    var durum=true;
}
else{
    var durum=false;
}
if(durum)
{
    console.log("giriş başarılı");
}
