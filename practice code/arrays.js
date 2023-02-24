let numbers=[1,2,3,4,56,67,7]

numbers.push(76)
console.log(numbers)//add the numbers in the last 

numbers.pop()
console.log(numbers)//delete the last element of the array

numbers[3]=89;
console.log(numbers)//updates the numbers which we want through index number


for(let i=0;i<=2;i++){
    numbers.pop();
}
console.log(numbers)//delete multiple numbers from an array

