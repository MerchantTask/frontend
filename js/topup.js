$(document).ready(function () {
 
    //console.log(tok);
  
    $.getJSON('http://localhost:8000/Company/merchantList',function(res){
      $.each(res,function(index){
      
        $("#company_name").append('<option value="'+res[index]._id+'">'+res[index].company_name+'</option>');
      })
    })
  

    $("form.topup").on("submit",function(e){
      e.preventDefault();
      topup_amount = $("#topup_amount").val();
      mode_of_payment = $("#mode_of_payment").val();
      remarks = $("#remarks").val();
      company_id = $("#company_name").val();


      data = {
        "topup_amount": topup_amount,
        "mode_of_payment": mode_of_payment,
        "remarks": remarks,
        "company_id": company_id


      }
      $.ajax({
        url: 'http://localhost:8000/topup/addTopup',
        type: 'post',
        dataType: 'json',
        data: data,

        success: function (res, textStatus, xhr) {
            if (res.message == "Succesfull") {
                location.href = "index.html"
            }

        },
        
        error: function (xhr, textStatus, errorThrown) {
          console.log('Error in Operation');
        }
      });
    });
  });
