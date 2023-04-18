function addSAClasses() {
    clearClasses();
    addYear();
    SAfall1();
    SAspring1();
    SAfall2();
    SAspring2();
    SAfall3();
    SAspring3();
    SAfall4();
    SAspring4();
    implementDragDrop();
}
function SAfall1() {
    fall1 = ["SEMINAR", "ECON 200", "SART 201", "SART 202", "POSC 104"]
    var semester = document.getElementById("fall1");
    addClass(fall1, semester);
}
function SAspring1() {
    spring1 = ["REL 101", "ENG 101", "ITAL 151", "SART 207", "SART 305"]
    var semester = document.getElementById("spring1");
    addClass(spring1, semester);
}
function SAfall2() {
    fall2 = ["REL 102", "HUM 111", "ITAL 152", "SART 307", "SART 309"]
    var semester = document.getElementById("fall2");
    addClass(fall2, semester);
}
function SAspring2() {
    spring2 = ["COM 180", "HUM 212", "ITAL 251", "COM 400", "FILM 301"]
    var semester = document.getElementById("spring2");
    addClass(spring2, semester);
}
function SAfall3() {
    fall3 = ["REL 301", "PSYC 200", "HIST 204", "SART 405", "COM 300"]
    var semester = document.getElementById("fall3");
    addClass(fall3, semester);
}
function SAspring3() {
    spring3 = ["JWP", "THEA 210", "ENG 380", "SART 320", "SART 423"]
    var semester = document.getElementById("spring3");
    addClass(spring3, semester);
}
function SAfall4() {
    fall4 = ["BIOL 106", "HUM 313", "MATH 120", "SART 443", "SART 483"]
    var semester = document.getElementById("fall4");
    addClass(fall4, semester);
}
    function SAspring4() {
        spring4 = ["SART 495", "SART 496", "SART 497", "4-Unit ELECTIVE", "4-Unit ELECTIVE"]
        var semester = document.getElementById("spring4");
        addClass(spring4, semester);
    }