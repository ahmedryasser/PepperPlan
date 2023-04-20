function addIBAClasses() {
    clearClasses();
    addYear();
    IBAfall1();
    IBAspring1();
    IBAfall2();
    IBAspring2();
    IBAfall3();
    IBAspring3();
    IBAfall4();
    IBAspring4();
    implementDragDrop();
}
function IBAfall1() {
    fall1 = ["Math 140", "ENG 101", "GSCO 199", "REL 101", "COM 180"]
    var semester = document.getElementById("fall1");
    addClass(fall1, semester);
}
function IBAspring1() {
    spring1 = ["BA 212", "BA 210", "HUM 111", "MATH 141", "SPAN 151"]
    var semester = document.getElementById("spring1");
    addClass(spring1, semester);
}
function IBAfall2() {
    fall2 = ["NASC 109", "SOC 200", "HUM 212", "REL 102", "SPAN 152"]
    var semester = document.getElementById("fall2");
    addClass(fall2, semester);
}
function IBAspring2() {
    spring2 = ["SPAN 251", "REL 301", "HUM 313", "ENG 330", "FA 240"]
    var semester = document.getElementById("spring2");
    addClass(spring2, semester);
}
function IBAfall3() {
    fall3 = ["AC 224", "BA 216", "ECON 211", "BA 355", "POSC 104"]
    var semester = document.getElementById("fall3");
    addClass(fall3, semester);
}
function IBAspring3() {
    spring3 = ["AC 225", "BA 358", "BA 321", "HIST 204", "BA 474"]
    var semester = document.getElementById("spring3");
    addClass(spring3, semester);
}
function IBAfall4() {
    fall4 = ["BA 366", "BA 447", "BA 457", "HIST 409", "BA 498"]
    var semester = document.getElementById("fall4");
    addClass(fall4, semester);
}
function IBAspring4() {
    spring4 = ["BA 497", "BA 451", "BA 470", "BA 474"]
    var semester = document.getElementById("spring4");
    addClass(spring4, semester);
}

