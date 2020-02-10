$(document).ready(function () {
    var list = $('#Topup').DataTable({
      "columnDefs": [{
        "targets": [0],
        "visible": false,
        "searchable": false
      }]
    }
    
    );
    var tok = localStorage.getItem('token');
    if(tok==null){
      console.log ("tok");
      alert("please Login first");
      window.location.href ='login.html';
    }else{
    $.getJSON('http://localhost:8000/topup/getTopup/', function (res) {
      $.each(res.merchants, function (index) {
        
        list.row.add([
          res.merchants[index]._id,
          new Date(res.merchants[index].date).toISOString().split(
            'T')[0],
          res.merchants[index].topup_amount,
          res.merchants[index].mode_of_payment,
          res.merchants[index].company_id.company_name,
          res.merchants[index].remarks
        ]).draw(false);
    
      });
    
    });
  }
    });
  