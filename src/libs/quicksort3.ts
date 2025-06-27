
import { arraynums, arraynums2, arraynums3 } from "./constants";


function quickSort(arr: number[]):number[]{
    if (arr.length <= 1){
        return arr
    }
    const pivot = arr.pop()
    const left = []
    const right = []

    for (let i = 0; i < arr.length; i++){
        if (arr[i] < pivot){
            left.push(arr[i])
        } else if (arr[i] > pivot){
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }

    const sortedLeft = quickSort(left)
    const sortedRight = quickSort(right)

    return [...sortedLeft, pivot, ...sortedRight]




}
console.log(arraynums)
console.log(quickSort(arraynums))
console.log(arraynums2)
console.log(quickSort(arraynums2))
console.log(arraynums3)
console.log(quickSort(arraynums3))

