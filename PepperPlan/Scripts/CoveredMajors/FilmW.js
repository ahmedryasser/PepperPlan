function addFILMWClasses() {
    clearClasses();
    addYear();
    FILMWfall1();
    FILMWspring1();
    FILMWfall2();
    FILMWspring2();
    FILMWfall3();
    FILMWspring3();
    FILMWfall4();
    FILMWspring4();
    implementDragDrop();
}
function FILMWfall1() {
    fall1 = ["GSSO 199", "ECON 200", "FILM 200", "FILM 300"]
    var semester = document.getElementById("fall1");
    addClass(fall1, semester);
}
function FILMWspring1() {
    spring1 = ["REL 101", "ENG 101", "ITAL 151", "FILM 301"]
    var semester = document.getElementById("spring1");
    addClass(spring1, semester);
}
function FILMWfall2() {
    fall2 = ["REL 102", "HUM 111", "ITAL 152", "FILM 210"]
    var semester = document.getElementById("fall2");
    addClass(fall2, semester);
}
function FILMWspring2() {
    spring2 = ["COM 180", "HUM 212", "ITAL 251", "FILM 310", "POSC 104"]
    var semester = document.getElementById("spring2");
    addClass(spring2, semester);
}
function FILMWfall3() {
    fall3 = ["REL 301", "PSYC 200", "HIST 204", "FILM 410", "FILM 450"]
    var semester = document.getElementById("fall3");
    addClass(fall3, semester);
}
function FILMWspring3() {
    spring3 = ["JWP", "THEA 210", "ENG 380", "FILM 321", "FILM 441"]
    var semester = document.getElementById("spring3");
    addClass(spring3, semester);
}
function FILMWfall4() {
    fall4 = ["BIOL 106", "HUM 313", "MATH 120", "FILM 462"]
    var semester = document.getElementById("fall4");
    addClass(fall4, semester);
}
function FILMWspring4() {
    spring4 = ["FILM 495", "FILM 480", "ART 101", "THEA 220"]
    var semester = document.getElementById("spring4");
    addClass(spring4, semester);
}
