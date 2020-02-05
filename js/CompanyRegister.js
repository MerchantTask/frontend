$("form.company").on("submit",function(e){

    e.preventDefault();
    Name = $("#name").val();
    Address = $("#address").val();
    ContactPerson = $("#person").val();
    ContactPersonEmail = $("#email").val();
    ContactPersonPhone = $("#phone").val();
    CompanyEmail = $("#cemail").val();
    PAN = $("#pan").val();
 

    data ={
        "Name":Name,
        "Address":Address,
        "ContactPerson":ContactPerson,
        "ContactPersonEmail":ContactPersonEmail,
        "ContactPersonPhone":ContactPersonPhone,
        "CompanyEmail":CompanyEmail,
        "PAN":PAN
    }
    $.ajax({
        url:'http://localhost:8000/Company/addCompany/',
        type:"post",
        dataType:'json',
        data:data,
        beforeSend: function (xhr) {

          },
        
        success: function(res,textStatus,xhr){
             alert(res.message);
        }
        
       ,
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error in Operation');
          }
    });
})