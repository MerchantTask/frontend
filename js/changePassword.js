$(document).ready(function () {
    var id = localStorage.getItem('adminId');
    var tok = localStorage.getItem('token');
    if(tok==null){
     
      window.location.href ='login.html';
    }else{

    
$("form.changePassword").on("submit", function () {
  var checkstr =  confirm('are you sure you want change password?');
  if(checkstr == true){
    // do your code
    var oldpassword = $('#oldpassword').val();
    var password = $('#password').val();
   
    var data = {
      "currentPassword": oldpassword,
      "password": password
    }

    $.ajax({
      type: "PUT",
      url: "http://localhost:8000/login/changePassword/" + id,
      data: data,
      beforeSend: function(xhr) {
        if (tok) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
        }
    },
      success: function (result) {
        alert(result.message);
        if(result.message=="Password Changed"){
          window.location.href ='index.html';
          }
       
      }
    });
    return false;
  }else{
  return false;
  }
   
  });
}
});