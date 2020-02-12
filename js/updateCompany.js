$(document).ready(function () {

    var urlParams = new URLSearchParams(window.location.search);

    var merchant_id = urlParams.get("id");
   
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
    
    $.getJSON('http://localhost:8000/company/fetchSingleCompany/' + merchant_id, function (res) {
      $.each(res, function (index) {
        $('#name').val(res[index].company_name);
        $('#address').val(res[index].address);
        $('#person').val(res[index].contact_person);
        $('#email').val(res[index].contact_email);
        $('#phone').val(res[index].contact_phone);
        $('#cemail').val(res[index].company_email);
        $('#pan').val(res[index].pan);
        $('#verification_image').val(res[index].verification_imagename);

        });
    });

    $("form.updateCompany").on("submit", function () {

      var company_name = $('#name').val();
      var address = $('#address').val();
      var contact_person = $('#person').val();
      var contact_email = $('#email').val();
      var contact_phone = $('#phone').val();
      var company_email = $('#cemail').val();
      var pan = $('#pan').val();
      listimage = imageFile;
      


      var data = {
        "company_name": company_name,
        "address": address,
        "contact_person": contact_person,
        "contact_email": contact_email,
        "contact_phone": contact_phone,
        "company_email": company_email,
        "pan": pan,
        "verification_imagename":listimage
      }

      $.ajax({
        type: "PUT",
        url: "http://localhost:8000/company/updateCompany/" + merchant_id,
        data: data,
        beforeSend: function (xhr) {

        },
        success: function (result) {
          if(result){
              alert("Merchant Updated");}
         
        }
      });
      return false;
    });
  }
});