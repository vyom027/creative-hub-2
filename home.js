$(document).ready(function(){
    $(".logo").click(function(){
        if($(".navigation").is ( ":hidden")){
            $(".navigation").slideDown(500);
        }else{
            $(".navigation").slideUp(500);
        }
    });
    $(".detbtn1").click(function(){
        if($(".details1").is ( ":hidden")){
            $(".details1").slideDown(500);
            $("#pro1").css({"height":"400px"});
            $("#pro1").css({"transition":"0.3s ease"});
        }else{
            $(".details1").slideUp(500);
            $("#pro1").css({"height":"300px"});
        }
    });
    $(".detbtn2").click(function(){
        if($(".details2").is ( ":hidden")){
            $(".details2").slideDown(500);
            $("#pro2").css({"height":"400px"});
            $("#pro2").css({"transition":"0.3s ease"});
        }else{
            $(".details2").slideUp(500);
            $("#pro2").css({"height":"300px"});
        }
    });
    $(".detbtn3").click(function(){
        if($(".details3").is ( ":hidden")){
            $(".details3").slideDown(500);
            $("#pro3").css({"height":"400px"});
            $("#pro3").css({"transition":"0.3s ease"});
        }else{
            $(".details3").slideUp(500);
            $("#pro3").css({"height":"300px"});
        }
    });
    $(".detbtn4").click(function(){
        if($(".details4").is ( ":hidden")){
            $(".details4").slideDown(500);
            $("#pro4").css({"height":"400px"});
            $("#pro4").css({"transition":"0.3s ease"});
        }else{
            $(".details4").slideUp(500);
            $("#pro4").css({"height":"300px"});
        }
    });
    $(".detbtn5").click(function(){
        if($(".details5").is ( ":hidden")){
            $(".details5").slideDown(500);
            $("#pro5").css({"height":"400px"});
            $("#pro5").css({"transition":"0.3s ease"});
        }else{
            $(".details5").slideUp(500);
            $("#pro5").css({"height":"300px"});
        }
    });
    $(".detbtn6").click(function(){
        if($(".details6").is ( ":hidden")){
            $(".details6").slideDown(500);
            $("#pro6").css({"height":"400px"});
            $("#pro6").css({"transition":"0.3s ease"});
        }else{
            $(".details6").slideUp(500);
            $(".product").css({"height":"300px"});
        }
    });
});

$(document).ready(function(){
    $(".feed").click(function(){
        // alert("hlo");
        if($(".feedback").is (":hidden")){
            $(".feedback").slideDown(750);
            $(".feedback").css({"display":"flex"});
        }else{
            $(".feedback").slideUp(750);
        }
    });
});


function feedback(){
    let name = document.getElementById("feed_name").value;
    let email = document.getElementById("feed_email").value;
    let comment = document.getElementById("feed_comment").value;

    let fn = em = com = false;


    if(name == ""){
        errors("feed_name","Enter Your Full Name Please...");
        fn = true;
    }
    else{
        let reg = /^[a-zA-Z\-]+$/;
        if(reg.test(name) === false){
            errors("feed_name","Enter Valid Name Please...");
            fn = true;
        }
        else{
            errors("feed_name","");
        }
    }

    // validation of email
    if(email == ""){
        errors("feed_email","Enter Your E-mail Address Please...");
        em = true;
    }
    else{
        let reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if(reg.test(email) === false){
            errors("feed_email","Enter Valid E-mail Address Please...");
            em = true;
        }
        else{
            errors("feed_email","");
        }
    }

    if(comment == ""){
        errors("feed_comment","Enter Your Feedback Please...");
        com = true; 
    }
    else{
        errors("feed_comment","");
    }

    if( fn || em || com){
        return false;
    }
    else{
        return true;
    }
}