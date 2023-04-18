function addHISTClasses() {
    clearClasses();
    addYear();
    HISTfall1();
    HISTspring1();
    HISTfall2();
    HISTspring2();
    HISTfall3();
    HISTspring3();
    HISTfall4();
    HISTspring4();
    implementDragDrop();
}
//Unfinished, need to updated classes
function HISTfall1() {
    fall1 = ["SEMINAR", "ECON 200", "HIST 200", "HIST 204"]
    var semester = document.getElementById("fall1");
    addClass(fall1, semester);
}
function HISTspring1() {
    spring1 = ["REL 101", "ENG 101", "ITAL 151", "HIST 481"]
    var semester = document.getElementById("spring1");
    addClass(spring1, semester);
}
function HISTfall2() {
    fall2 = ["REL 102", "HUM 111", "ITAL 152", "HIST 482"]
    var semester = document.getElementById("fall2");
    addClass(fall2, semester);
}
function HISTspring2() {
    spring2 = ["COM 180", "HUM 212", "ITAL 251", "HIST 400", "POSC 104"]
    var semester = document.getElementById("spring2");
    addClass(spring2, semester);
}
function HISTfall3() {
    fall3 = ["REL 301", "PSYC 200", "HIST 411", "HIST 310"]
    var semester = document.getElementById("fall3");
    addClass(fall3, semester);
}
function HISTspring3() {
    spring3 = ["JWP", "THEA 210", "ENG 380", "HIST 423", "HIST 429"]
    var semester = document.getElementById("spring3");
    addClass(spring3, semester);
}
function HISTfall4() {
    fall4 = ["BIOL 106", "HUM 313", "MATH 120", "HIST 412"]
    var semester = document.getElementById("fall4");
    addClass(fall4, semester);
}
function HISTspring4() {
    spring4 = ["HIST 390", "ELECTIVE", "ELECTIVE", "ELECTIVE"]
    var semester = document.getElementById("spring4");
    addClass(spring4, semester);
}