$(document).ready(function () {

  let imageFile = '';
  var tok = localStorage.getItem('token');
  if(tok==null){
    console.log ("tok");
    alert("please Login first");
    window.location.href ='login.html';
  }else{
  $("#verification_image").on('change', function () {
    let formData = new FormData();
    let files = $("#verification_image").get(0).files;
    if (files.length > 0) {
      formData.append("imageFile", files[0]);
    }
    $.ajax({
      url: 'http://localhost:8000/Company/upload/',
      type: 'post',
      contentType: false,
      cache: false,
      processData: false,
      data: formData,

      success: function (data) {
        imageFile = data.filename;

        $('#image_display').html('<img src="http://localhost:8000/uploads/' + data.filename +
          '" class="img-thumbnail" alt="Sample image" height="200px" width="200px">');

      },
      error: function () {
        alert("Image upload failed");
      }

    });
  });

  }

$("form.company").on("submit",function(e){

    e.preventDefault();
    company_name = $("#company_name").val();
    address = $("#address").val();
    contact_person = $("#contact_person").val();
    contact_email = $("#contact_email").val();
    contact_phone = $("#contact_phone").val();
    company_email = $("#email").val();
    pan = $("#pan").val();
    listImage = imageFile;
 

    data ={
        "company_name":company_name,
        "address":address,
        "contact_person":contact_person,
        "contact_email":contact_email,
        "contact_phone":contact_phone,
        "company_email":company_email,
        "pan":pan,
        "verification_imagename": listImage
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