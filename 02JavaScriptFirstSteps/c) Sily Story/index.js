const submitInput = document.querySelector(".form #submitInput");
const countriesInput = document.getElementsByName("country");
// i will return nodeList of input having name = "name" i want first because i have 1 
const nameInput = document.getElementsByName("name")[0];
const storyDiv = document.querySelector(".form .form__story");

const fahrenheitToCentigrade = (temperature)=>{
    return Math.round(((temperature- 32)*5)/9);
}

const poundsToStone = (weight)=>{
    return Math.round(weight/14);
}

submitInput.addEventListener("click",()=>{
    let temperature = 94;
    let temperatureScale = "Fahrenheit";
    let weight = 300;
    let weightScale = "Pounds";
    let customerName = "Bob";

    // countryInput is nodeList types that why i need to spread it first.
    // only one country will full fill this condition
    let country = [...countriesInput].filter((country)=>{
        if(country.checked){
            return country;
        }
    })[0];
    if(country.value === "UK"){
        temperature = fahrenheitToCentigrade(temperature);
        temperatureScale = "Centigrade";

        weight = poundsToStone(weight);
        weightScale = "Stone";

    }
    if(nameInput.value && nameInput.value !== ""){
        customerName = nameInput.value;
    }
    const storyContent = `It was ${temperature} ${temperatureScale} outside, so Willy the Goblin went for a walk. When they got to Disneyland, they stared in horror for a few moments, then melted into a puddle on the sidewalk. ${customerName} saw the whole thing, but was not surprised — Willy the Goblin weighs ${weight} ${weightScale}, and it was a hot day.`
    storyDiv.textContent = storyContent;
});