import "./styles.css";
//FOOD
const cocktailsList = [
    {id:'ourladyofsorrows', name:'Our Lady of Sorrows', description:"A brooding blend of dark rum, clove, and spiced honey, smoky and sweet with a kick of rebellion.", class:['itemName', 'bullets'], credits:"https://www.cheersmrforbes.com/2021/01/crimson-and-clove-cocktail-recipe.html"},
    {id:'demolitionlovers', name:'Demolition Lovers', description:"Bourbon and black cherry liqueur with a whisper of chocolate bitters; dangerous and intoxicating.", class:['itemName', 'bullets'], credits:"https://www.liquor.com/recipes/darkside/"},
    {id:'ghostofyou', name:'Ghost of you', description:"Ethereal vodka, crème de violette, blackberry, and lemon; hauntingly floral and impossible to forget.", class:['itemName', 'cheers'], credits:"https://mybartender.com/recipe/purple-people-eater/"},
    {id:'thankyouforthevenom', name:'Thank you for the Venom', description:"Spicy tequila with dark cherry syrup, lime, and chili salt rim; bold and unapologetic.", class:['itemName', 'cheers'], credits:"https://claudiastable.com/hibiscus-tequila-cocktail/"},
    {id:'famouslastwords', name:'Famous Last Words', description:"Black rum, coffee liqueur, and cinnamon smoke; a final toast to the fearless.", class:['itemName', 'parade'], credits:"https://insanelygoodrecipes.com/coffee-cocktails/"},
    {id:'sharpestlives', name:'The Sharpest Limes', description:"Tequila gimlet spiked with jalapeño and bright lime; sharp and alive with heat.", class:['itemName', 'parade'], credits:"https://www.cakenknife.com/smoky-jalapeno-margarita/"},
    {id:'batterycity', name:'Battery City', description:"Electric blue tequila, pineapple, lime, and club soda; neon-bright and high-voltage.", class:['itemName', 'danger'], credits:"https://www.thecookierookie.com/blue-margarita-recipe-azul-margaritas/"},
    {id:'partypoison', name:'Party Poison', description:"Jalapeño-infused tequila, watermelon, and salt; dangerously fun and fiery.", class:['itemName', 'danger'], credits:"https://kitchen-by-the-sea.com/spicy-watermelon-margarita/"},
    {id:'kobrakid', name:'Kobra Kid', description:"Smoky mezcal, grapefruit, and honey; smooth with a sting.", class:['itemName', 'danger'], credits:"https://www.cocktailcontessa.com/grapefruit-mezcal-cocktail/"},
    {id:'jetstar', name:'Jet Star', description:"Spiced rum, cola, and charred citrus; fast, bold, and unforgettable.", class:['itemName', 'danger'], credits:"https://robbreport.com/food-drink/spirits/rum-coke-cuba-libre-recipe-1234580866/"},
    {id:'funghoul', name:'Fun Ghoul', description:"Sweet and sinister — gin, basil, blackberries, and a hint of absinthe; mischief in a glass.", class:['itemName', 'danger'], credits:"https://www.thinkginclub.com/blackberry-bramble-cocktail/"},
    {id:'ambulance', name:'Ambulance', description:"Bright gin, cucumber, and mint with a citrus snap; crisp and reviving, like a breath of air.", class:['itemName', 'conventional'], credits:"https://lifeshelives.com/cool-cucumber-gin-cocktail/"},
    {id:'foundationsofdecay', name:'Decay Martini', description:"Vodka and dry vermouth with smoked brine and olive; stark, elegant, and beautifully ruined.", class:['itemName', 'decay'], credits:"https://passthesushi.com/smoked-martini/"}
];
const foodList = [
    {id:'vampires', name:'Pizza will never hurt you', description:"Build-your-own salvation: choose from a riot of sauces, cheeses, and toppings to create the perfect pie. No heartbreak here — just your perfect pizza.", class:['itemName', 'bullets'], credits:"https://www.foodandwine.com/recipes/margherita-pizza-with-tomato-mozzarella-and-basil"},
    {id:'desertsong', name:'Dessert Song', description:"A sweet encore: a sampler of muffins, cupcakes, macarons, cheesecake, and decadent cake — a little something for every craving in your setlist.", class:['itemName', 'cheers'], credits:"https://www.signaturesweetsbyamanda.com/products/dessert-sampler-box"},
    {id:'blackparade', name:'Welcome to the Snack Parade', description:"A grand procession of bar classics: wings, crispy fries, onion rings, and boneless bites — enough to feed a whole parade of hungry souls.", class:['itemName', 'parade'], credits:"https://www.tripadvisor.com/LocationPhotoDirectLink-g154995-d2679950-i213535629-Buffalo_Wild_Wings-London_Ontario.html"},
    {id:'nanana', name:'Na Na Nachos', description:"Loud, messy, and impossible to ignore — queso-drenched nachos with jalapeños, fresh pico de gallo, and tender carne asada, piled high to chaotic perfection.", class:['itemName', 'danger'], credits:"https://patijinich.com/es/nachos-con-carne-asada/"},
    {id:'boydivision', name:'Boy Division Bites', description:"Mini sliders with attitude: juicy beef patties, caramelized onions, melty cheese, and smoky aioli — perfect for sharing (or not).", class:['itemName', 'conventional'], credits:"https://howtofeedaloon.com/worlds-best-gourmet-sliders-recipe/"},
    {id:'decay', name:'Ashes Wings', description:"Spicy, smoky wings dusted with black sesame & charred chili glaze — they'll leave you burning bright and asking for more.", class:['itemName', 'decay'], credits:"https://www.cakenknife.com/crispy-korean-bbq-chicken-wings/"}
];

const imgsCocktails = require.context('./media/drinks', false, /\.(png|jpe?g)$/);
const coctailsIMGs = {};
imgsCocktails.keys().forEach((key) => {
  const fileName = key.replace('./', '').replace(/\.(png|jpe?g|svg)$/, '');
  coctailsIMGs[fileName] = imgsCocktails(key);
});

const imgsFood = require.context('./media/food', false, /\.(png|jpe?g)$/);
const foodIMGs = {};
imgsFood.keys().forEach((key) => {
  const fileName = key.replace('./', '').replace(/\.(png|jpe?g|svg)$/, '');
  foodIMGs[fileName] = imgsFood(key);
});

    // DOMs
const body = document.querySelector('body');
const content = document.querySelector('#content');
const header = document.querySelector('header');

header.addEventListener('click', (event)=>{
    if(event.target.closest(".home")){
        homeButton();
    }
    if(event.target.closest(".menu")){
        menuButton();
    }
    if(event.target.closest(".about")){
        aboutButton();
    }
});

//Initial Page
homeButton();

function clearContent(){
    if(content.getAttribute('class')=='new'){
        content.removeAttribute('class');
    }
    else{
        content.removeChild(document.querySelector('section'));
    }
    
}
function homeButton(){
    clearContent();
    selectedButton('home');

    body.setAttribute('class','homeOpened');
    const homePage = document.createElement('section');
    homePage.classList.add('homePage');

    const homeText = document.createElement('div');
    homeText.classList.add('homeText');
    homeText.innerHTML="Shut up and <br>drink it with me!";

    const svg = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.002 512.002" xml:space="preserve" fill="#ffffff" stroke="#ffffff">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> 
            <g> 
                <path style="fill:#f2f2f2;" d="M466.998,444.155l-40.266-5.552l-18.493,6.268l-28.648,28.716 c-6.043,6.057,0.211,16.129,8.32,13.399l80.566-27.128C476.585,457.127,475.473,445.324,466.998,444.155z"></path> 
                <path style="fill:#f2f2f2;" d="M85.499,437.365c-0.052,0.154-0.072,0.31-0.116,0.465l-40.379,5.568 c-8.475,1.169-9.587,12.972-1.478,15.702l80.565,27.128c8.109,2.73,14.362-7.341,8.32-13.399l-28.634-28.702 c0.073-0.18,0.165-0.345,0.228-0.53L85.499,437.365z"></path> 
            </g> 
            <path style="fill:#73ff00;" d="M374.274,117.997l41.59,82.584c13.287,39.46-7.93,82.221-47.39,95.507s-82.221-7.93-95.508-47.39 l-16.833-90.921c-0.712-3.844,1.513-7.628,5.218-8.876l103.398-34.817C368.456,112.837,372.515,114.505,374.274,117.997z"></path> 
            <path style="fill:#00ffe1;" d="M415.864,200.581l-8.991-17.851c6.084,35.927-14.663,71.949-50.29,83.947 c-32.212,10.847-66.616-1.306-85.397-27.599l1.781,9.622c13.288,39.46,56.047,60.678,95.508,47.39S429.152,240.041,415.864,200.581z "></path> 
            <path style="fill:#73ff00;" d="M137.753,117.249l-41.59,82.584c-13.287,39.46,7.93,82.221,47.39,95.507s82.221-7.93,95.507-47.39 l16.833-90.921c0.712-3.844-1.513-7.628-5.218-8.876l-103.398-34.817C143.571,112.09,139.512,113.758,137.753,117.249z"></path> 
            <path style="fill:#00ffe1;" d="M238.845,144.172l-14.974,80.881c-13.288,39.46-56.047,60.678-95.508,47.39 c-11.823-3.981-21.992-10.622-30.103-19.013c8.14,19.094,24.071,34.767,45.291,41.913c39.46,13.287,82.221-7.93,95.507-47.39 l16.833-90.921c0.712-3.844-1.513-7.628-5.218-8.876L238.845,144.172z"></path> 
            <path d="M511.959,448.338c-0.424-4.512-3.898-8.138-8.387-8.758l-79.168-10.916l-42.628-126.593 c17.36-8.127,31.38-21.763,40.027-39.19c10.11-20.375,11.681-43.469,4.421-65.025c-0.146-0.437-0.324-0.863-0.532-1.276 l-44.656-88.671c-2.185-4.339-7.228-6.414-11.836-4.861L256,141.167l-113.2-38.118c-4.603-1.55-9.651,0.521-11.836,4.861 l-12.603,25.025c-2.425,4.817-0.488,10.687,4.329,13.112c4.814,2.424,10.687,0.488,13.111-4.329l8.794-17.46l100.262,33.761 l-16.402,88.588c-9.398,27.011-34.834,44.058-62.029,44.056c-6.926-0.001-13.973-1.108-20.891-3.437 c-16.614-5.594-30.054-17.324-37.845-33.025c-7.792-15.703-9.002-33.5-3.408-50.113c1.721-5.111-1.026-10.649-6.137-12.369 c-5.111-1.718-10.649,1.027-12.369,6.137c-7.259,21.557-5.689,44.649,4.421,65.025c8.647,17.427,22.666,31.062,40.027,39.19 L87.596,428.663L8.43,439.58c-4.489,0.62-7.962,4.245-8.387,8.758c-0.424,4.512,2.309,8.722,6.604,10.169l145.875,49.119 c1.026,0.346,2.078,0.513,3.115,0.513c3.304,0,6.477-1.685,8.295-4.615c2.391-3.85,1.817-8.838-1.383-12.046l-56.44-56.576 l42.625-126.585c5.901,1.269,11.868,1.912,17.82,1.912c12.952,0,25.83-2.993,37.772-8.919c20.375-10.11,35.594-27.55,42.852-49.106 c0.147-0.437,0.264-0.885,0.349-1.338l8.474-45.764l8.472,45.764c0.083,0.454,0.201,0.901,0.349,1.338 c11.961,35.522,45.207,57.987,80.771,57.987c5.854,0,11.774-0.622,17.671-1.882l42.626,126.593l-56.44,56.574 c-3.2,3.208-3.773,8.196-1.383,12.046c1.819,2.93,4.99,4.615,8.295,4.615c1.038,0,2.088-0.167,3.115-0.513l145.876-49.119 C509.649,457.062,512.383,452.85,511.959,448.338z M52.238,453.254l39.204-5.407l27.952,28.018L52.238,453.254z M283.545,246.607 l-16.402-88.588l100.263-33.761l40.524,80.467c5.351,16.431,4.073,33.974-3.618,49.477c-7.792,15.703-21.233,27.433-37.845,33.027 C332.382,298.701,295.336,280.497,283.545,246.607z M392.608,475.866l27.953-28.018l39.204,5.407L392.608,475.866z"></path> 
            <path d="M384.924,240.221c5.17-10.417,5.973-22.224,2.26-33.245c-0.146-0.437-0.324-0.864-0.532-1.276l-20.004-39.721 c-2.425-4.816-8.294-6.755-13.111-4.329c-4.817,2.425-6.754,8.295-4.329,13.112l19.666,39.05c1.819,5.904,1.315,12.174-1.441,17.729 c-2.85,5.745-7.767,10.035-13.845,12.081c-5.11,1.721-7.858,7.259-6.138,12.369c1.373,4.077,5.176,6.651,9.252,6.651 c1.034,0,2.084-0.165,3.118-0.514C370.84,258.418,379.756,250.637,384.924,240.221z"></path> 
            <path d="M162.796,174.762c2.425-4.817,0.488-10.687-4.329-13.112c-4.813-2.427-10.686-0.488-13.111,4.329l-20.004,39.721 c-0.208,0.411-0.387,0.838-0.532,1.276c-3.713,11.021-2.908,22.828,2.26,33.245c5.168,10.416,14.085,18.197,25.105,21.909 c1.034,0.349,2.084,0.514,3.118,0.514c4.076-0.001,7.88-2.575,9.252-6.651c1.72-5.11-1.028-10.648-6.138-12.369 c-6.078-2.047-10.994-6.337-13.845-12.081c-2.756-5.555-3.261-11.825-1.441-17.729L162.796,174.762z"></path> 
            <path d="M252.504,57.804c0.204,15.713-0.978,31.554-3.516,47.083c-0.871,5.322,2.739,10.342,8.06,11.212 c0.532,0.087,1.062,0.129,1.587,0.129c4.698,0,8.842-3.402,9.625-8.19c2.723-16.652,3.991-33.638,3.77-50.488 c-0.198-15.233-1.617-30.57-4.218-45.587c-0.919-5.313-5.972-8.873-11.286-7.954c-5.314,0.92-8.875,5.973-7.954,11.287 C250.995,29.298,252.319,43.6,252.504,57.804z"></path> 
            <path d="M187.327,67.46c5.032,1.707,14.445,6.085,20.956,16.244c4.905,7.655,6.087,15.359,6.214,20.475 c0.134,5.308,4.477,9.52,9.756,9.52c0.082,0,0.167-0.001,0.249-0.003c5.391-0.135,9.652-4.614,9.518-10.005 c-0.19-7.603-1.958-19.071-9.297-30.523c-9.722-15.172-23.675-21.676-31.126-24.203c-5.101-1.729-10.649,1.005-12.382,6.112 C179.484,60.185,182.22,65.729,187.327,67.46z"></path> 
            <path d="M292.701,115.342c0.616,0.116,1.228,0.173,1.832,0.173c4.597,0,8.692-3.262,9.58-7.945 c0.825-4.344,3.357-12.627,11.053-19.282c8.889-7.685,19.097-8.282,23.048-8.172c0.086,0.001,0.172,0.003,0.258,0.003 c5.275,0,9.618-4.206,9.755-9.511c0.139-5.391-4.116-9.873-9.507-10.014c-6.246-0.156-22.276,0.773-36.325,12.922 c-12.174,10.525-16.168,23.571-17.466,30.411C283.924,109.227,287.404,114.337,292.701,115.342z"></path> 
            <path d="M302.327,33.82c5.746,0,10.421-4.675,10.421-10.421s-4.675-10.421-10.421-10.421c-5.746,0-10.421,4.675-10.421,10.421 S296.581,33.82,302.327,33.82z"></path> 
            <path d="M221.648,40.13c5.746,0,10.421-4.675,10.421-10.421s-4.675-10.421-10.421-10.421c-5.746,0-10.421,4.675-10.421,10.421 S215.901,40.13,221.648,40.13z"></path> 
        </g>
    </svg>`;

    homePage.appendChild(homeText);
    homePage.insertAdjacentHTML('beforeend', svg);
    content.appendChild(homePage);
}
function menuButton(){
    clearContent();
    selectedButton('menu');

    body.setAttribute('class','menuOpened');
    const menuPage = document.createElement('section');
    menuPage.classList.add('menuPage');

    const menuTitle = document.createElement('div');
    menuTitle.classList.add('menuTitle');
    menuTitle.textContent="MENU";


    const menuNav = document.createElement('div');
    menuNav.classList.add('menuNav');

    const cocktails = document.createElement('button');
    cocktails.classList.add('menuNavButton', 'drinksMenu', 'currentMenuNav');
    let svgCocktails= `<svg fill="#ffffff" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g class="svgBorder" stroke-width="1" stroke="black">
                    <path d="M6.5 0C2.921875 0 0 2.921875 0 6.5C0 10.078125 2.921875 13 6.5 13C7.671875 13 8.796875 12.699219 9.75 12.15625L14 17.34375L14 23.21875C12.117188 23.652344 8.0625 24.722656 8.0625 26L21.9375 26C21.9375 24.722656 17.882813 23.652344 16 23.21875L16 17.34375L24.78125 6.625C24.804688 6.59375 24.824219 6.5625 24.84375 6.53125C25.035156 6.222656 25.046875 5.835938 24.871094 5.515625C24.695313 5.199219 24.363281 5 24 5L12.8125 5C12.140625 2.128906 9.566406 0 6.5 0 Z M 6.5 2C7.25 2 7.945313 2.207031 8.5625 2.53125C7.933594 2.9375 7.3125 4.148438 6.9375 5L6.21875 5C5.84375 4.089844 5.222656 2.78125 4.53125 2.46875C5.128906 2.175781 5.785156 2 6.5 2 Z M 3.53125 3.125C3.53125 3.839844 4.445313 4.753906 5.1875 5.40625C5.011719 5.648438 4.953125 5.960938 5.03125 6.25C3.945313 6.34375 2.398438 6.605469 2.09375 7.28125C2.050781 7.023438 2 6.769531 2 6.5C2 5.148438 2.597656 3.949219 3.53125 3.125 Z M 9.5625 3.25C10.070313 3.734375 10.480469 4.320313 10.71875 5L8.375 5C8.925781 4.445313 9.457031 3.792969 9.5625 3.25 Z M 8.125 7L21.875 7L20.25 9L12 9L16.125 14.03125L15 15.40625 Z M 5.65625 7.15625L6.0625 7.65625C5.792969 8.792969 5.5 10.597656 6.28125 10.96875C4.449219 10.878906 2.929688 9.722656 2.3125 8.09375C2.996094 8.71875 4.714844 7.757813 5.65625 7.15625 Z M 7.34375 9.25L8.4375 10.5625C7.964844 10.785156 7.449219 10.921875 6.90625 10.96875C7.339844 10.738281 7.402344 10.023438 7.34375 9.25Z"></path>
                </g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M6.5 0C2.921875 0 0 2.921875 0 6.5C0 10.078125 2.921875 13 6.5 13C7.671875 13 8.796875 12.699219 9.75 12.15625L14 17.34375L14 23.21875C12.117188 23.652344 8.0625 24.722656 8.0625 26L21.9375 26C21.9375 24.722656 17.882813 23.652344 16 23.21875L16 17.34375L24.78125 6.625C24.804688 6.59375 24.824219 6.5625 24.84375 6.53125C25.035156 6.222656 25.046875 5.835938 24.871094 5.515625C24.695313 5.199219 24.363281 5 24 5L12.8125 5C12.140625 2.128906 9.566406 0 6.5 0 Z M 6.5 2C7.25 2 7.945313 2.207031 8.5625 2.53125C7.933594 2.9375 7.3125 4.148438 6.9375 5L6.21875 5C5.84375 4.089844 5.222656 2.78125 4.53125 2.46875C5.128906 2.175781 5.785156 2 6.5 2 Z M 3.53125 3.125C3.53125 3.839844 4.445313 4.753906 5.1875 5.40625C5.011719 5.648438 4.953125 5.960938 5.03125 6.25C3.945313 6.34375 2.398438 6.605469 2.09375 7.28125C2.050781 7.023438 2 6.769531 2 6.5C2 5.148438 2.597656 3.949219 3.53125 3.125 Z M 9.5625 3.25C10.070313 3.734375 10.480469 4.320313 10.71875 5L8.375 5C8.925781 4.445313 9.457031 3.792969 9.5625 3.25 Z M 8.125 7L21.875 7L20.25 9L12 9L16.125 14.03125L15 15.40625 Z M 5.65625 7.15625L6.0625 7.65625C5.792969 8.792969 5.5 10.597656 6.28125 10.96875C4.449219 10.878906 2.929688 9.722656 2.3125 8.09375C2.996094 8.71875 4.714844 7.757813 5.65625 7.15625 Z M 7.34375 9.25L8.4375 10.5625C7.964844 10.785156 7.449219 10.921875 6.90625 10.96875C7.339844 10.738281 7.402344 10.023438 7.34375 9.25Z"></path>
                </g>
            </svg>`;
    const textC = document.createElement('span');
    textC.classList.add('text');
    textC.textContent='COCKTAILS';
    const liquidC = document.createElement('div');
    liquidC.classList.add('liquid');
    const dropC = document.createElement('div');
    dropC.classList.add('drop');
    const drop1C = document.createElement('div');
    drop1C.classList.add('drop1');
    const drop2C = document.createElement('div');
    drop2C.classList.add('drop2');
    const drop3C = document.createElement('div');
    drop3C.classList.add('drop3');
    cocktails.insertAdjacentHTML("afterbegin",svgCocktails);
    cocktails.appendChild(textC);
    cocktails.appendChild(liquidC);
    cocktails.appendChild(dropC);
    cocktails.appendChild(drop1C);
    cocktails.appendChild(drop2C);
    cocktails.appendChild(drop3C);
    menuNav.appendChild(cocktails);

    const food = document.createElement('button');
    food.classList.add('menuNavButton', 'foodMenu');
    let svgFood= `<svg fill="#ffffff" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <g class="svgBorder" stroke-width="25" stroke="black">
                    <path d="M357.57,223.94a79.48,79.48,0,0,0,56.58-23.44l77-76.95c6.09-6.09,6.65-16,.85-22.39a16,16,0,0,0-23.17-.56L400.2,169.18a12.29,12.29,0,0,1-17.37,0c-4.79-4.78-4.53-12.86.25-17.64l68.33-68.33a16,16,0,0,0-.56-23.16A15.62,15.62,0,0,0,440.27,56a16.71,16.71,0,0,0-11.81,4.9l-68.27,68.26a12.29,12.29,0,0,1-17.37,0c-4.78-4.78-4.53-12.86.25-17.64L411.4,43.21a16,16,0,0,0-.56-23.16A15.62,15.62,0,0,0,400.26,16a16.73,16.73,0,0,0-11.81,4.9L311.5,97.85a79.49,79.49,0,0,0-23.44,56.59v8.23A16,16,0,0,1,283.37,174l-35.61,35.62a4,4,0,0,1-5.66,0L68.82,36.33a16,16,0,0,0-22.58-.06C31.09,51.28,23,72.47,23,97.54c-.1,41.4,21.66,89,56.79,124.08l85.45,85.45A64.79,64.79,0,0,0,211,326a64,64,0,0,0,16.21-2.08,16.24,16.24,0,0,1,4.07-.53,15.93,15.93,0,0,1,10.83,4.25l11.39,10.52a16.12,16.12,0,0,1,4.6,11.23v5.54a47.73,47.73,0,0,0,13.77,33.65l90.05,91.57.09.1a53.29,53.29,0,0,0,75.36-75.37L302.39,269.9a4,4,0,0,1,0-5.66L338,228.63a16,16,0,0,1,11.32-4.69Z"></path>
                    <path d="M211,358a97.32,97.32,0,0,1-68.36-28.25l-13.86-13.86a8,8,0,0,0-11.3,0l-85,84.56c-15.15,15.15-20.56,37.45-13.06,59.29a30.63,30.63,0,0,0,1.49,3.6C31,484,50.58,496,72,496a55.68,55.68,0,0,0,39.64-16.44L225,365.66a4.69,4.69,0,0,0,1.32-3.72l0-.26a4.63,4.63,0,0,0-5.15-4.27A97.09,97.09,0,0,1,211,358Z"></path>
                </g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"><title>ionicons-v5-p</title>
                    <path d="M357.57,223.94a79.48,79.48,0,0,0,56.58-23.44l77-76.95c6.09-6.09,6.65-16,.85-22.39a16,16,0,0,0-23.17-.56L400.2,169.18a12.29,12.29,0,0,1-17.37,0c-4.79-4.78-4.53-12.86.25-17.64l68.33-68.33a16,16,0,0,0-.56-23.16A15.62,15.62,0,0,0,440.27,56a16.71,16.71,0,0,0-11.81,4.9l-68.27,68.26a12.29,12.29,0,0,1-17.37,0c-4.78-4.78-4.53-12.86.25-17.64L411.4,43.21a16,16,0,0,0-.56-23.16A15.62,15.62,0,0,0,400.26,16a16.73,16.73,0,0,0-11.81,4.9L311.5,97.85a79.49,79.49,0,0,0-23.44,56.59v8.23A16,16,0,0,1,283.37,174l-35.61,35.62a4,4,0,0,1-5.66,0L68.82,36.33a16,16,0,0,0-22.58-.06C31.09,51.28,23,72.47,23,97.54c-.1,41.4,21.66,89,56.79,124.08l85.45,85.45A64.79,64.79,0,0,0,211,326a64,64,0,0,0,16.21-2.08,16.24,16.24,0,0,1,4.07-.53,15.93,15.93,0,0,1,10.83,4.25l11.39,10.52a16.12,16.12,0,0,1,4.6,11.23v5.54a47.73,47.73,0,0,0,13.77,33.65l90.05,91.57.09.1a53.29,53.29,0,0,0,75.36-75.37L302.39,269.9a4,4,0,0,1,0-5.66L338,228.63a16,16,0,0,1,11.32-4.69Z"></path>
                    <path d="M211,358a97.32,97.32,0,0,1-68.36-28.25l-13.86-13.86a8,8,0,0,0-11.3,0l-85,84.56c-15.15,15.15-20.56,37.45-13.06,59.29a30.63,30.63,0,0,0,1.49,3.6C31,484,50.58,496,72,496a55.68,55.68,0,0,0,39.64-16.44L225,365.66a4.69,4.69,0,0,0,1.32-3.72l0-.26a4.63,4.63,0,0,0-5.15-4.27A97.09,97.09,0,0,1,211,358Z"></path>
                </g>
            </svg>`;
    const textF = document.createElement('span');
    textF.classList.add('text');
    textF.textContent='FOOD';
    const liquidF = document.createElement('div');
    liquidF.classList.add('liquid');
    const dropF = document.createElement('div');
    dropF.classList.add('drop');
    const drop1F = document.createElement('div');
    drop1F.classList.add('drop1');
    const drop2F = document.createElement('div');
    drop2F.classList.add('drop2');
    const drop3F = document.createElement('div');
    drop3F.classList.add('drop3');
    food.insertAdjacentHTML("afterbegin",svgFood);
    food.appendChild(textF);
    food.appendChild(liquidF);
    food.appendChild(dropF);
    food.appendChild(drop1F);
    food.appendChild(drop2F);
    food.appendChild(drop3F);
    menuNav.appendChild(food);

    menuPage.appendChild(menuTitle);
    menuPage.appendChild(menuNav);
    content.appendChild(menuPage);

    let cocktailsFlag=false, foodFlag=false;
    let menuNavBtn = menuNavButton();
    menuNavBtn.getCocktail();
    menuNav.addEventListener('click', (event)=>{
        if(event.target.closest(".drinksMenu")){
            menuNavBtn.getCocktail();
        }
        if(event.target.closest(".foodMenu")){
            menuNavBtn.getFood();
        }
    });


    const menu = document.querySelector('.menuCenter');
    const infoModal = document.querySelector('#itemsInfo');

    menu.addEventListener('click', (event)=>{
        if(event.target.closest("article")){
            let itemButton = event.target.closest("article");
            itemInfoModal(itemButton);
            
            infoModal.showModal();
        }
    });

    infoModal.addEventListener('click', (event)=>{
        if(event.target.closest(".picCredits")){}
        else infoModal.close();
    });

    function menuNavButton(){
        const menuCenter = document.createElement('div');
        menuCenter.classList.add('menuCenter');

        let getCocktail = function(){
            if(foodFlag==true){
                document.querySelector('.menuSubtitle').remove();
                document.querySelector('#foodItems').remove();
                food.classList.remove('currentMenuNav');
            }
            if(cocktailsFlag==false){
                cocktailsFlag = true;
                foodFlag = false;

                cocktails.classList.add('currentMenuNav');

                const menuSubtitle = document.createElement('div');
                menuSubtitle.classList.add('menuSubtitle');
                menuSubtitle.textContent='COCKTAILS';
                menuCenter.appendChild(menuSubtitle);

                const cocktailItems = document.createElement('div');
                cocktailItems.setAttribute('id', 'cocktailItems');
                cocktailItems.classList.add('currentMenuList');
                for(let item of cocktailsList){
                    const article = document.createElement('article');
                    article.id= item.id;
                    article.classList.add("cocktailButton");

                    const itemPic = document.createElement('img');
                    itemPic.src = coctailsIMGs[item.id];
                    article.appendChild(itemPic);

                    const itemName = document.createElement('div');
                    itemName.classList.add(item.class[0], item.class[1]);
                    itemName.textContent=item.name;
                    article.appendChild(itemName);

                    cocktailItems.appendChild(article);
                }

                menuCenter.appendChild(cocktailItems);
                menuPage.appendChild(menuCenter);
                content.appendChild(menuPage);
            }
        }

        let getFood = function(){
            if(foodFlag==false){
                document.querySelector('.menuSubtitle').remove();
                document.querySelector('#cocktailItems').remove();
                cocktails.classList.remove('currentMenuNav');

                cocktailsFlag = false;
                foodFlag = true;

                food.classList.add('currentMenuNav');

                const menuSubtitle = document.createElement('div');
                menuSubtitle.classList.add('menuSubtitle');
                menuSubtitle.textContent='FOOD';
                menuCenter.appendChild(menuSubtitle);

                const foodItems = document.createElement('div');
                foodItems.setAttribute('id', 'foodItems');
                foodItems.classList.add('currentMenuList');
                for(let item of foodList){
                    const article = document.createElement('article');
                    article.id= item.id;
                    article.classList.add("foodButton");

                    const itemPic = document.createElement('img');
                    itemPic.src = foodIMGs[item.id];
                    article.appendChild(itemPic);

                    const itemName = document.createElement('div');
                    itemName.classList.add(item.class[0], item.class[1]);
                    itemName.textContent=item.name;
                    article.appendChild(itemName);

                    foodItems.appendChild(article);
                }

                menuCenter.appendChild(foodItems);
                menuPage.appendChild(menuCenter);
                content.appendChild(menuPage);
            }
        }
        
        return {getCocktail,  getFood}
    }
    function itemInfoModal(button){
        let itemImage, itemName, itemDescription, itemCredits, itemClass, buttonClass, itemID;
        itemID = button.id;
        buttonClass = button.getAttribute('class');

        if(buttonClass == 'cocktailButton'){
            for(let items of cocktailsList){
                if (items.id == itemID){
                    itemName = items.name;
                    itemDescription = items.description;
                    itemCredits = items.credits;
                    itemClass = items.class[1];
                    itemImage = coctailsIMGs[items.id];
                }
            }
        }
        else{
            for(let items of foodList){
                if (items.id == itemID){
                    itemName = items.name;
                    itemDescription = items.description;
                    itemCredits = items.credits;
                    itemClass = items.class[1];
                    itemImage = foodIMGs[items.id];
                }
            }
        }

        infoModal.setAttribute('style',`background-image: url(${itemImage});`);

        const infoTitle = document.querySelector('.infoTitle');
        infoTitle.textContent = itemName;
        infoTitle.setAttribute('style',`${albumColors(itemClass)}`)

        const infoDescription = document.querySelector('.infoDescription');
        infoDescription.textContent = itemDescription;

        const picCredits = document.querySelector('.picCredits');
        picCredits.setAttribute('href', `${itemCredits}`);
       

    }
}
function aboutButton(){
    clearContent();
    selectedButton('about');
    
    body.setAttribute('class','aboutOpened');
    const aboutPage = document.createElement('section');
    aboutPage.classList.add('aboutPage');

    const aboutTitle = document.createElement('div');
    aboutTitle.classList.add('aboutTitle');
    aboutTitle.innerHTML="DANGER DAYS <span>AND</span> NIGHTS";
    aboutPage.appendChild(aboutTitle);

    const aboutDIV = document.createElement('div');
    aboutDIV.classList.add('aboutDIV');

    const aboutDescription = document.createElement('div');
    aboutDescription.classList.add('aboutDescription');
    aboutDescription.innerHTML= `Welcome to Danger Days and Nights — a bar born from the 
        spirit of rebellion, survival, and the soundtrack of our 
        favorite broken hearts. Inspired by the world of 
        <em>Danger Days: The True Lives of the Fabulous Killjoys</em>, we're 
        a refuge for the lost, the damned, the dreamers, and anyone 
        who finds beauty in the dark and neon-lit edges of life. 
        <br><br>Come lose yourself in the music, sip on cocktails with 
        names as bold as the lyrics that shaped us, and remember: 
    you're never alone in the desert.`;
    aboutDIV.appendChild(aboutDescription);

    const aboutLocation = document.createElement('div');
    aboutLocation.classList.add('aboutLocation');
    const aboutTextLocation = document.createElement('div');
    aboutTextLocation.classList.add('aboutText');
    aboutTextLocation.textContent="Location";
    let map = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.507570728618!2d-74.01895847995077!3d40.711627668433344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1aee6620bb%3A0x624d5c815c1b2c2e!2sBattery%20Park%20City%2C%20Nueva%20York%2C%20EE.%20UU.!5e0!3m2!1ses!2smx!4v1752709350270!5m2!1ses!2smx" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    aboutLocation.appendChild(aboutTextLocation);
    aboutLocation.insertAdjacentHTML('beforeend', map);
    aboutDIV.appendChild(aboutLocation);

    const aboutSocials = document.createElement('div');
    aboutSocials.classList.add('aboutSocials');
    const aboutTextSocials = document.createElement('div');
    aboutTextSocials.classList.add('aboutText');
    aboutTextSocials.textContent="Follow Us!!";
    const aboutSocialsButtons = document.createElement('div');
    aboutSocialsButtons.classList.add('aboutSocialsButtons');
    const socialsFB = document.createElement('button');
    socialsFB.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
    <path d="M32,6C17.642,6,6,17.642,6,32c0,13.035,9.603,23.799,22.113,25.679V38.89H21.68v-6.834h6.433v-4.548	c0-7.529,3.668-10.833,9.926-10.833c2.996,0,4.583,0.223,5.332,0.323v5.965h-4.268c-2.656,0-3.584,2.52-3.584,5.358v3.735h7.785	l-1.055,6.834h-6.73v18.843C48.209,56.013,58,45.163,58,32C58,17.642,46.359,6,32,6z"></path>
    </svg>`;
    aboutSocialsButtons.appendChild(socialsFB);
    const socialsIG = document.createElement('button');
    socialsIG.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
    </svg>`;
    aboutSocialsButtons.appendChild(socialsIG);
    const socialsTT = document.createElement('button');
    socialsTT.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
    <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
    </svg>`;
    aboutSocialsButtons.appendChild(socialsTT);
    aboutSocials.appendChild(aboutTextSocials);
    aboutSocials.appendChild(aboutSocialsButtons);
    aboutDIV.appendChild(aboutSocials);
    
    const aboutContactForm = document.createElement('fieldset');
    aboutContactForm.classList.add('aboutContactForm');
    const aboutTextForm = document.createElement('legend');
    aboutTextForm.classList.add('aboutText');
    aboutTextForm.textContent="Contact Us!!";
    const formName = document.createElement('label');
    formName.for='name';
    formName.textContent="Name";
    const nameInput = document.createElement('input');
    nameInput.type='text';
    nameInput.id='name';
    nameInput.name='contactName';
    formName.appendChild(nameInput);
    const formEmail = document.createElement('label');
    formEmail.for='email';
    formEmail.textContent="Email";
    const emaiInput = document.createElement('input');
    emaiInput.type='email';
    emaiInput.id='email';
    emaiInput.name='contactEmail';
    formEmail.appendChild(emaiInput);
    const formComment = document.createElement('label');
    formComment.for='comment';
    formComment.textContent="Comments / Suggestions / Opinions";
    const commentTextArea = document.createElement('textarea');
    commentTextArea.id='comment';
    commentTextArea.name='comments';
    formComment.appendChild(commentTextArea);
    const submitForm = document.createElement('button');
    submitForm.type='submit';
    submitForm.textContent='SUBMIT';

    aboutContactForm.appendChild(aboutTextForm);
    aboutContactForm.appendChild(formName);
    aboutContactForm.appendChild(formEmail);
    aboutContactForm.appendChild(formComment);
    aboutContactForm.appendChild(submitForm);
    aboutDIV.appendChild(aboutContactForm);

    aboutPage.appendChild(aboutDIV);
    content.appendChild(aboutPage);
}
function selectedButton(button){
    if(button=='home'){
        document.querySelector('.menu').classList.remove('currentMenu');
        document.querySelector('.about').classList.remove('currentMenu');

        document.querySelector('.home').classList.add('currentMenu');
    }
    else if(button=='menu'){
        document.querySelector('.home').classList.remove('currentMenu');
        document.querySelector('.about').classList.remove('currentMenu');

        document.querySelector('.menu').classList.add('currentMenu');
    }
    else if(button=='about'){
        document.querySelector('.home').classList.remove('currentMenu');
        document.querySelector('.menu').classList.remove('currentMenu');

        document.querySelector('.about').classList.add('currentMenu');
    }
    
}
function albumColors(album){
    let color;
    switch(album){
        case 'bullets':
            color = "color: rgb(255, 149, 43); text-shadow: 0 0 20px rgb(153, 77, 0), 0 0 25px rgb(82, 41, 1), 0 0 35px rgb(22, 11, 0);";
            break;
        case 'cheers':
            color = "color: rgb(209, 23, 23);  text-shadow: 0 0 10px rgb(114, 0, 0), 0 0 15px rgb(77, 1, 1), 0 0 25px rgb(36, 1, 1);";
            break;
        case 'parade':
            color = "color: rgb(226, 226, 226); text-shadow: 0 0 10px rgb(190, 190, 190), 0 0 15px rgb(107, 106, 106), 0 0 25px rgb(51, 51, 51);";
            break;
        case 'danger':
            color = "color: rgb(109, 214, 255); text-shadow: 0 0 10px rgb(0, 184, 255), 0 0 15px rgb(3, 113, 156), 0 0 25px rgb(1, 33, 46);";
            break;
        case 'conventional':
            color = "color: rgb(243, 225, 188); text-shadow: 0 0 10px rgb(247, 224, 179), 0 0 15px rgb(192, 175, 134), 0 0 25px rgb(114, 103, 77);";
            break;
        case 'decay':
            color = "color: rgb(101, 118, 146); text-shadow: 0 0 10px rgb(58, 77, 109), 0 0 15px rgb(35, 46, 65), 0 0 25px rgb(18, 24, 34);";
            break;
    }
    return color
}

