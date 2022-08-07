// // Порахувати скільки ззаробив кожен  юзер
// (функція приймає 2 параметри
// 1 параметр масив
// 2 параметр  імя робітника
// Функція повертає скільки він заробив (salary*month) )

// Алгоритм:
// Створити ф-ю getSalary(arr,name)
// Зробити перебір через for of де ми будем шукати обьект нашого юзера(name)
// після того як ми знайшли юзера ми повинні потягти salary і помножити на month і повернути результат
// Ф-я повертає  (salary*month)

// const workers = [
//   {
//     name: "Alex",
//     salary: 3500,
//     month: 12,
//   },
//   {
//     name: "Dima",
//     salary: 2500,
//     month: 9,
//   },
//   {
//     name: "Oleg",
//     salary: 1500,
//     month: 36,
//   },
// ];

// function getSalary(arr, name) {
//   // let user = {}
//   for (let user of arr) {
//     // console.log(user);
//     if (user.name === name) {
//       return user.salary * user.month;
//     }
//   }
// }
// console.log(getSalary(workers, "Alex"));

// Завдання-2:
// Порахувати загальну суму заробітку всіх робітників()
// (функція приймає 1 параметр масив, і повертає загалну суму заробітку всіх робітників);

// function getSalary(arr) {
//   let totalSalary = 0;
//   for (let user of arr) {
//     // console.log(user);
//     totalSalary += user.salary * user.month;
//   }
//   return totalSalary;
// }
// console.log(getSalary(workers));

// Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат,
//  де ім'я властивості - це ім'я співробітника, а значення властивості - це зарплата.
// Функція повинна розрахувати загальну суму зарплат співробітників і повернути її.
// Використовуй змінну totalSalary для зберігання загальної суми зарплати.

// Оголошена функція countTotalSalary(salaries)
// Виклик countTotalSalary({}) повертає 0
// Виклик countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) повертає 330
// Виклик countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) повертає 400
// Функція враховує тільки власні властивості об'єкта

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);
//   for (const value in values) {
//     if (values.hasOwnProperty(value)) {
//       totalSalary += values;
//     }
//   }
//   console.log(values);
//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);
//   for (let value of values) {
//     totalSalary += value;
//   }
//   console.log(values);
//   // Change code above this line
//   return totalSalary;
// }

// Потрібно створити 4 методи об'єкту
// 1 виводить суму на карті (назву вводимо в prompt())
// 2 додає нову карту (назву вводимо в prompt())
// 3 зняти з карти (назву вводимо в prompt() та суму в prompt())
// 4 додати на карту (назву вводимо в prompt() та суму в prompt())

// const bankSystem = {
//   name: "*",
//   privat: 1000,
//   mono: 1500,
//   getBalance(cardName) {
//     if (!cardName) {
//       console.log("Значення було введено не коректно");
//       return;
//     }

//     const keys = Object.keys(this);
//     const hasCard = keys.includes(cardName);
//     const isCard = cardName === "name";
//     if (!hasCard || isCard) {
//       console.log("такої карти немає");
//     } else {
//       console.log(this[cardName]);
//     }
//   },
//   addCard(cardName) {
//     const hasCard = this.hasCard(cardName);
//     if (hasCard || !cardName) {
//       console.log("Can not add this card");
//       return;
//     } else {
//       this[cardName] = 0;
//       console.log(this);
//     }
//   },
//   hasCard(cardName) {
//     const keys = Object.keys(this);
//     const hasCard = keys.includes(cardName);
//     return hasCard;
//   },
//   withdraw(cardName, amount) {
//     if (!this.hasCard(cardName)) {
//       console.log("Wrong Bank name");
//       return;
//     }
//     const amountTransform = Number(amount);
//     if (!amountTransform) {
//       console.log("Entered amount is not a number");
//       return;
//     }
//     if (amountTransform <= this[cardName]) {
//       this[cardName] -= amountTransform;
//       return this.getBalance(cardName);
//     }
//     return console.log("Your balance is not enaught");
//   },
//   addToCard(cardName, amount) {
//         if (!this.hasCard(cardName)) {
//             console.log('Нет такой карты');
//             return
//         }
//         const summ = Number(amount);
//         if (!summ) {
//             console.log('введена неправильная сумма');
//         } else {
//             this[cardName] += summ;
//             this.getBalance(cardName);
//         }
//     }
// };

// const cardName = prompt("Enter card name...");
// bankSystem.getBalance(cardName);

// const cardName = prompt("enter card name");
// bankSystem.addCard(cardName);

// const cardName = prompt("enter card name");
// const amount = prompt("enter amount to get");
// bankSystem.withdraw(cardName, amount);

// const amount = prompt("enter amount to add");
// bankSystem.addToCard(cardName, amount);

// Зробити промт
// перевірити на буль в промт
// перевірити чи є така карта в юзера
//

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   // Change code above this line

//   for (const product of products) {
//     console.log(products);
//     if (productName === product.name) {
//       return product.price;
//     }
//   }
//   return null;
// }
// console.log(getProductPrice("Radar"));

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     } else {
//       return onError(
//         `There is no pizza with a name ${pizzaName} in the assortment.`
//       );
//     }
//   },
// };
