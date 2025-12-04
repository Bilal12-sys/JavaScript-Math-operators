function add() { alert("Addition Result: " + (5 + 3)); }
function sub() { alert("Subtraction Result: " + (10 - 4)); }
function mul() { alert("Multiplication Result: " + (6 * 3)); }
function divi() { alert("Division Result: " + (20 / 5)); }
function mod() { alert("Modulus Result: " + (10 % 3)); }

// ===== Variable Task =====
function variableTask() {
  var num;
  var output = "";
  output += "Value after declaration: " + num + "<br>";
  num = 5;
  output += "Initial Value: " + num + "<br>";
  num++;
  output += "After Increment: " + num + "<br>";
  num = num + 7;
  output += "After Adding 7: " + num;
  document.getElementById("taskOutput").innerHTML = output;
}

// ===== Increment/Decrement =====
function increment() {
  var a = 10; ++a;
  alert("The value of ++a is: " + a);
}
function increment2() {
  var a = 11;
  var b = a++;
  alert("The value of a++ is: " + b + "\nNow it is: " + a);
}
function decrement() {
  var a = 12; --a;
  alert("The value of --a is: " + a);
}
function decrement2() {
  var a = 11; var b = a--;
  alert("The value of a-- is: " + b + "\nNow it is: " + a);
}

// ===== Expression Output =====
function showOutput() {
  var a = 2, b = 1;
  alert("Initial Values:\na = " + a + "\nb = " + b);
  var step1 = --a;
  alert("Step 1: --a\nValue = " + step1 + "\na = " + a + ", b = " + b);
  var step2 = a - --b;
  alert("Step 2: --a - --b\nValue = " + step2 + "\na = " + a + ", b = " + b);
  var step3 = step2 + ++b;
  alert("Step 3: --a - --b + ++b\nValue = " + step3 + "\na = " + a + ", b = " + b);
  var result = step3 + b--;
  alert("Step 4: --a - --b + ++b + b--\nFinal Result = " + result +
        "\nFinal a = " + a + "\nFinal b = " + b);
}

// ===== Greet User =====
function greetUser() {
  var name = prompt("Enter your name:");
  alert("Hello " + name + "! Welcome.");
}

// ===== Multiplication Table =====
function table() {
  var num = prompt("Enter a number for table:") || 5;
  var output = "";
  for (var i = 1; i <= 10; i++) {
    output += num + " x " + i + " = " + (num * i) + "<br>";
  }
  document.getElementById("tableOutput").innerHTML = output;
}

// ===== Marks & Percentage =====
function marks() {
  var sub1 = prompt("Enter first subject name:");
  var sub2 = prompt("Enter second subject name:");
  var sub3 = prompt("Enter third subject name:");

  var totalPerSubject = 100;

  var m1 = Number(prompt("Enter marks for " + sub1));
  var m2 = Number(prompt("Enter marks for " + sub2));
  var m3 = Number(prompt("Enter marks for " + sub3));

  var totalMarks = totalPerSubject * 3;
  var obtained = m1 + m2 + m3;
  var percentage = (obtained / totalMarks) * 100;

  var output = "<h3>Result Sheet</h3>" +
               "<b>" + sub1 + ":</b> " + m1 + "/100<br>" +
               "<b>" + sub2 + ":</b> " + m2 + "/100<br>" +
               "<b>" + sub3 + ":</b> " + m3 + "/100<br><br>" +
               "<b>Total Marks:</b> " + obtained + "/" + totalMarks + "<br>" +
               "<b>Percentage:</b> " + percentage.toFixed(2) + "%";

  document.getElementById("result").innerHTML = output;
}
