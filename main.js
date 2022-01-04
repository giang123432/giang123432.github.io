
$(document).ready(
  button = document.getElementsByClassName('button-64')
  
);


function start() {
  document.getElementById('title').innerText='CÒN BAO NHIÊU NGÀY NỮA ĐẾN TẾT ?'
  var countDownDate = new Date("2022  Feb 01 00:00:00").getTime();
  var sayTime = new Date("2021 Dec 31 23:59:49").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    var audio = new Audio("./HappyNewYear-ABBA-1595921.mp3");
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("day").innerHTML = "<span>" + days + "</span>NGÀY";
    document.getElementById("hour").innerHTML = "<span>" + hours + "</span>GIỜ";
    document.getElementById("minute").innerHTML = "<span>" + minutes + "</span>PHÚT";
    document.getElementById("second").innerHTML = "<span>" + seconds + "</span>GIÂY";
    // If the count down is finished, write some text
    if (now - (now % 1000) == sayTime) {

      audio.play();
    }
    if (distance <= 0) {
      clearInterval(x);
      document.getElementById("container").innerHTML = "<h1>CHÚC MỪNG NĂM MỚI <br> <span>2022</span> </h1>";
      var audio = new Audio("./song.mp3");
      audio.play();
      Run();

    }

  }, 1000);
}