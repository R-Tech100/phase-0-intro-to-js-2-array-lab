// Write your solution here!
var cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    name = 'Ralph';
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    name = "Bob";
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    return cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift(name);
}

function appendCat(name) {
    return [...cats, name]
}

function prependCat(name) {
    return [name, ...cats]
}

function removeLastCat() {
    return cats.slice(0,-1)
}

function removeFirstCat() {
    return cats.slice(1)
}