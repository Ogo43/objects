//Q1

function InstagramPost (HandleOfAuthor, Content, AnImageLinkPostedByTheAuthorOfThePost, NumberOfViews, NumberOfLikes) {
    this.HandleOfAuthor = HandleOfAuthor;
    this.Content = Content;
    this.AnImageLinkPostedByTheAuthorOfThePost = AnImageLinkPostedByTheAuthorOfThePost;
    this.NumberOfViews = NumberOfViews;
    this.NumberOfLikes = NumberOfLikes;
}

const authorSemantic = new InstagramPost("ceces_artistry", "Can't tell me this look isn't bussing...", "https://www.instagram.com/reel/Co9kyl5oWoe/?igshid=YmMyMTA2M2Y=",
1074, 126);

console.log(authorSemantic); 

//A1
/**
 * InstagramPost {
 * HandleOfAuthor: 'ceces_artistry', 
 * Content: "Can't tell me this look isn't bussing...", 
 * AnImageLinkPostedByTheAuthorOfThePost: 'https://www.instagram.com/reel/Co9kyl5oWoe/?igshid=YmMyMTA2M2Y=', 
 * NumberOfViews: 1074, 
 * NumberOfLikes: 126
 * }
 */

//Q2

const bibyonce = new InstagramPost("bibyonce", "What foundation color matches? 1, 2, 3, or 4?", "https://www.instagram.com/reel/Co-pR7GjKjv/?igshid=YmMyMTA2M2Y=",
134000, 7452);

console.log(bibyonce);

const nappy = new InstagramPost("nappystory", "New visualizer work for @skaydo_idif", "https://www.instagram.com/reel/CmpctQjIVMF/?igshid=YmMyMTA2M2Y=",
843, 103);

console.log(nappy);

//A2
/**
 * InstagramPost {
 * HandleOfAuthor: 'bibyonce',
 * Content: 'What foundation color matches? 1, 2, 3, or 4?',
 * AnImageLinkPostedByTheAuthorOfThePost: 'https://www.instagram.com/reel/Co-pR7GjKjv/?igshid=YmMyMTA2M2Y=',
 * NumberOfViews: 134000,
 * NumberOfLikes: 7452
*}
 */

//A2b
/**
 * InstagramPost {
 * HandleOfAuthor: 'nappystory',
 * Content: 'New visualizer work for @skaydo_idif',
 * AnImageLinkPostedByTheAuthorOfThePost: 'https://www.instagram.com/reel/CmpctQjIVMF/?igshid=YmMyMTA2M2Y=',
 * NumberOfViews: 843,
 * NumberOfLikes: 103
*}
*/

//Q3

function createPerson(name, age, location) {
    return {
        name: name,
        age: age,
        location: location,
    };
}

const musa = createPerson("Musa", "19years old", "Lekki, Lagos State");
console.log(musa);

function createJambScore (eng, govt, lit, crk){
    return{
        eng: eng,
        govt: govt,
        lit: lit,
        crk: crk,
    };
}

musa.result = createJambScore(70, 83, 82, 94);
console.log(musa);


//Answer: { name: 'Musa', age: '19years old', location: 'Lagos State' }
/**{
    name: 'Musa',
    age: '19years old',
    location: 'Lagos State',
    result: { eng: 70, govt: 83, lit: 82, crk: 94 }
  }*/

// Q4

//Object.assign()

const newPassport = {
name: 'Ogor Emeh',
color : 'Green',
country : 'Nigeria',
numberOfPages : 64,
}

const passport= Object.assign({}, newPassport);
console.log(newPassport)
console.log(passport);

//Answer {name: 'Ogor Emeh', color: 'Green', country: 'Nigeria', numberOfPages: 64}
//name: 'Ogor Emeh', color: 'Green', country: 'Nigeria', numberOfPages: 64}


// Spread method

const Laptop = new Object();
Laptop.brand = "HP";
Laptop.color = "Silver";
Laptop.model = "HP Pavilion x360"
Laptop.isTouchScreen = true;
Laptop.solidStateDrive = "512GB";

const laptop = {...Laptop};

console.log(Laptop);
console.log(laptop);

//Answer- {brand: 'HP', color: 'Silver', model: 'HP Pavilion x360', isTouchScreen: true, solidStateDrive: '512GB'}
// {brand: 'HP', color: 'Silver', model: 'HP Pavilion x360', isTouchScreen: true, solidStateDrive: '512GB'}

// JSON.parse(JSON.stringify())

const footWear = {
        _typesOfFootWear: "Sneakers",
        size:  45,
        color: "Blue & White",
        isMaleWear: true,
        madeIn: "Belgium",
}

const shoes = JSON.parse(JSON.stringify(footWear));

console.log(footWear);
console.log(shoes);

//Answer- {_typesOfFootWear: 'Sneakers', size: 45, color: 'Blue & White', isMaleWear: true, madeIn: 'Belgium'}
//{_typesOfFootWear: 'Sneakers', size: 45, color: 'Blue & White', isMaleWear: true, madeIn: 'Belgium'}

// Q5

const presidentialCandidates = {
    ACC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
}

for (let key in presidentialCandidates) {
    
    console.log(`${presidentialCandidates[key]} is the presidential candidate of ${key}`);
    
}

/** Answer 5
* Omoyele Sowore is the presidential candidate of ACC
* Christopher Imumolen is the presidential candidate of ACCORD
* Bola Ahmed Tinubu is the presidential candidate of APC
* Peter Obi is the presidential candidate of LP
* Rabiu Kwankwaso is the presidential candidate of NNPP
* Atiku Abubakar is the presidential candidate of PDP
*/












