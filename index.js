var output = document.querySelector("#output-txt");
var button = document.querySelector("#btn")

var ramData = {
    name: "Ram",
    age: 20,
    yuga: "Treta"
};

var KrishnaData = {
    name: "Krishna",
    age: 8,
    yuga: "Dwapar"
};

//let olderPerson = calculateMoreAge(ramData, KrishnaData)

function checkAge(ramData, KrishnaData) {
    if (ramData.age > KrishnaData.age) {
        output.innerText = ramData.name
    } else {
        output.innerText = KrishnaData.name
    }
}

button.addEventListener('click', function() {
    checkAge(ramData, KrishnaData)
})