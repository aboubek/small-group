function search() {
  // Declare variables
  var input, filter, table, tr, td, i;
  input = document.getElementById("searchNames");
  filter = input.value.toUpperCase();
  tableActive = document.getElementById("table-active");
  trActive = tableActive.getElementsByTagName("tr");
  tableInactive = document.getElementById("table-inactive");
  trInactive = tableInactive.getElementsByTagName("tr");
  // Loop through all table rows, and hide those who don't match the search query
  function find(tr) {
      for (i = 0; i < tr.length; i++) {
        tr[i].style.display = "none"
        for (j = 0; j < 3; j++) {
            td = tr[i].getElementsByTagName("td")[j];
            if (td) {
              if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
              }
            //   else {
            //     tr[i].style.display = "none";
            //   }
            }
         }
      }
    }
  find(trActive)
  find(trInactive)
}
