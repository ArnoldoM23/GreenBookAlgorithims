// Flatten the object:
// */
var o = {
  a: {
    m: {
      x: "1",
      y: "2"
    },
		z: 15,
		k: {
			char: "warlie"
		}
  },
  b: "3",
  c: {
    m: "4"
  }
};

// /*
// output:
// {
//   a.m.x: 1
//   a.m.y: 2
//   b: 3
//   c.m: 4
// }

function flattenObj(obj) {
	const flattenObj = {};
	for(var key in obj) {
		if (Array.isArray(obj[key]) || typeof obj[key] === 'string' || typeof obj[key] === 'number') {
			flattenObj[key] = obj[key];
		}else {
			makeFlat(key, obj[key]);
		}
	}
	function makeFlat(string, obj){
		for(var key in obj){
			if (Array.isArray(obj[key]) || typeof obj[key] === 'string' || typeof obj[key] === 'number') {
				let newKey = string + '.' + key;
				flattenObj[newKey] = obj[key];
			}else {
				let newString = string + '.' + key;
				makeFlat(newString, obj[key]);
			}
		}
	}
	return flattenObj;
}



console.log(flattenObj(o))