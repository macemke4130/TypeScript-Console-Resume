// Variables containing personal data --
let myName: string = "Lucas Mace";
let myCareer: string = "Professional Bicycle Mechanic";
let aboutMe: string = "I am licenced to work on bicycles in the Olympics and the Tour de France.";
let myInterests: Array<string> = ["Photography", "Camping", "Cycling", "Skateboarding", "Punk Rock", "Reading"];

// Data to fill in the displaySkills function --
let mySkills: Array<S> = [
    {
        name: "Wheel Building",
        isCool: true
    },
    {
        name: "Hydraulic Bleeding",
        isCool: false
    },
    {
        name: "Suspension Fork Overhauls",
        isCool: false
    },
    {
        name: "Internal Hub Overhauls",
        isCool: false
    },
    {
        name: "Di2 Installation and Adjustment",
        isCool: false
    },
    {
        name: "Race Support",
        isCool: true
    }
];

// S is for Skill --
interface S {
    name: string,
    isCool: boolean
}

// Data to fill in the displayPosition function --
let myJobs: Array <J> = [
    {
        companyName: "Now Bikes and Fitness",
        jobTitle: "Bicycle Mechanic / Service Writer",
        description: "Repair and assemble bicycles to the highest degree of quality. Triage customer bicycles for intake, other duties as assigned."
    },
    {
        companyName: "The Hub",
        jobTitle: "Service Manager",
        description: "Quality control of service mechanics, warranty operations, service writing, hiring, training, other duties as assigned."
    },
    {
        companyName: "The Rave / Eagles Club",
        jobTitle: "Assistant Website Administrator",
        description: "Design and maintianence of the website, graphic creation, video and photography of live shows, directing live webcasts."
    }
];

interface J {
    companyName: string,
    jobTitle: string,
    description: string
}

// Defines a lineBreak const to make the output more readable --
const lineBreak: string = "";

// Takes variable myName and changes the case to upper --
myName = myName.toUpperCase();

// Preps variables with a prefix --
myName = "Name: " + myName;
myCareer = "Career: " + myCareer;
aboutMe = "Description: " + aboutMe;

// Determines if skill is cool or not --
function displaySkill(name: string, isCool: boolean) {
    if (isCool == true) {
        console.log("* BAM: " + name)
    } else {
        console.log("* " + name);
    }
}

// Displays previous employers --
function displayPosition(companyName: string, jobTitle: string, description: string) {
    console.log("* " + companyName);
    console.log(jobTitle);
    console.log(description);
    console.log(lineBreak);
}

// Output commands --
console.log(myName);
console.log(myCareer);
console.log(aboutMe);

console.log(lineBreak);

console.log("My Interests:");
for (let index = 0; index < myInterests.length; index++) {
    console.log("* " + myInterests[index]);
}

console.log(lineBreak);

console.log("My Previous Experience:");

for (let index = 0; index < myJobs.length; index++) {
    displayPosition(myJobs[index].companyName, myJobs[index].jobTitle, myJobs[index].description);
}

console.log("My Skills:")
for (let index = 0; index < mySkills.length; index++) {
    displaySkill(mySkills[index].name, mySkills[index].isCool);
}