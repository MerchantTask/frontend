$(document).ready(function () {
    

    $("form.topup").on("submit",function(e){
      e.preventDefault();
      topup_amount = $("#topup_amount").val();
      mode_of_payment = $("#mode_of_payment").val();
      remarks = $("#remarks").val();
      company_name = $("#company_name").val();


      data = {
        "topup_amount": topup_amount,
        "mode_of_payment": mode_of_payment,
        "remarks": remarks,
        "company_name": company_name


      }
      $.ajax({
        url: 'http://localhost:8000/topup/addTopup',
        type: 'post',
        dataType: 'json',
        data: data,

        success: function (res, textStatus, xhr) {
            if (res.message == "Succesfull") {
                location.href = "companyRegister.html"
            }

        },
        
        error: function (xhr, textStatus, errorThrown) {
          console.log('Error in Operation');
        }
      });
    });
  });
