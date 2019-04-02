var knop=document.getElementById("knop");

knop.addEventListener("click",catRain);

function catRain () {

  // background nyan cat en button diplay: none

  document.body.style.backgroundImage= "url('background.gif')";
  document.body.style.backgroundRepeat= "no-repeat";
  document.body.style.backgroundSize="cover";

  document.getElementById("knop").style.display="none";

  //audio
  //var deuntje = new Audio("https://archive.org/download/nyannyannyan/NyanCatoriginal.ogg");
  var deuntje = new Audio("NyanCatoriginal.ogg");
  //var deuntje = new Audio("nyancat.mp3");
  //deuntje.src = "nyancat.mp3";

  //var deuntje=document.getElementById("geluid");
console.log(deuntje);

  deuntje.play();



  //setInterval om de 1 seconde een katje maken

  var herhaling = setInterval(oneCat,1000);

  //setTimeout zet op 10 seconden,
  //en opdracht: clearInterval

  setTimeout(function(){
    clearInterval(herhaling);

  //background normaal en display button

  document.body.style.backgroundImage= "none";

  document.getElementById("knop").style.display="block";

  //audio stopt
  deuntje.pause();

  },10000);

}

function oneCat () {
  var kat=document.createElement("img");
  document.body.appendChild(kat);

  kat.src="nyancat.png";
  //kat.id="nyan-cat";

  kat.style.position = "fixed";

  var horizontalPosition=Math.random()*50;


  kat.style.left = horizontalPosition+"vw";
  kat.style.top = "0";

  var time=Math.random()*5;
  kat.style.transition = "all "+time+"s linear";


  setTimeout(function(){

    kat.style.left = "100vw";
    kat.style.top = "100vh";

  }, 100);


  setTimeout(function(){
    kat.parentNode.removeChild(kat);
  }, time*1000);

}

//als speciale achtergrond neem animated
// gif van het internet van nyan cats
