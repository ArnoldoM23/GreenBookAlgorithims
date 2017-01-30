// You are given a list of size , initialized with zeroes. You have to perform  operations on the list and output the maximum of final values of all the  elements in the list. For every operation, you are given three integers ,  and  and you have to add value  to all the elements ranging from index  to (both inclusive).

// Input Format

// First line will contain two integers  and  separated by a single space.
// Next  lines will contain three integers ,  and  separated by a single space.
// Numbers in list are numbered from  to .

// Constraints






// Output Format

// A single line containing maximum value in the updated list.

// Sample Input

// 5 3
// 1 2 100
// 2 5 100
// 3 4 100
// Sample Output

// 200


function algorithmicCrush(input) {
    var splitInput = input.split('\n').map(function(val){ return val.split(' ')})
    var list = {};
    var maxVal = 0;
    for(var i= 1; i <= Number(splitInput[0][0]); i++){
      list[i] = 0;
    }
    for(var i = 1; i < splitInput.length; i++){
      var operation = splitInput[i];
      addToList(Number(operation[0]), Number(operation[1]), Number(operation[2]), list);
    }
    for(var key in list){
      if(maxVal < list[key]){
        maxVal = list[key];
      }
    }
    console.log(maxVal + "")
    return maxVal + "";
} 

function addToList(start, end, value, list){
    for(var i = start; i <= end; i++){
        list[i] += value;
    }
    return 
}