$(document).ready(function () {
    var id = localStorage.getItem('adminId');
    var tok = localStorage.getItem('token');
    if(tok==null){
      console.log ("tok");
      alert("please Login first");
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
      beforeSend: function (xhr) {

      },
      success: function (result) {
        if(result){
            alert(result.message);}
       
      }
    });
    return false;
  }else{
  return false;
  }
   
  });
}
});