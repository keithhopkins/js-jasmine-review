var Statistics = require('../js/main.js');
var stats = new Statistics();
// Problem 1
// Write a function that takes three random numbers from 0 to 100 and returns the largest one.

describe('Problem 1', function() {
  beforeEach(function(){
    
  });
  it('should return the largest number', function() {
    expect(stats.largestNumber([10, 20, 30])).toEqual(30);
    expect(stats.largestNumber([1, 20, 3])).toEqual(20);
    expect(stats.largestNumber([-1, -20, -3])).not.toEqual(-20);
  });
});

describe('Problem 2',function() {
  it('should return all the odd numbers from 40 to that number or return the number if its less than 40',function() {
    expect(stats.oddNumbers(50)).toEqual([41,43,45,47,49]);
    expect(stats.oddNumbers(30)).toEqual([30]);
  });
});

describe('Problem 3', function() {
  it('should return all the even numbers from 0 to input',function(){
    expect(stats.evenNumbers(13)).toEqual([0,2,4,6,8,10,12]);
    expect(stats.evenNumbers(10)).toEqual([0,2,4,6,8,10]);
  });
});

describe('Problem 4',function(){
  it('should return all odd numbers from 40 to the input or all numbers from 40 to the number if its below 40',function(){
    expect(stats.allOdds(49)).toEqual([41,43,45,47,49]);
    expect(stats.allOdds(34)).toEqual([40,39,38,37,36,35,34]);
  });
});

describe('Problem 5',function(){
  it('should return the sum of a numbers digits',function(){
    expect(stats.sumDigits(94132)).toEqual(19);
    expect(stats.sumDigits(1624)).toEqual(13);
    expect(stats.sumDigits(3)).toEqual(3);
  });
});

describe('Problem 6',function(){
  it('should return the sum of a numbers digit until it is 1 digit',function(){
    expect(stats.sumDigitsToOne(1049)).toEqual(5);
    expect(stats.sumDigitsToOne(4325)).toEqual(5);
    expect(stats.sumDigitsToOne(9999)).toEqual(9);
  });
});

describe('Problem 7',function(){
  it('should return the smallest common divisor greater than 1',function(){
    expect(stats.smallDivisor(9,6)).toEqual(3);
    expect(stats.smallDivisor(30,60)).toEqual(2);
    expect(stats.smallDivisor(35,55)).toEqual(5);
  });
});

describe('Problem 8',function(){
  it('should return the LCM of 2 numbers',function(){
    expect(stats.findLCM(3,55)).toEqual(165);
    expect(stats.findLCM(5,12)).toEqual(60);
  });
});

describe('Problem 9',function(){
  it('should return 2 numbers average and standard deviation', function(){
    expect(stats.statisticalNumbers([17,53])).toEqual({std:18,average:35});
    expect(stats.statisticalNumbers([67,73])).toEqual({std:3,average:70});
    expect(stats.statisticalNumbers([54,82])).toEqual({std:14,average:68});
  });
});



