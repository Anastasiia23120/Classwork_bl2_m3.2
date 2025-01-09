/*
 * task 1
 */
// const getRectArea = function (dimensions) {
//   const sidesArr = dimensions.split(' ');

//   console.log(dimensions);
//   console.log(sidesArr);

//   return Number(sidesArr[0]) * Number(sidesArr[1]);
// };

// console.log(getRectArea('8 11')); // 88
// console.log(getRectArea('18 11')); // 198
// console.log(getRectArea('8 21')); // 168

/*
 * task 2
 */

// const checkCaseOfLetter = function (letter) {
//   return letter.toLowerCase() === letter ? 'lower case' : 'upper case';
// };

// console.log(checkCaseOfLetter('a')); // 'lower case'
// console.log(checkCaseOfLetter('A')); // 'upper case'

/*
 * task 3
 */

// const changeCaseOfLetters = function (str) {
//   let result = '';

//   console.log(str);

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toLowerCase()) {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i].toLowerCase();
//     }
//   }
//   return result;
// };

// console.log(changeCaseOfLetters('AbCdE')); // aBcDe
// console.log(changeCaseOfLetters('abc')); // ABC
// console.log(changeCaseOfLetters('CBA')); // cba

/*
 * task 4
 */

// const logItems = function (items) {
//   console.log(items);
//   for (let i = 0; i < items.length; i++) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// };

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/*
 * task 5
 */

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
// console.log(courses);

// const addCourse = function (courseName) {
//   if (courses.includes(courseName)) {
//     console.log(`У вас вже є курс ${courseName}!`);
//   } else {
//     courses.push(courseName);
//   }
// };

// const removeCourse = function (courseName) {
//   const idxOfCourse = courses.indexOf(courseName);

//   if (idxOfCourse === -1) {
//     return console.log(`Курс ${courseName} не знайдено!`);
//   }
//   courses.splice(idxOfCourse, 1);
// };

// const updateCourse = function (oldCourseName, newCourseName) {
//   const indexOfCourse = courses.indexOf(oldCourseName);

//   courses.splice(indexOfCourse, 1, newCourseName);
//   //   courses.splice(indexOfCourse, 0, newCourseName);
// };

// addCourse('Express');
// console.log(courses);
// addCourse('CSS');

// removeCourse('React');
// console.log(courses);
// removeCourse('React');
// console.log(courses);

// updateCourse('HTML', 'NestJS');
// console.log(courses);
