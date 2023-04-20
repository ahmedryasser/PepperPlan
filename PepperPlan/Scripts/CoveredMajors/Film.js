function addFILMClasses() {
    clearClasses();
    addYear();
    FILMfall1();
    FILMspring1();
    FILMfall2();
    FILMspring2();
    FILMfall3();
    FILMspring3();
    FILMfall4();
    FILMspring4();
    implementDragDrop();
}
function FILMfall1() {
    fall1 = ["GSSO 199", "ECON 200", "FILM 200", "FILM 300"]
    var semester = document.getElementById("fall1");
    addClass(fall1, semester);
}
function FILMspring1() {
    spring1 = ["REL 101", "ENG 101", "ITAL 151", "FILM 301", "MATH 210"]
    var semester = document.getElementById("spring1");
    addClass(spring1, semester);
}
function FILMfall2() {
    fall2 = ["REL 102", "HUM 111", "ITAL 152", "FILM 321", "FILM 421"]
    var semester = document.getElementById("fall2");
    addClass(fall2, semester);
}
function FILMspring2() {
    spring2 = ["COM 180", "HUM 212", "ITAL 251", "FILM 451", "POSC 104"]
    var semester = document.getElementById("spring2");
    addClass(spring2, semester);
}
function FILMfall3() {
    fall3 = ["REL 301", "PSYC 200", "HIST 204", "FILM 441", "FILM 365"]
    var semester = document.getElementById("fall3");
    addClass(fall3, semester);
}
function FILMspring3() {
    spring3 = ["JWP", "THEA 210", "ENG 380", "COM 506", "COM 412"]
    var semester = document.getElementById("spring3");
    addClass(spring3, semester);
}
function FILMfall4() {
    fall4 = ["BIOL 106", "HUM 313", "MATH 120", "FILM 300"]
    var semester = document.getElementById("fall4");
    addClass(fall4, semester);
}
function FILMspring4() {
    spring4 = ["ART 101", "FILM 480", "THEA 220", "SART 201", "SART 305"]
    var semester = document.getElementById("spring4");
    addClass(spring4, semester);
}
