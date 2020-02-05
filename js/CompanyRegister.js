$(document).ready(function () {
$("form.company").on("submit",function(e){

    e.preventDefault();
    company_name = $("#company_name").val();
    address = $("#address").val();
    contact_person = $("#contact_person").val();
    contact_email = $("#contact_email").val();
    contact_phone = $("#contact_phone").val();
    company_email = $("#email").val();
    pan = $("#pan").val();
 

    data ={
        "company_name":company_name,
        "address":address,
        "contact_person":contact_person,
        "contact_email":contact_email,
        "contact_phone":contact_phone,
        "company_email":company_email,
        "pan":pan
    }
    $.ajax({
        url:'http://localhost:8000/Company/addCompany/',
        type:"post",
        dataType:'json',
        data:data,
       
        
        success: function(res,textStatus,xhr){
             if(res.message=="Succesfull"){
               alert("added successfully")
             }
             
        }
        
       ,
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error in Operation');
          }
    });
});
});