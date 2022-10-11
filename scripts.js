$(document).ready(function () {
  debugger
  $('#tbl').DataTable(
    {
      order: [[0, 'desc']],
      paging: true,
      info: true
    }
  );

  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  const hasSecret = params.id == 's';

  showHideColumn(2, hasSecret);

  $('table a').on("click", function (e) {
    if(!hasSecret){
      e.preventDefault();
    }
  });
});

function showHideColumn(col_no, do_show) {
  debugger
  var rows = document.getElementById('tbl').rows;

  for (var row = 0; row < rows.length; row++) {
      var cols = rows[row].cells;
      if (col_no >= 0 && col_no < cols.length) {
          cols[col_no].style.display = do_show ? '' : 'none';
      }
  }
}