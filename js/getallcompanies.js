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
      res[index].company_name,
      res[index].address,
      res[index].contact_person,
      res[index].contact_phone,
      res[index].contact_email,
      res[index].company_email,
      res[index].pan,
      
      '<a href="singleView.html?id=' + res[index]._id +
      '"><button class="btn btn-block  submitButton" type="submit" name="Submit" id="approve">View</button></a>'
    ]).draw(false);

  });

});
});