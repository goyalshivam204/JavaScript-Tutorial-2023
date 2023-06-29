/*
Introduction to events
======================

We recommend that you use addEventListener() to register event handlers. 
It's the most powerful method and scales best with more complex programs. 
However, there are two other ways of registering event handlers that,
you might see: event handler properties and inline event handlers.

=> With addEventListener we add as many functions as we want on same event.
=> With event handler properties, you can't add more than one handler for a single event. 
=> Inline event handlers — don't use these
=> You should never use the HTML event handler attributes — those are outdated,
     and using them is bad practice.


When event are called in parent child both. 

=> child event called out first.
=> bubbles up
*/

// CHANGE RANDOM COLOR
// ===================

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

const root = document.querySelector("#root");


const createClosableButton = (obj) => {
    // console.log(obj);
    // obj = obj??{} same as obj ??= {} means when either null or undefined it will run

    obj ??= {};
    obj.backgroundColor ??= "white";
    obj.color ??= "black";

    const btnContainer = document.createElement("div");
    const btn = document.createElement("button");
    const spn = document.createElement("span");
    btn.style.border = "none";
    btn.style.color = obj.color;
    btn.style.backgroundColor = "transparent";
    btn.innerHTML = "Change Color";
    const changeBackground = (e)=>{
        const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        document.body.style.backgroundColor = rndCol;
    };
    btn.addEventListener("click",changeBackground);
    // btn.removeEventListener("click",changeBackground);
    
    spn.innerHTML = "&#10006";
    spn.backgroundColor = "transparent";
    spn.color = "red";
    spn.addEventListener("dblclick",(e)=>{
        btnContainer.parentNode.removeChild(btnContainer);
    });


    btnContainer.appendChild(btn);
    btnContainer.appendChild(spn);
    btnContainer.style.backgroundColor = obj.backgroundColor;
    btnContainer.style.color = obj.color;
    btnContainer.style.display = "inline-block";
    btnContainer.style.padding = "1px 10px"; 
    btnContainer.style.border = `2px solid ${obj.color}`;
    btnContainer.style.borderRadius = "10px";

    return btnContainer;
}

// const closableButton = createClosableButton({backgroundColor: "#ffde00",color: "teal"});
// const closableButton = createClosableButton();
// root.appendChild(closableButton);


// TEXT BOX EXAMPLE
// ================

const createTextBox = ()=>{
    const input = document.createElement("input");
    input.setAttribute("type","text");
    const output = document.createElement("div");

    input.addEventListener("keydown",(e)=>{
        output.textContent = `You've pressed '${e.key}'`;
    })
    const textBox = document.createElement("div");
    textBox.appendChild(input);
    textBox.appendChild(output);

    return textBox;
}

// const textBox = createTextBox();
// root.appendChild(textBox);

// FORM EXAMPLE
// =============

const createForm = () => {
    const form  = document.createElement('form');
    form.innerHTML = `<form>
  <div>
    <label for="fname">First name: </label>
    <input id="fname" type="text" />
  </div>
  <div>
    <label for="lname">Last name: </label>
    <input id="lname" type="text" />
  </div>
  <div>
    <input id="submit" type="submit" />
  </div>
</form>`;

return form;
}

const form = createForm();
// root.appendChild(form);
// root.appendChild(document.createElement('p'));

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");


form.addEventListener("submit", (e) => {
  if (fname.value === "" || lname.value === "") {
    e.preventDefault();
    para.textContent = "You need to fill in both names!";
  }
});


// Setting a listener on a parent element
// ======================================

const createParentChildExample = () => {
    const div = document.createElement("div");
    div.innerHTML = 
`<div style="padding: 10px; background-color: red" id="container">
  <button>Click me!</button>
</div>
<pre id="output"></pre>`;
root.appendChild(div); // necessary else lower line don't work as it's not attached to DOM.

const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on target a ${e.target.tagName} element\nYou clicked on currentTarget a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
container.addEventListener("click", handleClick);

    return div;
}

root.appendChild(createParentChildExample());
