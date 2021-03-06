//this function lets the menu button drop down the list of navigation buttons
function menu () {
    var x = document.getElementById("menu");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
//this javascript places the content of the header and paragraph tags
document.getElementById("h1-gba").innerHTML = "About Grace Bible Academy";
document.getElementById("p-gba").innerHTML = "Grace Bible Academy is a Christian Education Facility that uses the Accelerated Christian Education (A.C.E) School of Tomorrow System. Since its founding in 1982, Grace Bible Academy has constantly prepared its students for University after graduation. Its competent faculty, facilities, harmonious family culture, healthy campus politics, and wholesome intra-school competitions makes the learning fun and worthwhile.";
document.getElementById("h2-ace").innerHTML = "What is the A.C.E School of Tomorrow System?";
document.getElementById("p-ace").innerHTML = "The A.C.E School of Tomorrow System uses a program that consists of Bible-based K–12 curriculum, student programs, and professional training. Although other publishers have marketed academic curriculum, no one has produced a life-changing character package like that of A.C.E. Children’s minds develop best in a God-centered environment of absolutes and love. They emerge with a sweet attitude and with a greater, richer concept of God and how He wants them to live.";
document.getElementById("vision").innerHTML = "Vision";
document.getElementById("p-vision").innerHTML = "Grace Bible Academy is committed to develop all the basic acadamic disciplines as well as instilling Godly character into the lives of students. Grace Bible Academy is also committed to unlock the potential of every student as it is centered around building skill upon skill. All in a social, fun-learning environment.";
document.getElementById("mission").innerHTML = "Mission";
document.getElementById("p-mission").innerHTML = "Grace Bible Academy trains young people to know and communicate the Christian faith effectively. Our desire is to help students become more spiritually mature, academically qualified, and dependable individuals. Grace Bible Academy serves as an extension of the Bible-believing Christian home and local church, working harmoniously with parents to achieve God’s purpose for their child.";
document.getElementById("footer-h4").innerHTML = "Grace Bible Academy";
document.getElementById("footer-p").innerHTML = "Corner Ambuclao Road and Regidor Street, Pacdal 2600 Baguio City, Philippines<br>0910 274 9400 <br>(074) 442-7079 <br> gracebibleacademy@yahoo.com.ph";