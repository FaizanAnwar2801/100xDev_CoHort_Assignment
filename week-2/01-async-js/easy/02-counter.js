// Counter without setInterval
// Without using setInterval, try to code a counter in Javascript. 

let counter = 0
function count() {
    counter++
    setTimeout(count, 1000)
    console.log(counter)
}

count()


// solved by just fixing logic a bit
// crtl+c to exit terminal
