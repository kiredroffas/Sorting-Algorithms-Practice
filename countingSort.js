/*
Counting sort is a sorting technique based on keys between a specific range. 
It works by counting the number of objects having distinct key values (kind of hashing). 
Then doing some arithmetic to calculate the position of each object in the output sequence.

Example:

For simplicity, consider the data in the range 0 to 9. 
Input data: 1, 4, 1, 2, 7, 5, 2
  1) Take a count array to store the count of each unique object.
  Index:     0  1  2  3  4  5  6  7  8  9
  Count:     0  2  2  0  1  1  0  1  0  0

  2) Modify the count array such that each element at each index 
  stores the sum of previous counts. 
  Index:     0  1  2  3  4  5  6  7  8  9
  Count:     0  2  4  4  5  6  6  7  7  7

The modified count array indicates the position of each object in 
the output sequence.
 
  3) Output each object from the input sequence followed by 
  decreasing its count by 1.
  Process the input data: 1, 4, 1, 2, 7, 5, 2. Position of 1 is 2.
  Put data 1 at index 2 in output. Decrease count by 1 to place 
  next data 1 at an index 1 smaller than this index.
*/

function countingSort(arr) {
    let countArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //count array for values 0-9
    let sortedArr = [arr.length].fill(0)   //array to sort values into once count array is made

    //Find occurances of each value and set in count array
    for(let i = 0; i < arr.length; i++) {  
        let arrValue = arr[i]
        countArr[arrValue]++
    }
    console.log("Count array: " + countArr)
    
    //Modify count array such that each element stores the sum of previous counts
    for(let i = 0; i < countArr.length; i++) {
        if(i === 0) {
            continue
        }
        else if(i === 1) {
            countArr[i] = countArr[0] + countArr[1]
        }
        else {
            countArr[i] = countArr[i] + countArr[i-1]
        }
    }
    console.log("Modified count array: " + countArr)
    
    //Modified count array now indicates the position of each object in sorted array
    //Output each element from input array into index in sorted array (right to left -> stable), followed by decreasing count by 1
    for(let i = arr.length-1; i >= 0; i--) {
        console.log("Putting " + arr[i] + " at sortedArr [" + countArr[arr[i]] + "]")
        sortedArr[countArr[arr[i]]-1] = arr[i] 
        countArr[arr[i]]--
    }
    return sortedArr
}

let arr = [1, 4, 1, 0, 7, 5, 2]
console.log("Arr before: " + arr)
let sortedArr = countingSort(arr)
console.log("Sorted arr: " + sortedArr)