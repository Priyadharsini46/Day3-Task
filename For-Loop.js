//1) For the given JSON iterate over all for loops (for, for in, for of, forEach)
//For:

// for loop will intial a value and execute a mentioned condition until the condition becomes false.
//Syntax:
//for ([initialExpression]; [conditionExpression]; [increment/decremnet Expression]){}

//Example:
 for(let i=0;i<10;i++)
{
    console.log("sample for loop ")
}

// Output:
// "sample for loop "
// "sample for loop "
// "sample for loop "
// "sample for loop "
// "sample for loop "
// "sample for loop "
// "sample for loop "
// "sample for loop "
// "sample for loop "
// "sample for loop "


//For in:
//for in statement helps to get the index value(will be a key in condition) from the object/array.
//syntax:
//for (key in object) {} 
  //Example:
const a=[1,2,3];
    for(let i in a)
    {
        console.log(i);
    }

 //   Output:"0"   "1"   "2"

//For of
//The for of statement helps to get a values of the iterable objects/array (including Array, Map, Set, arguments object and so on).
//Syntax:
//for (variable of object){}

const a=[1,2,3];
    for(let i of a)
    {
        console.log(i);
    }

//Output:1 2 3

//For Each
//For each is a function and it execute a given function for all the values in the array and it will not execute for the array element without values.

//Syntax:
//array.forEach(function(){}

//Example:

let a = [1,2,3,4,5,6,7,8,9];
a.forEach(function(a) {
    console.log(a);
});

//Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

