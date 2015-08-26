function displayTime(){
  var currentTime = new Date();
  console.log(currentTime);
  // alert(currentTime);

  var clockDiv = document.getElementById("clock");
  console.log(clockDiv);

  function regularTime(hours){
    if (hours < 12) {return hours;}
    else if (hours > 12) {return hours - 12;}
  }

  function addZero(unit) {
  unit = unit < 10 ? "0"+ unit : unit;
  return unit;
  }

  var meridian = (Hours < 12) ? "AM" : "PM";
  var Hours = addZero(regularTime(currentTime.getHours()));
  var Minutes = addZero(currentTime.getMinutes());
  var Seconds = addZero(currentTime.getSeconds());
  var Year = currentTime.getFullYear();

  clockDiv.innerText = Hours + ":" + Minutes + ":" + Seconds + " " + meridian + "\n" +Year;

}

displayTime();
setInterval(displayTime, 1000)
