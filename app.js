var myName = "Lucas Mace";
var myCareer = "Professional Bicycle Mechanic";
var aboutMe = "I am licenced to work on bicycles in the Olympics and the Tour de France.";
var myInterests = ["Photography", "Camping", "Cycling", "Skateboarding", "Punk Rock", "Reading"];
var mySkills = [
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
var myJobs = [
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
var lineBreak = "";
myName = myName.toUpperCase();
myName = "Name: " + myName;
myCareer = "Career: " + myCareer;
aboutMe = "Description: " + aboutMe;
function displaySkill(name, isCool) {
    if (isCool == true) {
        console.log("* BAM: " + name);
    }
    else {
        console.log("* " + name);
    }
}
function displayPosition(companyName, jobTitle, description) {
    console.log("* " + companyName);
    console.log(jobTitle);
    console.log(description);
    console.log(lineBreak);
}
console.log(myName);
console.log(myCareer);
console.log(aboutMe);
console.log(lineBreak);
console.log("My Interests:");
for (var index = 0; index < myInterests.length; index++) {
    console.log("* " + myInterests[index]);
}
console.log(lineBreak);
console.log("My Previous Experience:");
for (var index = 0; index < myJobs.length; index++) {
    displayPosition(myJobs[index].companyName, myJobs[index].jobTitle, myJobs[index].description);
}
console.log("My Skills:");
for (var index = 0; index < mySkills.length; index++) {
    displaySkill(mySkills[index].name, mySkills[index].isCool);
}
//# sourceMappingURL=app.js.map