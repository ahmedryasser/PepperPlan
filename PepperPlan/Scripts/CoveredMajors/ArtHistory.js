function addARTHClasses() {
    clearClasses();
    addYear();
    ARTHfall1();
    ARTHspring1();
    ARTHfall2();
    ARTHspring2();
    ARTHfall3();
    ARTHspring3();
    ARTHfall4();
    ARTHspring4();
    implementDragDrop();
}
function ARTHfall1() {
    fall1 = ["GSSO 199", "ECON 200", "ARTH 200", "POSC 104"]
    var semester = document.getElementById("fall1");
    addClass(fall1, semester);
}
function ARTHspring1() {
    spring1 = ["REL 101", "ENG 101", "ITAL 151", "ART 101"]
    var semester = document.getElementById("spring1");
    addClass(spring1, semester);
}
function ARTHfall2() {
    fall2 = ["REL 102", "HUM 111", "ITAL 152", "ART 103"]
    var semester = document.getElementById("fall2");
    addClass(fall2, semester);
}
function ARTHspring2() {
    spring2 = ["COM 180", "HUM 212", "ITAL 251", "ARTH 390"]
    var semester = document.getElementById("spring2");
    addClass(spring2, semester);
}
function ARTHfall3() {
    fall3 = ["REL 301", "PSYC 200", "HIST 204", "ARTH 422"]
    var semester = document.getElementById("fall3");
    addClass(fall3, semester);
}
function ARTHspring3() {
    spring3 = ["JWP", "THEA 210", "ENG 380", "ARTH 425", "ARTH 432"]
    var semester = document.getElementById("spring3");
    addClass(spring3, semester);
}
function ARTHfall4() {
    fall4 = ["BIOL 106", "HUM 313", "MATH 120", "ARTH 438"]
    var semester = document.getElementById("fall4");
    addClass(fall4, semester);
}
function ARTHspring4() {
    spring4 = ["CAPSTONE", "ARTH 440", "ARTH 490", "ARTH 442"]
    var semester = document.getElementById("spring4");
    addClass(spring4, semester);
}