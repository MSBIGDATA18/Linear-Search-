function linearSearch(arr, target){
    for ( let i = 0; i< arr.length; i++){
        if (arr[i] === target){
            return i 
        }
    }
    return -1 ;
}

console.log(linearSearch([12,45,67,32,78], 45))
console.log(linearSearch([12,31,75,32,85], 85))
console.log(linearSearch([12,45,66,32,76], 2))