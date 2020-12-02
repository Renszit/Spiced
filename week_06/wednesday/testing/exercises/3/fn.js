module.exports = function fn(arg) {
    const result = [];
    if (Array.isArray(arg)) {
        for (let i in arg) {
            result.push(fn(arg[i]));
        }
        return result;

    } else if (typeof arg === "string") {
        return [...arg].reverse().join("");
        
    } else {
        return null;
    }
};
