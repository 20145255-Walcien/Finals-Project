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
document.getElementById("nsc-h1").innerHTML = "School Events you do not want to miss:";
document.getElementById("nsc-h3").innerHTML = "National Student Convention";
document.getElementById("nsc-p").innerHTML = "The National Student Convention is a nation-wide event for schools using the School of Tomorrow System. All the different schools in the nation gather to compete for the purpose of making students grow and develop their skills and attitudes that will prepare them for life. Students will compete on the following divisions: Academic Division, Art Division, Photography Division, and many more. Awards will be given to the top six places in each category. Preparation is key and cultivates the character of each student through careful goal setting during the months of preparation before the Student Convention.";
document.getElementById("sports-h3").innerHTML = "Sports Festival";
document.getElementById("sports-p").innerHTML = "The Sports Festival is a school annual event that students from all grades can participate. Basketball, volleyball, table tennis, and many more are the events that will be held during the festival. The events are separated based on age: Ages 7-12 and Ages 13-19. The annual sports festival aims to develop the students athletic skills and cooperation with teammates, all in a joyous event.";
document.getElementById("acad-h3").innerHTML = "Academics Festival";
document.getElementById("acad-p").innerHTML = "The Academics Festival is a school annual event that students from all grades can participate. Quiz Bee, Spelling Bee, and many more are the events that will be held during the academics festival. The events are separated based on age: Ages 7-12 and Ages 13-19. The annual academics festival aims to develop the students critical-thinking and problem solving, all in a joyous event.";
document.getElementById("footer-h4").innerHTML = "Grace Bible Academy";
document.getElementById("footer-p").innerHTML = "Corner Ambuclao Road and Regidor Street, Pacdal 2600 Baguio City, Philippines<br>0910 274 9400 <br>(074) 442-7079 <br> gracebibleacademy@yahoo.com.ph";