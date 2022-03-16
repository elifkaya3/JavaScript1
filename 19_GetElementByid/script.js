const baslik=document.getElementById('baslik');
console.log(baslik);

const errors=document.getElementsByClassName('hata');
//bunun dönüş tipi htmlCollection olduğu içn içinde foreach ile dönemeyiz
console.log(errors);

const paragraflar=document.getElementsByTagName('p');
console.log(paragraflar);