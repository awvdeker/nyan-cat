var knop=document.getElementById("knop");

knop.addEventListener("click",catRain);

function catRain () {


  //setInterval om de 1 seconde een katje maken


  oneCat();


  //setTimeout zet op 10 seconden,
  //en opdracht: clearInterval



}

function oneCat () {
  var kat=document.createElement("img");
  document.body.appendChild(kat);

  kat.src="nyancat.png";
  //kat.id="nyan-cat";

  kat.style.position = "fixed";

    kat.style.left = "0";
      kat.style.top = "0";
      kat.style.transition = "all 1s linear";


    setTimeout(function(){

      kat.style.left = "100vw";
      kat.style.top = "100vh";

    }, 100);

}

//als speciale achtergrond neem animated
// gif van het internet van nyan cats
