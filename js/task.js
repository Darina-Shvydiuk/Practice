// 1) Напишіть функцію, яка заповнює новий масив заданим значенням.
// fill(3, "a");
// ['a', 'a', 'a']
// fill(5, "b");
// // ['b', 'b', 'b', 'b', 'b']

// Алгоритм
// 1) Створити ф-ю с псевдомасивом
// 2) Перетворити псевдомасив в масив
// 3)Створити перемінну з новим пустим масивом, в якій будуть значення
// 4)зробити перебір через for of
// 5)ретурн масів с значенням

// function fill() {
//   const arr = Array.from(arguments);
//   const result = [];

//   let element = 0;

//   for (let element of result) {
//     if (element.toString) {
//       result.push(element);
//     }
//   }
//   return result;
// }
// console.log(fill(5, "b")); -- доробити

// 2) Створити функцію яка буде порівнювати 2 масива,
// якщо вони однакові то повертати true, якщо ні то false

// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 4];
// const arr3 = [1, 2, 3, 5];
// const arr4 = [1, 2, 3, 4, 5];
// console.log(isEqual(arr1, arr2)); // true
// console.log(isEqual(arr1, arr3)); // false
// console.log(isEqual(arr1, arr4)); // false

// 3) Створити метод об"єкта який примаэ 1 параметр - назву факультету
// й рахувати загальну к - ть очок на факультеті

// const hogvarts = {
//   griffindor: [
//     {
//       name: "Harry",
//       points: 15,
//     },
//     {
//       name: "Hermiona",
//       points: 16,
//     },
//     {
//       name: "Ron",
//       points: 14,
//     },
//   ],
//   sliserin: [
//     {
//       name: "Draco",
//       points: 25,
//     },
//     {
//       name: "Goyl",
//       points: 40,
//     },
//     {
//       name: "Crabbe",
//       points: 5,
//     },
//   ],

// };

// 4) const friends = [{ name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//     { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
//     { name: "Alice", books: ["War and peace", "Romeo and Juliet"]},
//     { name: "Oleksii", books: ["Bible","War and peace","Harry Potter",  "Romeo and Juliet"], age: 26},
// ]
// Потрібно створити ф-ю і порахувати вік всіх юзерів

//Завдання2 до 4го завдання: // Потрібно створити функцію яка буде приймати 2 параметри
// 1 параметр масив
// 2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є ця книга ("Harry Potter") \\\ "Anna, Oleksii"

// 5) // Створити функцію яка приймає 1 параметр і повертає мутований масив
// Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати
// а ті обє'кти в яких айді співпав видалити з масиву.
// (Потрібно мутувати даний масив, створювати новий не потрібно)

// const products = [{
//     id: 'sku1',
//     qty: 1,
// }, {
//     id: 'sku2',
//     qty: 2,
// }, {
//     id: 'sku3',
//     qty: 3,
// }, {
//     id: 'sku1',
//     qty: 6,
// }, {
//     id: 'sku1',
//     qty: 8,
// }, {
//     id: 'sku2',
//     qty: 19,
// }, {
//     id: 'sku4',
//     qty: 1,
// }]

// 6)// Створити функцію яка буде повертати обєкт
//  {
// a:5
// s:7
// }

// const str = 'sasftsaddghfuaaasdda'

// 7)Потрібно створити функцію яка буде шукати нарциса.
// Головна умова нарциса знають всі, нарцис не знає нікого.
//not found
// const people1 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: ['Ivan']
//     },
//     {
//         name: 'Eva',
//         know: ['Jhon', 'Ivan']
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
// ];
// перевірки:
// //Not found
// const people2 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: []
//     },
//     {
//         name: 'Eva',
//         know: []
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
// ];
// от tutor_5 goit для Все (16:51)
// // jhon
// const people3 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: []
//     },
//     {
//         name: 'Eva',
//         know: ['Alex', 'Jhon']
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
// ];

// //Not found
// const people4 = [{
//     name: 'Alex',
//     know: ['Eva', 'Jhon'],
// },
// {
//     name: 'Jhon',
//     know: []
// },
// {
//     name: 'Eva',
//     know: ['Alex']
// },
// {
//     name: 'Ivan',
//     know: ['Jhon', 'Alex']
// },
// ];

// 8)потрібно створити функцію я буде формувати чергу в магазині
// 1 перший параметр масив, кілікість елементів це кількість покіпців, значення елементу масиву це час який покупець витратить на касі
// 2 параметр це кількість кас
// Повертає обєкт де ключ це номер касси, значення це час черги на касі
// 12 + 2 + 15 = 29
// 3 + 5 + 6 + 7 = 21
// turn([12,3,5,6,2,15,7],2);
// { 1 : 29, 2 : 21}

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const item of this.potions) {
//       if (item.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     const newProduct = {
//       ...newPotion,
//     };

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];
//       if (potionName === potion.name) {
//         this.potions.splice(i, 1);
//       }
//     }
//   },
//   updatePotionName(oldName, newName) {
//     let result = `Potion ${oldName} is not in inventory`;
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];

//       if (oldName === potion.name) {
//         potion.name = newName;
//         result = `Found ${oldName} change to ${newName} `;
//       }
//     }
//   },
//   // Change code above this line
// };

// 1 завдання
// // 1 Створити функцію яка робить перевірку чи в меседжі присутні спам слова "sale" , "free".
//Якщо в меседжі присутні спам слова повертаємо true, якщо ні то false.
// const message = 'Attention, we have a Sale'; //true
// const message1 = 'Hello have a nice day'; //false
// const message2 = 'You won free shipping'; //true
// const message3 = 'What are you doing'; //false

// 2 завдання
// 2 Замінити всі розширення файлів з .css на .js
// const files = ['index.css', 'script.js', 'style.css', 'step-types.json', 'firebase.css'];

//
// 3 Мутувати стрінгу так щоб залишились тільки унікальні значення
// const str = 'a13aabnff1';

// Модуль 4
// Створити функцію яка приймає 2 параметри обєкт юзерів, та колбек функцію
// (колбек) функція приймає масив обєктів (кожен обєкт це окремий юзер),
// та виводить в консолі імя та вік кожного юзера
//  'Name David, age 25'

// const users = {
//   user: {
//     name: "David",
//     age: 25,
//   },
//   user1: {
//     name: "Denis",
//     age: 30,
//   },
//   user3: {
//     name: "Kate",
//     age: 18,
//   },
//   user4: {
//     name: "Dima",
//     age: 40,
//   },
//   user5: {
//     name: "Kris",
//     age: 22,
//   },
// };

// завдання №2
// Створити функцію яка приймає марку авто і колбек функцію для пошуку авто,
// функція повертає в консоль кількість знайдених авто, марку авто, модель і вартість авто
// Кількість знайдених автомобілів 2:
// 1. Honda Accord, ціна 20000
// 2. Honda Civic, ціна 12000
// Колбек функцію приймає марку авто в обєкті cars, повертає масив айдішніків

// const cars = {
//     id1: {
//         car: 'Honda',
//         type: 'Civic',
//         price: 12000
//     },
//     id2: {
//         car: 'Audi',
//         type: 'Q7',
//         price: 40000,
//     },
//     id3: {
//         car: 'BMW',
//         type: '5 siries',
//         price: null,
//     },
//     id4: {
//         car: 'Honda',
//         type: 'Accord',
//         price: 20000,
//     },
//     id5: {
//         car: 'Volvo',
//         type: 'XC60',
//         price: 7000,
//     }
// }
// задача зі співбесіди
// // {a:2,f:5,c:4,s:3}

// const str = 'aafffffccccsss'
// Функція повератає обєкт де ключ це елемент стрінги а значення кількіть раз яку він дублюється

// завдання №2 с 4го модуля(2е заняття)
// / Потрібно сформувати стрінгу на основі масиву за допомогою методу reduce
// const clients = ["Mango", "Poly", "Ajax"];
// В нас є 3 клієнти:
// 1 клієнт Mango
// 2 клієнт Poly
// 3 клієнт Ajax

// завдання№3 с 4го модуля
// // Потрібно створити функцію яка буде приймати 2 параметри(значення з промпту)
// 1 промпт значення від якої суми робити пошук
// 2 промпт значення до якої суми робити пошук
// Повертає список автомобілів які підпадають під наш пошук

// / 1 промпт = 6000
// 2 промпт = 12000
// Ми знайшли 3 авто
// 1. Volvo XC60 ціна 7000
// 2. BMW 5 siries ціна 9000
// 3. Honda Civic 12000

// const cars = [
//   {
//     car: "Honda",
//     type: "Civic",
//     price: 12000,
//   },
//   {
//     car: "Audi",
//     type: "Q7",
//     price: 40000,
//   },
//   {
//     car: "BMW",
//     type: "5 siries",
//     price: 9000,
//   },
//   {
//     car: "Honda",
//     type: "Accord",
//     price: 20000,
//   },
//   {
//     car: "Volvo",
//     type: "XC60",
//     price: 7000,
//   },
// ];

// модуль№6
// Зробити так щоб при нажиманні на кнопку квадрат рухався :

// const button = document.querySelector(".button");
// console.log(button);
// const box = document.querySelector(".inner");
// console.log(box);
// button.addEventListener("click", handlerTargetButton);
// let step = 5;

// function handlerTargetButton() {
//   step *= 2;
//   box.style.marginLeft = step + "px";
//   console.log(box.style.marginLeft);
// }

// Зробити так щоб при наведенні мишки на квадрат він рухався :
// const button = document.querySelector(".button");
// console.log(button);
// const box = document.querySelector(".inner");
// console.log(box);
// box.addEventListener("focus", handlerTargetButton);
// // let step = 5;

// function handlerTargetButton() {
//   console.log("event");
// }
// не всі event потрібно прослуховувати за допомогою js
