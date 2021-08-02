$(".btn3").click(function() {
  var w = $(".one").val();
  var i = w.indexOf("@");
  var s = w.slice(i + 1, w.length);
  var p = $(".two").val();
  var sp = reg_ex(p, /[\W]/);
  var dig = reg_ex(p, /[0-9]/);
  var ul = reg_ex(p, /[a-z]/);
  var ll = reg_ex(p, /[A-Z]/);

  if ($(".one").val() === "" || $(".two").val() === "") {
    alert("All fields are mandatory to enter");
  } else if (s != "bmsce.ac.in") {
    alert("Enter a valid bmsce mail id")
  } else if (p.length < 8) {
    alert("Minimum password length is 8 charcters");
  } else if (!(sp && dig && ul && ll)) {
    alert("Password should contain an uppercase,lowercase,digit and special character");
  } else {
    $("#form_id").attr("action", "index.html");
  }
});

function reg_ex(st, exp) {
  return (exp.test(st));
}
