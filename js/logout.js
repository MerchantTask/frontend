$("#logout").click(function () {
    $.ajax({
      type: 'post',
      url: 'http://localhost:8000/login/logout',
      beforeSend: function (xhr) {
        if (tok) {
          xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
        }
      },
      success: function (data) {
        localStorage.removeItem('token');
        localStorage.removeItem('adminId');
  
        location.href = "../login.html";
  
      },
      error: function () {
          console.log('Error in Operation');
      }
    });
  });
  