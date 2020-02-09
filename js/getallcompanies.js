$(document).ready(function () {
var list = $('#merchantlist').DataTable({
  "columnDefs": [{
    "targets": [0],
    "visible": false,
    "searchable": false
  }]
}

);
$.getJSON('http://localhost:8000/Company/allCompanies/', function (res) {
 

  $.each(res, function (index) {

    list.row.add([
      res[index]._id,
      res[index].company_name,
      res[index].address,
      res[index].contact_person,
      res[index].contact_phone,
      res[index].contact_email,
      res[index].company_email,
      res[index].pan,
      res[index].current_balance,

      '<img src="http://localhost:8000/uploads/' +  res[index].verification_imagename +
      '" class="img-thumbnail" alt="Sample image" height="50px" width="100px">',

      
     '<a href="CompanyUpdate.html?id='+ res[index]._id +'"><button class="btn"><i class="fa fa-cog fa-fw"></i></button></a>' ,
     '<button class="btn" id="deleteCompany"><i class="fa fa-trash fa-fw" ></i></button>'
     
    ]).draw(false);

  });

});

   
  $('#merchantlist').on('click', '#deleteCompany',function () {
    var checkstr =  confirm('are you sure you want to delete this?');
    if(checkstr == true){
      // do your code
      var data = list.row($(this).parents('tr')).data();
      var id = (data[0]);
   
      $.ajax({
        url: 'http://localhost:8000/company/deleteCompany/' + id,
        type: 'delete',
        beforeSend: function (xhr) {
         
        },
        success: function (res, textStatus, xhr) {
          if (res.message == "Deleted Successfully") {
            window.location.reload();
          }

        },
        error: function (xhr, textStatus, errorThrown) {
          console.log(xhr);
        }
      });

    }else{
    return false;
    }
     
  } );

$.getJSON('http://localhost:8000/Company/merchantCount', function (res) {
  
  $("#merchantCount").append(res.count);
});


});