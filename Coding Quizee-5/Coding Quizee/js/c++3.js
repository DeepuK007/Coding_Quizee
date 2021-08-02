// Variables Declaration
var answers = ["abc",
  "16 2 77 29",
  "Null pointer on second type-cast",
  "This is a sample",
  "01/01/2013",
  "Buffered & Unbuffered stream",
  "STEVE JOBS",
  "Error",
  "Error",
  "Second input"
];
var choices = ["aa", "bb", "cc", "dd", "ee", "ff", "gg", "hh", "ii", "jj"];
var score = 0;
var option = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var choice = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var s = new Array(10);
var count = 0;

// Assigning text location class
for (var i = 0; i < 10; i++) {
  s[i] = name(i);
}

// Click event for options
$(s[0]).click(function(event) {
  help(0, this);
});

$(s[1]).click(function(event) {
  help(1, this);
});

$(s[2]).click(function(event) {
  help(2, this);
});

$(s[3]).click(function(event) {
  help(3, this);
});

$(s[4]).click(function(event) {
  help(4, this);
});

$(s[5]).click(function(event) {
  help(5, this);
});

$(s[6]).click(function(event) {
  help(6, this);
});

$(s[7]).click(function(event) {
  help(7, this);
});

$(s[8]).click(function(event) {
  help(8, this);
});

$(s[9]).click(function(event) {
  help(9, this);
})

// Returns class name of option clicked
function name(k) {
  var s = "." + choices[k] + " .choice-container .choice-text";
  return s;
}

// Adds background to option clicked
function add_class(p) {
  $(".bar" + (p + 1).toString()).addClass("press");
}

// Calculates Score
function calculate(txt, n) {
  if (txt === answers[n] && choice[n] == 1) {
    score++;
    answers[n] = "";
    choice[n] = 0;
    count = count + 1;
  }
   else if(txt != answers && choice[n] == 1){
    score = score - 0.25;
    choice[n] = 0;
    count = count + 1;
  }
}

// Handles all the operations of option clicked
function help(i, obj) {
  add_class(i);
  if (option[i] === 1) {
    $(obj).addClass("press");
    option[i] = 0;
  }
  var text = event.target.innerText;
  calculate(text, i);
  $("#carouselExampleControls").carousel("next");
}

// Alerts score
$(".but1").click(function() {
  $(".f").text("Total number of questions: " + 10);
  $(".s").text("Number of questions attempted: " + count);
});
