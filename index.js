// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);

function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(name){
    cats.pop(name);
    return cats;
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
    return cats;
}
 
function appendCat(name){
    const Cats = cats.slice();
    Cats.push(name);
    return Cats;
}

function prependCat(name){
    const Cats = cats.slice();
    Cats.unshift(name);
    return Cats;
}

function removeLastCat(name){
    const Cats = cats.slice();
    Cats.pop(name);
    return Cats;
}

function removeFirstCat(name){
    const Cats = cats.slice();
    Cats.shift(name);
    return Cats;
}


