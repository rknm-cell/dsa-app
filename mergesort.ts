


const arraynums: number[] = [1, 9, 2, 8, 3, 7, 4, 6, 5];
const arraynums2: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const arraynums3: number[] = [1, 16, 3, 12,  5, 8, 7, 42, 9, 10, 12, 25, 53];

let steps = 0
function merge(leftArray: number[], rightArray: number[]): number[] {
    const mergedArray: number[] = [];
    steps++
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex]! < rightArray[rightIndex]!){
            mergedArray.push(leftArray[leftIndex]!)
            leftIndex++
        }
        else if (leftArray[leftIndex]! > rightArray[rightIndex]!){
            mergedArray.push(rightArray[rightIndex]!)
            rightIndex++
        }
        else{
            mergedArray.push(leftArray[leftIndex]!)
            leftIndex++
            
        }
        
    }
    while (leftIndex < leftArray.length){
        mergedArray.push(leftArray[leftIndex]!)
        leftIndex++
    }
    while (rightIndex < rightArray.length){
        mergedArray.push(rightArray[rightIndex]!)
        rightIndex++
    }
    
  return mergedArray;
}


export function mergeSort(array: number[]): number[] {
  if (array.length <= 1) {
    return array;
  }
  steps++
  const middle = array.length / 2;
  const leftArray = array.slice(0, middle);
  
  const rightArray = array.slice(middle);
  
  
  const sortedLeft = mergeSort(leftArray);
  const sortedRight = mergeSort(rightArray);

  return merge(sortedLeft, sortedRight);
}
console.log(arraynums);
console.log("mergeSort(arraynums): ", mergeSort(arraynums));
console.log("mergeSort(arraynums2): ", mergeSort(arraynums2));
console.log("mergeSort(arraynums3): ", mergeSort(arraynums3));