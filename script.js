const button= document.getElementById("submitBtn");
addEventListener("click",function()  {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const gender = document.getElementById("gender").value;
    const birthdate = document.getElementById("birthdate").value;
    // const show_password = document.getElementById("show_password").value;
    // const submitBtn = document.getElementById("submitBtn").value;

    if (fullName===""|| email===""|| password===""|| phoneNumber===""|| gender===""||birthdate===""||){
        Message.innerHTML="please fill in all the fields"
    }else{
        Message.innerHTML ="thank you" + fullName +"!your information was submitted"

    }

    
})
