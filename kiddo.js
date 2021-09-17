const TheAge = function (number) {
    if (number >= 18) {
        return true;
    }
    else {
        return false;
    }
};


const TheGreeting = function (TheAge) {
    if (TheAge >= 18) {
        return 'Hello there!';
    }

    else {
        return 'Hey kiddo!';
    }
};

console.log(TheGreeting(25));



