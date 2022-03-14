let ogrenci={
    ad:"Elif",
    yas:23,
    email:"elif@gmail.com",
    meslek:"Developer",
    kardesler:["Batu","Aybüke","Begum"],
    dersler:[
        {ad:"Matematik",not:89},
        {ad:"Fizik",not:79},
        {ad:"Biyoloji",not:99},
        {ad:"Kimya",not:69},
    ],
    login(){
       // console.log(`sayın ${ad}Başarıyla giriş yaptınız.`);
        console.log(this.ad+",Başarıyla giriş yaptınız.");

    },
    logout(){
        //console.log("Çıkış yaptınız.");
        console.log(this.ad+",Başarıyla Çıkış yaptınız.");

    },
    printKardesler(){
        console.log(this.kardesler);
        this.kardesler.forEach(kardes=>{console.log(kardes)})
        console.log(this);
    },
    dogumYiliYaz(){
        console.log(2022-this.yas);
    },
    printLessons(){
        //console.log(this.dersler);
       /// this.dersler.forEach(console.log(ders.ad+"ksjd");
    }
};
/*console.log(ogrenci);
console.log(ogrenci.ad);
console.log(ogrenci["meslek"]);
ogrenci.yas=15;
console.log(ogrenci.yas);

console.log(typeof ogrenci.meslek);
console.log(typeof ogrenci);

console.log(ogrenci.login());
console.log(ogrenci.logout());
console.printKardesler(ogrenci.printKardesler());
console.dogumYiliYaz(ogrenci.dogumYiliYaz());*/

ogrenci.printLessons();