'use strict'

///[Задание]Переберите ['Капуста', 'Репа', 'Редиска', 'Морковка'] и верните элементы, длина которых составляет больше или равно 7.

// let arr =  ['Капуста', 'Репа', 'Редиска', 'Морковка']
//
// arr = arr.filter((el) => {
//     return el.length >= 7
// })
// console.log(arr)

//[Задание]Дан массив с числами. Оставьте в нем только положительные числа.

// const arr = [1,2,3,4,5,6,7]
//
// const arr2 = arr.map((i)=>{
//     return i+7
// })
// console.log(arr2)

//[Задание]Пусть у вас есть массив с названиями месяцев. С помощью циклов  for-of, for, foreach
// выведите на экран все месяцы из массива. Должно быть 3 варианта решения.

let arr = ['Январь,Февраль,Март,Апрель,Май,Июнь,Июль,Август,Сентябрь,Октябрь,Ноябрь,Ноябрь,Декабрь']
//
// for(let elem of arr){
//     console.log(elem)
// }

// for (let m = 0; m<arr.length; m++){
//     console.log(arr[m])
// }

// let sum = 0
// arr.forEach(function(elem) {
//     sum += elem;
// });
// console.log(sum);

//[Задание]Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.

// let arr = ['bear','main','king'];
// let result = arr.map(function (elem){
//     return elem +'!'
// })
// console.log(result)

// month.forEach((item) =>{
//     console.log({item})
// })
//
// for (let item of month) console.log(${item})

// const arr = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Ноябрь','Декабрь']
//
// for (let index = 0; index <arr.length; index++){
//   if (index === 'Апрель' || index === 'Август') continue;
//     console.log()
// }
