var rows = $("table.content-table tbody tr");
$("table").removeClass("cont");
var sort = rows.filter("[position=c_b]");
var sorted = new Array(sort.length);
for (var i = 0; i < sort.length; i++) {
  sorted[i] = sort[i].innerText.split("\t");
}
help(sorted, "c_b");


$('#selectOption').on('change', function() {
  var selected = this.value;
  var sort = rows.filter("[position=" + selected + "]");
  var sorted = new Array(sort.length);
  for (var i = 0; i < sort.length; i++) {
    sorted[i] = sort[i].innerText.replaceAll("\n       ", "").slice(1, -7);
    sorted[i] = sorted[i].split(" ");
    sorted[i][2] = sorted[i][2] + " " + sorted[i][3];
    sorted[i][3] = sorted[i][4];
  }
  help(sorted, selected);
});

function help(sorted, selected){
  sorted.sort(function(a, b) {
    return b[3] - a[3];
  });

  for (var i = 0; i < sorted.length; i++) {
    rows.filter("[position=" + selected + "]")[i].innerHTML = "\n        <td>" + (i + 1) + "</td>\n        <td>" + sorted[i][1] + "</td>\n        <td>" + sorted[i][2] + "</td>\n        <td>" + sorted[i][3] + "</td>\n      ";
  }
  rows.filter("[position=" + selected + "]").show();
  rows.not("[position=" + selected + "]").hide();
}
