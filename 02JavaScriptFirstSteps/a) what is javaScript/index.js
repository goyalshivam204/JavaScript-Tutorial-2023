/*
    JavaScript first step.
    https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps
*/

// const h1 = document.querySelector("h1");
// h1.innerText = h1.innerText + " appended text";

/*
    Example One :-
        Following example illustrate some of the key DOM Manipulations
        <div class = "productContainerComponent">
        <h1 class="heading">Products</h1>
        <h3 class="subHeading">Hi, there buy latest product at very less cost</h3>
        <div class="products">
            <div class="product">
                <h4>Android Mobile</h4>
                <p>Buy, latest Android @3999</p>
            </div>
            <div class="product">
                <h4>LCD TV</h4>
                <p>Buy, RealMe TV @13999</p>
            </div>
            <div  class="product">
                <h4>Washing Machine /h4>
                <p>Buy, Llyod Washing Machine @8999</p>
            </div>
        </div>
    </div>
*/

const productContainerComponent = document.querySelector(".productContainerComponent");
// const innerText = productContainerComponent.innerText;
// const innerHTML = productContainerComponent.innerHTML;
// const textContent = productContainerComponent.textContent;

// console.log("innerText", innerText);
// console.log("innerHTML",innerHTML);
// console.log("textContent",textContent);

/* CREATING A PRODUCTS */
const createProduct = ({name,desc}) => {
    let div = document.createElement("div");
    div.classList.add("product");

    let h4 = document.createElement("h4");
    h4.innerText = name;

    let para = document.createElement("p");
    para.innerText = desc;

    div.appendChild(h4);
    div.appendChild(para);

    document.querySelector(".productContainerComponent").appendChild(div);

}


let paragraphs = document.querySelectorAll("p");
console.log(paragraphs);
for(let para of paragraphs){
    console.log(para);
}

/* Why it's working very weird see ? */
// for(let keys in paragraphs){
//     console.log(keys);
// }

let form = productContainerComponent.querySelector(".form");
// console.log(form.);
