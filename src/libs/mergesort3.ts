import { arraynums } from "./constants"

function Merge(left: number[], right: number[]):(number[]){
    const mergedArr: number[] = []
    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < left.length && rightIndex < right.length){
        if (left[leftIndex] < right[rightIndex]){
            mergedArr.push(left[leftIndex])
            leftIndex++
        } else if (left[leftIndex] > right[rightIndex]){
            mergedArr.push(right[rightIndex])
            rightIndex++
        } else {
            mergedArr.push(left[leftIndex])
            leftIndex++
        }
        
    }
    while (leftIndex < left.length){
        mergedArr.push(left[leftIndex])
        leftIndex++
    }
    while (rightIndex < right.length){
        mergedArr.push(right[rightIndex])
        rightIndex++
    }
    return mergedArr
}

function MergeSort(arr: number[]):(number[]){
    if (arr.length <= 1){
        return arr
    }

    const mid = Math.ceil(arr.length / 2)
    const left = arr.slice(0, mid);
    const right = arr.slice(mid)

    const sortedLeft = MergeSort(left)
    const sortedRight = MergeSort(right)

    return Merge(sortedLeft, sortedRight)

}
console.log(arraynums)
console.log(MergeSort(arraynums))