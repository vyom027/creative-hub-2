function errors(elemId,msg){
    if(msg !=""){
        document.getElementById(elemId).value = "";
        document.getElementById(elemId).placeholder = msg;
        document.getElementById(elemId).style.fontSize = "17px";
        document.getElementById(elemId).style.borderColor = "red";
    }
    else{
        document.getElementById(elemId).style.borderColor = "green";
    }
}

function check(){
    let fname = document.signfm.fname.value;
    // alert(fname);
    let lname = document.signfm.lname.value;
    let email = document.signfm.email.value;
    let pass = document.signfm.pass.value;
    let copass = document.signfm.conpass.value;
    // alert(copass);


    let fn = ln = em = ps = cps = lem =false;

    // validation of first name
    if(fname == ""){
        errors("fname","Enter Your First Name Please...");
        fn = true;
    }
    /*else{
        let reg = /^[a-zA-Z\-]+$/;
        if(reg.test(fname) === false){
            errors("fname","Enter Valid Name Please...");
            fn = true;
        }
        else{
            errors("fname","");
        }
    }*/

    // validation of last name
    if(lname == ""){
        errors("lname","Enter Your Last Name Please...");
        ln = true;
    }
    else{
        let reg = /^[a-zA-Z\-]+$/;
        if(reg.test(lname) === false){
            errors("fname","Enter Valid Name Please...");
            ln = true;
        }
        else{
            errors("lname","");
        }
    }

    // validation of email
    if(email == ""){
        errors("email","Enter Your E-mail Address Please...");
        em = true;
    }
    else{
        let reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if(reg.test(email) === false){
            errors("email","Enter Valid E-mail Address Please...");
            em = true;
        }
        else{
            errors("email","");
        }
    }

    // validation of Password
    if(pass == ""){
        errors("pass","Enter Your Password Please...");
        ps = true;
    }
    else{
        let reg = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[-_@.#$!%*?&^])[a-zA-Z0-9]/;
        if(reg.test(pass) === false){
            errors("pass","Enter Valid Password Please...");
            ps = true;
        }
        if (pass.length < 6){
            errors("pass","Password Must Contain 6 Letters...");
            ps = true;
        }
        if (pass.length > 20){
            errors("pass","Not More Then 20 Letters...");
            ps = true;
        }
        else{
            errors("pass","");
        }
    }

    // validation for confirm password
    if (copass == "" ) {
        errors("conpass", "Password Box is Empty..!");
        cps = true;
    }
    else if (copass != pass) {
        errors("conpass", "Passwords Do Not Match...!");
        cps = true;
    }
    else {
        errors("conpass", "");
        cps = false;
    }
    
    if(fn || ln || em || ps || cps ){
        return false;
    }
    else {
        $(".login-all").slideToggle(1000);
        $(".signup-all").slideToggle(1000);
        return true;
    }
}
function recheck(){
    let email = document.signfm.email.value;
    let pass = document.signfm.pass.value;
    let log_email = document.getElementById("log_email").value;
    let log_pass = document.getElementById("log_pass").value; 
    
    let lem = lps = false;

    //validation for log in email 
    if(log_email == ""){
        errors("log_email","Enter E-mail Address...!");
        lem = true;
    }else if( log_email !== email){
        errors("log_email","E-mail Address Not Found...!");
        lem = true;
    }else{
        errors("log_email","");
    }

    // validation for log in password
    if(log_pass == ""){
        errors("log_pass","Enter Password...!");
        lps = true;
    }else if (log_pass !== pass){
        errors("log_pass","Wrong Password...!");
        lps = true;
    }else{
        errors("log_pass","");
    }

    if(lem || lps ){
        return false;
    }else{
        return true;
    }
}
$(document).ready(function () {
    $("#submitBtn").click(function (e) {
        e.preventDefault();
        check();
    });
    $(".para-1").click(function () {
        $(".login-all").slideToggle(1000);
        $(".signup-all").slideToggle(1000);
    });
    $(".para-2").click(function () {
        $(".signup-all").slideToggle(1000);
        $(".login-all").slideToggle(1000);
    });
});
