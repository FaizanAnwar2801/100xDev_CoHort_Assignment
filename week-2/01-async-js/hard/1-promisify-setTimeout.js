/*
    Write a function that returns a promise that resolves after n seconds have passed, 
    where n is passed as an argument to the function.
*/

function wait(n) {
    let p = new Promise(function (resolves) {
        setTimeout(resolves, n*1000);
    })
    return p;
}

// Promise resolves after "n" seconds of time.d:\assignments-master\week-2\01-async-js\hard (promises)\2-sleep-completely.js

module.exports = wait;
