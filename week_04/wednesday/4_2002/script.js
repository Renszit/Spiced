var city1 = {
    name: "Berlin",
    country: "Germany",
};
var city2 = {
    name: "Rotterdam",
    country: "Netherlands",
};

// let getNameAndCountry = ({ name, country }) => [name, country];

function getNameAndCountry(object) {
    return [object.name, object.country];
}

console.log(getNameAndCountry(city1));
console.log(getNameAndCountry(city2));

// let getRelocatedCity = (city1, city2 = { country: "Germany" }) => {
//     let [, country] = getNameAndCountry(city2);
//     return {
//         ...city1,
//         country,
//     };
// };

function getRelocatedCity(obj1, obj2) {
    
}

console.log(getRelocatedCity(city1));