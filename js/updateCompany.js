$(document).ready(function () {

    var urlParams = new URLSearchParams(window.location.search);

    var merchant_id = urlParams.get("id");
   

    
    $.getJSON('http://localhost:8000/company/fetchSingleCompany/' + merchant_id, function (res) {
      $.each(res, function (index) {
        $('#name').val(res[index].company_name);
        $('#address').val(res[index].address);
        $('#person').val(res[index].contact_person);
        $('#email').val(res[index].contact_email);
        $('#phone').val(res[index].contact_phone);
        $('#cemail').val(res[index].company_email);
        $('#pan').val(res[index].pan);

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
      


      var data = {
        "company_name": company_name,
        "address": address,
        "contact_person": contact_person,
        "contact_email": contact_email,
        "contact_phone": contact_phone,
        "company_email": company_email,
        "pan": pan
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
});