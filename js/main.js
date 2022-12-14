var a = prompt()
var b =  prompt()

var elTitle=document.querySelector('.title')

if(a>b){
    elTitle.textContent= 'a katta';
}
else if(a<b){
    elTitle.textContent= 'b katta';
}
else if(a==b){
    elTitle.textContent= 'ikkalasi teng';
}
else{
    elTitle.textContent= 'boshqa xolat';
}