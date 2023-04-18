function addMUSClasses() {
    clearClasses();
    addYear();
    MUSfall1();
    MUSspring1();
    MUSfall2();
    MUSspring2();
    MUSfall3();
    MUSspring3();
    MUSfall4();
    MUSspring4();
    implementDragDrop();
}
function MUSfall1() {
    fall1 = ["GSSO 199", "ECON 200", "MUS 111", "MUS 115"]
    var semester = document.getElementById("fall1");
    addClass(fall1, semester);
}
function MUSspring1() {
    spring1 = ["REL 101", "ENG 101", "ITAL 151", "MUS 113", "MUS 117"]
    var semester = document.getElementById("spring1");
    addClass(spring1, semester);
}
function MUSfall2() {
    fall2 = ["REL 102", "HUM 111", "ITAL 152", "MUS 211", "MUS 215", "MUS 220"]
    var semester = document.getElementById("fall2");
    addClass(fall2, semester);
}
function MUSspring2() {
    spring2 = ["COM 180", "HUM 212", "ITAL 251", "MUS 213", "MUS 217"]
    var semester = document.getElementById("spring2");
    addClass(spring2, semester);
}
function MUSfall3() {
    fall3 = ["REL 301", "PSYC 200", "HIST 204", "MUS 354", "MUS 355"]
    var semester = document.getElementById("fall3");
    addClass(fall3, semester);
}
function MUSspring3() {
    spring3 = ["JWP", "THEA 210", "ENG 380", "MUS 415"]
    var semester = document.getElementById("spring3");
    addClass(spring3, semester);
}
function MUSfall4() {
    fall4 = ["BIOL 106", "HUM 313", "MATH 120", "ARTH 200"]
    var semester = document.getElementById("fall4");
    addClass(fall4, semester);
}
function MUSspring4() {
    spring4 = ["MUS 492", "MUS 475", "ART 101", "MUS 392"]
    var semester = document.getElementById("spring4");
    addClass(spring4, semester);
}