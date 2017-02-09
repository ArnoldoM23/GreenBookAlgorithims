// Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes write a method to rotate the image by 90 degrees. can you do this in place.

function rotateMatrix90(matrix)  {
	const rotatedMatrix = [];
	matrix.forEach((subArray, i) => {
		let counter = 0;
		for (var j = subArray.length - 1; j >= 0 ; j--) {
			if (!rotatedMatrix[counter]) {
				rotatedMatrix[counter] = [];
			}
			rotatedMatrix[counter][i] = subArray[j];
			counter++ 
		}
	});
	return rotatedMatrix;
}

console.log(rotateMatrix90([[4,8,12], [3,7,11], [2,6,10], [1,5,9]]))