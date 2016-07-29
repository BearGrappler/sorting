var split = function(arrayArg){
	var outputArr = [];
	if (typeof arrayArg[0] === 'number') {
		var slicePoint = Math.floor(arrayArg.length / 2);
		outputArr = [arrayArg.slice(0, slicePoint), arrayArg.slice(slicePoint)]
		return outputArr
	} else if (arrayArg.length === 1) {
		outputArr = arrayArg;
	} else {
		for (var i = 0; i < arrayArg.length; i++) {
			if (arrayArg[i].length === 1) {
				outputArr.push(arrayArg[i])
			} else {
				var slicePoint = Math.floor(arrayArg[i].length / 2);
				outputArr.push(arrayArg[i].slice(0, slicePoint))
				outputArr.push(arrayArg[i].slice(slicePoint));
			}
		}
	}
	return outputArr;
}

var merge = function(array1, array2){
	var output = [];

	var arr1Point = 0;
	var arr2Point = 0;

	while (arr1Point < array1.length && arr2Point < array2.length){
		if (array1[arr1Point] < array2[arr2Point]){
			output.push(array1[arr1Point]);
			arr1Point++;
			if (arr1Point === array1.length) {
				return output.concat(array2.splice(arr2Point))
			}
		}
		else {
			output.push(array2[arr2Point]);
			arr2Point++;
			if (arr2Point === array2.length) {
				return output.concat(array1.splice(arr1Point))
			}
		}
	}

	if (array1.length > arr1Point + 1){
		return output.concat(array1.splice(arr1Point));
	}
	else if (array2.length > arr2Point + 1){
		return output.concat(array2.splice(arr2Point));
	}
}


var mergeSort = function(arrayArg){
	if (arrayArg.length === 0 || arrayArg.length === 1) {return arrayArg}

	var splittedArrays = split(arrayArg);

	while (splittedArrays.length < arrayArg.length) {
		splittedArrays = split(splittedArrays)
	}


	//the output (splittedArray) is an array of array singlets
	// e.g. [10,8,2,4] -> (split in the while loop) -> [[10], [8], [2], [4]]

	while (splittedArrays.length > 1){

		var tempArray = [];

		for (var i = 0; i < splittedArrays.length; i += 2){
			if ( splittedArrays[i + 1] === undefined ){
				tempArray.push(splittedArrays[i]);
			} else {
				tempArray.push( merge( splittedArrays[i], splittedArrays[i + 1] ) )
		    }
		}

		splittedArrays = tempArray;
	}

	return splittedArrays[0];
}

for (var i = 9; i <= 12; i++) {
  var numItems = Math.pow(2, i);
  var nativeTestArray = [];

  for (var j = 0; j < numItems; j++) {
    var rand = Math.floor(Math.random() * numItems);
    nativeTestArray.push(rand);
  }

  var bTestArray = nativeTestArray.slice(0);
  var mTestArray = nativeTestArray.slice(0);

  console.time(numItems + ' native');
  nativeTestArray.sort(function(a, b){ return a - b; });
  console.timeEnd(numItems + ' native');

  console.time(numItems + ' bubble');
  bubbleSort(bTestArray);
  console.timeEnd(numItems + ' bubble');

  console.time(numItems + ' merge');
  mergeSort(mTestArray);
  console.timeEnd(numItems + ' merge');
}
