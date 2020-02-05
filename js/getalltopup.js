$(document).ready(function () {
    var list = $('#Topup').DataTable({
      "columnDefs": [{
        "targets": [0],
        "visible": false,
        "searchable": false
      }]
    }
    
    );
    $.getJSON('http://localhost:8000/topup/getTopup/', function (res) {
      $.each(res, function (index) {
    
        list.row.add([
          res[index].date,
          res[index].topup_amount,
          res[index].mode_of_payment,
          res[index].remarks,
          res[index].company_name,
         
          '<a href="singleView.html?id=' + res[index]._id +
          '"><button class="btn btn-block  submitButton" type="submit" name="Submit" id="approve">View</button></a>'
        ]).draw(false);
    
      });
    
    });
    });