// checking sum zero - problem 1
// [-5,-4,-3,-2,-1,0,2,4,6,8] = input
// [-4,4 = output]

let num =  [-5,-4,-3,-2,-1,0,2,4,6,8]
function getPairSumZero(array){
for(let numbers of array){
console.log('outer');
for(let j=1;j<array.length; j++){
    console.log('inner');
    
if(numbers+array[j] === 0){
return [numbers,array[j]]
}
}
}
}

let result = getPairSumZero(num)
console.log(result);
