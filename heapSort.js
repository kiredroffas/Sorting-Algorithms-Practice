/*
Heap Sort: O(nLogn)

Heap sort is a comparison based sorting technique based on Binary Heap data structure. It is similar to selection sort where we first find 
the maximum element and place the maximum element at the end. We repeat the same process for remaining element.

What is Binary Heap?
Let us first define a Complete Binary Tree. A complete binary tree is a binary tree in which every level, except possibly the last, is 
completely filled, and all nodes are as far left as possible (Source Wikipedia)

A Binary Heap is a Complete Binary Tree where items are stored in a special order such that value in a parent node is greater(or smaller) 
than the values in its two children nodes. The former is called as max heap and the latter is called min heap. The heap can be represented 
by binary tree or array.

Why array based representation for Binary Heap?
Since a Binary Heap is a Complete Binary Tree, it can be easily represented as array and array based representation is space efficient. 
If the parent node is stored at index I, the left child can be calculated by 2 * I + 1 and right child by 2 * I + 2 (assuming the indexing
starts at 0).

Heap Sort Algorithm for sorting in increasing order:
1. Build a max heap from the input data.
2. At this point, the largest item is stored at the root of the heap. Replace it with the last item of the heap followed by reducing the 
   size of heap by 1. Finally, heapify the root of tree.
3. Repeat above steps while size of heap is greater than 1.

How to build the heap?
Heapify procedure can be applied to a node only if its children nodes are heapified. So the heapification must be performed in the bottom 
up order.
*/

function swap(arr, a, b) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

//Heapify the heap according to maxheap property
function maxHeapify(arr, heapLen, root) {
    largest = root  //Initialize largest as root
    left = 2 * root + 1  //left node
    right = 2 * root + 2 //right node

    //See if left child exists and is greater then root
    if(left < heapLen && arr[root] < arr[left]) {
        largest = left
    }

    //See if right child of root exists and is greater then root
    if(right < heapLen && arr[largest] < arr[right]) {
        largest = right
    }

    //Change root if needed
    if(largest != root) {
        //Swap root with largest node
        swap(arr, root, largest)

        //Heapify the new root
        maxHeapify(arr, heapLen, largest)
    }
}

//Main function to sort array
function heapSort(arr) {
    heapLen = arr.length

    //Build a maxheap: O(n)
    for(let i = heapLen; i >= 0; i--) {
        maxHeapify(arr, heapLen, i)
    }

    //One by one extract elements, reducing heapLen by 1 each iteration: O(logn)
    for(let i = heapLen-1; i > 0; i--) {
        //Swap node i (last) with node 0 (root)
        swap(arr, i, 0)        
        
        //Heapify swapped node
        maxHeapify(arr, i, 0)
    }
}

let arr = [12, 11, 13, 5, 6, 7, 1]
console.log("Array before: " + arr)
heapSort(arr)
console.log("Sorted array after: " + arr)