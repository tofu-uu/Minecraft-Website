// BTN FUNCTION
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let q1 = document.getElementById("q1").value;
  let q2 = document.getElementById("q2").value;
  let q3 = document.getElementById("q3").value;
  let q4 = document.getElementById("q4").value;
  var isCorrect = 0;
  var quizLength = 4;

  // QUIZ SCORE
  if (q1 === "4") {
    document.getElementById("q1").className = "right";
    document.getElementById("rw").className = "correct";
    document.getElementById("rw").innerHTML = "Correct";
    isCorrect += 1;
  } else {
    document.getElementById("q1").className = "wrong";
    document.getElementById("rw").className = "incorrect";
    document.getElementById("rw").innerHTML = "Wrong, the correct answer is 4.";
  }

  if (q2 === "no") {
    document.getElementById("q2").className = "right";
    document.getElementById("rw2").className = "correct";
    document.getElementById("rw2").innerHTML = "Correct";
    isCorrect += 1;
  } else {
    document.getElementById("q2").className = "wrong";
    document.getElementById("rw2").className = "incorrect";
    document.getElementById("rw2").innerHTML =
      "Wrong, the correct answer is no.";
  }

  if (
    q3 === "passive" ||
    q3 === "neutral" ||
    q3 === "hostile" ||
    q3 === "boss"
  ) {
    document.getElementById("q3").className = "right";
    document.getElementById("rw3").className = "correct";
    document.getElementById("rw3").innerHTML = "Correct";
    isCorrect += 1;
  } else {
    document.getElementById("q3").className = "wrong";
    document.getElementById("rw3").className = "incorrect";
    document.getElementById("rw3").innerHTML =
      "Wrong, the correct answer either passive, neutral, hostile, or boss.";
  }

  if (q4 === "pink") {
    document.getElementById("q4").className = "right";
    document.getElementById("rw4").className = "correct";
    document.getElementById("rw4").innerHTML = "Correct";
    isCorrect += 1;
  } else {
    document.getElementById("q4").className = "wrong";
    document.getElementById("rw4").className = "incorrect";
    document.getElementById("rw4").innerHTML =
      "Wrong, the correct answer is pink.";
  }
  document.getElementById("output").innerHTML = isCorrect;
  document.getElementById("quizLen").innerHTML = quizLength;

  // PERCENTAGE
  let percentage = (isCorrect / quizLength) * 100;

  document.getElementById("percentage").innerHTML = Math.round(percentage);

  // MESSAGE
  if (isCorrect === 0) {
    document.getElementById("message").innerHTML =
      "Did you even try? Try harder.";
  } else if (isCorrect === 1) {
    document.getElementById("message").innerHTML =
      "Better than a 0. Try again.";
  } else if (isCorrect === 2) {
    document.getElementById("message").innerHTML =
      "Wow you got half of it right. I bet you can do better though.";
  } else if (isCorrect === 3) {
    document.getElementById("message").innerHTML =
      "So close! I bet you can get 100%.";
  } else {
    document.getElementById("message").innerHTML = "Amazing! Good job :)";
  }
}
