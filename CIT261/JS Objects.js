var owner = {
    firstName   : "Nimesh",
    lastName    : "Subedi",
    age         : 21,
    hometown    : "Kathmandu",
    country     : "Nepal",
    major       : "Software Engineering",
    college     : "BYU-Idaho",
};
function onLoad() {
    let info = `Hi, My Name is ${owner.firstName} ${owner.lastName}, I am ${owner.age} years old.
    I was born in ${owner.hometown}, ${owner.country}. I am currently studying ${owner.major} in ${owner.college}.
    It was nice to meet you.`;
    document.getElementById("text").innerHTML = info;
}