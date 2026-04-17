const stargroup = document.querySelectorAll('.emoji_scale');
stargroup.forEach(group=> {
const star1 = group.querySelector('.very-angry');
const star2 = group.querySelector('.angry');
const star3 = group.querySelector('.happy');
const star4 = group.querySelector('.very-happy'); 
let i=0;
star1.addEventListener("click", ()=>{i=1; 
if (i==1) {
    star1.style='color:red; font-size: 600%;';
    star2.style='color:gray;';
    star3.style='color:gray;';
    star4.style='color:gray;';
}})
star2.addEventListener("click", ()=>{i=2; 
if (i==2) {
    star1.style='color:gray;';
    star2.style='color:gold; font-size: 600%;';
    star3.style='color:gray;';
    star4.style='color:gray;';
}})
star3.addEventListener("click", ()=>{i=3; 
if (i==3) {
    star1.style='color:gray;';
    star2.style='color:gray;';
    star3.style='color:lightgreen;  font-size: 600%;';
    star4.style='color:gray;';
}})
star4.addEventListener("click", ()=>{i=4; 
if (i==4) {
    star1.style='color:gray;';
    star2.style='color:gray;';
    star3.style='color:gray; :hover color:red;}';
    star4.style='color:green;  font-size: 600%;';
}})});


    

