var bubbleSort = function(arr) {

	var tempVar;
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr.length - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				tempVar = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tempVar;
			}
		}
	}
	return arr;
}
