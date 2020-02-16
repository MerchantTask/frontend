$(document).ready(function () {

    
   
  
    $("form.d").on("submit", function (e) {
  
      e.preventDefault();
      username = $("#username").val();
      password = $("#password").val();
      email = $("#email").val();
     
  
  
      data = {
        "username": username,
        "password": password,
        "email": email
      }
      $.ajax({
        url: 'http://localhost:8000/test/register/',
        type: "post",
        dataType: 'json',
        data: data,
        beforeSend: function(xhr) {
          
      },
  
        success: function (res, textStatus, xhr) {
            if (res.message_success == "Register Successful") {
              alert("Register Successful")
            
            }
  
          },
        error: function (xhr, textStatus, errorThrown) {

var result = (xhr.responseJSON);

if(result.username){
    alert(result.username.message)
}
 if(result.password){
   alert(result.password.message)
}
 if(result.email){
   alert(result.email.message)
}
    
        }
      });
    });
  });