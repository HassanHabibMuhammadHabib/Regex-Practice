const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const dob = document.querySelector('#dob');
const cnic = document.querySelector('#cnic');


let  emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordRegex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let DobRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/;
let CnicRegex = /^42201-\d{7}-\d{1}$/;

form.addEventListener(' Submit' ,(event)=>{
    event.preventDefult()
    console.log(username.value);
    console.log(email.value);
    console.log(password.value);
    console.log(dob.value);
    console.log(cnic.value);

    console.log(emailRegex.test(email.value))
    console.log(passwordRegex.test(password.value))
    console.log(DobRegex.test(email.value))
    console.log(CnicRegex.test(cnic.value))

    


if(CnicRegex.test(cnic.value)){
console.log(cnic.valued);
}
})


