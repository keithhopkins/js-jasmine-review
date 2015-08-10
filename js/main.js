var Statistics = function(){
  this.name = 'stats';
};

Statistics.prototype.largestNumber=function(arr){
  var largest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};


Statistics.prototype.oddNumbers=function(num){
  if(num<40)
    return [num];
  var odd=[];
  for(var i=41;i<100;i++)
    if(i%2===1&&i<num)
      odd.push(i);
  return odd;
};

Statistics.prototype.evenNumbers = function(num){
  var even = [];
  for(var i=0;i<=num;i++)
    if(i%2===0)
      even.push(i);
  return even;
};

Statistics.prototype.allOdds = function(num){
  var odds = [];
  if(num<=40){
    for(var i=40;i>=num;i--)
      odds.push(i);
  } else {
    for(var k=41;k<=num;k+=2){
      odds.push(k);
    }
  }
  return odds;
};

Statistics.prototype.sumDigits = function(num){
  if(num.toString().length===1)
    return num;
  var digits = num.toString().split('');
  return digits.reduce(function(prevValue,curValue,index,array){
    return Number(prevValue)+Number(curValue);
  });
};

Statistics.prototype.sumDigitsToOne = function(num){
  if(num.toString().length===1)
    return num;
  var digits = num.toString().split('');
  return this.sumDigitsToOne(
    digits.reduce(function(prevValue,curValue,index,array){
    return Number(prevValue)+Number(curValue);
  }));
};

Statistics.prototype.smallDivisor = function(num,num2){
  for (var i=2;i<num;i++){
    if(num%i===0&&num2%i===0){
      return i;
    }
  }
};

Statistics.prototype.findLCM = function(num,num2){
  var LCM = num;
  while(true){
    if(LCM%num===0&&LCM%num2===0)
      return LCM;
    LCM++;
  }
};

Statistics.prototype.statisticalNumbers = function(nums){
  var stats = {std: 0, average:0};
  var avg = this.average(nums);
  stats.average = avg;
  var standardDev = this.standardDeviation(nums);
  stats.std = standardDev;
  return stats;
};

Statistics.prototype.standardDeviation = function(nums){
  var mean = this.average(nums);
  var sqMean = nums.map(function(curVal){
    return Math.pow((curVal-mean),2);
  });
  sqMean = this.average(sqMean);
  return Math.sqrt(sqMean);
};

Statistics.prototype.average = function(nums){
  var avg = nums.reduce(function(prevVal,curVal,index,array){
    return prevVal+curVal;
  });
  return avg/nums.length;
};
module.exports = Statistics;