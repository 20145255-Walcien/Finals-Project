//this block is for the first slideshow without any carousel and prev/next buttons
var slides1Ind = 1;
showSlides1(slides1Ind);
var timer = setInterval(showSlides1, 3000);
function showSlides1(n) {
    var x;
    var slides1 = document.getElementsByClassName("slides1");
    if (n > slides1.length) {slides1Ind = 1}
    if (n < 1) {slides1Ind = slides1.length}
    
    for (x = 0; x < slides1.length; x++) {
        slides1[x].style.display = "none";
    }
    if (slides1Ind > slides1.length) {slides1Ind = 1}
    slides1[slides1Ind-1].style.display = "block";
    slides1Ind++;
}
//this block is for the second slideshow without any carousel and prev/next buttons
var slides2Ind = 1;
showSlides2(slides2Ind);
var timer = setInterval(showSlides2, 3000);
function showSlides2(o) {
    var y;
    var slides2 = document.getElementsByClassName("slides2");
    if (o > slides2.length) {slides2Ind = 1}
    if (o < 1) {slides2Ind = slides2.length}
    
    for (y = 0; y < slides2.length; y++) {
        slides2[y].style.display = "none";
    }
    if (slides2Ind > slides2.length) {slides2Ind = 1}
    slides2[slides2Ind-1].style.display = "block";
    slides2Ind++;
}
//this block is for the third slideshow without any carousel and prev/next buttons
var slides3Ind = 1;
showSlides3(slides3Ind);
var timer = setInterval(showSlides3, 3000);
function showSlides3(p) {
    var z;
    var slides3 = document.getElementsByClassName("slides3");
    if (p > slides3.length) {slides3Ind = 1}
    if (p < 1) {slides3Ind = slides3.length}
    
    for (z = 0; z < slides3.length; z++) {
        slides3[z].style.display = "none";
    }
    if (slides3Ind > slides3.length) {slides3Ind = 1}
    slides3[slides3Ind-1].style.display = "block";
    slides3Ind++;
}
//this places the value for the header and paragraph tags
document.getElementById("music-h1").innerHTML = "Music Elective";
document.getElementById("music-p").innerHTML = "Grace Bible Academy offers music electives for students interested or passionate about music and would want to further their skills and knowledge about music. Music electives are held after school hours for a 1-hour session at the music room.";
document.getElementById("sports-h1").innerHTML = "Sports Elective";
document.getElementById("sports-p").innerHTML = "Grace Bible Academy offers sports electives for students interested in physical activities or want training to become an athlete in the future. Sports electives are held three-times a week and may depend on weather conditions.";
document.getElementById("ict-h1").innerHTML = "ICT Elective";
document.getElementById("ict-p").innerHTML = "Grace Bible Academy offers information and communications technology electives for students interested in learning basic programming and website building. ICT electives are held after school hours for a 1-hour session at the computer laboratory.";
document.getElementById("footer-h4").innerHTML = "Grace Bible Academy";
document.getElementById("footer-p").innerHTML = "Corner Ambuclao Road and Regidor Street, Pacdal 2600 Baguio City, Philippines<br>0910 274 9400 <br>(074) 442-7079 <br> gracebibleacademy@yahoo.com.ph";