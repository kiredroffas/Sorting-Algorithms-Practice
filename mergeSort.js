// Merge sort: O(nLogn)

//Split a list into two pieces
function split(numList) {
    let midpoint = numList.length / 2
    let splitList = {}
    splitList.left = numList.slice(0,midpoint)
    splitList.right = numList.splice(midpoint, numList.length)
    console.log("Splitting: " + splitList.left + "," + splitList.right + " into " + splitList.left + " and " + splitList.right)
    return splitList
}

//Merge two sorted lists
function mergeLists(leftList, rightList) {
    console.log("Left: " + leftList + ' Right: ' + rightList)
    //Special Case: one/both lists are empty
    if (leftList.length === 0) {
        return rightList
    }
    else if (rightList.length === 0) {
        return leftList
    }

    //General case
    let indexLeft = 0, indexRight = 0  //L & R "Fingers"
    let mergedList = []  //List to build and return
    let targetListLength = leftList.length + rightList.length
    console.log('target list length: ' + targetListLength)
    while (mergedList.length < targetListLength) {
        console.log("Comparing: " + leftList[indexLeft] + " with " + rightList[indexRight])
        //If value on the left is smaller
        if( leftList[indexLeft] <= rightList[indexRight]) {
            mergedList.push(leftList[indexLeft])
            indexLeft++
            console.log('Pushed left: ' + mergedList)
        }
        //Else right value bigger
        else {
            mergedList.push(rightList[indexRight])
            indexRight++
            console.log('Pushed right: ' + mergedList)
        }

        //If at the end of a list, add the rest of the remaining list
        if(indexRight === rightList.length) {   
            while(mergedList.length < targetListLength) {
                mergedList.push(leftList[indexLeft])
                indexLeft++
            }
            console.log("End of rightList, adding the rest of leftList: " + mergedList)
            break;
        }
        else if(indexLeft === leftList.length) {
            while(mergedList.length < targetListLength) {
                mergedList.push(rightList[indexRight])
                indexRight++
            }
            console.log("End of leftList, adding the rest of rightList: " + mergedList)
            break;
        }
    }
    return mergedList
}

//Recursive merge
function mergeSort(numList) {
    if(numList.length <= 1) {
        return numList
    }
    else {
        let splitList = split(numList)
        //MONEY LINE ***
        return mergeLists(mergeSort(splitList.left),mergeSort(splitList.right))
    }
}

 let numList = [0,1,7,9,6,13,2,5]
//let numList = [-9,9,8,90]
console.log("\nBefore: " + numList)
let ret = mergeSort(numList)
console.log("After: " + ret + "\n")