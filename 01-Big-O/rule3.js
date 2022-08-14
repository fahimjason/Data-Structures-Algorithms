function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach(element => {
        console.log(element);
    });

    boxes2.forEach(element => {
        console.log(element);
    });
}

// BIG O(a + b)

//Log all pairs of array
const boxes = ['a', 'b', 'c', 'd', 'e'];
function logAllPairsOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j])
        }
    }
}

logAllPairsOfArray(boxes)

// BIG O(a * b)