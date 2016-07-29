describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('return an array with one number', function(){
  	expect( bubbleSort([10]) ).toEqual( [10] );

  })

  it('return an array with multiple numbers', function(){
  	expect( bubbleSort([10, 12, 8, 3, 2]) ).toEqual( [2, 3, 8, 10, 12] );
  	
  })

  it('return an array when input is reversed sort', function(){
  	expect( bubbleSort([10, 8, 6, 4, 2, 0]) ).toEqual( [0, 2, 4, 6, 8, 10] );
  	
  })

  it('returns a n=500 random array', function(){
  	var arrTest = [];
  	for (var k = 0; k<500; k++) {
  		arrTest.push(Math.floor(Math.random()*1000));
  	}
  	expect( bubbleSort(arrTest) ).toEqual( arrTest.sort(function(a, b){ return a - b; }) );
  	
  })


});