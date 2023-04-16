function addBAClasses() {
    clearClasses();
    addYear();
    BAfall1();
    BAspring1();
    BAfall2();
    BAspring2();
    BAfall3();
    BAspring3();
    BAfall4();
    BAspring4();
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
function BAfall1() {
    fall1 = ["Math 140", "ENG 101", "GSCO 199", "REL 101", "SPAN 151"]
    var semester = document.getElementById("fall1");
    addClass(fall1, semester);
}
function BAspring1() {
    spring1 = ["HUM 111", "BA 212", "SOC 200", "COM 180", "MATH 141", "SPAN 152"]
    var semester = document.getElementById("spring1");
    addClass(spring1, semester);
}
function BAfall2() {
    fall2 = ["BA 210", "BA 216", "HUM 11", "REL 102", "SPAN 251"]
    var semester = document.getElementById("fall2");
    addClass(fall2, semester);
}
function BAspring2() {
    spring2 = ["AC 224", "ECON 211", "HUM 212", "MUS 106", "BIOL 105"]
    var semester = document.getElementById("spring2");
    addClass(spring2, semester);
}
function BAfall3() {
    fall3 = ["AC 225", "BA 321", "BA 355", "HUM 313", "POSC 104"]
    var semester = document.getElementById("fall3");
    addClass(fall3, semester);
}
function BAspring3() {
    spring3 = ["BA 454", "BA 352", "REL 301", "HIST 204", "ENG 380"]
    var semester = document.getElementById("spring3");
    addClass(spring3, semester);
}
function BAfall4() {
    fall4 = ["BA 358", "BA 452", "BA 498", "HIST 409", "BA 350"]
    var semester = document.getElementById("fall4");
    addClass(fall4, semester);
}
function BAspring4() {
    spring4 = ["BA 497", "BA 451", "BA 470", "BA 474"]
    var semester = document.getElementById("spring4");
    addClass(spring4, semester);
}
