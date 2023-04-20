function addFILMPClasses() {
    clearClasses();
    addYear();
    FILMPfall1();
    FILMPspring1();
    FILMPfall2();
    FILMPspring2();
    FILMPfall3();
    FILMPspring3();
    FILMPfall4();
    FILMPspring4();
    implementDragDrop();
}
function FILMPfall1() {
    fall1 = ["GSSO 199", "ECON 200", "FILM 200", "FILM 300"]
    var semester = document.getElementById("fall1");
    addClass(fall1, semester);
}
function FILMPspring1() {
    spring1 = ["REL 101", "ENG 101", "ITAL 151", "FILM 301", "FILM 480"]
    var semester = document.getElementById("spring1");
    addClass(spring1, semester);
}
function FILMPfall2() {
    fall2 = ["REL 102", "HUM 111", "ITAL 152", "FILM 210", "SART 207"]
    var semester = document.getElementById("fall2");
    addClass(fall2, semester);
}
function FILMPspring2() {
    spring2 = ["COM 180", "HUM 212", "ITAL 251", "SART 307", "POSC 104"]
    var semester = document.getElementById("spring2");
    addClass(spring2, semester);
}
function FILMPfall3() {
    fall3 = ["REL 301", "PSYC 200", "HIST 204", "SART 320", "SART 481"]
    var semester = document.getElementById("fall3");
    addClass(fall3, semester);
}
function FILMPspring3() {
    spring3 = ["JWP", "THEA 210", "ENG 380", "FILM 411", "FILM 421"]
    var semester = document.getElementById("spring3");
    addClass(spring3, semester);
}
function FILMPfall4() {
    fall4 = ["BIOL 106", "HUM 313", "MATH 120", "FILM 451"]
    var semester = document.getElementById("fall4");
    addClass(fall4, semester);
}
function FILMPspring4() {
    spring4 = ["FILM 495", "ART 101", "FILM 480", "THEA 220"]
    var semester = document.getElementById("spring4");
    addClass(spring4, semester);
}
