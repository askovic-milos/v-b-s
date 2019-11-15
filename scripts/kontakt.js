var d = new Date()
if(d.getHours() >= 12 && d.getHours() < 13){
  document.getElementById("open").innerHTML = "<h4>Vi har lunch!</h4>";
} else if(d.getHours() >= 8 && d.getHours() < 17){
  document.getElementById("open").innerHTML = "<h4>Vi har öppet!</h4>";
} else{
  document.getElementById("open").innerHTML = "<h4>Vi har inte öppet!</h4>";
}
