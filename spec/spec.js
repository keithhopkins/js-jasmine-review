var code = require('../js/main.js');

// Problem 1
// Write a function that takes three random numbers from 0 to 100 and returns the largest one.

describe('Problem 1', function() {
  it('should return the largest number', function() {
    expect(code.largestNumber([10, 20, 30])).toBe(30);
    expect(code.largestNumber([1, 20, 3])).toBe(20);
    expect(code.largestNumber([-1, -20, -3])).not.toBe(-20);
  });
});

describe('Problem 2',function() {
  it('should return all the odd numbers from 40 to that number or return the number if its less than 40',function() {
    expect(code.oddNumbers(50)).toBe([41,43,45,47,49]);
    expect(code.oddNumbers(30)).toBe([30]);
  });
});

describe('Problem 3', function() {
  it('should return all the even numbers from 0 to input',function(){
    expect(code.evenNumbers(13)).toBe([0,2,4,6,8,10,12]);
    expect(code.evenNumbers(10)).toBe([0,2,4,6,8,10]);
  });
});

describe('Problem 4',function(){
  it('should return all odd numbers from 40 to the input',function(){
    expect(code.allOdds(49)).toBe([41,43,45,47,49]);
    expect(code.allOdds(34)).toBe([40,39,38,37,36,35,34]);
  });
});

describe('Problem 5',function(){
  it('should return the sum of a numbers digits',function(){
    expect(code.sumDigits(94132)).toBe(19);
    expect(code.sumDigits(1624)).toBe(13);
    expect(code.sumDigits(3)).toBe(3);
  });
});

describe('Problem 6',function(){
  it('should return the sum of a numbers digit until it is 1 digit',function(){
    expect(code.sumDigits(1049)).toBe(5);
    expect(code.sumDigits(4325)).toBe(5);
    expect(code.sumDigits(9999)).toBe(9);
  });
});

describe('Problem 7',function(){
  it('should return the smallest common divisor greater than 1',function(){
    expect(code.smallDivisor(9,6)).toBe(3);
    expect(code.smallDivisor(30,60)).toBe(2);
    expect(code.smallDivisor(35,55)).toBe(5);
  });
});

describe('Problem 8',function(){
  it('should return the LCM of 2 numbers',function(){
    expect(code.findLCM(3,55)).toBe(155);
    expect(code.findLCM(5,12)).toBe(60);
  });
});

describe('Problem 9',function(){
  it('should return 2 numbers average and standard deviation', function(){
    expect(code.statistics([17,53])).toBe({std:20.5,average:32.5});
    expect(code.statistics([67,73])).toBe({std:3,average:70});
    expect(code.statistics([54,82])).toBe({std:14,average:68});
  });
});



