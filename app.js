let HomeCount = 0


let AwayCount = 0

document.getElementById("decreaseHome").onclick = function () {
  HomeCount -= 1;
  document.getElementById("HomeCountLabel").innerHTML = HomeCount;
}


document.getElementById("increaseHome").onclick = function () {
  HomeCount += 1;
  document.getElementById("HomeCountLabel").innerHTML = HomeCount;
}

document.getElementById("decreaseAway").onclick = function () {
  AwayCount -= 1;
  document.getElementById("AwayCountLabel").innerHTML = AwayCount;
}

document.getElementById("increaseAway").onclick = function () {
  AwayCount += 1;
  document.getElementById("AwayCountLabel").innerHTML = AwayCount;
}

document.getElementById("resetBtn").onclick = function () {
  HomeCount = 0;
  AwayCount = 0;
  document.getElementById("HomeCountLabel").innerHTML = HomeCount;
  document.getElementById("AwayCountLabel").innerHTML = AwayCount;

}

