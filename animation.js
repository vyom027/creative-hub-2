$(document).ready(function(){
    $(".logo").click(function(){
        if($(".navigation").is ( ":hidden" )){
            $(".navigation").slideDown(500);
        }else{
            $(".navigation").slideUp(500);
        }
    });
    $(".detbtn1").click(function(){
        if($(".details1").is ( ":hidden") ){
            $(".details1").toggle(500);
        }else{
            $(".details1").hide(500);
        }
    });
    $(".imgbtn1").click(function(){
        if($(".proimgs1").is ( ":hidden")){
           $(".proimgs1").toggle(500);
        }else{
            $(".proimgs1").hide(500);
        }
    });
    $(".detbtn2").click(function(){
        if($(".details2").is ( ":hidden") ){
            $(".details2").toggle(500);
        }else{
            $(".details2").hide(500);
        }
        });
    $(".imgbtn2").click(function(){
        if($(".proimgs2").is ( ":hidden")){
            $(".proimgs2").toggle(500);
        }else{
            $(".proimgs2").hide(500);
        }
    });
    
    $(".detbtn3").click(function(){
        if($(".details3").is ( ":hidden") ){
            $(".details3").toggle(500);
        }else{
            $(".details3").hide(500);
        }
    });
    $(".imgbtn3").click(function(){
        if($(".proimgs3").is ( ":hidden")){
           $(".proimgs3").toggle(500);
        }else{
            $(".proimgs3").hide(500);
        }
    });
    $(".detbtn4").click(function(){
        if($(".details4").is ( ":hidden") ){
            $(".details4").toggle(500);
        }else{
            $(".details4").hide(500);
        }
        });
    $(".imgbtn4").click(function(){
        if($(".proimgs4").is ( ":hidden")){
            $(".proimgs4").toggle(500);
        }else{
            $(".proimgs4").hide(500);
        }
    });
    $(".detbtn5").click(function(){
        if($(".details5").is ( ":hidden") ){
            $(".details5").toggle(500);
        }else{
            $(".details5").hide(500);
        }
    });
    $(".imgbtn5").click(function(){
        if($(".proimgs5").is ( ":hidden")){
           $(".proimgs5").toggle(500);
        }else{
            $(".proimgs5").hide(500);
        }
    });
    $(".detbtn6").click(function(){
        if($(".details6").is ( ":hidden") ){
            $(".details6").toggle(500);
        }else{
            $(".details6").hide(500);
        }
        });
    $(".imgbtn6").click(function(){
        if($(".proimgs6").is ( ":hidden")){
            $(".proimgs6").toggle(500);
        }else{
            $(".proimgs6").hide(500);
        }
    });
    $(".detbtn7").click(function(){
        if($(".details7").is ( ":hidden") ){
            $(".details7").toggle(500);
        }else{
            $(".details7").hide(500);
        }
    });
    $(".imgbtn7").click(function(){
        if($(".proimgs7").is ( ":hidden")){
           $(".proimgs7").toggle(500);
        }else{
            $(".proimgs7").hide(500);
        }
    });
    $(".detbtn8").click(function(){
        if($(".details8").is ( ":hidden") ){
            $(".details8").toggle(500);
        }else{
            $(".details8").hide(500);
        }
        });
    $(".imgbtn8").click(function(){
        if($(".proimgs8").is ( ":hidden")){
            $(".proimgs8").toggle(500);
        }else{
            $(".proimgs8").hide(500);
        }
    });
    $(".detbtn9").click(function(){
        if($(".details9").is ( ":hidden") ){
            $(".details9").toggle(500);
        }else{
            $(".details9").hide(500);
        }
    });
    $(".imgbtn9").click(function(){
        if($(".proimgs9").is ( ":hidden")){
           $(".proimgs9").toggle(500);
        }else{
            $(".proimgs9").hide(500);
        }
    });
    $(".detbtn10").click(function(){
        if($(".details10").is ( ":hidden") ){
            $(".details10").toggle(500);
        }else{
            $(".details10").hide(500);
        }
        });
    $(".imgbtn10").click(function(){
        if($(".proimgs10").is ( ":hidden")){
            $(".proimgs10").toggle(500);
        }else{
            $(".proimgs10").hide(500);
        }
    });
    $(".detbtn11").click(function(){
        if($(".details11").is ( ":hidden") ){
            $(".details11").toggle(500);
        }else{
            $(".details11").hide(500);
        }
    });
    $(".imgbtn11").click(function(){
        if($(".proimgs11").is ( ":hidden")){
           $(".proimgs11").toggle(500);
        }else{
            $(".proimgs11").hide(500);
        }
    });
    $(".detbtn12").click(function(){
        if($(".details12").is ( ":hidden") ){
            $(".details12").toggle(500);
        }else{
            $(".details12").hide(500);
        }
        });
    $(".imgbtn12").click(function(){
        if($(".proimgs12").is ( ":hidden")){
            $(".proimgs12").toggle(500);
        }else{
            $(".proimgs12").hide(500);
        }
    });
    $(".detbtn13").click(function(){
        if($(".details13").is ( ":hidden") ){
            $(".details13").toggle(500);
        }else{
            $(".details13").hide(500);
        }
    });
    $(".imgbtn13").click(function(){
        if($(".proimgs13").is ( ":hidden")){
           $(".proimgs13").toggle(500);
        }else{
            $(".proimgs13").hide(500);
        }
    });
    $(".detbtn14").click(function(){
        if($(".details14").is ( ":hidden") ){
            $(".details14").toggle(500);
        }else{
            $(".details14").hide(500);
        }
        });
    $(".imgbtn14").click(function(){
        if($(".proimgs14").is ( ":hidden")){
            $(".proimgs14").toggle(500);
        }else{
            $(".proimgs14").hide(500);
        }
    });
});


// for form animation 
$(document).ready(function(){
    $(".orbtn1").click(function(){
        $(".order").slideDown(1000);
        $(".order").css({"display":"flex"});
    });
    $(".clsord").click(function(){
        $(".order").slideUp(1000); 
    });
});



 // details for laptop
    function laptop1(){
        document.getElementById("proname").innerHTML = "Acer Aspire 5";
        document.getElementById("proprice").innerHTML = "₹ 67,990";
    }
    function laptop2(){
        document.getElementById("proname").innerHTML = "Dell XPS 15 OLED";
        document.getElementById("proprice").innerHTML = "₹ 1,04,250";
    }
    function laptop3(){
        document.getElementById("proname").innerHTML = "Asus Vivobook 14";
        document.getElementById("proprice").innerHTML = "₹ 42,500";
    }
    function laptop4(){
        document.getElementById("proname").innerHTML = "HP Victus";
        document.getElementById("proprice").innerHTML = "₹ 78,500";
    }
    function laptop5(){
        document.getElementById("proname").innerHTML = "DELL Inspiron 15";
        document.getElementById("proprice").innerHTML = "₹ 53,700";
    }
    function laptop6(){
        document.getElementById("proname").innerHTML = "Apple 2020 Macbook Air Apple M1";
        document.getElementById("proprice").innerHTML = "₹ 79,900";
    }
    function laptop7(){
        document.getElementById("proname").innerHTML = "Lenovo Yoga Slim 6";
        document.getElementById("proprice").innerHTML = "₹ 64,990";
    }
    function laptop8(){
        document.getElementById("proname").innerHTML = "MSI Katana 15";
        document.getElementById("proprice").innerHTML = "₹ 74,900";
    }
    function laptop9(){
        document.getElementById("proname").innerHTML = "Lenovo IdeaPad Gaming 3";
        document.getElementById("proprice").innerHTML = "₹ 67,900";
    }
    function laptop10(){
        document.getElementById("proname").innerHTML = "Infinix ZEROBOOK 13";
        document.getElementById("proprice").innerHTML = "₹ 59,900";
    }



    // details for mobile
    function mobile1(){
        document.getElementById("proname").innerHTML = "Apple iPhone 14";
        document.getElementById("proprice").innerHTML = "₹ 58,999";
    }
    function mobile2(){
        document.getElementById("proname").innerHTML = "SAMSUNG Galaxy A14 5G";
        document.getElementById("proprice").innerHTML = "₹ 16,499";
    }
    function mobile3(){
        document.getElementById("proname").innerHTML = "Iphone 14 Pro";
        document.getElementById("proprice").innerHTML = "₹ 89,999";
    }
    function mobile4(){
        document.getElementById("proname").innerHTML = "Redmi A1";
        document.getElementById("proprice").innerHTML = "₹ 9,000";
    }
    function mobile5(){
        document.getElementById("proname").innerHTML = "Real Me C15";
        document.getElementById("proprice").innerHTML = "₹ 12,000";
    }
    function mobile6(){
        document.getElementById("proname").innerHTML = "Real Me C11";
        document.getElementById("proprice").innerHTML = "₹ 9,900";
    }
    function mobile7(){
        document.getElementById("proname").innerHTML = "Samsung Galaxy Z Fold3 5G";
        document.getElementById("proprice").innerHTML = "₹ 64,990";
    }
    function mobile8(){
        document.getElementById("proname").innerHTML = "Samsung Galaxy S20 FE 5G";
        document.getElementById("proprice").innerHTML = "₹ 30,900";
    }
    function mobile9(){
        document.getElementById("proname").innerHTML = "OnePlus 10R 5G";
        document.getElementById("proprice").innerHTML = "₹ 27,900";
    }
    function mobile10(){
        document.getElementById("proname").innerHTML = "Apple Iphone 15";
        document.getElementById("proprice").innerHTML = "₹ 79,900";
    }


    // details for home appliances
    function home1(){
        document.getElementById("proname").innerHTML = "Samsung 80 cm Series 4 HD";
        document.getElementById("proprice").innerHTML = "₹ 37,990";
    }
    function home2(){
        document.getElementById("proname").innerHTML = "Sony 80 cm Full HD Smart TV";
        document.getElementById("proprice").innerHTML = "₹ 25,000";
    }
    function home3(){
        document.getElementById("proname").innerHTML = "LG UR77 43 4K UHD Smart TV";
        document.getElementById("proprice").innerHTML = "₹ 32,500";
    }
    function home4(){
        document.getElementById("proname").innerHTML = "RCL TV";
        document.getElementById("proprice").innerHTML = "₹ 18,500";
    }
    function home5(){
        document.getElementById("proname").innerHTML = "OP TV";
        document.getElementById("proprice").innerHTML = "₹ 13,700";
    }
    function home6(){
        document.getElementById("proname").innerHTML = "OP Fridge Model 2";
        document.getElementById("proprice").innerHTML = "₹ 29,900";
    }
    function home7(){
        document.getElementById("proname").innerHTML = "Model G4";
        document.getElementById("proprice").innerHTML = "₹ 24,990";
    }
    function home8(){
        document.getElementById("proname").innerHTML = "WhirlPool Model 1";
        document.getElementById("proprice").innerHTML = "₹ 30,900";
    }
    function home9(){
        document.getElementById("proname").innerHTML = "Hexa H5";
        document.getElementById("proprice").innerHTML = "₹ 27,900";
    }
    function home10(){
        document.getElementById("proname").innerHTML = "LG Refrigerator";
        document.getElementById("proprice").innerHTML = "₹ 35,900";
    }
    function home11(){
        document.getElementById("proname").innerHTML = "PW Model 5";
        document.getElementById("proprice").innerHTML = "₹ 14,990";
    }
    function home12(){
        document.getElementById("proname").innerHTML = "SW Model 2";
        document.getElementById("proprice").innerHTML = "₹ 18,900";
    }
    function home13(){
        document.getElementById("proname").innerHTML = "SW Model 2";
        document.getElementById("proprice").innerHTML = "₹ 15,900";
    }
    function home14(){
        document.getElementById("proname").innerHTML = "LG Washing Machine 5";
        document.getElementById("proprice").innerHTML = "₹ 9,900";
    }

    // function for errors result
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



    // function for form validation of order confermation 
    function conOrder(){
        document.getElementById("fname").placeholder = "Enter Full Name";
        document.getElementById("eml").placeholder = "Enter E-mail Address";
        document.getElementById("add").placeholder = "Enter Address";
        document.getElementById("city").placeholder = "Enter City";
        document.getElementById("zipcode").placeholder = "Enter Zipcode"; 
        let fname = document.getElementById("fname").value;
        let email = document.getElementById("eml").value;
        let address = document.getElementById("add").value;
        let state = document.getElementById("state").value;
        let city = document.getElementById("city").value;
        let zipcode = document.getElementById("zipcode").value;
        let quantity = document.getElementById("qun").value;
        let fn = em = add = st = ct = zc = qn = false;

        // validation of first name
        if(fname == ""){
            errors("fname","Enter Your Full Name Please...");
            fn = true;
        }
        else{
            let reg = /^[a-zA-Z\-]+$/;
            if(reg.test(fname) === false){
                errors("fname","Enter Valid Name Please...");
                fn = true;
            }
            else{
                errors("fname","");
            }
        }

        // validation of email
        if(email == ""){
            errors("eml","Enter Your E-mail Address Please...");
            em = true;
        }
        else{
            let reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            if(reg.test(email) === false){
                errors("eml","Enter Valid E-mail Address Please...");
                em = true;
            }
            else{
                errors("eml","");
            }
        }


        // validation of address
        if(address == ""){
            errors("add","Enter Your Address Please...");
            add = true;
        }
        else{
            let reg = /^[a-zA-Z0-9\s!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/;
            if(reg.test(address) === false){
                errors("add","Enter Valid Address Please...");
                add = true;
            }
            else{
                errors("add","");
            }
        }


        // validation of City
        if(city == ""){
            errors("city","Enter Your City Please...");
            ct = true;
        }
        else{
            let reg = /^[a-zA-Z\-]+$/;
            if(reg.test(city) === false){
                errors("city","Enter Valid City Name Please...");
                ct = true;
            }
            else{
                errors("city","");
            }
        }

        // validation of state
        if(state == ""){
            errors("state","Enter Your State");
            st = true;
        }
        else{
            let reg = /^[a-zA-Z\-]+$/;
            if(reg.test(state) === false){
                errors("state","Enter Valid State");
                st = true;
            }
            else{
                errors("state","");
            }
        }

        //validation for zipcode
        if(zipcode == ""){
            errors("zipcode","Enter Your Zipcode");
            zc = true;
        }
        else{
            let reg = /^\d{6}$/;
            if(reg.test(zipcode) === false){
                errors("zipcode","Enter Valid Zipcode");
                zc = true;
            }
            else{
                errors("zipcode","");
            }
        }

        //validation for quantity
        if(quantity == ""){
            document.getElementById("qunErr").innerHTML ="Enter Product Quantity...!";
            qn = true;
        }
        else if( quantity > 10){
            document.getElementById("qunErr").innerHTML =" Product Quantity Must Not Be Grater Then 10...!";
            qn = true;
        }
        else if(quantity < 1){
            document.getElementById("qunErr").innerHTML ="Product Quantity Must Not Be Less Then 1...!";
            qn = true;
        }
        else{
            errors("qun","");
            TotalPrice();
        }

        

        
        if( fn || em || add || ct || st || zc || qn){
            return false;
        }
        else {
            return true;
        }
    }

    // for total price
    function TotalPrice() {
        var quantity = Number(document.getElementById("qun").value);
        var price = Number(document.getElementById("proprice").innerText.replace(/[^\d.]/g, ''));
       var tot = quantity * price;
       document.getElementById("totprice").innerText =  tot.toFixed(2);
    }

    // for clear quantity & total
    function clearOrder() {
        document.getElementById("qun").value = "1";
        document.getElementById("totprice").innerText = "";
        document.getElementById("qunErr").innerText = "";
    }



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


    function contect(){
        let con_name = document.getElementById("con_name").value;
        let con_email = document.getElementById("con_email").value;
        let con_comment = document.getElementById("con_message").value;
        let fn = em = com = false;


        if(con_name == ""){
            errors("con_name","Enter Your Full Name Please...");
            fn = true;
        }
        else{
            let reg = /^[a-zA-Z\-]+$/;
            if(reg.test(con_name) === false){
                errors("con_name","Enter Valid Name Please...");
                fn = true;
            }
            else{
                errors("con_name","");
            }
        }

        // validation of email
        if(con_email == ""){
            errors("con_email","Enter Your E-mail Address Please...");
            em = true;
        }
        else{
            let reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            if(reg.test(con_email) === false){
                errors("con_email","Enter Valid E-mail Address Please...");
                em = true;
            }
            else{
                errors("con_email","");
            }
        }

        if(con_comment == ""){
            errors("con_message","Enter Your Feedback Please...");
            com = true; 
        }
        else{
            errors("con_message","");
        }

        if( fn || em || com){
            return false;
        }
        else{
            return true;
        }
    }