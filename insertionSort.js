function insertionSort(numList) {
    console.log('Before: ' + numList + '\n')
    for (let i = 1; i < numList.length; i++) {
        let offset = 1
        console.log("Index " + i + ': ')
        while (numList[i-offset+1] < numList[i-offset] && numList[i-offset] !== -1) {
            console.log('switching ' + numList[i-offset+1] + ' with ' + numList[i-offset])
            let temp = numList[i-offset+1]
            numList[i-offset+1] = numList[i-offset]
            numList[i-offset] = temp
            offset++
            console.log('Now: ' + numList)
        }
    }
    console.log('\nAfter: ' + numList)
}

insertionSort([5,2,4,6,1,3])