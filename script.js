//Chris Pipitone assignment 3 TTP

// Complete and submit the following:
// Write the code necessary to do the following:

// 1) Select the section with an id of container without using querySelector.
const a = document.getElementById('container');
console.log(a);

// 2) Select the section with an id of container using querySelector.
const secId = document.querySelector('#container');
console.log(secId);

// 3) Select all of the list items with a class of "second".
const second = document.getElementsByClassName("ol.third");
console.log(second);

// 4) Select a list item with a class of third, but only the list item inside of the ol tag.
const third = document.querySelector('section').querySelector('ol li.third');
console.log(third);

// 5) Give the section with an id of container the text "Hello!".
const h = document.getElementById('container');
h.append("Hello!");
console.log(h);

// 6) Add the class main to the div with a class of footer.
const myMain = document.createElement('main');
const footer = document.getElementsByClassName("footer");
myMain.textContent = "this is my main";
footer[0].append(myMain);

// 7) Remove the class main on the div with a class of footer.
footer[0].removeChild(footer[0].lastChild);

// 8) Create a new li element.
const myLi = document.createElement('li');

// 9) Give the li the text "four".
myLi.textContent = "four";

// 10) Append the li to the ul element.
const myUl = document.querySelector("ul");
myUl.append(myLi);

// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".
const myOl = document.querySelectorAll('ol li');

for (let i = 0; i < myOl.length; i++) 
{
    myOl[i].style.backgroundColor = "green";       
}

// 13) Remove the div with a class of footer.
footer[0].remove();