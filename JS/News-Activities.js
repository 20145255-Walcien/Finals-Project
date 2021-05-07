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
document.getElementById("nsc-h1").innerHTML = "News & Activities";
document.getElementById("nsc-h3").innerHTML = "National Student Convention";
document.getElementById("nsc-p").innerHTML = "The National Student Convention is a nation-wide event for schools using the School of Tomorrow System. All the different schools in the nation gather to compete for the purpose of making students grow and develop their skills and attitudes that will prepare them for life. Students will compete on the following divisions: Academic Division, Art Division, Photography Division, and many more. Awards will be given to the top six places in each category. Preparation is key and cultivates the character of each student through careful goal setting during the months of preparation before the Student Convention.";
document.getElementById("sports-h3").innerHTML = "Sports Festival";
document.getElementById("sports-p").innerHTML = "The Sports Festival is a school annual event that students from all grades can participate. Basketball, volleyball, table tennis, and many more are the events that will be held during the festival. The events are separated based on age: Ages 7-12 and Ages 13-19. The annual sports festival aims to develop the students athletic skills and cooperation with teammates, all in a joyous event.";
document.getElementById("acad-h3").innerHTML = "Academics Festival";
document.getElementById("acad-p").innerHTML = "The Academics Festival is a school annual event that students from all grades can participate. Quiz Bee, Spelling Bee, and many more are the events that will be held during the academics festival. The events are separated based on age: Ages 7-12 and Ages 13-19. The annual academics festival aims to develop the students critical-thinking and problem solving, all in a joyous event.";
document.getElementById("footer-h4").innerHTML = "Grace Bible Academy";
document.getElementById("footer-p").innerHTML = "Corner Ambuclao Road and Regidor Street, Pacdal 2600 Baguio City, Philippines<br>0910 274 9400 <br>(074) 442-7079 <br> gracebibleacademy@yahoo.com.ph";