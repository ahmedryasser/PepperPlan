function addEconClasses() {
    clearClasses();
    addYear();
    Econfall1();
    Econspring1();
    Econfall2();
    Econspring2();
    Econfall3();
    Econspring3();
    Econfall4();
    Econspring4();
    implementDragDrop();
}

function Econfall1() {
    fall1 = ["ECON 210", "ENG 101", "GSCO 199" "SPAN 151"]
    var semester = document.getElementById("fall1");
    addClass(fall1, semester);
}
function Econspring1() {
    spring1 = ["ECON 212", "ECON 211", "MUS 106", "SPAN 152"]
    var semester = document.getElementById("spring1");
    addClass(spring1, semester);
}
function Econfall2() {
    fall2 = ["SOC 200", "ECON 320", "REL 101", "SPAN 251"]
    var semester = document.getElementById("fall2");
    addClass(fall2, semester);
}
function Econspring2() {
    spring2 = ["ECON 321", "REL 102", "HUM 111", "COM 180"]
    var semester = document.getElementById("spring2");
    addClass(spring2, semester);
}
function Econfall3() {
    fall3 = ["ECON 330", "HUM 212", "POSC 104", "REL 301"]
    var semester = document.getElementById("fall3");
    addClass(fall3, semester);
}
function Econspring3() {
    spring3 = ["ECON 421", "HUM 313", "BIOL 105", "JWP 301"]
    var semester = document.getElementById("spring3");
    addClass(spring3, semester);
}
function Econfall4() {
    fall4 = ["ECON 412", "HIST 204", "ENG 380"]
    var semester = document.getElementById("fall4");
    addClass(fall4, semester);
}
function BAspring4() {
    spring4 = ["ECON 428", "BA 442", "HIST 409"]
    var semester = document.getElementById("spring4");
    addClass(spring4, semester);
}

