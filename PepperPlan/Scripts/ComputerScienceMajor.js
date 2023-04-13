//function generateClasses() {
//    document.getElementById("major");
//}



function addCSClasses() {
    CSfall1();
    CSspring1();
    CSfall2();
    CSspring2();
    CSfall3();
    CSspring3();
    CSfall4();
    CSspring4();
    implementDragDrop();
}
function createPElement() {
    var classTemp = document.createElement("p");
    classTemp.classList.add("list-group-item", "draggable");
    classTemp.draggable = true;
    return classTemp;
}
function addClass(classes, semester) {
    classes.forEach(function (subject) {
        var classTemp = createPElement();
        classTemp.innerText = subject;
        semester.appendChild(classTemp);
    });
    
}
function CSfall1() {
    fall1 = ["COSC 101", "ECON 101", "GSCO 199", "REL 101", "MATH 220"]
    var semester = document.getElementById("fall1");
    addClass(fall1, semester);
}
function CSspring1() {
    spring1 = ["HUM 111", "COM 180", "MUS 110", "COSC 121", "MATH 221", "MATH 150"]
    var semester = document.getElementById("spring1");
    addClass(spring1, semester);
}
function CSfall2() {
    fall2 = ["MATH 151", "COSC 320", "ENG 101", "HIST 204"]
    var semester = document.getElementById("fall2");
    addClass(fall2, semester);
}
function CSspring2() {
    spring2 = ["MATH 250", "COSC 330", "GSGS200", "REL 102", "PSYC 200"]
    var semester = document.getElementById("spring2");
    addClass(spring2, semester);
}
function CSfall3() {
    fall3 = ["COSC 450", "ARBC 251", "REL 301", "PHYS 210"]
    var semester = document.getElementById("fall3");
    addClass(fall3, semester);
}
function CSspring3() {
    spring3 = ["MATH 260", "POSC 104", "COSC 425", "HUM 212"]
    var semester = document.getElementById("spring3");
    addClass(spring3, semester);
}
function CSfall4() {
    fall4 = ["COSC 475", "ARTH 442", "HUM 313", "MATH 365", "COSC 495"]
    var semester = document.getElementById("fall4");
    addClass(fall4, semester);
}
function CSspring4() {
    spring4 = ["COSC 490", "MATH 316", "COSC 210", "ENG 380", "COSC 495"]
    var semester = document.getElementById("spring4");
    addClass(spring4, semester);
}