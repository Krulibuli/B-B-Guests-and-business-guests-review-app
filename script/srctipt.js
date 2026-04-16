star1 = document.querySelector('.very-angry');
star2 = document.querySelector('.angry');
star3 = document.querySelector('.happy');
star4 = document.querySelector('.very-happy');
let i=0
star1.addEventListener("click", ()=>{i=1 
if (i==1) {
    star1.style='color:red;';
    star2.style='color:gray;';
    star3.style='color:gray;';
    star4.style='color:gray;';
}})
star2.addEventListener("click", ()=>{i=2 
if (i==2) {
    star1.style='color:gray;';
    star2.style='color:pink;';
    star3.style='color:gray;';
    star4.style='color:gray;';
}})
star3.addEventListener("click", ()=>{i=3 
if (i==3) {
    star1.style='color:gray;';
    star2.style='color:gray;';
    star3.style='color:gold;';
    star4.style='color:gray;';
}})
star4.addEventListener("click", ()=>{i=4 
if (i==4) {
    star1.style='color:gray;';
    star2.style='color:gray;';
    star3.style='color:gray;';
    star4.style='color:green;';
}})




    

