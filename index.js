function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction(){
    return sayHi;
}

function returnsAnAnonymousFunction() {
    return () => console.log('Hello');
}

function sayHi() {
    console.log('Hi!');
}