var id = document.getElementById(id);
var stdnt = document.getElementById("student");
var faculty = document.getElementById("faculty");
//this lets the user exit from the login form when clicked outside the container
window.onclick = function(event){
    if (event.target == stdnt){
        stdnt.style.display = "none";
    }
    else if (event.target == faculty){
        faculty.style.display = "none";
    }
}
//this functions makes the student/teacher form appear when the image is clicked
function stdntLog(){
    document.getElementById('student').style.display= 'block';
}
function facultyLog(){
    document.getElementById('faculty').style.display= 'block';
}
//this functions is for the cancel and X button
function exit() {
    document.getElementById('student').style.display= 'none';
}
function exit2() {
    document.getElementById('faculty').style.display= 'none';
}