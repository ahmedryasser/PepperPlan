function addPRClasses() {
    clearClasses();
    addYear();
    PRfall1();
    PRspring1();
    PRfall2();
    PRspring2();
    PRfall3();
    PRspring3();
    PRfall4();
    PRspring4();
    implementDragDrop();
}

function PRfall1() {
    fall1 = ["COM 180", "COM 200", "GSCO 199", "ENG 101", "SPAN 151"]
    var semester = document.getElementById("fall1");
    addClass(fall1, semester);
}
function PRspring1() {
    spring1 = ["REL 101", "PR 255", "COM 205", "HUM 111", "SPAN 152"]
    var semester = document.getElementById("spring1");
    addClass(spring1, semester);
}
function PRfall2() {
    fall2 = ["JOUR 241", "COM 300", "HUM 212", "REL 102", "SPAN 251"]
    var semester = document.getElementById("fall2");
    addClass(fall2, semester);
}
function PRspring2() {
    spring2 = ["MSCO 371", "POSC 104", "SOC 200"]
    var semester = document.getElementById("spring2");
    addClass(spring2, semester);
}
function PRfall3() {
    fall3 = ["PR 380","COM 570", "BIOL 105"]
    var semester = document.getElementById("fall3");
    addClass(fall3, semester);
}
function PRspring3() {
    spring3 = ["PR 490", "PR 390", "MATH 140"]
    var semester = document.getElementById("spring3");
    addClass(spring3, semester);
}
function PRfall4() {
    fall4 = ["COM 400", "END 380", "PR 455", "PR 495(Summer)"]
    var semester = document.getElementById("fall4");
    addClass(fall4, semester);
}
function PRspring4() {
    spring4 = ["PR 555", "HIST 409", "HIST 204"]
    var semester = document.getElementById("spring4");
    addClass(spring4, semester);
}

