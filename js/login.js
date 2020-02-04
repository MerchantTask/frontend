
    $(document).ready(function () {
        var token = localStorage.getItem('token');
     
  
        $("form.loginForm").on("submit",function(e){
          e.preventDefault();
          username = $("#username").val();
          password = $("#password").val();
  
  
          data = {
            "username": username,
            "password": password
  
          }
          $.ajax({
            url: 'http://localhost:8000/login/',
            type: 'post',
            dataType: 'json',
            data: data,
  
            success: function (res, textStatus, xhr) {
              if (res.token != null) {
                localStorage.setItem('token', res.token);
              
               
                  location.href = "dashboard.html";
               
  
              } else {
                alert(res.message);
              }
            },
            
            error: function (xhr, textStatus, errorThrown) {
              console.log('Error in Operation');
            }
          });
        });
      });
  