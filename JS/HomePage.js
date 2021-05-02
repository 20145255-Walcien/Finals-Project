//
var slideInd = 1;
showSlides(slideInd);
var timer = setInterval(showSlides, 5000);
//the function for the prev/next buttons
function plusSlides(n){
    showSlides(slideInd += n - 1);
}
//the function for the carousel
function currentSlide(n) {
    showSlides(slideInd = n);
}
//the function for the slideshow
function showSlides(n) {
    var x;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideInd = 1}
    if (n < 1) {slideInd = slides.length}
    
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    for (x = 0; x < dots.length; x++) {
        dots[x].className = dots[x].className.replace(" active", "");
    }
    if (slideInd > slides.length) {slideInd = 1}
    slides[slideInd-1].style.display = "block";
    dots[slideInd-1].className += " active";
    slideInd++;
}
//this places the content of the header and paragraph tags
document.getElementById("caption-h1").innerHTML = "Successfully Educating Students For";
document.getElementById("caption-h1-2").innerHTML = "&nbsp;Over 35 Years";
document.getElementById("activities-h2").innerHTML = "School Activites";
document.getElementById("activities-p").innerHTML = "Grace Bible Academy has activites planned for the year. The National Student Convention, the annual Sports Festival, etc. These activities will bring out the best in the students, all while they are having fun.";
document.getElementById("electives-h2").innerHTML = "School Electives";
document.getElementById("electives-p").innerHTML = "Grace Bible Academy offers a variety of electives that students can select. Electives are courses outside of the core curriculum that give students the opportunity to explore specific areas of study they are interested in. Grace Bible Academy highly encourages students to select at least one elective.";
document.getElementById("cotw-h2").innerHTML = "Character Trait of the Week";
document.getElementById("cotw-p").innerHTML = "Let us choose to focus our mind on that which is right and pure, lovely and of good repute.. for all these attributes are the fruit of the Spirit and point us to Christ.. Who alone is good and true; honourable and pure - righteous and virtuous and praiseworthy."
document.getElementById("footer-h4").innerHTML = "Grace Bible Academy";
document.getElementById("footer-p").innerHTML = "Corner Ambuclao Road and Regidor Street, Pacdal 2600 Baguio City, Philippines<br>0910 274 9400 <br>(074) 442-7079 <br> gracebibleacademy@yahoo.com.ph";