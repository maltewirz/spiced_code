// Warmup-1 -- sleepIn

function sleepIn (weekday, vacation) {
  return !weekday || vacation;
}

// Warmup-1 -- monkeyTrouble

function monkeyTrouble (aSmile, bSmile) {
  if (aSmile

    && bSmile) {
    return true;
  }
  if (!aSmile && !bSmile) {
    return true;
  }
  return false;
}

// Warmup-1 -- sumDouble

function sumDouble (a, b) {
  if (a == b) {
    return 2 * (a + b);
  } else {
    return a + b;
  }
}

// Warmup-1 -- diff21

function diff21 (n) {
  if (n <= 21) {
    return 21 - n;
  } else {
    return (n - 21) * 2;
  }
}

// Warmup-1 -- parrotTrouble

function parrotTrouble (talking, hour) {
  if (talking === true && (hour < 7 || hour > 20)) {
    return true;
  } else {
    return false;
  }
}

//Warmup-1 -- makes10

function makes10(a, b){
  return (a == 10 || b == 10 || (a+b) == 10);
}

// Warmup-1 -- nearHundred

function nearHundred (n) {
  return ((Math.abs(100 - n) <= 10) ||
   (Math.abs(200 - n) <= 10));
}

// Warmup-1 -- posNeg

function posNeg (a,  b, negative){
  if (negative === true) {
    return a < 0 && b < 0;
  }
  if (a < 0 && b > 0) || (a > 0 && b < 0) {
    return true;
  } else {
    return false;
  }
}

//Warmup-1 -- notString

function notString (str) {
  if (str === null || str === undefined || str.substring(0, 3) === 'not') {
    return str;
  }
  return `not ${str}`;
}

// Warmup-1 -- missingChar

function missingChar(str, n){
  return str.substring(0, n) + str.substring(n+1, str.length)
}

//Warmup-1 -- frontBack

function frontBack(str){
  if (str. length <= 1) {
    return str;
  }
  middle = str. substring(1, str. length -1);

  return (str.charAt(str.length -1)) + middle + str.charAt(0);
}

//Warmup-1 -- front3
function front3(str){
  if (str < 3) {
    return str;
} else {
    first = str.substring(0, 3)
    return first + first + first
}
}

//Warmup-1 -- backAround

function backAround(str){
  last = str.charAt(str.length-1);
  return last + str + last;
}

//Warmup-1 -- or35

function or35(n){
  if (n % 3 == 0 || n % 5 == 0 ) {
    return true;
} else {
    return false;
}
}

// Warmup-1 -- front22

function front22(str){
  front = str.substring(0, 2)
  return front + str + front;
}


// Warmup-1 -- startHi

function startHi(str){
  if (str.length < 2) {
    return false;
  }
  front = str.substring(0, 2);
  if (front == 'hi') {
    return true;
  } else {
    return false;
  }
}

// Warmup-1 -- icyHot

function icyHot(temp1, temp2){
  if ((temp1 < 0 && temp2 > 100) ||
        (temp2 < 0 && temp1 > 100) ) {
    return true;
} else{
    return false;
}
}

//Warmup-1 -- in1020

function in1020(a, b){
  if ((a >= 10 && a <= 20) || (b >= 10 && b <= 20)) {
    return true;
  } else {
    return false;
  }
}

//Warmup-1 -- hasTeen

function hasTeen(a, b, c){
  return (a >= 13 && a <= 19) || (b >= 13 && b <= 19) || (c >= 13 && c <= 19);
}

// Warmup-1 -- loneTeen

function loneTeen(a, b){
  teenA = (a >= 13 && a <= 19)
  teenB = (b >= 13 && b <= 19)
  if (teenA !== teenB) {
    return true;
} else {
    return false;
}
}

// Javascript W3 Code

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Functions</h2>

<p>This example calls a function which performs a calculation and returns the result:</p>

<p id="demo"></p>

<script>
var x = myFunction('test');     //This is the input to the function
document.getElementById("demo").innerHTML = x;     //This displays the result variable from the function

function myFunction(str) {       //This is a sample function
    return str;
}
</script>

</body>
</html>


//Warmup-1 -- delDel

function delDel(str){
  if (str.length < 4) {
    return str;
  }
  let output = str;   // anscheinend ist es hier wichtig, ein object draus zu machen?!
  if (str.substring(1,4) == 'del' ) {
    output = str.substring(0, 1) + str.substring(4, str.length);
  }
  return output;
}

// Warmup-1 -- mixStart

function mixStart(str){
  return (str.substring(1,3) == 'ix')
}

// Warmup-1 -- startOz
function startOz(str){
 result = '';

  if (str.length >= 1 && str.charAt(0) == 'o') {
    result += str.charAt(0);
  }
  if (str.length > 2 && str.charAt(1) == 'z') {
    result += str.charAt(1);
  }
  return result;
}


// Warmup-1 -- intMax

function intMax(a, b, c){
  if (a > b && a > c) {
    return a;
}
  if (b > a && b > c) {
    return b;
} else {
    return c;
}
}

// Warmup-1 -- close10
function close10 (a, b) {
  aDiff = Math.abs(a - 10);
  bDiff = Math.abs(b - 10);

  if (aDiff < bDiff) {
    return a;
  }
  if (bDiff < aDiff) {
    return b;
  }
  return 0;
}

// Warmup-1 -- in3050
function in3050(a, b){
  if ((a <= 50 && a >= 40) && (b <= 50 && b >= 40)) {
    return true;
  }
  if ((a <= 40 && a >= 30) && (b <= 40 && b >= 30)) {
    return true;
  } else {
    return false;
  }
}

// Warmup-1 -- max1020                               //revisit!
function max1020(a, b) {
  const between1020 = function (num) {
    return num >= 10 && num <= 20;
    };
    let result = 0;
    if (between1020(a)) {
      result = a;
    }
    if (b > result && between1020(b)) {
      result = b;
    }
    return result;
}

// Warmup-1 -- stringE

function stringE(str){
  count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == 'e') {
      count++;
    }
  }
  return (count >= 1 && count <=3);
}

//Warmup-1 -- lastDigit

function lastDigit(a, b, c){
  return (a % 10) == (b % 10) || (b % 10) == (c % 10) || (a % 10) == (c % 10);
}

//Warmup-1 -- endUp
function endUp(str){
  if (str.length <= 3) {
    return str.toUpperCase();
  }
  cut = str.length -3;
  front = str.substring(0, cut);
  back = str.substring(cut);

  return front + back.toUpperCase();
}

//Warmup-1 -- everyNth
function everyNth(str, n){
  result = '';
  for (let i = 0; i < str.length; i = i + n) {
    result += str.charAt(i);
  }
  return result;
}


// Warmup-2 -- stringTimes

function stringTimes(str, n){
  return str.repeat(n);
}


//Warmup-2 -- frontTimes
function frontTimes (str, n) {
  frontLen = 3;
  if (frontLen > str.length) {
    frontLen = str.length;
  }
  front = str.substring(0, frontLen);
  result = '';
  for (x = 0; x < n; x++) {
    result += front;
  }
  return result;
}

//Warmup-2 -- countXX
function countXX(str){
  count = 0;
  for (i = 0; i < str.length; i ++) {
    if (str.charAt(i) == 'x') {
      if(str.charAt(i+1) == 'x') {
        count++;
        }
      }
  }
  return count++;
}

//Warmup-2 -- doubleX
function doubleX(str) {
  str.toLowerCase(); // this transforms the input to lowercase
  x = str.indexOf('x');
  if (x == -1) {
   return false;
  }
  if (x >= str.length) {
    return false;
  }
  return str.substring(x+1, x+2) =='x';

}

//Warmup-2 -- stringBits
function stringBits(str){
  result = '';
  for (i =0; i < str.length; i += 2) {
   result += str.charAt(i);
  }
  return result
}

//Warmup-2 -- stringSplosion

function stringSplosion(str) {     //NOTE: THIS IS WRONG?!
  result = '';
  for (i =0; i < str.length; i ++) {
    result += str.substring(0, i+1);
  }
  return result;
}

//Warmup-2 -- last2
function last2(str) {
  count = 0;
  if (str.length < 2) {
    return 0;
  }
  end = str.substring(str.length - 2);
  for (x = 0; x < str.length - 2; x++) {
    sub = str.substring(x, x+2);
    if (sub == end) {
    count++;
    }
  }
  return count;
}

//Warmup-2 -- arrayCount9

function arrayCount9(nums) {
  count = 0;
  x = 9;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == x) {
      count++;
    }
  }
  return count;
}

//Warmup-2 -- arrayFront9

function arrayFront9(nums){
  for (i = 0; i < 4; i++) {
    if (nums[i] == 9) {
      return true;
    }
  }
  return false;
}

//Warmup-2 -- array123        FEHLER - CHECKEN

function array123(nums){
  for (i=0; i < nums.length - 2; i++) {
    if ((nums[i] == 1) && (nums[i+1] == 2) && (nums[i+2] == 3)) {
      return true;
    }
  return false;
  }
}

// Warmup-2 -- stringMatch

function stringMatch(a, b){
  len = Math.min(a.length, b.length);  //shortest of b and a
  count = 0;
  for (i = 0; i< len - 1; i++) {
    aSub = a.substring(i, i+2);
    bSub = b.substring(i, i+2);
    if (aSub == bSub) {
      count++;
    }
  }
  return count;
}

// Warmup-2 -- stringX
function stringX(str){
  result = '';
  front = str.substring(0, 1);
  end = str.substring(str.length - 1);
  for (i = 1; i < str.length - 1; i++) {
    if (str.charAt(i) !== 'x') {
      result += str.charAt(i);
    }
  }
  return front + result + end;
}

//Warmup-2 -- altPairs

function altPairs(str){
  result = '';
  for (i = 0; i < str.length; i += 4) {
    end = i + 2;
    if (end > str.length) {
      end = str.length;
    }
    result = result + str.substring(i, end);
  }
  return result;
}

//Warmup-2 -- stringYak    - do again!

function stringYak(str){
  result = '';                                      //leeres resultfeld
  for (i = 0; i < str.length; i++) {                //for loop, standard
    if (i + 2 < str.length                          //wenn der for loop nicht ans ende des strings gestoßen ist
        && str.charAt(i) == 'y'                     //und der erste buchstabe ein 'y' ist
        && str.charAt(i + 2) == 'k') {              //und der dritte buchstabe ein 'k' ist
    i += 2;                                         //dann springe 2 stellen für den loop
   } else {
    result += str.charAt(i);                        //wenn die vorherigen bedingungen nicht erfüllt, dann hinzufügen zu result
   }
  }
  return result;
}

//Warmup-2 -- array667

function array667(nums){
  count = 0;
  for (i = 0; i < nums.length; i++) {
    if ((nums[i] == 6) && (nums[i + 1] == 6 || nums[i + 1] == 7)) {
        count++;
      }
 } return count;
}

//Warmup-2 -- noTriples

function noTriples(nums){
  for (i = 0; i < nums.length - 2; i++) {
    if (nums[i] == nums[i+1] && nums[i+1] == nums[i+2]) {
    return false;
    }
  }
return true;
}

//Warmup-2 -- has271

function has271(nums){
  for (i = 0; i < nums.length - 2; i++) {
    if (nums[i] == 2 && nums[i+1] == 7 && nums[i+2] ==1) {
    return true;
    }
  }
return false;  // important to have true/false to not interrupt the loop from progressing
}

//String-1 -- helloName

function helloName(name){
  return "Hello " + name;
}

//String-1 -- makeAbba
function makeAbba(a, b){
  return a+ b+ b+ a;
}

//String-1 -- makeTags
function makeTags(tag, word){
  return "<" + tag+ ">" + word + "</" +tag +">" ;
}

//String-1 -- makeOutWord
function makeOutWord(out, word){
  return out.substring(0,2) + word + out.substring(2,4);
}

//String-1 -- extraEnd
function extraEnd(str){
  back = str.substring(str.length -2)
  return back + back +back;
}

//String-1 -- firstTwo
function firstTwo(str){
  return str.substring(0,2);
}

//String-1 -- firstHalf
function firstHalf(str){
  return str.substring(0, (str.length/2));
}

//String-1 -- withoutEnd
function withoutEnd(str){
 return str.substring(1, str.length-1);
}

//String-1 -- comboString
function comboString(a, b){
  if (a.length < b.length) {
  return a+ b +a;
  } else {
  return b+a+b;
  }
}

//String-1 -- nonStart
function nonStart(a, b){
  return a.substring(1,a.length) + b.substring(1,b.length) ;
}

//String-1 -- left2
function left2(str){
  return str.substring(2, str.length) + str.substring(0,2);
}

//String-1 -- right2
function right2(str){
  return str.substring(str.length -2) + str.substring(0, str.length-2);
}

//String-1 -- theEnd
function theEnd(str, front){
  if (front == true) {
    return str.charAt(0);
  } else {
    return str.charAt(str.length-1);   //der string beginnt ja mit 0, daher -1
}
}

//String-1 -- withoutEnd2
function withoutEnd2(str){
  if (str.length <= 1) {
  return '';
} else {
  return str.substring(1, str.length-1);
}
}

//String-1 -- middleTwo
function middleTwo(str){
  return str.substring(((str.length/2) -1), ((str.length/2) +1));
}

//String-1 -- endsLy
function endsLy(str){
  return (str.substring(str.length-2)== 'ly');
}

//String-1 -- nTwice
function nTwice(str, n){
  front = str.substring(0, n);
  back = str.substring(str.length-n);
  return front + back;
}

//String-1 -- twoChar
function twoChar(str, index){
  if (index < 0 || index +2 > str.length) {
    return str.substring(0, 2);
}
  return str.substring(index, index+2);
}

//String-1 -- middleThree
function middleThree(str){
  return str.substring((str.length/2)-1,(str.length/2)+2 );
}

//String-1 -- hasBad
function hasBad(str){
if (str.substring(0, 3) == 'bad' || str.substring(1, 4) == 'bad' ) {
  return true;
}
  return false;
}

//String-1 -- atFirst
function atFirst(str){
  if (str.length <= 0) {
  return "@@";
  }
  if (str.length == 1) {
  return str.substring(0,1) + "@";
  }else {
  return str.substring(0,2);
  }
}

//String-1 -- lastChars

function lastChars(a, b){
  result = "";

  if (a.length == 0) {
  result += "@";
  } else {
  result += a.substring(0,1);
  }

  if (b.length == 0) {
  result += "@";
  } else {
  result += b.charAt(b.length - 1);
  }
  return result;
}

//String-1 -- conCat

function conCat(a, b){
if (a.charAt(a.length-1) == b.charAt(0) ) {
  return a + b.substring(1,b.length);
  } else {
  return a+b;
  }
}

//String-1 -- lastTwo
function lastTwo(str){
return str.substring(0, str.length -2) + str.charAt(str.length -1) + str.charAt(str.length -2) ;
}

//String-1 -- seeColor
function seeColor(str){
  if (str.substring(0,3) == "red" ) {
  return str.substring(0,3) ;
  }
  if (str.substring(0,4) == "blue") {
  return str.substring(0,4) ;
  } else {
  return "";
  }
}

//String-1 -- frontAgain

function frontAgain(str){
  if ((str.length >= 2) && (str.substring(0,2) == str.substring(str.length-2))){
 return true;
  } else{
  return false;
  }
}

//String-1 -- minCat

function minCat(a, b){
  if (a.length > b.length) {
  return a.substring(a.length - b.length) + b;
  } else {
  return a + b.substring(b.length - a.length);
  }
}

//String-1 -- extraFront
function extraFront(str){
  return str.substring(0,2) + str.substring(0,2) + str.substring(0,2) ;
}

//String-1 -- without2
function without2(str){
  if (str.length >= 2 && (str.substring(0,2) == str.substring(str.length -2))) {
  return str.substring(2);
  }
  return str;
}

//String-1 -- deFront
function deFront(str){
  if (str.length == 1 && str.charAt(0) != 'a') {
  return "";
  }

  if (str.length >= 2) {
    if(str.charAt(0) != 'a' && str.charAt(1) != 'b') {
      return str.substring(2);
    } else if (str.charAt(0) != 'a') {
      return str.substring(1);
    } else if (str.charAt(1) != 'b') {
    return `a${str.substring(2)}`;
   }
  }
 return str;
}

//String-1 -- startWord

function startWord(str, word){
  if (str.length >= word.length &&
    str.substring(1, word.length) == (word.substring(1))) {
  return str.substring(0, word.length);
  }
  return "";
}

//String-1 -- withoutX   //try again solution

function withoutX(str){
  if (str.charAt(0) == 'x ) {
    return str.substring(1, str.length);
  }

  if (str.charAt(str.length-1) == 'x') {
    return str.substring(0, str.length-1);
  } else {
    return str;
  }
}

//String-1 -- withoutX2  //try again solution
function withoutX2(str){
  if (str.length == 1 && str.charAt(0) =='x') {
    return '';
  }

  if (str.length >= 2) {
    if (str.charAt(0) == 'x' && str.charAt(1) == 'x) {
      return str.substring(2);
    } else if (str.charAt(0) == 'x') {
      return str.substring(1);
    } else if (str.charAt(1) == 'x') {
      return str.charAt(0) + str.substring(2);
    }
}

//String-2 -- doubleChar

function doubleChar(str){
  result = "";
  for (i = 0; i < str.length; i++) {
    result += str.charAt(i) + str.charAt(i)
  }
  return result;
}

//String-2 -- countHi
function countHi(str){
  count = 0;
  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) == "h" && str.charAt(i+1) == "i") {
      count++;
    }
  }
  return count;
}

//String-2 -- catDog

function catDog(str){

 cat = 0;
  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) == "c" && str.charAt(i+1) == "a" && str.charAt(i+2) == "t") {
      cat++;
    }
  }

 dog = 0;
  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) == "d" && str.charAt(i+1) == "o" && str.charAt(i+2) == "g") {
      dog++;
    }
  }

  if (cat == dog) {
    return true;
  } else {
  return false;
  }

}

//shorter version:
function catDog (str) {
  var cat = 0;
  var dog = 0;

  for (var i = 0; i < str.length; i++) {
      if(str.substring(i, i+3) == "cat") {
          cat += 1;
      }
       if(str.substring(i, i+3) == "dog") {
          dog += 1;
         }

    }
    return cat == dog;
}

//String-2 -- countCode
function countCode(str){
  count = 0;
  for (i = 0; i < str.length-3; i++) {
    if (str.charAt(i) == "c" && str.charAt(i+1) == "o" && str.charAt(i+3) == "e") {
      count++;
    }
  }
  return count;
}

//String-2 -- endOther

function endOther(a, b){
  a = a.toLowerCase();
  b = b.toLowerCase();

  if (a.substring(a.length-b.length) == b || b.substring(b.length-a.length) == a ) {
    return true;
  }
  return false;
}


//another version
function endOther(a, b){
  short = "";
  long = "";

  if (a == b ) {
  return true;
  }

  if (a.length < b.length) {
    short += a.toLowerCase();
    long += b.toLowerCase();
  } else {
    short += b.toLowerCase();
    long += a.toLowerCase();
  }
  longEnd = long.substring(long.length - short.length);

  return longEnd == short;
}

//String-2 -- xyzThere

function xyzThere(str){
  x = "xyz";
  for (i = 0; i < str.length; i++) {
    if (str.substring(i, i+3) == x && str.charAt(i-1,i) != ".") {
      return true;
    }
  }
    return false;
}

//String-2 -- bobThere


function bobThere(str){
  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) == "b" && str.charAt(i+2) == "b"){
    return true;
    }
  } return false;
}

//String-2 -- xyBalance

function xyBalance(str){
  y = false;
  //backwards loop
  for (i = str.length -1; i >= 0; i--) {
    if (str.charAt(i) == "y")
      y = true;

    if(str.charAt(i) == "x" && !y){
      return false;
    }
  }
  return true;
}

//String-2 -- mixString  //redo solution here

function mixString(a, b){
  large = "";
  newStr = "";     //this defines two empty strings

  if (a.length > b.length) {             //this checks which string is longer
    large += a.length;                     // and assigns it to "large"
  } else {
   large += b.length;
  }

  for (i =0; i< large; i++) {           // if it is not undefined, each a and b
    if(a[i] != undefined) { .           // get added to the result newStr
      newStr += a[i];
    }
    if(b[i] != undefined) {
      newStr += b[i];
    }
  }
  return newStr;
}


//String-2 -- repeatEnd
function repeatEnd(str, n){
  result = "";
  for (i = 0; i < n; i++) {
    result += str.substring(str.length - n);
  }
  return result;
}

//String-2 -- repeatFront
function repeatFront(str, n){
  result = "";                             //the empy string
  for (i = n; i > 0; i--) {             // starting with number n, as long as bigger 0,
    result += str.substring(0,i);   //subtract one after each iteration
  }
  return result;
}

//String-2 -- repeatSeparator

function repeatSeparator(word, sep, count) {
  result = "";
  for (i = 0; i < count; i++) {
    if (i < count-1) {
      result += word + sep;
    } else {
      result += word;
     }
  }
return result;
}

//String-2 -- prefixAgain   --solutionA
function prefixAgain(str, n){
  prefix = str.substring(0, n);

  for (i = n; i < str.length; i++) {
    if (str.substring(i, i+n) == prefix) {
      return true;
      }
  }
  return false;
}

//String-2 -- prefixAgain --solutionB

function prefixAgain(str, n){
  prefix = str.substring(0, n);

  for (i = str.length; i > n; i--) {
    if (str.substring(i-n, i) == prefix) {
      return true;
      }
  }
  return false;
}

//String-2 -- xyzMiddle
function xyzMiddle(str){
  if (str.length < 3) {         //this checks if string long enough
    return false;                 // to even contain "xyz"
  }

  start1 = (str.length / 2) -2;      //if string is length 6(7), this returns 1(1,5)
  start2 = (str.length / 2) -1;     //if string is length 6(7), this returns 2(2,5)

  if (str.length % 2 == 0) {        //if string is even
    return str.substring(start1, start1 +3) == "xyz" ||   //string begins left
               str.substring(start2, start2 +3) == "xyz";    //string begins +1
  }

  return str.substring(start2, start2+ 3) == "xyz";     //string even
}

//String-2 -- getSandwich

function getSandwich(str){
  first = str.indexOf("bread");
  last = str.lastIndexOf("bread");

  if (first == last) {
    return "";
  }
  return str.substring(first+5, last);
}

//String-2 -- sameStarChar
function sameStarChar(str){
  for (i =1; i< str.length -1; i++) {
    if (str.charAt(i) == "*" && str.charAt(i-1) != str.charAt(i+1)) {
        return false;
        }
    }
return true;
}

//String-2 -- oneTwo
function oneTwo(str){
  result = "";
  for (i = 0; i < str.length-1; i+=3) {
  if (str[i+2] != undefined){  // this ensures ignoring groups
    result += str.charAt(i+1);   //of fewer 3 chars at end
    result += str.charAt(i+2);
    result += str.charAt(i);
    }}
  return result;
}

//String-2 -- zipZap

function zipZap(str){
  result = "";
  for (i = 0; i < str.length; i++) {
    if (str[i-1] != "z" || str[i+1] != "p") {
      result += str[i];
    }
  }
  return result;
}

//String-2 -- starOut
function starOut(str){
  result = "";

  for (i = 0; i < str.length; i++) {
    if (i == 0 && str.charAt(i) != '*') {   //Is the first position a star ?
      result += str.charAt(i);                 // if no, add to result.
    }

    if (i > 0 && str.charAt(i) != "*" && str.charAt(i-1) != "*") {
      result += str.charAt(i);
    }

    if (i > 0 && str.charAt(i) == "*" && str.charAt(i-1) != "*") {
      result = result.substring(0, result.length-1);
    }

  }
  return result;
}

// String-2 -- plusOut

function plusOut(str, word){
  slen = str.length;    //count str length
  wlen = word.length;   // count word length
  result = "";          //empty string

  for (i=0; i < slen; i++) {        // usual for loop start
    if (i <= slen - wlen) {         // if i smaller than string - word length
      tmp = str.substring(i, i+wlen);  //define tmp as word length
        if (tmp == word) {             //compairison to word
           result += word;             //if positive, add to result string
           i += wlen-1;                // add word length to i to jump ahead
         }
         else                          //this closes the first "if loop"
         result += "+";
      }
      else
        result += "+";                 //this closes the second "if loop"

  }
  return result;
}

//String-2 -- wordEnds     // do this again for practise

function wordEnds(str, word){
  slen = str.length;
  wlen = word.length;
  result= "";

  for (i =0; i < slen; i++) {
    if (i <= slen - wlen) {
      tmp = str.substring(i,i+wlen);
      if (tmp == word) {
        if (str[i-1] != undefined) {
          result += str[i-1];
        }
        if (str[i+wlen]) {
          result += str[i+wlen];
        }
        i += wlen -1;
      } else {
      }
    } else {
     }
  }

  return result;
}

//String-3 -- countYZ


function countYZ(str){
  count = 0;
  len = str.length;
  str = str.toLowerCase();

  for (i = 0; i < len; i++) {

    if (str.charAt(i) == 'y' || str.charAt(i) == 'z') {
      if (i < len-1 && !str[i+1].match(/[a-z]/i)) {    //checks first word
        count++;
      }
      if (i == len-1) {    // this checks for the last word
        count++;
      }
    }
  }
  return count;
}


//String-3 -- withoutString   // do this again for practise
function withoutString (base, remove){

 var rlen = remove.length;

  var res = "";

  for (var i = 0; i < base.length; i++){
    var subbie = base.substring(i, i+ rlen);
    if (subbie.toLowerCase() != remove.toLowerCase()) {
       if (base[i] == " " && res.charAt(res.length-1) == " "){
        }  else {
           res += base[i];
        }
    }  else {
      i += rlen-1;
    }
  }
  return res;
}

//String-3 -- equalIsNot
function equalIsNot(str){
  icount = 0;
  ncount = 0;

  for (i =0; i< str.length; i++) {
    if (str.substring(i, i+2) == "is") {
      icount++;
    }
    if (str.substring(i, i+3) == "not") {
      ncount++;
    }
  }
  return icount == ncount;
}

//String-3 -- gHappy
function gHappy(str){

  for (i=0; i < str.length; i++) {
    if (str[i] == "g" && (str[i+1] != "g" && str[i-1] != "g")) {
      return false;
    }
  }
  return true;
}

//String-3 -- countTriple

function countTriple(str) {
  count = 0;

  for (i = 0; i < str.length-2; i++) {
    tmp = str.charAt(i);
    if (tmp == str.charAt(i+1) && tmp == str.charAt(i+2))
      count++;
  }
  return count;
}


//String-3 -- sumDigits

function sumDigits(str){
  count = 0;
  count = parseInt(count);

  for (i = 0; i < str.length; i++) {
    if (str[i] == str[i].match(/[0-9]/i)) {
      count += parseInt(str[i]);
    }
  }
return count;
}

//String-3 -- sameEnds

function sameEnds(nums, len){
  front = nums.slice(0, len);    //slices front section
  back = nums.slice(nums.length - len);   //slices back section

  return front.toString() == back.toString(); //returns true if front+back same
}

//String-3 -- mirrorEnds

function mirrorEnds(string){
  result = "";

  for (i =0; i < string.length; i++) {
    if (string[i] == string[string.length - i - 1]) {
      result += string[i]

  } else {
    break;
    }
  }
  return result;
}

//String-3 -- maxBlock

function maxBlock(str){
  count = 0;    //set counter to 0
  stick = 0;    //set longest stick to 0

  for (i = 0; i < str.length; i++) {   //normal loop
    if (i < str.length-1 && str[i] == str[i+1]) {     //i second to last AND i and i+1 same
      stick += 1;   //then add one to stick
    } else {
      stick = 1;   // is not true, then stick is only set to i
    }

    if (stick > count) {       //here we upgrade count if stick was bigger
      count = stick;           // this is essentially a function to find the max
    }
  }
  return count;
}

//String-3 -- sumNumbers

function sumNumbers(str){
  temp = 0;
  count = 0;
  len= str.length;

  for (i = 0; i < len; i++) {
    if (parseInt(str[i])) {
      if (i < len-1 && parseInt(str[i+1])) {  //more than one number?
        temp += str[i];     // if so, add the second number to the first number
      } else {
        temp += str[i];
        count += parseInt(temp);
        temp ="";    // this clears the temp variable after use
      }
    }
  }
  return count;
}

// String-3 -- notReplace

function notReplace(str){
  result ="";

  for (i = 0; i < str.length; i++) {
    if (str.charAt(i-1).match(/[a-z]/i) || i+2 < str.length && str.charAt(i+2).match(/[a-z]/i)) {
      result += str[i];
    } else if (str.substring(i, i+2) == "is") {
      result += "is not";
      i++;
    } else {
      result += str[i];
    }
   }
   return result;
}

//Array-1 -- firstLast6
function firstLast6(nums){
  return (nums[0] == 6 || nums[nums.length-1] == 6) ;
}

//Array-1 -- sameFirstLast
function sameFirstLast(nums){
  if (nums.length >= 1) {
    if (nums[0] == nums[nums.length - 1]) {
      return true;
    }
  }
  return false;
}

//Array-1 -- makePi
function makePi() {
  return [3,1,4];
}

//Array-1 -- commonEnd
function commonEnd(a, b){
  return (a[0] == b[0] || a[a.length-1] == b[b.length-1]);
}

//Array-1 -- sum3
function sum3(nums){
  result = 0;
  for (i =0; i < nums.length; i++ ) {
    result += nums[i];
  }
  return result;
}

//Array-1 -- rotateLeft3
function rotateLeft3(nums){
  return [nums[1], nums[2], nums[0]];
}

//Array-1 -- reverse3
function reverse3(nums){
  return [nums[2], nums[1], nums[0]];
}

//Array-1 -- maxEnd3
function maxEnd3(nums){
  if (nums[0] > nums[nums.length-1]) {
    return [nums[0],nums[0],nums[0]];
  } else {
    return [nums[nums.length-1],nums[nums.length-1],nums[nums.length-1]];
  }
}

//Array-1 -- maxEnd3 - Alternative
function maxEnd3(nums){
  if (nums[0] > nums[nums.length-1]) {
    max = nums[0];
  } else {
    max = nums[nums.length-1];
  }
  return [max, max, max];
}

//Array-1 -- sum2
function sum2(nums){
  result = 0;

  for (i = 0; i < 2; i++) {
    nums[i] = nums[i] || 0;
    result += nums[i];
  }

  return result;
}

//Array-1 -- middleWay
function middleWay(a, b){
  return [a[1],b[1]];
}

//Array-1 -- makeEnds
function makeEnds(nums){
  return [nums[0], nums[nums.length-1]];
}

//Array-1 -- has23
function has23(nums){
  return (nums[0] == 2 || nums[1] == 2 || nums[0] == 3 || nums[1] == 3);
}

//Array-1 -- has23   -- Alternative
function has23 (nums) {
    if (nums.indexOf(2) != -1 || nums.indexOf(3) != -1){
       return true
    } else {
       return false
    }
}

//Array-1 -- no23
function has23 (nums) {
    if (nums.indexOf(2) == -1 && nums.indexOf(3) == -1){
       return true
    } else {
       return false
    }
}

//Array-1 -- makeLast //does not work in js
function makeLast(nums){
  num = [nums.length*2];
  num[nums.length*2-1] = nums[nums.length-1];
  return num;
}

//Array-1 -- makeLast //offical solution
function makeLast (nums) {
  var i = 0;
  var newNums = [];
  var last = nums.slice(nums.length - 1); //calling slice on array returns array with 'sliced' portion
  var double = nums.length * 2;

  while (i < double - 1) {
        newNums.push(0);
        i++;
    }

    newNums.push(last[0]);
    return newNums;
}

//Array-1 -- double23
function double23(nums){
  count2 = 0;
  count3 = 0;
  for (i =0; i< nums.length; i++) {
    if (nums[i] == 2) {
      count2 ++;
    }
    if (nums[i] == 3) {
      count3 ++;
    }
  }
  return (count2 > 1 || count3 > 1);
}

//Array-1 -- fix23
function fix23(nums){
  for (i=0; i< nums.length; i++) {
    if (nums[i] == 2 && nums[i+1] == 3) {
      nums[nums.indexOf(3)] = 0;
    }
  }
  return nums;
}

//Array-1 -- fix23. also working
function fix23(nums){
  for (i=0; i < nums.length; i++) {
    if (nums[i] == 2 && nums[i+1] == 3) {
      nums[i+1] = 0;
    }
  }
  return nums;
}

//Array-1 -- start1
function start1(a, b){
  count = 0;
  if (a[0] =1) {
    count++;
  }
  if (b[0] =1) {
    count++;
  }
  return count;
}

//Array-1 -- biggerTwo
function biggerTwo(a, b){
  if (a[0] + a[1] >= b[0] + b[1]) {
    return a;
  } else {
    return b;
  }
}

//Array-1 -- makeMiddle
function makeMiddle(nums){
  return [nums[nums.length/2-1], nums[nums.length/2]]
}


//Array-1 -- plusTwo
function plusTwo(a, b){
  return [a,b];
}

//Array-1 -- plusTwo again
function plusTwo (a, b) {
  var duoArr = new Array();
  duoArr[0]= a[0];
  duoArr[1]= a[1];
  duoArr[2]= b[0];
  duoArr[3]= b[1];

  return duoArr;
}

//Array-1 -- swapEnds
function swapEnds(nums){
  a = nums[0];
  b = nums[nums.length-1];

  nums[0] = b;
  nums[nums.length-1] = a;

  return nums;
}


//Array-1 -- midThree
function midThree (nums) {
     var x = Math.floor(nums.length/2); // since 5/2 is 2.5, floor gives 2
     return nums.slice(x-1, x+2);
}

//Array-1 -- maxTriple
function maxTriple(nums){
  first= nums[0];
  middle=nums[Math.floor(nums.length/2)];  //again, math floor is important
  last=nums[nums.length-1];

  if (middle > first && middle > last){
    return middle;
  }
  if (first > middle && first > last){
    return first;
  } else {
    return last;
  }
}

//Array-1 -- frontPiece
function frontPiece(nums){
  if (nums.length < 2) {
      return nums;
    }
  return nums[0] + nums[1];
}


//Array-1 -- unlucky1
function unlucky1(nums){
  sections = [nums.slice(-2), nums.slice(0,3)];

   for (section of sections) {
  for (i = 0; i < nums.length; i++) {
    if (section[i] == 1 && section[i+1] == 3) {
      return true;
    }
  }
} return false;
}

//Array-1 -- make2
function make2(a, b){
  newAr = a.concat(b);

  return [newAr[0], newAr[1]];
}

//Array-1 -- front11.   //check again
function front11(a, b){
  if (a.length == 0) {
    return b[0];
  }
    if (b.length == 0) {
    return a[0];
  }
  return [a[0], b[0]];
}

//Array-2 -- countEvens
function countEvens(nums){
  count = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      count++;
    }
  }
  return count;
}

//Array-2 -- bigDiff
function bigDiff(nums){
  min = Math.min(nums);
  max = Math.max(nums);

  return (max-min);
}


//Array-2 -- centeredAverage check again
function centeredAverage(nums){
  nums.sort();    //sorting the nums array ascending
  count = 0;      // counting the numbers
  sum = 0;        // counting the sum

  for (i = 1; i < nums.length - 1; i++) {   //start with 1 to exclude the smallest
    sum += nums[i];           // now all numbers added to sum
    count++;                  // increment count+1
  }
  return sum / count;         // compute and return average
}

//Array-2 -- centeredAverage - Alternative
function centeredAverage(nums) {
  var minn = Math.min(...nums);    // get min of nums array
  var minIn = nums.indexOf(minn);  // get position of min
  nums.splice(minIn, 1);           // cut the min out of array

  var maxx = Math.max(...nums);
  var maxIn = nums.indexOf(maxx);
  nums.splice(maxIn, 1);

  var total = 0;                   //run the for loop through cleaned array
  for (i = 0; i < nums.length; i++) {
    total += nums[i];             // add all numbers
  }
  return total / nums.length;     // return average
}

//Array-2 -- sum13
function sum13(nums){
  sum = 0;
  if (nums.length == 0) {
    return 0;
  }
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == 13) {
      i++;
    } else {
      sum += nums[i];
    }
  }
  return sum;
}

//Array-2 -- sum67
function sum67(nums){
  sum = 0;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] != 6) {
      sum += nums[i];
    } else {
      while (nums[i] != 7) {
        i++;
      }
    }
  }
  return sum;
}

//Array-2 -- has22
function has22(nums){
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == 2 && nums[i+1] == 2) {
      return true;
    }
  }
  return false;
}

//Array-2 -- lucky13
function lucky13(nums){
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == 1 || nums[i] == 3) {
      return false;
    }
  }
  return true;
}

//Array-2 -- sum28
function sum28(nums){
  count = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == 2) {
      count += nums[i];
    }
  }
  if (count == 8) {
    return true;
  } else {
    return false;
  }
}

//Array-2 -- more14
function more14(nums){
  count1 = 0;
  count4 = 0;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      count1 ++;
    }
    if (nums[i] == 4) {
      count4 ++;
    }
  }
  return count1 > count4;
}

//Array-2 -- fizzArray
function fizzArray(n){
  arr = [];
  for (i = 0 ; i < n; i++) {
    arr.push(i);
  }
  return arr;
}

//Array-2 -- only14
function only14(nums){
  for (i=0; i < nums.length; i++){
    if (nums[i] != 1 && nums[i] != 4) {
      return false;
     }
    }
    return true;
}

//Array-2 -- fizzArray2
function fizzArray2(n){
  arr = [];
  for (i = 0 ; i < n; i++) {
    arr.push(i.toString());
  }
  return arr;
}

//Array-2 -- no14
function no14(nums){
  has1 = false;
  has4 = false;

  for (i=0; i < nums.length; i++){
    if (nums[i] == 1) {
      has1 = true;
     }
    if (nums[i] == 4) {
      has4 = true;
     }
    }
    return (has1 != true || has4 != true);
}

//Array-2 -- isEverywhere
function isEverywhere(nums, val){
  for (i = 0; i < nums.length-1; i++) {
    if (nums[i] != val && nums[i+1] != val) {
      return false;
    }
  }
  return true;
}

//Array-2 -- isEverywhere  -- Why does this not work??
function isEverywhere(nums, val){
  for (i = 0; i < nums.length-1; i++) {
    if (nums[i] == val || nums[i+1] == val) {
      return true;
    }
  }
  return false;
}


//Array-2 -- either24
function either24(nums){
  has2 = false;
  has4 = false;

  for (i = 0; i < nums.length-1; i++) {
    if (nums[i] == 2 && nums[i+1] == 2){
      has2 = true;
    }
    if (nums[i] == 4 && nums[i+1] == 4){
      has4 = true;
    }
  }
  if (has2 == true && has4 == true) {
    return false;
  }
  if (has2 == true || has4 == true) {
    return true;
  } else {
    return false;
  }
}

//Array-2 -- either24
function either24(nums){
  has2 = false;
  has4 = false;

  for (i = 0; i < nums.length-1; i++) {
    if (nums[i] == 2 && nums[i+1] == 2){
      has2 = true;
    }
    if (nums[i] == 4 && nums[i+1] == 4){
      has4 = true;
    }
  }
  return has2 != has4;
}

//Array-2 -- matchUp //fehler in übungstext
function matchUp(a, b){
  count = 0;
  for (i = 0; i < a.length; i++) {
    if (Math.abs(a[i]-b[i]) == 1 || Math.abs(a[i]-b[i]) == 2) {
      count++;
    }
  }
  return count;
}

//Array-2 -- has77
function has77(nums){
  for (i = 0; i < nums.length -1 ; i++) {
    if ((nums[i] == 7 && nums[i+1] == 7) || (nums[i] == 7 && nums[i+2] == 7)) {
      return true;
    }
  }
  return false;

//Array-2 -- has12
function has12(nums){
 has1 = false;
 for (i = 0; i < nums.length; i++) {
  if (nums[i] == 1) {
    has1 = true;
  }
  if (has1 == true && nums[i] == 2) {
    return true;
  }
 }
 return false;
}

//Array-2 -- modThree
function modThree(nums){
  for (i=0; i< nums.length-1; i++) {
    if (nums[i]%2 == nums[i+1]%2 && nums[i+1]%2 == nums[i+2]%2) {
      return true;
    }
  }
  return false;
}

//Array-2 -- haveThree
function haveThree(nums){
  three = 0;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] == 3){        //is it 3
      if (nums[i+1] == 3){    //if next three, false
        return false;
      }
      three++;                // if not, increment counter
    }
  }
  return three == 3;          // true if three threes
}

//Array-2 -- twoTwo
function twoTwo(nums){
  for (i = 0; i< nums.length; i++){
    if (nums[i] == 2){        // if i is 2
      if (nums[i+1] != 2){    // and next # is not 2
        return false;         // this false
      }
      i = i+2;                //if next # is two, add increment by 2
    }
  }
  return true;                // if this loop didnt trigger the false, it is true
}

//Array-2 -- tripleUp
function tripleUp(nums){
  num = 0;
  for (i = 0; i < nums.length; i++) {
    num = nums[i];
    if (nums[i+1] == num+1 && nums[i+2] == num+2) {
      return true;
    }
  }
  return false;
}

//Array-2 -- shiftLeft
function shiftLeft(nums){
  if (nums.length < 1) {
      return nums;
  }
  result = [];
  for (i = 1; i < nums.length; i++) {
    result.push(nums[i]);
  }
  result.push(nums[0]);
  return result;
}


//Array-2 -- tenRun
function tenRun(nums){
  result = [];
  for (i = 0; i < nums.length; i++) {
    if (nums[i] % 10 == 0) {
      result.push(nums[i].substring)
    } else {
      result.push(nums[i]);
    }
  }
}

//Array-2 -- tenRun (java solution)
function tenRun(nums){
  numsL = nums.length;
  multiTen = 0;
  found = false;

  for (i = 0; i < nums.length; i++) {
    numsL[i] = nums[i];
    if (nums[i]%10 == 0) {
      found = true;
      multiTen = nums[i];
    }
    if (found == true) numsL[i] = multiTen;
  }
  return numsL;
}

//alternative
function tenRun (nums) {
  current;     //initiate variable
  i = 0;       //initiate var i and set to 0

  while (i < nums.length && nums[i] % 10 != 0) // solange keine 10 zahl da ist
    i++;                                  //weiterzählen

  if (i >= nums.length)                   //wenn am ende angekommen
    return nums;                          //, nums returnen.

  current = nums[i];                      //current wird mit nums i belegt
  i++;                                    //weiterzählen

  while (i < nums.length) {               //wenn zahl durch 10 teilbar
    if (nums[i] % 10 == 0)
      current = nums[i];                  //dann current damit belegen
    else
      nums[i] = current;                  //wenn nicht, dann auf nächsten anwenden.
    i++;
  }
  return nums;
}


//Array-2 -- pre4
function pre4(nums){
  result = [];
  for (i = 0; i < nums.length; i++) {
    if (nums[i] != 4) {
      result.push(nums[i]);
    } else {
      break;
    }
  }
  return result;
}

//Array-2 -- post4
function post4(nums){
  result = [];
  for (i = nums.length-1; i > 0; i--){
    if (nums[i] != 4) {
      result.push(nums[i]);
    } else {
      break;
    }
  }
  return result.reverse();
}

//Array-2 -- notAlone
function notAlone(nums, val){
  for (i = 1; i < nums.length -1; i++) {   //for loop excluding the first and last value
    if (nums[i] == val) {                  //wenn val im array vorkommt
      if (nums[i-1] != nums[i] && nums[i+1] != nums[i]) {    //wenn vorangehende und nachgehende zahl anders
        if (nums[i+1] > nums[i-1]) {                             //wenn nachgehende zahl größer als vorangehnde zahl
          nums[i] = nums[i+1];                                          //nachgehende zahl auf aktuelle assignen
        } else if (nums[i+1] < nums[i-1]) {                      //wenn vorangehemde zahl größer als nachgehdne
          nums[i] = nums[i-1];                                          // voranghende auf aktuelle assignen
        }
      }
    }
  }
  return nums;                                                    // ergebnis zurückgeben
}

//Array-2 -- zeroFront
function zeroFront(nums){
  count = 0;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {            //wenn nums eine 0 findet
      nums[i] = nums[count];       //nums auf position count wird auf nums mit position i assignt
      nums[count] = 0;             //wert 0 wird auf nums mit positon count assignt
      count++;                     //count eins weiterzählen
    }
  }
  return nums;                     //nums zurückgeben
}

/*
Beispiel [4,5,0,2]

1. eine 0 gefunden: nums[2] = 0
2. nums[count, also 0], aktuell eine 4, wird auf die alte positon der 0 gesetzt position    [4,5,0,2] - > [4,5,4,2]
3. die verwendete 0 wird jetzt auf nums[count, also 0] assignt.     [4,5,4,2] -> [0,5,4,2]
4. count eins weiterzählen damit die nächste 0 ebenfalls nach vorne kommt.

*/



//Array-2 -- withoutTen.
function withoutTen(nums){
  result = 0;                   //sets result to 0
  for (i = 0; i < nums.length; i++) {   //normal loop
    if (nums[i] != 10) {            // if current position not 10
      temp = nums[i];               //set current number to temp
      nums[i] = 0;                  //set current posiont to 0
      nums[result] = temp;          //set temp number to array result at posiotn 0 (result)
      result++;                     //counts up
    } else {
      nums[i] = 0;                  // if current number is 10, then set to 0.
    }
  }
  return nums;
}

//Array-2 -- zeroMax
function zeroMax(nums){
  tmp = 0;
  for (i = nums.length; i > 0; i--) {
    if (nums[i]%2 != 0) {
      tmp = nums[i];
    }
    if (nums[i] == 0) {
      nums[i] = tmp;
    }

  }
  return nums;
}

//Array-2 -- evenOdd. (output is correct but check again)
function evenOdd(nums){
  even = [];
  odd = [];

  for (i = 0 ; i < nums.length; i++) {
    if (nums[i]%2 == 0) {
      even.push(nums[i]);
    }
    if (nums[i]%2 == 1) {
      odd.push(nums[i]);
    }
  }
    return [even + odd];
}

//Array-2 -- fizzBuzz
function fizzBuzz(start, end){
  result = [];
  for (i = start; i < end; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      result.push("FizzBuzz");
    } else if (i % 3 == 0) {
      result.push("Fizz");
    } else if (i % 5 == 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }
  return result;
}

//Array-3 -- maxSpan (error)

function maxSpan(nums){
  if (nums.length > 0) {
    maxSpan = 1;
    for (i = 0; i < nums.length; i++){
      for (j = nums.length-1; j < i; j--) {
        if (nums[j] == nums[i]) {
          count = (j - i) +1;
          if (count > maxSpan) {
            maxSpan = count;
          }
          break;
        }
      }
    return maxSpan;
    } else {
      return 0;
    }
  }
}


//Array-3 -- maxSpan
function maxSpan(nums) {
  max = 0;                  // max variable init

  for (i = 0; i < nums.length; i++) { // usual for loop with i
    j = nums.length -1 ;              // variable j
    while (nums[i] != nums[j]) {      // wenn nums i ungleich nums j
      j--;                            // dann j runterzählen
    }
    span = j - i +1;                  // differenz von j und i minus 1

    if(span> max)                     //wenn span größer als max
      max = span;                     // updaten von max auf span wert
  }
  return max;
}


//Array-3 -- fix34 -new version
function fix34(nums){
  t = 0;                // variable t

  for (i = 0; i < nums.length; i++) { // for loop i
    for (j = 0; j < nums.length;j++) { // subnested for loop
      if (nums[i] == 4 && nums[j] == 3) { //if nums auf position i eine 4 und auf nums position j eine 3
        t = nums[j+1];    // dann die nachfolgende nummer von 3 auf t assignen
        nums[j+1] = nums[i];  //die aktuelle 4 auf die aktuelle 3 nachrücken
        nums[i] = t;        //jetzt die alte nummer auf den neuen freigewordenen platz setzen
      }
    }
  }
  return nums;
}


//Array-3 -- fix45

function fix45(nums){
  t = 0;                // variable t

  for (i = 0; i < nums.length; i++) { // for loop i
    for (j = 0; j < nums.length;j++) { // subnested for loop
      if (nums[i] == 4 && nums[j] == 5) { //if nums auf position i eine 4 und auf nums position j eine 5
        t = nums[j+1];    // dann die nachfolgende nummer von 4 auf t assignen
        nums[j+1] = nums[i];  //die aktuelle 5 auf die aktuelle 4 nachrücken
        nums[i] = t;        //jetzt die alte nummer auf den neuen freigewordenen platz setzen
      }
    }
  }
  return nums;
}


//Array-3 -- canBalance     -example using [2,2,3,1]
function canBalance(nums){
  first = 0;      // first variable
  second = 0;     // second variable

  for (i = 0; i < nums.length; i++) {   // for loop standard
    second += nums[i];                  //counting sum of all numbers  Ex: 8
  }

  for (i = 0; i < nums.length -1 ; i++) {  // for loop but excluding the last number Ex: [2,2,3]
    first += nums[i];             //number at pos i is added to first   Ex: 7
    second -= nums[i];            // number at pos i is subtracted from second Ex: 1

    if (first == second) {        // if this always held true being the same number, return true
    return true;
    }
  }
  return false;
}

//Array-3 -- linearIn
function linearIn(outer, inner){
  j = 0;

  for (i = 0; i < outer.length; i++) {
    if (inner[j] == outer[i]) {
      j++;
    }
  }
  return j == inner.length;
}

//Array-3 -- squareUp   - check again to increase comprehension.

function squareUp (n) {

  subArray = [];
  j = n;
  while (j > 0) {
    subArray.push(0);
    j--;
  }

  output = [];

  for (i = n-1; i >= 0; i--) {
    subArray.splice(i, 1, n-i);
    output = output.concat(subArray);
  }
  return output;
}


//Array-3 -- seriesUp - check again to increase comprehension.
function seriesUp (n) {
  var modArr = [];

  for (var i = 0; i < n; i++){
    var j = i;
    var x = 1;
    while (j >= 0){
      modArr.push(x);
      x += 1;
      j--;
    }
    x = 1;
  }
  return modArr;
}

//Array-3 -- maxMirror - check again to increase comprehension.

function maxMirror(nums){
  len = nums.length;
  count = 0;
  max = 0;

  for (i = 0; i < len; i++) {
    count = 0;
    for (j = len-1; i + count < len && j > -1; j--) {
      if (nums[i+count] == nums[j]) {
        count++;
      } else {
        if (count > 0) {
          max = Math.max(count, max);
          count = 0;
        }
      }
    }
    max = Math.max(count,max);
  }
  return max;
}

//Array-3 -- countClumps - check again to increase comprehension.
function countClumps(nums){
  yardStick = -1;
  clumps = 0;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i+1] && nums[i] != yardStick) {
      clumps += 1;
      yardStick = nums[i];
    } else {
      if (nums[i] != yardStick) {
        yardStick = -1;
      }
    }
  }
  return clumps;
}

//Logic-1 -- cigarParty
function cigarParty(cigars, isWeekend){
  if (isWeekend) {
    return cigars >= 40;
  }
  return cigars >= 40 && cigars <= 60;
}

//Logic-1 -- dateFashion
function dateFashion(you, date){
  if (you <= 2 || date <= 2) {
    return 0;
  }
  if (you >= 8 || date >= 8) {
    return 2;
  } else {
    return 1;
  }
}

//Logic-1 -- squirrelPlay
function squirrelPlay(temp, isSummer){
  if (isSummer) {
    return (temp >= 60 && temp <= 100);
  } else {
    return (temp >= 60 && temp <= 90);
  }
}

//Logic-1 -- caughtSpeeding
function caughtSpeeding(speed, isBirthday){
  if (isBirthday) {
     if (speed <= 65) {
      return 0;
    } else if (speed > 65 && speed <= 85) {
      return 1;
    } else {
      return 2;
    }
  } else {
      if (speed <= 60) {
      return 0;
    } else if (speed > 60 && speed <= 80) {
      return 1;
    } else {
      return 2;
    }
  }
}

//Logic-1 -- sortaSum
function sortaSum(a, b){
  n = a+b;
  if (n <= 19 && n >= 10) {
    return 20;
  } else {
    return n;
  }
}

//Logic-1 -- alarmClock
function alarmClock(day, vacation){
  if (vacation) {  //if true
    if (day <=5 && day >= 1) {
      return "10:00";
    } else {
      return "off";
    }
  } else {   //if false
    if (day <=5 && day >= 1) {
      return "7:00";
    } else {
      return "10:00";
    }
  }
}

//Logic-1 -- love6
function love6(a, b){
  return (a == 6 || b == 6 || (a+b) == 6 || MATH.abs(a-b) == 6);
}

//Logic-1 -- in1To10
function in1To10(n, outsideMode){
  if (outsideMode) {  //outsideMode == true
    return (n <= 1 || n >= 10);
  } else {            //outsideMode == false
    return (n > 0 && n <= 10);
  }
}

//Logic-1 -- specialEleven
function specialEleven(n){
  return (n % 11 == 0 ||n % 11 == 1);
}

//Logic-1 -- more20
function more20(n){
  return (n % 20 == 1 ||n % 20 == 2);
}

//Logic-1 -- old35
function old35(n){
  if (n % 3 == 0 && n % 5 == 0) {
    return false;
  } else if (n % 3 == 0 || n % 5 == 0) {
    return true;
  }
  return false;
}

//Logic-1 -- old35  - Alternative
function old35(n){
  return (n%3 == 0) != (n % 5 == 0);
}

//Logic-1 -- less20               //evtl mod nochmal anschauen
function less20(n){
  return (n % 20 == 18 || n % 20 == 19 );
}

//Logic-1 -- nearTen
function nearTen(num){
  return (num % 10 <= 2 || num % 10 >= 8);
}

//Logic-1 -- teenSum
function teenSum(a, b){
  n = a+b;
  if ((a <= 19 && a >= 13) ||(b <= 19 && b >= 13))  {
    return 19;
  } else {
    return n;
  }
}

//Logic-1 -- answerCell
function answerCell(isMorning, isMom, isAsleep){
  if (isAsleep) {
    return false;
  } else if (isMorning == true) {
    return (isMom == true);
  } else {
    return true;
  }
}

//Logic-1 -- teaParty
function teaParty (tea, candy) {
  if (tea >= 5 && candy >= 5) {
    if (tea >= candy * 2 || candy >= tea * 2) {
      return 2;
    }
    return 1;
  }
  return 0;
}

//Logic-1 -- fizzString
function fizzString(str){
  if (str[0] == "f" && str[str.length-1] == "b") {
    return "FizzBuzz";
  } else if (str[0] == "f") {
    return "Fizz";
  } else if (str[str.length-1] == "b") {
    return "Buzz";
  }
  return str;
}

//Logic-1 -- fizzString2
function fizzString2(n){
  if (n % 3 == 0 && n % 5 == 0) {
    return "FizzBuzz!";
  } else if (n % 3 == 0) {
    return "Fizz!";
  } else if (n % 5 == 0) {
    return "Buzz!";
  } else {
    return n + "!";
  }
}

//Logic-1 -- twoAsOne
function twoAsOne(a, b, c){
  return (a+b == c || a+c == b || b+c == a);
}

//Logic-1 -- inOrder
function inOrder(a, b, c, bOk){
  if (bOk == true) {
    return (c > b);
  } else {
    return (b > a && c > b);
  }
}

//Logic-1 -- inOrderEqual
function inOrderEqual(a, b, c, equalOk){
  if (equalOk) {
    return (a <= b && b <= c);
  } else {
    return (a < b && b < c);
  }
}

//Warmup-1 -- lastDigit
function lastDigit(a, b){
  return (a % 10 == b % 10);
}

//Logic-1 -- lessBy10
function lessBy10(a, b, c){
  return (Math.abs(a - b) >= 10 || Math.abs(a - c) >= 10 || Math.abs(b - c) >= 10 );
}

//Logic-1 -- withoutDoubles
function withoutDoubles(die1, die2, noDoubles){
  if (noDoubles) {
    if (die1 == die2) {
      if (die1 == 6 || die2 == 6) {
        die1 = 1;
        return die1 + die2;
      } else {
        die1++;
        return die1 + die2;
      }
    }
  }
  return (die1 + die2);
}

//Logic-1 -- maxMod5
function maxMod5(a, b){

  if (a < b) {
    smaller = a;
    bigger = b;
  } else {
    smaller = b;
    bigger = a;
  }

  if ( a == b) {
    return 0;
  } else if ((a % 5) == (b % 5)) {
    return smaller;
  }
  return bigger;
}

//Logic-1 -- maxMod5 - shorter version
function maxMod5 (a, b) {
  if (a == b) {
    return 0;
  }

  if (a % 5 == b % 5) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
  }
  return a > b ? a : b;
}

//Logic-1 -- redTicket
function redTicket(a, b, c){
  if (a == 2 && b == 2 && c == 2) {
    return 10;
  } else if ( a == b && b == c) {
    return 5;
  } else if (b != a && c != a) {
    return 1;
  }
  return 0;
}


//Logic-1 -- greenTicket
function greenTicket(a, b, c){
  if ( a != b && b != c && a != c) {
    return 0;
  } else if (a == b && b == c && a == c) {
    return 20;
  } else if (a == b || b == c || a ==c) {
    return 10;
  }
}

//Logic-1 -- shareDigit
function shareDigit(a, b){
  aFirst = Math.floor(a/10);
  aLast = a % 10;
  bFirst = Math.floor(b/10);
  bLast = b % 10;


  return (aFirst == bFirst || aFirst == bLast
        || aLast == bFirst || aLast == bLast);
}

//Logic-1 -- sumLimit
function sumLimit(a, b){
  str = (a+b).toString();
  str2 = (a).toString();

  if (str.length == str2.length) {
    return a+b;
  } else {
    return a;
  }
}


//The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
If else statement:
if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}


//Chaining If Else Statements from small to high
if (condition1) {
  statement1
} else if (condition2) {
  statement2
. . .
} else {
  statementN
}


//Selecting from Many Options with Switch Statements: If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which define various possible values. Statements are executed from the first matched case value until a break is encountered.
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;
   default:
   return "stuff";
   break;
   case 7:
   case 8:
   case 9:
     return "High";
     break;

//Lesson learnt: Nicht zusammen a || b > 0 sondern (a < 0 || b < 0)
//Bei return Funktion immer vor variable vor string:
if (count > 0){
        return count + " Bet";


//Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.
var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};


//There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.
//Dot Notation
var myObj = {
  prop1: "val1",
  prop2: "val2"
};
var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2
//Bracket Notation
var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};
myObj["Space Name"]; // Kirk
myObj['More Space']; // Spock
myObj["NoSpace"]; // USS Enterprise


//Accessing Object Properties with Variables
var dogs = {
  Fido: "Mutt", Hunter: "Doberman", Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed); // "Doberman"


//Updating and creating properties:
ourDog.bark = "bow-wow";
//Using Objects for Lookups: Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to "lookup" values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range.
var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};
alpha[2]; // "Y"
alpha[24]; // "C"

var value = 2;
alpha[value]; // "Y"


//Testing Objects for Properties
var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top"); // true
myObj.hasOwnProperty("middle"); // false


//JSON:
var myMusic = [
 {
   "artist": "Billy Joel",
   "title": "Piano Man",
   "release_year": 1973,
   "formats": [
     "CD",
     "8T",
     "LP"
   ],
   "gold": true
 }
 // Add record here
,
 {
   "artist": "kkc",
   "title": "sk",
   "release_year": 1972,
   "formats": [
     "CD",
     "8T",
     "LP"
   ],
   "gold": true
 }

];


//Accessing Nested Objects
var myStorage = {
 "car": {
   "inside": {
     "glove box": "maps",
     "passenger seat": "crumbs"
    },
   "outside": {
     "trunk": "jack"
   }
 }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

//
//Accessing Nested Arrays
// Setup
var myPlants = [
 {
   type: "flowers",
   list: [
     "rose",
     "tulip",
     "dandelion"
   ]
 },
 {
   type: "trees",
   list: [
     "fir",
     "pine",
     "birch"
   ]
 }
];

var secondTree = myPlants[1].list[1];

//Record Collection Exercise
// Setup
var collection = {
   "2548": {
     "album": "Slippery When Wet",
     "artist": "Bon Jovi",
     "tracks": [
       "Let It Rock",
       "You Give Love a Bad Name"
     ]
   },
   "2468": {
     "album": "1999",
     "artist": "Prince",
     "tracks": [
       "1999",
       "Little Red Corvette"
     ]
   },
   "1245": {
     "artist": "Robert Palmer",
     "tracks": [ ]
   },
   "5439": {
     "album": "ABBA Gold"
   }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
 if (prop === "tracks" && value !== "") {
   if(collection[id][prop]) {
     collection[id][prop].push(value); //If prop isn't "tracks" and value isn't empty (""), update
   }
   else {
     collection[id][prop]=[value]; //or set the value for that record album's property.
   }
 } else if (value !== "") {
   collection[id][prop] = value; //If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property.
 } else {
   delete collection[id][prop]; //If value is empty (""), delete the given prop property from the album.
 }

 return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
//----------------------


//While Loops
var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}

//For Loops
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}


//Iterate Through an Array with a For Loop
var myArr = [ 2, 3, 4, 5, 6];

var total = 0;

for (var i = 0; i < myArr.length; i++) {
 total += myArr[i]


//Nesting For Loops: If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:
var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}


//Do...While Loops: The next type of loop you will learn is called a "do...while" loop because it first will "do" one pass of the code inside the loop no matter what, and then it runs "while" a specified condition is true and stops once that condition is no longer true.
var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);


//Profile Lookup:
var contacts = [
   {
       "firstName": "Akira",
       "lastName": "Laine",
       "number": "0543236543",
       "likes": ["Pizza", "Coding", "Brownie Points"]
   },
   {
       "firstName": "Harry",
       "lastName": "Potter",
       "number": "0994372684",
       "likes": ["Hogwarts", "Magic", "Hagrid"]
   },
   {
       "firstName": "Sherlock",
       "lastName": "Holmes",
       "number": "0487345643",
       "likes": ["Intriguing Cases", "Violin"]
   },
   {
       "firstName": "Kristian",
       "lastName": "Vos",
       "number": "unknown",
       "likes": ["JavaScript", "Gaming", "Foxes"]
   }
];

function lookUpProfile(name, prop){
 for (var i = 0; i < contacts.length; i++) {
   if (contacts[i].firstName === name) {
     if (contacts[i].hasOwnProperty(prop)) {
       return contacts[i][prop]
     } else {
       return "No such property";
     }
   }
 }
    return "No such contact";
}

// Change these values to test your function
lookUpProfile("Akira", "likes");


//Random Fractions:
 return Math.random();

//Random Whole Numbers
function randomWholeNum() {
 return Math.floor(Math.random()*10);
}

//Random Whole Numbers within a Range
function randomRange(myMin, myMax) {
 return Math.floor(Math.random() * (myMax - myMin + 1) + myMin)
}

// Change these values to test your function
var myRandom = randomRange(5, 15);

//parseInt Function: The parseInt()function parses a string and returns an integer. Here's an example
var a = parseInt("007");

//Conditional (Ternary) Operator: The conditional operator, also called the ternary operator, can be used as a one line if-else expression.
//The syntax is:
//condition ? statement-if-true : statement-if-false;
function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
//rewritten with conditional operator:
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}


//Multiple Conditional (Ternary) Operators
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}


//Object Oriented Programming

//Objects in JavaScript are used to model real-world objects, giving them properties and behavior just like their real-world counterparts.
let duck = {
  name: "Aflac",
  numLegs: 2
};

//Method on an Object: Objects can have a special type of property, called a method.
//Methods are properties that are functions. This adds different behavior to an object.
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();
// Returns "The name of this duck is Aflac."

//Code Reusability:  this refers to the object that the method is associated with: duck
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};


//Constructor Function: Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}

////Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
//Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
//Constructors define properties and behaviors instead of returning a value as other functions might.
//Constructor to Create Objects
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
  // "this" inside the constructor always refers to the object being created
}
let blueBird = new Bird();


//Extend Constructors to Receive Arguments
function Dog(name, color) {
 this.name = name;
 this.color = color;
 this.numLegs = 4;
}

let terrier = new Dog("Bruce", "red")


//Verify an Object's Constructor with instanceof: Anytime a constructor function creates a new object, that object is said to be an instanceof its constructor. JavaScript gives a convenient way to verify this with the instanceof operator. instanceof allows you to compare an object to a constructor, returning true or falsebased on whether or not that object was created with the constructor.
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird; // => true


//Understand Own Properties: Own properties are those that are directly defined by an instance object.
let canary = new Bird("Tweety");
let ownProps = [];
for(let property in canary) {
  if(canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}


//Prototype Properties: Since all instances automatically have the properties on the prototype, think of a prototype as a "recipe" for creating objects.
function Dog(name) {
 this.name = name;
 Dog.prototype.numLegs = 3;
}


//Iterate over properties:  Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.
function Bird(name) {
  this.name = name; //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");


//Adding properties to the array:
let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps); // prints ["name"]
console.log(prototypeProps); // prints ["numLegs"]


//Constructor Property: the constructor property is a reference to the constructor function that created the instance.
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); //prints true
console.log(beagle.constructor === Dog); //prints true


//Example 2
function Dog(name) {
 this.name = name;
}

function joinDogFraternity(candidate) {
 if (candidate.constructor === Dog) {
   return true;
 } else {
   return false;
 }
}


//Prototype to a New Object. A more efficient way is to set the prototype to a new object that already contains the properties.
//This way, the properties are added all at once:
function Dog(name) {
 this.name = name;
}

Dog.prototype = {
 numLegs: 2,
 eat: function() {
   console.log("nom nom");
 },
 describe: function() {
   console.log("My name is " + this.name);
 }
};


//Set the Constructor Property when Changing the Prototype: There is one crucial side effect of manually setting the prototype to a new object. It erased the constructor property!
Bird.prototype = {
  constructor: Bird, // define the constructor property
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

// Where an Object’s Prototype Comes From. Just like people inherit genes from their parents, an object inherits its prototype directly from the constructor function that created it. For example, here the Bird constructor creates the duck object:
function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");
Bird.prototype.isPrototypeOf(duck); //returns true

//Prototype Chain: All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object.
function Dog(name) {
 this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // => true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);

//Inheritance So You Don't Repeat Yourself: Don't Repeat Yourself (DRY). The reason repeated code is a problem is because any change requires fixing code in multiple places.
function Cat(name) {
 this.name = name;
}

Cat.prototype = {
 constructor: Cat,
 };

function Bear(name) {
 this.name = name;
}

Bear.prototype = {
 constructor: Bear,
 };

function Animal() { }

Animal.prototype = {		//supertype: Defines beahviour shared by all animals
 constructor: Animal,
 eat: function() {
   console.log("nom nom nom");
}}

//Inherit Behaviors from a Supertype (= Parent): supertype: Defines behavior shared by all animals. In this challenge you saw the first step for inheriting behavior from the supertype(or parent) Animal: making a new instance of Animal.
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
let animal = Object.create(Animal.prototype);


//Set the Child's Prototype to an Instance of the Parent: This challenge covers the next step: set the prototype of the subtype (or child)—in this case, Bird—to be an instance of Animal
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();  // Should print "nom nom nom"

//Reset an Inherited Constructor Property
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird; //you can manually set Bird'sconstructor property to the Birdobject:
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();


//Add Methods After Inheritance
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);   // Dog object inherits from Animal
Dog.prototype.constructor = Dog; //Dog's prototype constructor is set to Dog

Dog.prototype.bark = function() {  // no bark functoin is added
   console.log("Woof!");
};
let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"


//Override Inherited Methods:  It's possible to override an inherited method. It's done the same way - by adding a method to ChildObject.prototypeusing the same method name as the one to override. Here's an example of Birdoverriding the eat()method inherited from Animal:
function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

// Inherit all methods from Animal
Bird.prototype = Object.create(Animal.prototype);

// Bird.eat() overrides Animal.eat()
Bird.prototype.eat = function() {
  return "peck peck peck";
};
// Use a Mixin to Add Common Behavior Between Unrelated Objects: As you have seen, behavior is shared through inheritance. However, there are cases when inheritance is not the best solution. Inheritance does not work well for unrelated objects like Bird and Airplane. They can both fly, but a Bird is not a type of Airplane and vice versa.  For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.
let bird = {
 name: "Donald",
 numLegs: 2
};

let boat = {
 name: "Warrior",
 type: "race-boat"
};

let glideMixin = function(obj) {
   obj.glide = function() {
       console.log("Flying, wooosh!");
   }
}

glideMixin(bird);
glideMixin(boat);


//Closure to Protect Properties Within an Object from Being Modified Externally: The simplest way to make properties private is by creating a variable within the constructor function. This changes the scope of that variable to be within the constructor function versus available globally. This way, the property can only be accessed and changed by methods also within the constructor function.  In JavaScript, a function always has access to the context in which it was created. This is called closure.
function Bird() {
  let hatchedEgg = 10; // private property

  this.getHatchedEggCount = function() { // publicly available method that a bird object can use
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount(); // returns 10


//Immediately Invoked Function Expression (IIFE): A common pattern in JavaScript is to execute a function as soon as it is declared. Note that the function has no name and is not stored in a variable. The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. This pattern is known as an immediately invoked function expressionor IIFE.
(function () {
  console.log("Chirp, chirp!");
})(); // this is an anonymous function expression that executes right away
// Outputs "Chirp, chirp!" immediately


//IIFE to Create a Module: The advantage of the module pattern is that all of the motion behaviors can be packaged into a single object that can then be used by other parts of your code.
let funModule = (function () {
 return {
   isCuteMixin: function(obj) {
     obj.isCute = function() {
       return true;
     };
   },
 singMixin: function(obj) {
   obj.sing = function() {
     console.log("Singing to an awesome tune");
   };
 }
}
}) ();
