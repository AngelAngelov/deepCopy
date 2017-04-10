define(['./clone'], function(deepCopy) {
    var person = {
        name: 'John Doe',
        age: '35'
    }

    var personB;

    function copy() {
        personB = deepCopy.clone(person);
        document.getElementById('personBName').textContent = personB.name;
        document.getElementById('personBAge').textContent = personB.age;
    }

    function show() {
        document.getElementById('showAName').textContent = person.name;
        document.getElementById('showAAge').textContent = person.age;

        document.getElementById('showBName').textContent = personB.name;
        document.getElementById('showBAge').textContent = personB.age;
    }

    function updatePersonA() {
        person.name = document.getElementById('personName').value;
        person.age = document.getElementById('personAge').value;
    }

    document.getElementById('personName').value = person.name;
    document.getElementById('personAge').value = person.age;

    document.getElementById("makeCopy").addEventListener("click", function() {
        copy();
    });

    document.getElementById("showPeople").addEventListener("click", function() {
        show();
    });

    document.getElementById("personName").addEventListener("change", updatePersonA);
    document.getElementById("personAge").addEventListener("change", updatePersonA);
});
