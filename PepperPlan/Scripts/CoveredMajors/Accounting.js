//function generateClasses() {
//    document.getElementById("major");
//}



function addACClasses() {
    clearClasses();
    addYear();
    ACfall1();
    ACspring1();
    ACfall2();
    ACspring2();
    ACfall3();
    ACspring3();
    ACfall4();
    ACspring4();
    implementDragDrop();
}

function ACfall1() {
    fall1 = ["Math 140", "ENG 101", "GSCO 199", "REL 101", "SPAN 151"]
    var semester = document.getElementById("fall1");
    addClass(fall1, semester);
}
function ACspring1() {
    spring1 = ["POSC 104", "BA 212", "COM 180", "MATH 141", "SPAN 152"]
    var semester = document.getElementById("spring1");
    addClass(spring1, semester);
}
function ACfall2() {
    fall2 = ["BA 210", "BA 216", "SOC 200", "BIOL 105", "SPAN 251"]
    var semester = document.getElementById("fall2");
    addClass(fall2, semester);
}
function ACspring2() {
    spring2 = ["AC 224", "ECON 211", "HUM 111", "HIST 204", "REL 102"]
    var semester = document.getElementById("spring2");
    addClass(spring2, semester);
}
function ACfall3() {
    fall3 = ["AC 310", "AC 313", "HUM 212", "BA 366", "ENG 380"]
    var semester = document.getElementById("fall3");
    addClass(fall3, semester);
}
function ACspring3() {
    spring3 = ["AC 311", "AC 314", "REL 301", "BA 321", "HUM 313"]
    var semester = document.getElementById("spring3");
    addClass(spring3, semester);
}
function ACfall4() {
    fall4 = ["AC 312", "AC 425", "AC 501", "BA 497", "MUS 106"]
    var semester = document.getElementById("fall4");
    addClass(fall4, semester);
}
function ACspring4() {
    spring4 = ["COSC 490", "MATH 316", "COSC 210", "ENG 380", "COSC 495"]
    var semester = document.getElementById("spring4");
    addClass(spring4, semester);
}
