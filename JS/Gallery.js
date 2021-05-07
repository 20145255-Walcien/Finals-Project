//this function lets the menu button drop down the list of navigation buttons
function menu () {
    var x = document.getElementById("menu");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}
//this function is for gallery image viewing
function view (n) {
  switch (n) {
    case 1:
      document.getElementById("img1").style.display='block';
      break;
    case 2:
      document.getElementById("img2").style.display='block';
      break;
    case 3:
      document.getElementById("img3").style.display='block';
      break;
    case 4:
      document.getElementById("img4").style.display='block';
      break;
    case 5:
      document.getElementById("img5").style.display='block';
      break;
    case 6:
      document.getElementById("img6").style.display='block';
      break;
    case 7:
      document.getElementById("img7").style.display='block';
      break;
    case 8:
      document.getElementById("img8").style.display='block';
      break;
    case 9:
      document.getElementById("img9").style.display='block';
      break;
  }
}
//this lets the user exit from the image when clicked outside the container
window.onclick = function(event){
  switch (event.target) {
    case document.getElementById("img1"):
      document.getElementById("img1").style.display='none';
      break;
    case document.getElementById("img2"):
      document.getElementById("img2").style.display='none';
      break;
    case document.getElementById("img3"):
      document.getElementById("img3").style.display='none';
      break;
    case document.getElementById("img4"):
      document.getElementById("img4").style.display='none';
      break;
    case document.getElementById("img5"):
      document.getElementById("img5").style.display='none';
      break;
    case document.getElementById("img6"):
      document.getElementById("img6").style.display='none';
      break;
    case document.getElementById("img7"):
      document.getElementById("img7").style.display='none';
      break;
    case document.getElementById("img8"):
      document.getElementById("img8").style.display='none';
      break;
    case document.getElementById("img9"):
      document.getElementById("img9").style.display='none';
      break;
  }
}
document.getElementById("img1-txt").innerHTML = "All to the praise and glory of God! Congratulations! William Watts Morgan V and to his parents, Ptr. Billy and Theresa Morgan Let us keep working together to encourage and challenge our child/ren to regularly read, memorize, and meditate on the Word of God. Let us keep reminding them to make the Bible a blueprint of their daily life.";
document.getElementById("img2-txt").innerHTML = "We've always been grateful and proud of what our students accomplish and achieve. We are thankful that they are willing and available to share their talents and abilities for the honor and glory of God.";
document.getElementById("img3-txt").innerHTML = "For ACE students, October is National Student Convention (NSC) month. Our students, who will be joining the Covention, starts training and mentoring, officially, in the month of August up to October. Usually, NSC is scheduled on the third week of October. Supposedly, at this time, delegates from our school and other SOT schools are preparing to travel going to the venue (to Iloilo City for this year). However, due to the situation our world is in right now, this exciting event is on hold. Meantime, this a great opportune time for all of us to think, grow, and polish our God - given talents and skills so that we will be prepared for next year's Student Convention.";
document.getElementById("img4-txt").innerHTML = "Yay! Do you miss reading those character strips in your PACEs? These character strips add fun to learning. They highlight Godly character traits, illustrate practical life lessons, encourage moral behaviour, and sometimes gives a good laugh. (ACE School of Tomorrow)";
document.getElementById("img5-txt").innerHTML = "ACE is mastery - based learning. What does it mean? The approach ensures student progress only if they have fully grasped the material. Students do not advance based on age or time, they progress once they have mastered the content.";
document.getElementById("img6-txt").innerHTML = "The long wait is over. Tomorrow, we will announce the names of students who made it to the 1st Quarter Honor Roll (A and B Honor Roll status). Are you excited? The announcement will be made after the Online Morning Devotions/Preliminaries. ";
document.getElementById("img7-txt").innerHTML = "Accelerated Christian Education students are given opportunities to develop leadership skills through Student Convention. Students are learning dedication, preparation, time management, and how to compete. These Christian competitions for children train them to develop skills and attitudes that will prepare them for life. Student Conventions are a challenging, inspirational, and fun - filled destination where students develop God - given gifts and talents in preparation for a dynamic ministry. Students select from over a hundred events in five exciting categories including Music, Speech/Drama, Athletics, Arts, and Academics.";
document.getElementById("img8-txt").innerHTML = "Yes! We (not only the PACEs) miss each and every one of you. We can't wait to see you tomorrow in our virtual student orientation. Links for the Zoom meeting have been sent to your parents through the Messenger Group Chat.";
document.getElementById("img9-txt").innerHTML = "Being meek must never be confused with being timid. A timid spirit is the exact opposite of a meek spirit! The quietness which accompanies meekness is the result of one's trust in the Lord, whereas the quietness of timidity is the result of one's lack of trust. Neither must we be led to think that a meek person is always quiet. He is quiet when he should be quiet: when he is reviled or treated unjustly; when others lose their temper; when they chatter about this and that; when they fight for their own gain and advantage, etc. ";
document.getElementById("footer-h4").innerHTML = "Grace Bible Academy";
document.getElementById("footer-p").innerHTML = "Corner Ambuclao Road and Regidor Street, Pacdal 2600 Baguio City, Philippines<br>0910 274 9400 <br>(074) 442-7079 <br> gracebibleacademy@yahoo.com.ph";