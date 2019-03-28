var knop=document.getElementById("knop");

knop.addEventListener("click",catRain);

function catRain () {

  // background nyan cat en button diplay: none

  document.body.style.backgroundImage= "url('background.gif')";
  document.body.style.backgroundRepeat= "no-repeat";
  document.body.style.backgroundSize="cover";

  document.getElementById("knop").style.display="none";


  //setInterval om de 1 seconde een katje maken

  var herhaling = setInterval(oneCat,1000);

  //setTimeout zet op 10 seconden,
  //en opdracht: clearInterval

  setTimeout(function(){
    clearInterval(herhaling);

  //background normaal en display button

  document.body.style.backgroundImage= "none";

  document.getElementById("knop").style.display="block";



  },10000);

}

function oneCat () {
  var kat=document.createElement("img");
  document.body.appendChild(kat);

  kat.src="nyancat.png";
  //kat.id="nyan-cat";

  kat.style.position = "fixed";

  kat.style.left = "0";
  kat.style.top = "0";
  kat.style.transition = "all 2s linear";


  setTimeout(function(){

    kat.style.left = "100vw";
    kat.style.top = "100vh";

  }, 100);

}

//als speciale achtergrond neem animated
// gif van het internet van nyan cats
