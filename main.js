const story = document.querySelector("p");
const customName = document.getElementById("customName").value;
const generateBtn = document.querySelector("button");

const content = {
    name: ["Scrappy-Doo", "Velma", "Daphne", "Shaggy"],
    country : ["Tuvalu", "Kribati", "Niue", "Vanuatu"],
    price : "5"
};
let randomPrice = price = "£" + content.price;
let name = "Chicken Noodles";
let randomNumberOfThree = Math.floor(Math.random()*3); 
let randomName = content.name[randomNumberOfThree];
let randomCountry = content.country[randomNumberOfThree];
let checkedCountry = document.querySelector('input[name = country]:checked').value;
let radioButtons = document.getElementsByClassName("radioBtns");

const storyText = `${name} once flew to ${randomCountry} from ${checkedCountry} with Scooby-Doo and the rest of the crew.
${randomName} bought souvenirs worth ${randomPrice} for the ghostbusters from Mars and aliens from Earth.`

