// Counter without setInterval
// Without using setInterval, try to code a counter in Javascript. 
// There is a hint at the bottom of the file if you get stuck.

function count() {
    let counter = 0
    counter++
    console.log(counter)
}

count()
setTimeout(count, 1000)

// to be solved....