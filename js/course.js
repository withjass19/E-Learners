document.getElementById("Hidenews").style.display = "none";
document.getElementById("tab1").className = "highlight";
document.getElementById("header").innerHTML = "Crafts";

//Set classes and page ^ v
document.getElementById("tab1").addEventListener("click", highlight1);
document.getElementById("tab2").addEventListener("click", highlight2);
document.getElementById("tab3").addEventListener("click", highlight3);

//What happens when you click on tab 1:
function highlight1() {
  document.getElementById("Hide1").style.display = "";
  document.getElementById("tab1").className = "highlight";
  document.getElementById("tab2").className = "none";
  document.getElementById("tab3").className = "none";
  document.getElementById("header").innerHTML = "Crafts";
  document.getElementById("toChange").innerHTML =
    "Here are some fun crafts you might want to try out:";
  document.getElementById("Hidenews").style.display = "none";
}
//What happens when you click on tab 2:
function highlight2() {
  document.getElementById("Hide1").style.display = "none";
  document.getElementById("tab2").className = "highlight";
  document.getElementById("tab1").className = "none";
  document.getElementById("tab3").className = "none";
  document.getElementById("header").innerHTML = "News page";
  document.getElementById("toChange").innerHTML =
    "This is what's happening around here.";
  document.getElementById("Hidenews").style.display = "";
  var crafts = ["Name tag", "Personal bag"];
  switch (new Date().getDay) {
    case 0:
      document.getElementById("craftOfDay").innerHTML =
        "The craft of the day is :" + Math.floor(Math.random() * crafts.length);
      break;
    case 1:
      document.getElementById("craftOfDay").innerHTML =
        "The craft of the day is :" + Math.floor(Math.random() * crafts.length);
      break;
    case 2:
      document.getElementById("craftOfDay").innerHTML =
        "The craft of the day is :" + Math.floor(Math.random() * crafts.length);
      break;
      case 3:
            document.getElementById("craftOfDay").innerHTML = "The craft of the day is :" + Math.floor(Math.random() * crafts.length);
      break;
      case 4:
            document.getElementById("craftOfDay").innerHTML = "The craft of the day is :" + Math.floor(Math.random() * crafts.length);
      break;
      case 5:
            document.getElementById("craftOfDay").innerHTML = "The craft of the day is :" + Math.floor(Math.random() * crafts.length);
      break;
      case 6:
            document.getElementById("craftOfDay").innerHTML = "The craft of the day is :" + Math.floor(Math.random() * crafts.length);
      break;
  }
}
//What happens when you click on tab 3:
function highlight3() {
  document.getElementById("Hide1").style.display = "none";
  document.getElementById("tab3").className = "highlight";
  document.getElementById("tab1").className = "none";
  document.getElementById("tab2").className = "none";
  document.getElementById("header").innerHTML = "About Papercraft";
  document.getElementById("toChange").innerHTML =
    "Papercraft is a website designed to keep kids creative by giving them fun and useful crafts to make with the most common thing at hand. Paper crafts are not only easy, but fun, to make. Diffrerent types of crafts include origami, cuttting out things, (and yes)- even drawing. So next time you come across a piece of paper, try to make it useful instead of throwing it away.<br /><br /><br /><br /><br /><br />";
  document.getElementById("Hidenews").style.display = "none";
}
