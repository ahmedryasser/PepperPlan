function addADVClasses() {
    clearClasses();
    addYear();
    ADVfall1();
    ADVspring1();
    ADVfall2();
    ADVspring2();
    ADVfall3();
    ADVspring3();
    ADVfall4();
    ADVspring4();
    implementDragDrop();
}

function ADVfall1() {
    fall1 = ["ENG 101", "POSC 104", "COM 200", "GSHU 199", "COM 205"]
    var semester = document.getElementById("fall1");
    addClass(fall1, semester);
}
function ADVspring1() {
    spring1 = ["COM 180", "ECON 200", "HUM 111", "REL 101"]
    var semester = document.getElementById("spring1");
    addClass(spring1, semester);
}
function ADVfall2() {
    fall2 = ["SPAN 251", "MSCO 371", "ADV 275", "REL 301", "HUM 212"]
    var semester = document.getElementById("fall2");
    addClass(fall2, semester);
}
function ADVspring2() {
    spring2 = ["REL 102", "HUM 313", "COM 300", "HIST 204"]
    var semester = document.getElementById("spring2");
    addClass(spring2, semester);
}
function ADVfall3() {
    fall3 = ["ADV 375", "SPAD 330", "PYSC 200", "SART 207", "ENG 380"]
    var semester = document.getElementById("fall3");
    addClass(fall3, semester);
}
function ADVspring3() {
    spring3 = ["MSCO 380", "MATH 120", "HSART 307", "JWP", "ARTH 200"]
    var semester = document.getElementById("spring3");
    addClass(spring3, semester);
}
function ADVfall4() {
    fall4 = ["ADV 561", "ADV 475", "BIO 107", "COM 400", "SART 320"]
    var semester = document.getElementById("fall4");
    addClass(fall4, semester);
}
function ADVspring4() {
    spring4 = ["ADV 495", "ADV 575", "COM 570", "SART 309", "SART 423", "ART 230"]
    var semester = document.getElementById("spring4");
    addClass(spring4, semester);
}
