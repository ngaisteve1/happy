$(document).ready(function () {
  $('#tbl').DataTable(
    {
      order: [[0, 'desc']],
      paging: true,
      info: true
    }
  );

  showHideColumn(2, false);

  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  $('table a').on("click", function (e) {
    debugger
    if(params.id != 's'){
      debugger
      e.preventDefault();
    }
  });

  const age = dateAgo('2022-04-28');

  document.getElementById("age").innerText = age;
});

function dateAgo(date) {
  var startDate = new Date(date);
  var diffDate = new Date(new Date() - startDate);
  return ((diffDate.toISOString().slice(0, 4) - 1970) + "Y " +
      diffDate.getMonth() + "M " + (diffDate.getDate()-1) + "D");
}

function showHideColumn(col_no, do_show) {
  var rows = document.getElementById('tbl').rows;

  for (var row = 0; row < rows.length; row++) {
      var cols = rows[row].cells;
      if (col_no >= 0 && col_no < cols.length) {
          cols[col_no].style.display = do_show ? '' : 'none';
      }
  }
}