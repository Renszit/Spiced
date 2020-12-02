const countries = require('./countries');

test("When find is passed an empty string, it returns an empty array", ()=> {
    var result = countries.find("");
    expect(result).toStrictEqual([]);
});

test("The array that it returns contains no more than four matches", ()=> {
    var result = countries.find("B");
    expect(result).toStrictEqual(["Bahamas","Bahrain","Bangladesh","Barbados"]);
});

test("The search is case insensitive",() => {
    var result = countries.find("AnGoLa");
    expect(result).toStrictEqual(["Angola"]);
});

test("If there are no matching countries, an empty array is returned", () => {
    var result = countries.find("lkmaslkdajnfladf");
    expect(result).toStrictEqual([]);
});