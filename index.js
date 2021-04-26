const textbox = document.querySelectorAll("input");

console.log(textbox);
const btn = textbox[3];
console.log(textbox[3]);
const textb1 = textbox[0];
const textb2 = textbox[1];
const textb3 = textbox[2];
// const textbox1 = textb1.value;

btn.addEventListener("click",function(e){
    const name = textb1.value;
    const email = textb2.value;
    const mobile = textb3.value;
    const email1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const check = /^[-+]?[0-9]+$/;
    if(name =="" || email ==""|| mobile ==""){
        alert("Fill all fields")
    }else if(!(email.match(email1))){
        // alert(email);
        textb2.style.border = "2px solid red";
    } else if(!(mobile.match(check))){
        alert(mobile);
        
     }else if(mobile.length>10){
         alert("number is greater 10")
         textb3.style.border = "2px solid red";
     }
     else if(mobile.length<10){
         alert("number is less than 10")
         textb3.style.border = "2px solid red";
     } else if(!(mobile.startsWith("0"))){
         alert("mobile number must start with a zero");
         textb3.style.border = "2px solid red";
     }

    else{
        alert (`
        Name: ${name}
        Email: ${email}
        Mobile: ${mobile}
        
        
        `)
    }
   
    
        

   
    



   
       
    
})














// const check = /^[-+]?[0-9]+$/;
// textb1.onchange = function(e){
//     if(!(textbox1.match(check))){
//         console.log(textbox1)
//         e.target.style.border = "2px solid red";
//     }else{
//         alert("fuck")
//     }
// }

