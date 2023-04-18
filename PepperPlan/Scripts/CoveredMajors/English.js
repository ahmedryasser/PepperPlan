function addENGClasses() {
    clearClasses();
    addYear();
    ENGfall1();
    ENGspring1();
    ENGfall2();
    ENGspring2();
    ENGfall3();
    ENGspring3();
    ENGfall4();
    ENGspring4();
    implementDragDrop();
}

function ENGfall1() {
    fall1 = ["SEMINAR", "ECON 200", "ENG 201", "ENG 205", "ENG 205L"]
    var semester = document.getElementById("fall1");
    addClass(fall1, semester);
}
function ENGspring1() {
    spring1 = ["REL 101", "ENG 101", "ITAL 151", "ENG 330", "ENG 350"]
    var semester = document.getElementById("spring1");
    addClass(spring1, semester);
}
function ENGfall2() {
    fall2 = ["REL 102", "HUM 111", "ITAL 152", "ENG 431", "ENG 437"]
    var semester = document.getElementById("fall2");
    addClass(fall2, semester);
}
function ENGspring2() {
    spring2 = ["COM 180", "HUM 212", "ITAL 251", "ENG 451"]
    var semester = document.getElementById("spring2");
    addClass(spring2, semester);
}
function ENGfall3() {
    fall3 = ["REL 301", "PSYC 200", "HIST 204", "ENG 465", "ENG 440"]
    var semester = document.getElementById("fall3");
    addClass(fall3, semester);
}
function ENGspring3() {
    spring3 = ["JWP", "THEA 210", "ENG 380", "POSC 104"]
    var semester = document.getElementById("spring3");
    addClass(spring3, semester);
}
function ENGfall4() {
    fall4 = ["BIOL 106", "HUM 313", "MATH 120", "ENG 489"]
    var semester = document.getElementById("fall4");
    addClass(fall4, semester);
}
function ENGspring4() {
    spring4 = ["ENG 490", "ELECTIVE", "ELECTIVE", "ENG 495"]
    var semester = document.getElementById("spring4");
    addClass(spring4, semester);
}