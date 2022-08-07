// let str = "fTGFh";
// console.log(str.toLowerCase());
// str = str.toLowerCase();
// console.log(str);

// const value = true;
// console.log(isNaN(value));
// const insample = Number(true);
// console.log(insample);

// Цикл for

// потрібно  порахувати за скільки днів Равлик зможе виповзти з колодязя
// в день Равлик проповзає на 7 м в гору, а за ніч опускається на 2 м в низ

// 42 м, виповзе за 8 днів
// 17 м, виповзе за 3 дні
// 18 м, виповзе за 4 дні

// Алгоритм дій:
// 1.Створити змінні (день/ніч/глибина колодязя/к-ть днів шляху/скільки вже пройшов равлик)
// 2.Створити цикл while
// 3.Умова while виконується до тих пір поки шлях >=глибина колодязя
// 4.Треба зробити перевірку скільки шляху вже пройдено (path += daySpeed) (days +=1) if (depth > path)
// {path -= higthSpeed}

// const daySpeed = 7;
// const nigthSpeed = 2;
// const depth = 18;
// let days = 0;
// let path = 0;

// while (depth > path) {
//   path += daySpeed;
//   days += 1;

//   if (depth > path) {
//     path -= nigthSpeed;
//     continue;
//   }
//   break;
// }
// console.log(days);

// const students = "Vadim, Svitlana, Olesia, Ruslan";
// треба зробити так щоб кожне слово було окремо в консоль лог без коми

// алгоритм дій
// const students = "Vadim, Svitlana, Olesia, Ruslan";
// let position = 0;

// for (let i = 0; i < students.length; i += 1) {
//   if (students[i] === "," || students.length - 1 === i) {
//     console.log(
//       students.slice(position, students.length - 1 === i ? students.length : i)
//     );
//     position = i + 2;
//   }
// }

// Функції

// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// // console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));
// // console.log(addOverNum(15, "boo", 6, true, 19, 8));

// // // створити функцію яка буде здатна прийняти різну к-ть аргументів перевірити
// // // чи вони являються числовим значенням і ті які являються числовими значеннями просумувати їх.
// // // Функція повинна поернути сумму моїх чисел

// // // Алгоритм
// // // 1) Створити функцію з псевломасивом arguments
// // 2) перетворити псевдомасив в масив
// // // 3) зробити перебір через for of
// // // 4) Зробити перевірку на числа через typeof
// // // 5) Створити перемінну в якій буде сумма чисел
// // // 6) return перемінна

// function addOverNum() {
//   // console.log(arguments);
//   const arr = Array.from(arguments);
//   // console.log(arr);

//   let sum = 0;

//   for (let el of arr) {
//     if (typeof el === "number") {
//       sum += el;
//     }
//   }
//   return sum;
// }
