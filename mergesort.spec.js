describe('split', function(){
  it('splits an array with an even number of objects', 
  function(){
    expect( split([10, 12, 8, 3]) ).toEqual([ [10, 12], [8, 3]]);
  });


  it('splits an array with an odd number of objects', 
  function(){
    expect( split([10, 12, 8, 3, 5]) ).toEqual([ [10, 12], [8, 3, 5]]);
  });

});

describe('Merge', function(){
  it('merges two sorted arrays into one sorted array',
    function(){
      expect(merge([10, 12], [3, 5, 8])).toEqual([ 3, 5, 8, 10, 12]); 
  });

  it('merges two sorted arrays into one sorted array',
    function(){
      expect(merge([3, 12], [5, 8])).toEqual([ 3, 5, 8, 12]); 
  });

});


describe('Merge Sort', function(){
  

  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });

  it('return an array with one number', function(){
  	expect( mergeSort([10]) ).toEqual( [10] );

  })

  it('return an array with multiple numbers', function(){
  	expect( mergeSort([10, 12, 8, 3, 2]) ).toEqual( [2, 3, 8, 10, 12] );
  	
  })

  it('return an array when input is reversed sort', function(){
  	expect( mergeSort([10, 8, 6, 4, 2, 0]) ).toEqual( [0, 2, 4, 6, 8, 10] );
  	
  })

  it('returns a n=500 random array', function(){
  	var arrTest = [];
  	for (var k = 0; k<500; k++) {
  		arrTest.push(Math.floor(Math.random()*1000));
  	}
  	expect( mergeSort(arrTest) ).toEqual( arrTest.sort(function(a, b){ return a - b; }) );
  	
  })


});