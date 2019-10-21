/*
Bucket Sort: Average - O(n+k), Worst - O(n^2)

Works best if data is uniformly distributed over range

bucketSort(arr[], n)
1) Create n empty buckets (Or lists).
2) Do following for every array element arr[i].
.......a) Insert arr[i] into bucket[n*array[i]]
3) Sort individual buckets using insertion sort.
4) Concatenate all sorted buckets.
*/

function insertionSort(numList) {
    console.log('InsertionSort: Before: ' + numList)
    for (let i = 1; i < numList.length; i++) {
        let offset = 1
        // console.log("Index " + i + ': ')
        while (numList[i-offset+1] < numList[i-offset] && numList[i-offset] !== -1) {
            // console.log('switching ' + numList[i-offset+1] + ' with ' + numList[i-offset])
            let temp = numList[i-offset+1]
            numList[i-offset+1] = numList[i-offset]
            numList[i-offset] = temp
            offset++
            // console.log('Now: ' + numList)
        }
    }
    console.log('InsertionSort: After: ' + numList + "\n")
    return numList
}

function bucketSort(arr) {
    //Create n empty buckets
    let buckets = { b0: [], b1: [], b2: [], b3: [], b4: [],
                    b5: [], b6: [], b7: [], b8: [], b9: [] }

    //Insert elements into buckets
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= 0 && arr[i] < 0.1) {
            buckets.b0.push(arr[i])
        }
        else if(arr[i] >= 0.1 && arr[i] < 0.2) {
            buckets.b1.push(arr[i])
        }
        else if(arr[i] >= 0.2 && arr[i] < 0.3) {
            buckets.b2.push(arr[i])
        }
        else if(arr[i] >= 0.3 && arr[i] < 0.4) {
            buckets.b3.push(arr[i])
        }
        else if(arr[i] >= 0.4 && arr[i] < 0.5) {
            buckets.b4.push(arr[i])
        }
        else if(arr[i] >= 0.5 && arr[i] < 0.6) {
            buckets.b5.push(arr[i])
        }
        else if(arr[i] >= 0.6 && arr[i] < 0.7) {
            buckets.b6.push(arr[i])
        }
        else if(arr[i] >= 0.7 && arr[i] < 0.8) {
            buckets.b7.push(arr[i])
        }
        else if(arr[i] >= 0.8 && arr[i] < 0.9) {
            buckets.b8.push(arr[i])
        }
        else if(arr[i] >= 0.9 && arr[i] <= 1) {
            buckets.b9.push(arr[i])
        }
        else {
            console.log("Element out of sorting bucket range 0.0 - 1.0, exiting...")
            exit(1)
        }
    }

    //Sort individual buckets using insertion sort if necessary
    console.log(buckets)
    console.log("\n")
    Object.entries(buckets).forEach(
        function(key, value) {
            console.log("Sorting: " + key[0] + " with elements: " + key[1])
            //Dont need to sort bucket if has 1 or less elements
            if(key[1].length > 1) {
                key[1] = insertionSort(key[1])
            }
            else {
                console.log("No insertion sort needed\n")
            }
        }
    )
    console.log(buckets)

    //Concatenate all sorted buckets into sorted array
    let sortedArr = []
    Object.entries(buckets).forEach(
        function(key, value) {
            for(let i = 0; i < key[1].length; i++) {
                sortedArr.push(key[1][i])
            }
        }
    )
    return sortedArr
}

let arr = [.68, .78, .72, .94, .12, .39, .21, .17, .26, .23]
console.log("Array before: " + arr)
let sortedArr = bucketSort(arr)
console.log("Array after: " + sortedArr)