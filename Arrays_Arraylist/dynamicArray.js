// Create a list, , of  empty sequences, where each sequence is indexed from  to . The elements within each of the  sequences also use -indexing.
// Create an integer, , and initialize it to .
// The  types of queries that can be performed on your list of sequences () are described below:
// Query: 1 x y
// Find the sequence, , at index  in .
// Append integer  to sequence .
// Query: 2 x y
// Find the sequence, , at index  in .
// Find the value of element  in  (where  is the size of ) and assign it to .
// Print the new value of  on a new line
// Task 
// Given , , and  queries, execute each query.

// Note:  is the bitwise XOR operation, which corresponds to the ^ operator in most languages. Learn more about it on Wikipedia.

// Input Format

// The first line contains two space-separated integers,  (the number of sequences) and  (the number of queries), respectively. 
// Each of the  subsequent lines contains a query in the format defined above.

// Constraints

// It is guaranteed that query type  will never query an empty sequence or index.
// Output Format

// For each type  query, print the updated value of  on a new line.

// Sample Input

// 2 5
// 1 0 5
// 1 1 7
// 1 0 3
// 2 1 0
// 2 1 1
// Sample Output

// 7
// 3

function dynamicArray(input) {
    //Enter your code here
    var inputSplit = input.split("\n");
    var seqList = [];
    var lastAns = 0;
    var result = '';
    var seqIndex;

    for(var i = 0; i < Number(inputSplit[0].split(' ')[0]); i++){
      seqList.push([]);
    }
    for(var i = 0; i < inputSplit.length; i++){
      inputSplit[i] = inputSplit[i].split(" ")
      if (i > 0) {
        if(Number(inputSplit[i][0]) === 1) {
         seqIndex = Math.floor(((Number(inputSplit[i][1]) ^ lastAns) % Number(inputSplit[0][0])))
         seqList[seqIndex].push(inputSplit[i][2]);
        }
        if(Number(inputSplit[i][0]) === 2){
           seqIndex = ((Number(inputSplit[i][1]) ^ lastAns) % Number(inputSplit[0][0]));
           var valueIndex = Number(inputSplit[i][2]) % seqList[seqIndex].length;
           lastAns = Number(seqList[seqIndex][valueIndex]);
           if (lastAns) {
              if(i === inputSplit.length -1){
                result += lastAns
              }else{
                result += lastAns + '\n'
              }
           }else{
            lastAns = 0;
           }
           
        }
      }
    }
   return result
} 
// 4 , 2, 7, 8, 3
// 4
var input = '10 8\n1 4 23\n1 12 223\n1 67 243\n1 8 113\n1 23 203\n2 34 32\n2 10 39\n2 5 35';



console.log(dynamicArray(input));









