var knop=document.getElementById("knop");

knop.addEventListener("click",catRain);

function catRain () {

  var kat=document.createElement("img");
  document.body.appendChild(kat);

  kat.src="nyancat.png";
  kat.id="nyan-cat";

  kat.style.position = "fixed";
  kat.style.left = "0";
  kat.style.top = "0";
  kat.style.transition = "all 3s linear";

  setTimeout(function(){

    kat.style.left = "100vw";
    kat.style.top = "100vh";

  }, 500);

}
