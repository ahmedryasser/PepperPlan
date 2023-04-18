
function addClass(classes, semester) {
    classes.forEach(function (subject) {
        var classTemp = createPElement();
        classTemp.innerText = subject;
        semester.appendChild(classTemp);
    });
}
function createPElement() {
    var classTemp = document.createElement("p");
    classTemp.classList.add("draggable");
    classTemp.draggable = true;
    return classTemp;
}
function pickClass() {
//<<<<<<< Updated upstream
    var year = document.getElementById("year").value;
    if (year != "none") {
        var dropdownValue = document.getElementById("major").value;
        if (dropdownValue == "COSC/MA") { addCSClasses(); }
        else if (dropdownValue == "BA") { addBAClasses(); }
        else if (dropdownValue == "ADV") { addADVClasses(); }
        else if (dropdownValue == "SA") { addSAClasses(); }
        else if (dropdownValue == "ENG") { addENGClasses(); }
        else if (dropdownValue == "ART") { addARTClasses(); }
        else if (dropdownValue == "ARTH") { addARTHClasses(); }
        else if (dropdownValue == "MUS") { addMUSClasses(); }
        else if (dropdownValue == "HIST") { addHISTClasses(); }
        //Add option
        else { console.log("Not Implemented"); }
    }
    else {
        alert("Please enter a start date")
    }
}

function clearClasses() {
    var list = document.getElementsByClassName("semester-box");
    for (var i = 0; i < list.length; i++) {
        while (list[i].firstChild) {
            list[i].removeChild(list[i].firstChild);
        }
    }
}
function addYear() {
    var year = document.getElementById("year").value;
    if (year != "none") {
        currYear = createYear("fall", year);
        document.getElementById("fall1").appendChild(currYear);
        currYear = createYear("spring", year);
        document.getElementById("spring1").appendChild(currYear);
        currYear = createYear("summer", year);
        document.getElementById("summer1").appendChild(currYear);
        year = addOneYear(year)
        currYear = createYear("fall", year);
        document.getElementById("fall2").appendChild(currYear);
        currYear = createYear("spring", year);
        document.getElementById("spring2").appendChild(currYear);
        currYear = createYear("summer", year);
        document.getElementById("summer2").appendChild(currYear);
        year = addOneYear(year)
        currYear = createYear("fall", year);
        document.getElementById("fall3").appendChild(currYear);
        currYear = createYear("spring", year);
        document.getElementById("spring3").appendChild(currYear);
        currYear = createYear("summer", year);
        document.getElementById("summer3").appendChild(currYear);
        year = addOneYear(year)
        currYear = createYear("fall", year);
        document.getElementById("fall4").appendChild(currYear);
        currYear = createYear("spring", year);
        document.getElementById("spring4").appendChild(currYear);
        currYear = createYear("summer", year);
        document.getElementById("summer4").appendChild(currYear);

        var classTemp = document.createElement("div");
        classTemp.classList.add("card-header");
        classTemp.innerText = "Alternatives";
        document.getElementById("alternative").appendChild(classTemp);
    }
}
function addOneYear(year) {
    var newYear = parseInt(year.substring(0, 4)) + 1;
    var nextNewYear = parseInt(year.substring(5, 7)) + 1;
    return newYear.toString() + "/" + nextNewYear.toString();
}
function createYear(fall, year) {
    var classTemp = document.createElement("div");
    classTemp.classList.add("card-header");
    if (fall == "fall") {
        classTemp.innerText = "Fall " + year.substring(0, 4)
    }
    else if(fall == "spring"){
        classTemp.innerText = "Spring " + year.substring(0, 2) + year.substring(5, 7);
    }
    else {
        classTemp.innerText = "Summer " + year.substring(0, 2) + year.substring(5, 7);
    }
    return classTemp;
}