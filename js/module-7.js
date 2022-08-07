// const btns = document.querySelectorAll(".btn");
// const div = document.querySelector(".inner");
// // console.log(btn);
// // Кожному елементу додавати свій слухач - це погана практика!!!!
// // btns.forEach((btn) => btn.addEventListener("click", handlerClickBtn));
// // function handlerClickBtn(event) {
// //   console.log(event);
// //   console.log(event.target.textContent);
// // }
// div.addEventListener("click", handlerClickBtn);
// function handlerClickBtn(event) {
//   console.log(event);
//   // В цьому прикладі ми знаходили елемент по тегу
//   // if (event.target.nodeName === "BUTTON") {
//   //   console.log(event.target.textContent);
//   // }

//   // В цьому прикладі ми знаходили елемент по класу
//   if (event.target.classList.contains("btn")) {
//     console.log(event.target.textContent);
//   }
//   // if (event.target.classList.contains("inner-2")) {
//   //   console.log(event.target.textContent);
//   // }
//   if (event.target.classList.contains("inner")) {
//     return;
//   }
//   console.log(event.target.textContent);
// }
