
let input=document.getElementById('input');
let btn=document.getElementById('btn');
let p=document.getElementById('p');

btn.onclick=function(){
let inputvalue=input.value;
if(inputvalue != " "){
    p.innerHTML=inputvalue;
    input.value="";
}
};