// 1-QISM

// 1-masala

// let number = 12;
// let array = [];

// for (let i = 1; i <= 12; i++) {
//     array.push(i)
// }

// console.log(array);

// 2-masala

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let toqArray = [];
// let juftArray = [];
// let sumArray = [];

// let tSum = 0;
// let jSum = 0;

// for (const iterator of array) {
//     if (iterator % 2 == 0) {
//         juftArray.push(iterator);
//     }
//     if (iterator % 2 == 1) {
//         toqArray.push(iterator);
//     }
// }

// for (const iterator of juftArray) {
//     jSum += iterator;
// }

// for (const iterator of toqArray) {
//     tSum += iterator;
// }

// sumArray.push(tSum);
// sumArray.push(jSum);

// console.log(sumArray);

// 3-masala

// let fArray = [1, 2, 3, 4, 5];
// let sArray = [6, 7 ,8, 9, 10];
// let sumArray = [];

// let fSum = 0;
// let sSum = 0;

// for (const iterator of fArray) {
//     fSum += iterator;
// }
// for (const iterator of sArray) {
//     sSum += iterator;
// }

// sumArray.push(fSum);
// sumArray.push(sSum);

// console.log(sumArray);

// 4-masala

// let array = [1, 2, 3, 4, 5];
// let newArray = [];

// for (let i = array.length - 1; i >= 0; i--) {
//     newArray.push(array[i])
// }

// console.log(newArray);

// 5-masala

// let array = [6, 2, 3, 4, 5];
// let res;

// let min = array[0];

// for (const iterator of array) {
//     if (min > iterator) {
//         min = iterator;
//     }
// }

// res = min ** 4;

// console.log(res);

// 2-QISM

// 1-masala

// let array = [6, 2, 3, 4, 5];
// let max = array[0];

// for (let i = 0; i < array.length; i++) {
//     if (max < array[i]) {
//         max = array[i];
//     }
// }
// let index = array.indexOf(max);

// array.splice(index, 1)

// let secMax = array[0];

// for (let i = 0; i < array.length; i++) {
//     if (secMax < array[i]) {
//         secMax = array[i];
//     }
// }
// console.log(secMax);

// 2-masala

// let numStrArray = [`lemon`, 12, `bmw`, 13, 23, `nissan`];

// let strLength = 0;

// for (const iterator of numStrArray) {
//     if (typeof iterator == 'string') {
//         strLength += iterator.length;
//     }
// }
// console.log(strLength);

// 3-masala

// let arr = [3, 7, 25, 13, 12, 5];
// let ind;

// for (let index = 0; index < arr.length; index++) {
//     if (arr[index] % 2 == 0) {
//         ind = arr[index + 1];
//     }
// }

// arr.splice(ind - 1, 1, ind);

// console.log(arr);

// 4-masala

// let arr = [3, 7, 25, 13, 12, 5];
// let newArr = [];

// for (const iterator of arr) {
//     if (iterator % 2 != 0) {
//         newArr.push(iterator)
//     }
// }

// console.log(newArr);

// 5-masala

// let arr = [3, 7, 25, 13, 12, 5];

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = i;
// }

// console.log(arr);

// 6-masala

// let array = [3, 7, 25, 13, 12, 5];
// let newArray = [];

// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 3 != 0) {
//         newArray.push(array[i])
//     }
// }

// console.log(newArray);

// 7-masala

// let array = [3, 7, 25, 13, 12, 5];
// let newArray = [];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//     newArray.push(sum / array[i]);
// }

// console.log(newArray);

// 8-masala

// let array = [3, 7, 25, 13, 12, 5];
// let newArray = [array[0]];

// for (let i = 1; i < array.length; i++) {
//     newArray.push(array[i - 1])
// }

// console.log(newArray);

// 9-masala

// let array = [3, 7, -2, -3, -4, -5, 25, 13, 12, 5];
// let newArray = [];

// for (let i = 0; i < array.length; i++) {
//     if (array[i] >= 0) {
//         newArray.push(array[i]);
//     }
// }

// console.log(newArray);

// 10-masala

// let array = [3, 7, -2, -3, -4, -5, 25, 13, 12, 5];
// let sum = 0;

// for (const iterator of array) {
//     if (iterator < 0) {
//         sum += iterator;
//     }
// }

// console.log(sum);

// 11-masala

// let array = [`olma`, `bmw`, `nissan`];
// let newArray = [];
// let toCapitalize;

// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < i.length; j++) {
//         toCapitalize = i[0].toUppercase() + i[j];
//         newArray.push(toCapitalize);
//     }
// }

// console.log(newArray);

// 12-masala

// let array = [3, 7, -2, -3, -4, -5, 25, 13, 12, 5];
// let sum = 0;

// for (const iterator of array) {
//     if (iterator > 0) {
//         sum += iterator;
//     }
// }

// console.log(sum);

// 13-masala

let strArray = [`olma`, `banan`, `bmw`];
let max = strArray[0].length;
let min = strArray[0].length;

for (const iterator of strArray) {
    if (max < iterator.length) {
        max = iterator;
    }
    if (min > iterator.length) {
        min = iterator;
    }
}

console.log(max);
console.log(min);