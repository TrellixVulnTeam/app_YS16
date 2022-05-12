import React, { Component } from 'react';
import Prism from "prismjs"
import { Grid, Paper, withStyles, List } from "@material-ui/core";

import '../../ReactJs/styles.css'
import Sidebar from '../sidebar';
import PrismCode from '../../ReactJs/prismCode';


const titles = { backgroundColor: '#F0F8FF', padding: '1px', fontSize: '16px' }

const styles = theme => ({
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(1)
  },
  smMargin: {
    margin: theme.spacing(1)
  },
  actionDiv: {
    textAlign: "center"
  }
})


const Pyramid = ` 
// Upside pyramid.
function pyraminds() {
  let i, j, k, str = "";

  for (i=0; i<5; i++) {
    for (j=1; j<(5 - i); j++) {
      str += " ";
    }
    for (k=1; k<=(2 * i +1); k++) {
      str += "*";
    }

    str += 'newLine';
  }

  console.log(str)
}

pyraminds();


// downside pyramid.
for (i=1; i<5; i++) {
  for (j=0; j<i; j++) {
    str += " ";
  }
  for (k=(5 - i)*2; k>1; k--) {
    str += "*";
  }

  str += 'newLine';
}

console.log(str)
 `.trim()

const Sort = `
let i, j, arr=[0,9,8,7,6];
var max=0;

for(i=0; i<arr.length; i++){
  for(j=i; j<arr.length; j++){
    if(arr[i]>arr[j]){
      var temp=arr[i];
      arr[i]=arr[j];
      arr[j]=temp;
    }
  }
}

console.log(arr);


//Greatest Product Of 3
max = arr[arr.length-1] * arr[arr.length-2] * arr[arr.length-3]
console.log(max);
`.trim()

const insersonSort = `
var insersionSort = function(array){
  for(var i =1; i< array.length; i++){
    for(var j=0;j<i;j++){
      if(array[i] < array[j]){
        var temp = array.splice(i, 1);
        array.splice(j,0,temp[0]);
      }
    }
  }
  
console.log(array)
return array;
}

insersionSort([3,5,1,9,6,2,1])
`.trim()

const mergSort = `
function mergeSort(arr){
    if(arr.length < 2) return arr;
    var middle = Math.floor(arr.length/2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
 }
 
 function merge(left, right){
  var result = [];
    while(left.length && right.length){
      if(left[0] == right[0]){
        result.push(left.shift());
      }
  else{
    result.push(right.shift());}
  }
  
  while(left.length) result.push(left.shift());
  while(right.length) result.push(right.shift());
  console.log(result)
  return result;
 }
 mergeSort([3,2,1])`.trim()

const quicksort = `
function QuickSort(arr){
    if(arr.length <= 1) return arr;
        var pivot = arr[arr.length -1];
        var left = [];
        var right = [];
        for(var i=0;i<arr.length-1;i++){
        if(arr[i] < pivot){
        left.push(arr[i])
      }
    else right.push(arr[i])
    }
    return [...QuickSort(left), pivot, ...QuickSort(right)]
 }
 console.log(QuickSort([5,4,2,7,9]))
 `.trim()

const selectionSort = `function selectionSort(arr){
  var minIdx, temp,
  len = arr.length;
    for(var i = 0; i < len; i++){
    minIdx = i;
      for(var j = i+1; j<len; j++){
        if(arr[j]<arr[minIdx]){
        minIdx = j;
      }
    }
    
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
   }
 
 console.log(arr)
 return arr;
 }
 
 selectionSort([7,5,2,4,3,9]);`.trim()

const twoSum = `
function twoSum(arr, s){
  var sum=[];
  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
      if(arr[i]+arr[j] == s){
        sum.push([arr[i], arr[j]])
      }
    }
  }
  return sum;
}

console.log(twoSum([1,2,3,4],5));`.trim()

const arrayCounter = `
  var arrCounter = function(arr){
  var counter = 0;
  var maxCount = 0;
    var inner = function(n){
      if(!Array.isArray(n)){
        maxCount = Math.max(maxCount, counter);
     counter = 0;
     return
   }
   
   n.forEach(num => {
   counter ++;
   inner(num);
   })
 }
 
 inner(arr);
 console.log(maxCount)
 return maxCount;
}

arrCounter([[3]])
arrCounter([[[[[[[9]]]]]]])
arrCounter([])`.trim()

const common_divisor = `
function numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
      return false;
      x = Math.abs(x);
      y = Math.abs(y);
        while(y) {
          var i = y;
          y = x % y;
          x = i;
        }
  return x;
  }
 
  console.log(numbers(12, 4));
  console.log(numbers(9, 3));`.trim()

const non_repeating_character = `
// find sub string
function common(){
  var str='India is my home';
  var str2=str.includes('is');
  
  console.log(str2);
}

common();


//2
function unique() {
  let i, j, str='apple', result='';

  for (i=0; i<str.length; i++) {
    let count = 0;
    for (j=1; j<str.length; j++) {
      if (str[i] == str[j]) {
        count += 1;
      }
    }

    // if (count>=2) {                                                              //For duplicates elements
    if (count<2) {
      result += str[i];
    }
  }
  console.log(result)
}

unique();


//3
function common() {
  let i, str='onely', str2='ony', result=[];

  for (i=0; i<=str.length; i++) {
    if (str2.indexOf(str[i]) == -1) {
      result.push(str[i]);
    }
  }

  return console.log(result.join(""));
}

common()
`.trim()

const Permutations = `
function findPerms(str) {
  if (str.length === 0) return "";
  if (str.length === 1) return str;
let result = [];
for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    const remainingChars = str.slice(0, i) + str.slice(i + 1);
for (let j = 0; j < remainingChars.length; j++) {
  result.push(currentChar + findPerms(remainingChars)[j]);
    }
  }
  return result;
}

console.log(findPerms('abc'))
  `.trim()

const combinations = `
function perm(str){
  var results = [];
  var arr = str.split("");
  var len = Math.pow(arr.length, 2);

  for( var i = 0; i < len; i++ ){
    for(var j=i; j>>=1;){
    for( var k= 0; k < arr.length; k++){
      arr[k] = ( j & 1 ) ? arr[k].toUpperCase() : arr[k].toLowerCase();
    }
  }
    var combo = arr.join("");
    results.push(combo);
  }
  return results;
}

 console.log( perm("ab"));`.trim();

const recursionReverseArray = `
var apple = [5,6,7,8,9];
var reverse = function(arr){
 var result = [];
 var newArr = [];
   arr.forEach((item) => newArr.push(item));
     var inner = function(x){
     if(x.length > 0){
       result.push(x.pop())
       inner(x);
     }
   return;
 }
 
 inner(newArr);
 return result;
}

console.log(apple)
console.log(reverse(apple))`.trim()




const factorial = `
var factorial = function(n){
  if(n === 1) return 1
  return n * factorial(n-1)
 }
 
 console.log(factorial(4));
 `.trim()

const missing_number = `
function missNum() {
  let i, arr=[0,1,2,4,5], exactsum=0, result=0;
  exactsum = arr.reduce((a, b) => a + b);

  for (i=0; i<=arr.length; i++) {
    result += i
  }
  
  result -= exactsum;
  console.log('Missing Number', result)
}

missNum();
 `.trim()

const Palindrom = `
function palindrom(){
  let i, str='madam', str2='';
  
  for(i=str.length-1; i>=0; i-- ){
    str2 += str[i]; 
  }
  if(str==!str2){
    console.log('Not Palindrom', str2)
  }
  console.log('Palindrom', str2)
}

palindrom();`.trim()

const prime = `
function prime(){
  let i, j, result=[];
  for(i=0; i<100; i++){
    var count=0
    for(j=2; j<i; j++){
      if(i%j == 0){
        count += 1;
      }
    }
    if(count==0){
      result.push(i);
    }
  }
  
  console.log(result);
}

prime();
`.trim()

const findVowel = `
//1
function vowel(){
  const str='appleou';
  var str2='';
  
  for(let i=0; i<str.length; i++){
    if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
      str2 += str[i];
    }
  }
  console.log(str2)
}

vowel();


//2
function getCount() {
  var str='apple';
  let vowelList = 'AEIOUaeiou'
  let vowels = '';
  
   for(var i = 0; i < str.length ; i++){
      if (vowelList.indexOf(str[i]) !== -1){
        vowels += str[i];
      }
    }
    console.log(vowels);
  }
  
  getCount();
  
  
//3
function getCount() {
  var str = 'appleo';
  var matches;

  for (var i = 0; i < str.length; i++) {
    if (str && (matches = str.match(/[aeiou]/g))) { }
  }
  console.log(matches);
}

getCount();
  `.trim();

const Pattern = `
let i,j, str="";                                                                    //Square pattern.
for(i=1; i<=5; i++){
  for(j=0; j<5; j++){
    str += "*";
  }
  str += "newLine";
}

console.log(str);


let i, j, str = "";                                                               //Right pascal star pattern.
for (i=1; i<=5; i++) {
  for (j=0; j<i; j++) {
    str += "*";
  }
  str += "newLine";
}

for (i=1; i<=(5-1); i++) {
  for (j=0; j<(5-i); j++) {
    str += "*";
  }
  str += "newLine";
}

console.log(str);
`.trim();

const compare_array = `
function compare(){
  const arr=[1,2,3,4,5,6];
  const arr2=[5,6,7,8,9,0];
  const result=[];
  
  for(let i=0; i<arr.length; i++){
    if(arr2.indexOf(arr[i]) !== -1){
      result.push(arr[i]);
    }
  }
  console.log(result)
}

compare();


//Unique name
function getUnique(){
  var names = ["John", "Peter", "Clark", "Harry", "John", "Alice"];
  var newName = [];
  
  for(i=0; i < names.length; i++){
      if(newName.indexOf(names[i]) === -1) {
          newName.push(names[i]);
      }
  }
  console.log(newName);
}

getUnique();
`.trim();

const strArray = `
    var strArray = "StackOverflow".split("");
    
    console.log(strArray)
    console.log(strArray.join(""));
`.trim();


const magicNumber = `
function magicNum(){
  const random = Math.random(0,1)
  return random;
}

function main(){
  const result = Math.random(0, magicNum);
  console.log(result);
}

main();
`.trim();

const amount = `
function minCoinChange(coins, amount) {
  const minCoins = new Array(amount + 1).fill(Infinity); 
  
  // there are 0 ways to make amount 0 with positive coin values
  minCoins[0] = 0;
  // look at one coin at a time
  for(let coin of coins) {
    for(let i = 0; i <= amount; i += 1) {
     
      if((i - coin) >= 0) minCoins[i] = Math.min(minCoins[i], minCoins[i - coin] + 1);
    }
  }
  
  // if the value remains Infinity, it means that no coin combination can make that amount
  return minCoins[amount] !== Infinity ? minCoins[amount] : -1;
}


console.log(minCoinChange([1,2,3],13));`.trim();


const possible = `
function isInt(value) {
  var x;
  if (isNaN(value)) {
    return false;
  }
  x = parseFloat(value);
  return (x | 0) === x;
}

console.log(isInt(0));`.trim();

const binaryMatrix = `
function shorPath(grid) {
  let n = grid.length - 1;
  let q = [0]
  
  if (grid[0][0] || grid[n][n]) return -1
  
  grid[0][0] = 1
  while (q.length) {
      let curr = q.shift();
      let i = curr & (1 << 7) - 1;
      let j = curr >> 7;
      
      if (i === n && j === n) return grid[n][n]
      for (let a = Math.max(i-1,0); a <= Math.min(i+1,n); a++){
          for (let b = Math.max(j-1,0); b <= Math.min(j+1,n); b++){
              if (grid[a][b] === 0){
                  grid[a][b] = grid[i][j] + 1, q.push(a + (b << 7))
                  }
                }
              }
            }
            return -1
          };
  
  console.log(shorPath([[0,0,0],[1,1,0],[1,1,0]]));`.trim();



class Logic extends Component {
  componentDidMount() {
    setTimeout(() => Prism.highlightAll(), 0)
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid container>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <h4><Sidebar /></h4>
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper}>
            <List>
              <h3>1. Pyramind</h3>
              newLine = \n
              <div style={titles}>
                <PrismCode
                  code={Pyramid}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />
              <br />
              <h3>2. Pattern</h3>
              <div style={titles}>
                <PrismCode
                  code={Pattern}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>3. Convert a string to an array</h3>
              <br />
              <div style={titles}>
                <PrismCode
                  code={strArray}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>4. Sort</h3>
              <div style={titles}>
                <PrismCode
                  code={Sort}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>5. Common Divisor</h3>
              <div style={titles}>
                <PrismCode
                  code={common_divisor}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>6. Missing Number</h3>
              <div style={titles}>
                <PrismCode
                  code={missing_number}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>7. Unique Char</h3>
              <div style={titles}>
                <PrismCode
                  code={non_repeating_character}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>8. Palindrom</h3>
              <div style={titles}>
                <PrismCode
                  code={Palindrom}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>9. Factorial</h3>
              <div style={titles}>
                <PrismCode
                  code={factorial}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>10. Prime</h3>
              <div style={titles}>
                <PrismCode
                  code={prime}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>11. Find vowel</h3>
              <div style={titles}>
                <PrismCode
                  code={findVowel}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>12. Compare Array</h3>
              <br />
              <div style={titles}>
                <PrismCode
                  code={compare_array}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>13. Recursion Reverse Array</h3>
              <div style={titles}>
                <PrismCode
                  code={recursionReverseArray}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>14. Permutations</h3>
              <div style={titles}>
                <PrismCode
                  code={Permutations}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>15. Find all the combinations of a string in lowercase and uppercase</h3>
              <div style={titles}>
                <PrismCode
                  code={combinations}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>16.Two Sum</h3>
              Check whether any two numbers in an array sums to a given number
              <div style={titles}>
                <PrismCode
                  code={twoSum}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />
              <br />

              <b>17.Given a function magicNumber() that returns a random integer 1 or 0, write a new function that will generate a random number that uses this magicNumber() function.</b>
              <div style={titles}>
                <PrismCode
                  code={magicNumber}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />
              <br />


              <b>18.Discuss possible ways to write a function isInteger(x) that determines if x is an integer.</b>
              <div style={titles}>
                <PrismCode
                  code={possible}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />
              <br />

              <b>19.Given an amount of money, return the minimum number of coins needed to make that change.</b>
              <div style={titles}>
                <PrismCode
                  code={amount}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>20.Shortest Path in Binary Matrix</h3>
              <ul>
                <li>In an N by N square grid, each cell is either empty (0) or blocked (1).</li>
                <li>A clear path from top-left to bottom-right has length k if and only if it is composed of cells C_1, C_2, ..., C_k such that:</li>
                1.Adjacent cells C_i and C_i+1 are connected 8-directionally (ie., they are different and share an edge or corner)
                <br />
                2.C_1 is at location (0, 0) (ie. has value grid[0][0])<br />
                3.C_k is at location (N-1, N-1) (ie. has value grid[N-1][N-1])<br />
                4.If C_i is located at (r, c), then grid[r][c] is empty (ie. grid[r][c] == 0).
                <li>Return the length of the shortest such clear path from top-left to bottom-right. If such a path does not exist, return -1.</li>
              </ul>
              Input:[[0,1],[1,0]], [[0,0,0],[1,1,0],[1,1,0]]
              <br />
              <br />
              Output:2, 4
              <div style={titles}>
                <PrismCode
                  code={binaryMatrix}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>21. Insersion Sort</h3>
              <div style={titles}>
                <PrismCode
                  code={insersonSort}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>22. Merg Sort</h3>
              <div style={titles}>
                <PrismCode
                  code={mergSort}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>23. Quick Sort</h3>
              <div style={titles}>
                <PrismCode
                  code={quicksort}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>24. Selection Sort</h3>
              <div style={titles}>
                <PrismCode
                  code={selectionSort}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>25. Array Counter</h3>
              <div style={titles}>
                <PrismCode
                  code={arrayCounter}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
            </List>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default (withStyles(styles)(Logic));
