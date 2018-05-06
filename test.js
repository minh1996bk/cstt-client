function createRadomNumberInRange(start, end) {
    return Math.round((Math.random() * (end - start)) + start);
}

console.log(createRadomNumberInRange(1, 5));