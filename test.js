function createRadomNumberInRange(start, end) {
    return Math.round((Math.random() * (end - start)) + start);
}
var x = 10;
function log() {
    console.log(x);
}
function wrapper(foo) {
    foo();
}

wrapper(log);