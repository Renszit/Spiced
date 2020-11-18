const rotterdam = {
    name: 'Rotterdam',
    country: 'Netherlands',
    population: "1,2 million people"
};

function logInfo(city) {
    const name = city.name;
    const country = city.country;
    const numPeople = city.population;

    console.log(`${name} is in ${country} and has ${numPeople} in it.`);
}


console.log(logInfo);

function infoLog(city) {
    const { name, country, population: numPeople } = city;
    console.log(`${name} is in ${country} and has ${numPeople} in it.`);
}

console.log(logInfo(rotterdam));
console.log(infoLog(rotterdam));