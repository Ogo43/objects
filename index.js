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
function InstagramPost1(handleOfAuthor, content, anImageLinkPostedByTheAuthorOfThePost, numberOfViews, numberOfLikes) {
    return{
        handleOfAuthor: handleOfAuthor,
        content: content,
        anImageLinkPostedByTheAuthorOfThePost: anImageLinkPostedByTheAuthorOfThePost,
        numberOfViews: numberOfViews,
        numberOfLikes: numberOfLikes,
    }
}

const creatorWork = InstagramPost1("bibyonce", "What foundation color matches? 1, 2, 3, or 4?", "https://www.instagram.com/reel/Co-pR7GjKjv/?igshid=YmMyMTA2M2Y=",
134000, 7452);

console.log(creatorWork);

//A2
/**
 * {
 * handleOfAuthor: 'bibyonce', 
 * content: 'What foundation color matches? 1, 2, 3, or 4?', 
 * anImageLinkPostedByTheAuthorOfThePost: 'https://www.instagram.com/reel/Co-pR7GjKjv/?igshid=YmMyMTA2M2Y=', 
 * numberOfViews: 134000, 
 * numberOfLikes: 7452
 * }
 */

const authorship = {
        handleOfAuthor: "nappystory",
        content: "New visualizer work for @skaydo_idif",
        anImageLinkPostedByTheAuthorOfThePost: "https://www.instagram.com/reel/CmpctQjIVMF/?igshid=YmMyMTA2M2Y=",
        numberOfViews: 843,
        numberOfLikes: 103,
}

console.log(authorship);

//A2b
/**
 * {
 * handleOfAuthor: 'nappystory', 
 * content: 'New visualizer work for @skaydo_idif', 
 * anImageLinkPostedByTheAuthorOfThePost: 'https://www.instagram.com/reel/CmpctQjIVMF/?igshid=YmMyMTA2M2Y=', 
 * numberOfViews: 843, 
 * numberOfLikes: 103
 * }
 */

//Q3

function createPerson() {
    const person = {
        name: 'Musa',
        age: '19years old',
        location: 'Lekki, Lagos State.'
    };
        person.createJambScore = {
            eng : 70,
            govt: 83,
            lit: 82,
            crk: 94,      
    };

    return person;
}

const person1 = createPerson();

console.log(person1);

//Answer: {name: 'Musa', age: '19years old', location: 'Lekki, Lagos State.', createJambScore: {eng : 70, govt: 83, lit: 82, crk: 94,}}

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












