import { arraynums, arraynums2, arraynums3 } from "./constants";

function selectionSort(array: number[]):number[]{
    const arr = array
    const sortedArr = []

    while (arr.length > 1){
        let minInd = 0
        let minVal = arr[0]
        for (let i = 0; i < arr.length; i++){
            if (minVal > arr[i]){
                minVal = arr[i]
                minInd = i
            }

        }
        sortedArr.push(arr[minInd])
        arr.splice(minInd, 1)


    }
    return sortedArr

}
console.log(arraynums)
console.log(selectionSort(arraynums))
console.log(arraynums2)
console.log(selectionSort(arraynums2))
console.log(arraynums3)
console.log(selectionSort(arraynums3))