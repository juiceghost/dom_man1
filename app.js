// selektera ut alla li-element i listan
// skapa en separat variabel med det första li-elementet
// lägg till en eventlistener som ändrar innehållet till xyz

const allVisibleElements = document.querySelectorAll('ul > li');
const heading = document.querySelector('h2');

/* 
for (let i = 0; i < allVisibleElements.length; i++) {
    console.log("i= " + i)
    console.log(allVisibleElements[i])
    allVisibleElements[i].addEventListener('click', function (evt) {
        this.innerHTML = Date.now();
    })
} */

function setTime(evt) {
    //console.log(this);
    //console.log(evt)
    //this.innerHTML = Date.now();
    //console.log(this.style)
    //this.style = "color: red" (dålig)
    this.classList.add("hideMe");
}

function showAll(evt) {
    // show all elements
    for (let i = 0; i < allVisibleElements.length; i++) {
        allVisibleElements[i].classList.remove('hideMe')
    }

}
heading.addEventListener('click', showAll)

for (let i = 0; i < allVisibleElements.length; i++) {
    /*     console.log("i= " + i)
        console.log(allVisibleElements[i]) */
    allVisibleElements[i].addEventListener('click', setTime)
}






/* var elements = document.getElementsByClassName("hot"); // find hot items

if (elements.length > 2) {  // If 3 or more are found
    var el = elements[2];   // Select the third one from the NodeList
    el.className = "cool";   // Change the value of its class atribute
}
 */

/* let person = { name: 'Krille', job: 'Teacher' }
person.stad = 'Estocolmo';
person.isHome = function () {
    console.log(this)
    return this.stad == 'Estocolmo'
};
person.isInTown = function (town) {
    console.log("Am i in " + town + "?");
    return this.stad == town;
} */