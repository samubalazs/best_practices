//opposit number
const opposite = number => -number;


//bmi index (ternary instead of case)
const bmi = (w, h, bmi = w/h/h) =>
  bmi <= 18.5 ? "Underweight" :
  bmi <= 25 ? "Normal" :
  bmi <= 30 ? "Overweight" : "Obese";


//get an array and should filter it regarding a base array
const GEESE = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
const gooseFilter = birds => birds.filter(bird => !GEESE.includes(bird));


//get diff between cube volumes
const times = (a, b) => a * b;
const find_difference = (a, b) =>
  Math.abs(a.reduce(times) - b.reduce(times));
 

//get name's monogram
const abbrevName = name => name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');


//got a number and return its max value (186 => 861)
const superSize = numb => +(''+num).split('').sort().reverse().join('');


//get remainder from two numbers
const remainder = (a, b) => a < b ? b % a : a % b;


//take a positive N as input and returns the number of times you need to perform this algorithm to get n = 1
const hotpo = n => n === 1 ? 0 : 1 + hotpo(n % 2 ? (n * 3 + 1) : n / 2);


//Find the sum of the multiples of n less than m (m is excluded)
const sumMul = (n, m) => ~~(m/n) * (m+n - m%n) / 2 || 'INVALID';


//You'll be given a string, and have to return the total of all the unicode characters as an int
const uniTotal = str => [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);


//get the min, max and diff of them from a numbers
const differenceInAges = a => (min = Math.min(...a),max = Math.max(...a),[min,max,max-min]);


//multiplying a given number by eight if it is an even number and by nine otherwise
const simpleMultiplication = n => n * (n % 2 ? 9 : 8);


//Find numbers which are divisible by given number
const divisibleBy = (numbers, divisor) => numbers.filter(number => !(number % divisor));


//got a string, you have to return each words in an array and its length after it
const addLength = str => str.split(' ').map(v => v+' '+v.length);


//return character frequency in a word
const charFreq = m => m.split('').reduce((s,n)=>( s[n] !== undefined ? s[n]++ : s[n] =1, s), {});


//say hello (name = [firstName, lastName])
const sayHello = ( name, city, state ) => `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`;


//sum numbers
const sum = numbers => numbers.reduce((a, b) => a + b, 0);


//get your name in reverse
const nameShuffler = str => str.split(' ').reverse().join(' ');


//repeat string N times
const repeatIt = (str, n) => typeof str === 'string' ? Array(n+1).join(str) : 'Not a string';


//return sum of square's
const squareSum = numbers => numbers.reduce((sum, n) => (sum + (n*n)), 0);


//convert boolean to string
const booleanToString = b => b.toString();


//format money
let formatMoney = amount => `$${amount.toFixed(2)}`


//invert values
let invert = array => array.map(i => 0 - i);


//go round on array till n (even if you have to count again and again from the beginning)
const duckDuckGoose = (players, goose) => players[--goose % players.length].name;


//change lowercase to uppercase and back in string
String.prototype.toAlternatingCase = function () {
	return this.split("").map(a => a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()).join('');
}


//basic calculator
function basicOp(o, a, b) {
  return eval(a+o+b);
}
//OR
function calculate(num1, operation, num2) {
  return '+-*/'.indexOf(operation) > -1 ? eval(num1 + operation + num2) : null
}


//remove spaces from string
const noSpace = x => x.split(' ').join('');


//true for all
const all = (array, fun) => array.every(fun);


//Sum all the numbers of the array except the highest and the lowest
sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0;


//find average of array
const find_average = array => array.reduce((result, current) => result + current, 0) / array.length;


//is the string digit?
String.prototype.digit = function() {
  return /^\d$/.test(this);
};


//sum all positive and negative numbers of an array
function countPositivesSumNegatives(input) {
	return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}


//reverse a string word by word
const reverse = string => string.split(' ').reverse().join(' ');


//fill array from 1 to N
const preFizz = n => Array.from({length: n}, (_, i) => i + 1);
const preFizz = n => Array.apply(null, new Array(n)).map((e, i) => ++i);


//get last item from any type of list
function last(list) {
  var last = arguments[arguments.length - 1];
  return last[last.length - 1] || last;
}


//Convert number to reversed array of digits
const digitize = n => (n + '').split('').map(Number).reverse();


//reverse an array of numbers
const reverseArr = [1,2,3,4].sort(()=>1)


//es6 concat strings
const joinStrings = (string1, string2) => `${string1} ${string2}`;


//remove first and last chars of string
const removeChar = str => str.slice(1,-1);


//filter true values of array
const countSheeps = arr => arr.filter(Boolean).length;


const stringToNumber = str => +str;
const numberToString = number => "" + number;


//sum all positive numbers from array
const positiveSum = arr => arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);


//is uppercase?
String.prototype.isUpperCase = function() {
  return this.toUpperCase() === this.toString();
}


//remove duplicate numbers from array (unique)
const distinct = a => [...new Set(a)];


//Hex number to decimal
const hexToDec = h => parseInt(h, 16);


//XOR operator
const xor = (a, b) => a != b;


//do I need plural?
const plural = n => n !== 1;


//get average
const getAverage = marks => Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);


//find position of search term in array
const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`;


//generate range of integer with steps
function generateRange(min, max, step) {
  for (var res = []; min <= max; min += step) res.push(min)
  return res;
}


//get all powers of 1 to n
const powersOfTwo = n => Array.from({length: n + 1}, (v, k) => 2 ** k);


//array contains none or true item
const none = (arr, item) => !arr.some(item);
const include = (arr, item) => arr.indexOf(item) !== -1;


//is the date today?
const isToday = date => new Date().toDateString() === date.toDateString();


//Formatting decimal places
const twoDecimalPlaces = n => Number(n.toFixed(2));
const twoDecimalPlaces = n => Math.round(n*100)/100;


//is this leapyear?
const yearDays = year => year + ' has ' + (!(year % 100) && year % 400 || year % 4 ? '365' : '366') + ' days';


//is this word palindrome?
const isPalindrome = line => (line.toString() == line.toString().split('').reverse().join(''));


//alcohol filter
const bloodAlcoholContent = (drinks, weight, sex, time) =>
 parseFloat(((drinks.ounces * drinks.abv * 5.14 / weight * (sex == 'male' ? 0.73 : 0.66)) - 0.015 * time).toFixed(4));


//what is in the function?
console.log(fname.toString());


//how many words are in the string?
const countWords = str => (str.match(/[^\s]+/g) || []).length;


//how many times is a word in the string
const solution = (fullText, searchText) => fullText.split(searchText).length - 1;


//does the text contains substring?
const spEng = sentence => /english/i.test(sentence);


//generate link
const generateLink = user => `http://www.codewars.com/users/${encodeURIComponent(user)}`;


//do something N times
Number.prototype.times = function (f) {
  for (let i = 0; i < this; ++i) {
	f(i);
  }
};


//double every character in string
const doubleChar = str => str.replace(/(.)/g, "$1$1");


//is this safe integer?
const SafeInteger = n => Number.isSafeInteger;


//remove vowels
const shortcut = string => string.replace(/[aeiou]/g,'');


//get random colored ghosts
var Ghost = function() {
  var colors = ["white", "yellow", "purple", "red"];
  var colorIndex = Math.floor(Math.random() * (colors.length));
  this.color = colors[colorIndex];
};


//distance between two coordinates
const distanceBetweenPoints = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);


//merge two array into one and sort them
const mergeArrays = (arr1, arr2) => [...new Set( (arr1.concat(arr2)).sort( (a,b) => a - b ) )];


//Get Nth Even Number
const nthEven = n => (n-1)*2;


//beer song
let song = '';
  	for(let i=99; i>1;i--) {
    	song += `${i} bottles of beer on the wall, ${i} bottles of beer.
Take one down and pass it around, ${i-1} bottle${i-1!=1 ? 's' : ""} of beer on the wall.\n`;
  	}
  	song += `1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.`;
  	return song;


//combat health counter
const combat = (health, damage) => Math.max(0, health - damage);


//What day is today?
const whatday = n => [,'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][n] || 'Wrong, please enter a number between 1 and 7';


//array contains some item
const check = (a, b) => a.includes(b);


//sum string numbers and back to string
const sumStr = (a,b) => (+a+ +b)+'';


//get isNan only
const isReallyNaN = val => Number.isNaN(val);
const isReallyNaN = val => val != val

//
create your own filter prototype
Array.prototype.filter = function( ruleCondition ) {
 var arr = [];
 this.forEach( function( currentValue ) {
  if( ruleCondition( currentValue ) ) {
   arr.push( currentValue );
  }
 });
 return arr;
}
//OR
Array.prototype.filter=function(fn){
  return this.reduce( (s,a) => fn(a) ? (s.push(a), s) : s, [] );
}


//years between dates
var howManyYears = function(date1, date2) {
  var firstdate = date1.split('/')[0];
  var seconddate = date2.split('/')[0];
  return Math.abs(seconddate - firstdate);
}


//sum all numbers which appears only one time in the array
function repeats(arr) {
 return arr.filter((e,i,a) => {
  return a.indexOf(e) == a.lastIndexOf(e);
	}).reduce((tot,n) => tot + n);
}


//separate text into different length
function decomposeSingleStrand(singleStrand) {
  return [
	`Frame 1: ${singleStrand.match(/.../g).join(' ')}`,
	`Frame 2: ${singleStrand.match(/^.|...|..$/g).join(' ')}`,
	`Frame 3: ${singleStrand.match(/^..|...|.$/g).join(' ')}`,
  ].join('\n');
}


//add element to the start and end of an array
myArray = ['start', ...myArray];
myArray = [...myArray, 'end'];


//get number always with 5 digits
function solution(value){
  return "Value is " + ("00000" + value).slice(-5);
}


//check string ends with exact string
string.endsWith(searchvalue);


//truncate string
const solution = (string,limit) => string.length <= limit ? string : `${string.substr(0, limit)}...`;


//run func I've got as variable
function generateRules(func,portList){
  return portList.map(func).join('');
}


//flatten array only one level
var flatten = function (array){
  return [].concat.apply([], array);
}
//flatten array into single level
return array.reduce(function(a, b) {
 if (Array.isArray(b)) {
   return a.concat(flatten(b))
 }
 return a.concat(b)
}, []);


//is every variable item number?
function numbers() {
  const args = Array.from(arguments);
  return args.every(x=> typeof x == 'number');
}


//Return a sorted list of objects
function sortList (sortBy, list) {
  return list.sort(function(a, b){
	 return a[sortBy] < b[sortBy]; 
  });
}


//Number of occurences in array
Array.prototype.numberOfOccurrences = function(search) {
  return this.filter(num => num == search).length;
}


//factorial recursive
function factorial(n) {
  if (n < 0) return null;
  if (n === 0) return 1;
  return n * factorial(n-1);
}
OR
var factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1); };
OR
function factorial(n) {
  if ((n === 0) || (n === 1))
    return 1;
  else
    return (n * factorial(n - 1));
}


//run fuction on array by given function
function reject(array, iterator) {
  return array.filter(function(x){ if(!iterator(x)) return x; });
}


//get the missing item in array list
function getMissingElement(superImportantArray){
  return [0,1,2,3,4,5,6,7,8,9].filter(function(n) {
	return superImportantArray.indexOf(n) === -1;
  })[0];
}


//is anagram?
var isAnagram = function(test, original) {
  return test.toLowerCase().split('').sort().join('') == original.toLowerCase().split('').sort().join('');
};


//set/modify url parameters
function addOrChangeUrlParameter (url, param) {
  url = url.replace(new RegExp(param.split('=')[0]+'=[^&]*'), param);
  return url + (url.indexOf(param) >= 0 ? '' : (url.indexOf('?') >= 0 ? '&' :'?')+param);
}


//find min with NaN and undefind
function min(a, b){
  if (a != a || b != b || a === undefined || b === undefined) return NaN;
  return (a<b)?Number(a):Number(b);
}
//OR
function min(a, b){
  return (isNaN(a) || isNaN(b)) ? NaN : ((a < b) ? +a : +b);
}


//filter object then get name from filtered object
function getNiceNames(people){
  return people.filter(p => p.wasNice).map(p => p.name);
}
function getNaughtyNames(people){
   return people.filter(p => !p.wasNice).map(p => p.name);
}


//order array names by last name
function sortNames(Names){
  return Names.sort(
    function(a, b) {
      return a.split(' ')[1] > b.split(' ')[1];
    }
  );
}


//sort text by alphabetical order
const str = code => str.split('').sort().join('');


//Create reverse function for the String prototype
String.prototype.reverse = function(){
  return this.split('').reverse().join('');
}


//takes an array of objects and a property name, and returns an array containing the named property of each object.
const pluck = (objs, name) => objs.map(x=>x[name]);


//get slope between two coordinates
function getSlope(p1, p2) {
  return (p2[0] - p1[0] !== 0) ? (p2[1] - p1[1]) / (p2[0] - p1[0]) : null;
}


//get core domain name only
function domainName(url) {
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}
OR
function domainName(url) {  
  return url.replace(/.+\/\/|www.|\..+/g, '');
}


//is number power of 2? https://graphics.stanford.edu/~seander/bithacks.html#DetermineIfPowerOf2
const isPowerOfTwo = n => n && (n & (n - 1)) === 0;
OR
const isPowerOfTwo = n => !(n & (n - 1));

//is number power of 4?
function powerOf4(n) {
  return n > 0 && !isNaN(n) && !(n % 4);
}


// is variable really number and only a number (not boolean, empty array, string, NaN)
function isAN(value) {
  return !isNaN(value) && (typeof value == 'number' || value instanceof Number);
}
OR
function isAN(value) {
  return Object.prototype.toString.call(value) == '[object Number]' && !isNaN(value);
}


//division between two number's factorial
function factorialDivision(n, d) {
  return n==d && 1 || n * factorialDivision(n-1, d)
}
OR
function factorialDivision(n, d) {
  var result = 1;
  for (var i = d+1; i<=n; i++) {
    result *= i;
  }
  return result;
}


//break something inot 1x1 pieces
const breakChocolate = (n, m) => n&&m ? n * m-1 : 0;


//morse code
decodeMorse = function(morseCode){
  var words = morseCode.trim().split('   ');
  return words.map(
    function(x) {      
      return x.split(' ').reduce((result, current) => result + MORSE_CODE[current], '');
    }
  ).join(' ');  
}


//tower combinations
function towerCombination(n) {
  return (n === 0) ? 1 : n * towerCombination(n - 1);
}


//return a function that always adds n to any number
const add = n => m => n + m;


//capitalize every words in text
String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
};
OR
String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}


//create array with n lenght and fill with anything
Array.apply(null, Array(n)).map(() => {something comes here};
//[...Array(n).keys()] - from 0 to n


//reverse prototype with new array
Array.prototype.reverse = function() {
  return this.map((e, i, a)=> a[(a.length -1) -i])
};


//reverse prototype with same array
Array.prototype.reverse = function() {
  var arr = this.splice(0);
  while(arr.length) {
    this.push(arr.pop());
  }  
  return this;
};


//make a copy from an array
var copyList = Array.from
//OR //concat without parameter copies the array
var copyList = a.concat()


//sort object by value
const sortObj = obj => Object.keys(obj).map(x => [ x, obj[x] ]).sort((a, b) => a[1] < b[1]);

//sort object by key
const sortObj = obj => Object.keys(obj).map(x => [ x, obj[x] ]).sort((a, b) => a < b);


//filter array to get numbers only
const filter_list = l => l.filter(x => typeof x == 'number');


//get fuction as an argument and return the result with call variables
function mainfunction(functiontocall, args) {
  return functiontocall.apply(null, args);
}


//currying - call a function with arguments together or separated
function sum(a,b) {
  if (arguments.length === 1) {
    return function(b) { return a + b; };
  }
  return a+b;
}


//find out how many divisors a number has
function getDivisorsCnt(n) {
  for (var d = 0, i = n; i > 0; i--) {
    if (n % i == 0) d++;
  }  
  return d;
}


//replace by pattern
var chars = {a: '@', s: '$', o: 0, h: 5, x: '*'};
function createSSP(password) {
  return password.replace(/[asohx]/gi, function(m){ return chars[m.toLowerCase()] });
}


//regex strings between quotes only
var reg = /".+?"/g;
function getQuotes(string) {
  return string.match(reg);
}


//convert number to currency format
function toCurrency(price) {
  return price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}
OR
const toCurrency = price => price.toLocaleString();


//destructuring for map
// Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}


//check every list item is greater than the previous
function isMonotone(arr) {
  return arr.every(function(x, idx) {
    return idx === 0 ? true : arr[idx] >= arr[idx-1];
  });
}


//create color codes
function shadesOfGrey(n) {
  var shades = [];  
  for (var i = 1; i <= Math.min(n, 254); i++) {
    var grey = ('0' + i.toString(16)).slice(-2);
    shades.push('#' + grey + grey + grey);
  }  
  return shades;
}


//fibonacci series - faster runtime
function fib(num, current = 0, next = 1) {
  if (num === 0)
    return current;
    
  return fib(--num, next, current + next);
}
//OR
function fib(n) {
  var a = 0, b = 1, c;
  if (n < 3) {
    if (n < 0) return fib(-n);
    if (n === 0) return 0;
    return 1;
  }
  while (--n) {
    c = a + b, a = b, b = c;
  }
  return c;
}


//sum positive numbers from 1 to n
const f = n => n > 0 && n%1 == 0 ? (n * (n+1)) / 2 : false;  //OR parseInt(n) OR Number.isInteger(n)


//recursive reverse string
function reverse(str) {
  return str.length > 1 ? reverse(str.slice(1)) + str[0] : str;
}


//number of possible unique pairs
const projectPartners = n => n * (n - 1) / 2;


//fill array from x to n with exact increment
var seqlist = function(x,inc,n){
  return Array.apply(null, new Array(n)).map(function(a,i){
   return x + i * inc;
  });
}


//arithmetic list
function sumOfN(n) {
  for (var i = 0, result = []; i <= Math.abs(n); i++) {
    result.push((result[i - 1] || 0) + i * (n < 0 ? -1 : 1));
  }  
  return result;
}


//get param type and return the value
function typing(param) {
  return param === undefined ? 'undefined' : typeof param + '=' + (JSON.stringify(param) || param);
}


//get first two item id from the list where the prices are an exact amount togethere (spend all your coupon for two item)
//https://hackernoon.com/two-sum-problem-in-javascript-156cbbd05a80
var buy = function(sum, arr) {
  var result = null;
  
  arr.some(function(price, i) {
    var id = arr.indexOf(price - item, i + 1);
    if (id !== -1) {
      result = [i, id];
      return true;
    }
  });
  
  return result;
};


//pagination text
var paginationText = function(pageNumber, pageSize, totalProducts){
  return 'Showing ' + (((pageNumber - 1) * pageSize) + 1) + ' to ' + Math.min(pageSize * pageNumber, totalProducts) + ' of ' + totalProducts + ' Products.';
}


//how many years should you wait to get your birthday on the same day as you born
var nextBirthdayOfTheWeek = function (birthday) {
  
  var weekbirthday = birthday.getDay();
  
  var year = birthday.getFullYear();
  var month = birthday.getMonth();
  var day = birthday.getDate();

  var counter = 0;
  
  for (var i = 1; i<12;) {
    counter++;
    var nextyear = new Date(year + i, month, day);
    var nextyearkbirthday = nextyear.getDay();
    if (weekbirthday == nextyearkbirthday) {
      return counter;
    } else {
      i++;
    }
  }
}
//OR
var nextBirthdayOfTheWeek = function (birthday) {
  var
    bYear = birthday.getFullYear(),
    bDay = birthday.getDay();
    
  do birthday.setFullYear(birthday.getFullYear() + 1)
  while (birthday.getDay() !== bDay);
  
  return birthday.getFullYear() - bYear;
}


//is number square?
const isSquare = n => Math.sqrt(n) % 1 === 0;
//OR
const isSquare = n => Number.isInteger(Math.sqrt(n));


//repeat function on an array till it give false then get the rest of the array
function span(arr, predicate) {
  for (var i = 0; i<arr.length; i++) {
    if (!predicate(arr[i])) { break; }    
  }
  return [arr.slice(0, i), arr.slice(i)];
}
//OR
function span(arr, predicate) {
  var i = 0;
  while (i < arr.length && predicate(arr[i])) {
     i++;
  }
  return [arr.slice(0, i), arr.slice(i)];
}


//function chaining
function chain(v, fns) {
  return fns.reduce(function(v, fn) { return fn(v) }, v);
}


//length of the Collatz Conjecture
function collatz(n) {
  var counter = 1;  
  while (n > 1) {    
    n = n % 2 ? 3 * n + 1 : n / 2;
    counter++;
  }
  return counter;
}


//get numbers from text
function myParseInt(str) {
  return /^\d+$/g.test(str.trim()) ? +str : NaN;
}


//get a function and variables as arguments and execute them later
var make_lazy = function (fn) {
  return fn.bind.apply(fn, arguments);
};


//greatest common divisor
function mygcd(x,y){
  return y == 0 ? x : mygcd(y, x % y);
}


//got a function body as string, create fn with argument then return the result
function runYourString (arg, obj) {
  var fn = new Function (obj.param, obj.func);
  return fn(arg);
}
//EXAMPLE
var arg = 4,                         // arg for "string" function call
    obj = {
      param: 'num',                  // parameter name for function in string  
      func: 'return Math.sqrt(num)'  // function that need call with arg var
    };

runYourString(arg, obj)              // we expect it should return 2 which is a result of square root of 4


//sort wordd by nth character (or normal if it is the same)
function sortIt(list, n) {
  var words = list.split(', ');
  return words.sort(
    function(a, b) {
      if (a.toLowerCase().charAt(n-1) == b.toLowerCase().charAt(n-1)) {
        if (a > b) {
          return 1;
        } else {
          return -1;
        }
      } else if(a.toLowerCase().charAt(n-1) > b.toLowerCase().charAt(n-1)) {
        return 1;
      } else {
        return -1;
      }
    }
  ).join(', ');
}


//how many days will be enough pressure in a tank with daily loss
const evaporator = (content, evap_per_day, threshold) => Math.ceil(Math.log(threshold / 100) / Math.log(1 - evap_per_day / 100));


//Product of the main diagonal of a square matrix.
function mainDiagonalProduct(mat) {
  return mat.map((x,i) => x[i]).reduce((a,b) => a*b);
  //or return mat.reduce(function(n, v, i){ return n * v[i] }, 1);
}


//on which day will you finish the book if you read x page per day (it can take more than one week)
function bookIsDay(pages, days) {
  var i = 0;
  while(pages > 0) {
    if (i > 6) {
      i = 0;
    }
    pages -= days[i];
    i++;
  }
  return i;
}


//find nearest square number - Take the square root, round, then square
function nearestSq(n) {
  return Math.pow(Math.round(Math.sqrt(n)), 2);
}
//OR
const nearestSq = n => Math.round(n**0.5)**2;


//check that every char is unique in string (the Set object have this size value)
let hasUniqueChars = (str) => new Set(str).size === str.length;
//OR
function hasUniqueChars(str) {
  return str.split('').every(function(v, i, arr) {
    return arr.indexOf(v) == i;
  });
}


//create english alphabet
Array.apply(, Array(26)).map(function(x,y) {
  return String.fromCharCode(y + 65);
}).join('');


// Function should take width and height of an image and return a ratio string (ex."16:9").
//If any of width or height entry is 0 function should raise an error.
function calculateRatio(w, h) {
  if (!w || !h) { throw new Error(); }
  function mygcd(x,y){
    return y == 0 ? x : mygcd(y, x % y);
  }
  var gcd = mygcd(w,h);
  return w/gcd + ':' + h/gcd;
}


//get duplicates from array
function duplicates(arr) {
  let result = [];
  
  arr.forEach(function(element, index) {
    if (arr.indexOf(element, index + 1) > -1) {
      if (result.indexOf(element) === -1) {
        result.push(element);
      }
    }
  });

  return result;
}
//OR
function duplicates(arr) {
  return arr.filter(function(v, i) {return arr.indexOf(v) != i && arr.lastIndexOf(v) == i;});
}


//convert decimal to binary
const toBinary = n => (n >>> 0).toString(2);


//count number of array elements
function count(array) {
  var result = {};
  for (var i = 0; i < array.length; ++i) {
    if (!result[array[i]]) {
      result[array[i]] = 0;
    }
    ++result[array[i]];
  }
  return result;
}
//OR
function count(array){
  return array.reduce(function (stack, value) {
    return stack[value] ? stack[value]++ : stack[value] = 1, stack;
  }, {});
}


