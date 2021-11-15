// 1. Create an array named numbers and store 5 number values in it
let numbers=[2,9,8,100,3];
// 2. Calculate the sum of array items and print it to the console using console.log()
let sum=0;
for( let i of numbers){
sum=i+sum;
}
console.log(sum);
// 3. Calculate the average of array items and print it to the console using console.log()
let avg=sum/numbers.length;
console.log(avg);
// 4. Find the highest number in the array and print it to the console using console.log()
let high=numbers[0];
for (let number of numbers){
if(number>high)
{ high=number;
}
}
console.log(high);
// 5. Find the lowest number in the array and print it to the console using console.log()
let low=numbers[0];
for (let number of numbers){
if(number<low)
{ low=number;
}
}
console.log(low);

// 6. Find the even numbers in the array and print them to the console using console.log()
let even=[];
for( let j of numbers){
if (j%2==0)
{
even.push(j)
}
}
console.log(even);
// 7. Find the odd numbers in the array and print them to the console using console.log()
let odd=[];
for( let k of numbers){
if (k%2!=0)
{
odd.push(k)
}
}
console.log(odd);

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
let five=[];
for( let z of numbers){
if (z%5==0)
{
five.push(z)
}
}
console.log(five);
// 9. Log all the element of the array one by one
for( let l of numbers){
console.log(l);
}
// 10. Find all the number in the array that is divisible by 3
let threes=[];
for( let three of numbers){
if (three%3==0)
{
threes.push(three)
}
}
console.log(threes);

