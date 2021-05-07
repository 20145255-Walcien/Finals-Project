//this block is for the slideshow without any carousel and prev/next buttons
var slidesInd = 1;
showSlides(slidesInd);
var timer = setInterval(showSlides, 3000);
function showSlides(n) {
    var x;
    var slides1 = document.getElementsByClassName("slides1");
    var slides2 = document.getElementsByClassName("slides2");
    var slides3 = document.getElementsByClassName("slides3");
    if (n > slides1.length) {slidesInd = 1}
    if (n > slides2.length) {slidesInd = 1}
    if (n > slides3.length) {slidesInd = 1}
    if (n < 1) {slidesInd = slides1.length}
    if (n < 1) {slidesInd = slides2.length}
    if (n < 1) {slidesInd = slides3.length}
    
    for (x = 0; x < slides1.length; x++) {
        slides1[x].style.display = "none";
    }
    for (x = 0; x < slides2.length; x++) {
        slides2[x].style.display = "none";
    }
    for (x = 0; x < slides3.length; x++) {
        slides3[x].style.display = "none";
    }
    if (slidesInd > slides1.length) {slidesInd = 1}
    slides1[slidesInd-1].style.display = "block";
    if (slidesInd > slides2.length) {slidesInd = 1}
    slides2[slidesInd-1].style.display = "block";
    if (slidesInd > slides3.length) {slidesInd = 1}
    slides3[slidesInd-1].style.display = "block";
    
    slidesInd++;
}
//this function lets the menu button drop down the list of navigation buttons
function menu () {
    var x = document.getElementById("menu");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
//this places the value for the header and paragraph tags
document.getElementById("music-h1").innerHTML = "Music Elective";
document.getElementById("music-p").innerHTML = "Grace Bible Academy offers music electives for students interested or passionate about music and would want to further their skills and knowledge about music. Music electives are held after school hours for a 1-hour session at the music room.";
document.getElementById("sports-elec-h1").innerHTML = "Sports Elective";
document.getElementById("sports-elec-p").innerHTML = "Grace Bible Academy offers sports electives for students interested in physical activities or want training to become an athlete in the future. Sports electives are held three-times a week and may depend on weather conditions.";
document.getElementById("ict-h1").innerHTML = "ICT Elective";
document.getElementById("ict-p").innerHTML = "Grace Bible Academy offers information and communications technology electives for students interested in learning basic programming and website building. ICT electives are held after school hours for a 1-hour session at the computer laboratory.";
document.getElementById("footer-h4").innerHTML = "Grace Bible Academy";
document.getElementById("footer-p").innerHTML = "Corner Ambuclao Road and Regidor Street, Pacdal 2600 Baguio City, Philippines<br>0910 274 9400 <br>(074) 442-7079 <br> gracebibleacademy@yahoo.com.ph";