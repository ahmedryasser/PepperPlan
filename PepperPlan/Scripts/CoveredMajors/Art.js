function addARTClasses() {
    clearClasses();
    addYear();
    ARTfall1();
    ARTspring1();
    ARTfall2();
    ARTspring2();
    ARTfall3();
    ARTspring3();
    ARTfall4();
    ARTspring4();
    implementDragDrop();
}
function ARTfall1() {
    fall1 = ["SEMINAR", "ECON 200", "ART 101", "ART 103"]
    var semester = document.getElementById("fall1");
    addClass(fall1, semester);
}
function ARTspring1() {
    spring1 = ["REL 101", "ENG 101", "ITAL 151", "ART 210", "ART 230"]
    var semester = document.getElementById("spring1");
    addClass(spring1, semester);
}
function ARTfall2() {
    fall2 = ["REL 102", "HUM 111", "ITAL 152", "ART 250", "ART 310"]
    var semester = document.getElementById("fall2");
    addClass(fall2, semester);
}
function ARTspring2() {
    spring2 = ["COM 180", "HUM 212", "ITAL 251", "ART 370", "POSC 104"]
    var semester = document.getElementById("spring2");
    addClass(spring2, semester);
}
function ARTfall3() {
    fall3 = ["REL 301", "PSYC 200", "HIST 204", "ARTH 200"]
    var semester = document.getElementById("fall3");
    addClass(fall3, semester);
}
function ARTspring3() {
    spring3 = ["JWP", "THEA 210", "ENG 380", "ART 390", "ARTH 300"]
    var semester = document.getElementById("spring3");
    addClass(spring3, semester);
}
function ARTfall4() {
    fall4 = ["BIOL 106", "HUM 313", "MATH 120", "ART 410"]
    var semester = document.getElementById("fall4");
    addClass(fall4, semester);
}
function ARTspring4() {
    spring4 = ["ART 436", "ART 494", "ELECTIVE", "ELECTIVE"]
    var semester = document.getElementById("spring4");
    addClass(spring4, semester);

