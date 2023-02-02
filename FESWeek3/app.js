// console.log('Hello World'[10])

// let str= 'David'
// console.log(str[str.length - 1])

// 19 % 2

// // console.log('123')

// let fullName = 'Nafi Osmani'
// let isRaining = 'true'

// let temperature = 20

// temperature = temperature + 2
// console.log(temperature)

// let celsius = 10;
// let fahrenheit = (celsius)*1.8 + 32;
// console.log(fahrenheit);

// let bool = '1' === 1
// console.log(bool)

// let subscribe = false
// let loggedIN = true

// if (subscribe === true) {
//     console.log('show the video')
// }

// else if (loggedIN === true)
//     console.log('tell the user to upgrade their subscription')

// else {
//     console.log('tell user to log into account')
// }

// let cash = 50
// let price = 40
// let difference = cash - price

// if (cash>price) {
//     console.log(`you paid extra - here's your ${difference} dollars change`)
// }

// else if (cash === price) {
//     console.log("you paid the exafct amount - have a nice day")
// }

// else {
//     console.log(`not enough money - you still owe ${difference* -1} dollars`)
// }

// let cash = 50
// let price = 40
// let isStoreOpen = false

// if (cash >= price && !isStoreOpen) {
//     console.log('print the reciept')
// }

// let hot = false

// hot ? console.log('weather is hot outside') : console.log('weather is cold')

// let subscribed = true
// let loggedIN = true

// let str = subscribed || loggedIn ? 'show the video' : 'hide the video'
// console.log(str);

// let cash = 50
// let price = 40
// let isStoreOpen = true

// let str = (cash>=price) && isStoreOpen ? 'give receipt' : 'do not give receipt'
// console.log(str)

//WHILE LOOP
// let count = 1;

// while (count<=100) {
//     console.log(count);
//     count += 1;

// }

// DRY dont repeat yourself

// for (let i = 0; i<100; i = i+1) {
//     console.log(i+1)
// }

//FOR LOOP INTERVIEW
// for(let i = 1; i<=20; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(`${i} -> Frontend Simplified`)
//     }

//     else if (i % 5 == 0) {
//         console.log(`${i} -> Simplified`)
//     }

//     else if (i % 3 == 0) {
//         console.log(`${i} -> Frontend`)
//     }

//     else {
//         console.log(`${i} -> ${i}`)
//     }
// }

// const str = "Frontend Simplified"

// for (let i=0; i<str.length;i++) {
//     console.log(str[i])
// }

// //fucntion def
// function welcomePersonToFES(firstName, lastName) {
//     console.log(`Welcome to FES, ${firstName} ${lastName}`)
// }
// //call fn
// welcomePersonToFES('Nafi', 'Osmani');
// welcomePersonToFES('David', 'Bragg')

// function sumOfTwoNumbers(num1, num2) {
//     return num1 + num2
// }

// console.log(sumOfTwoNumbers(10, 10)); //a

// function convertCelsiusToFahrenheit(celsius) {
//     return fahrenheit = celsius*1.8 +32;
// }
// console.log(convertCelsiusToFahrenheit(10))

// const convertCelsiusToFahrenheit = (celsius) => {
//     return celsius * 1.8 + 32
// }

// console.log(convertCelsiusToFahrenheit(10))

// let arr = [20,30,40,50,100];
// //firstr element of array
// // console.log(arr[0]);
// // //last element of array
// // console.log(arr[4]);
// // //or
// // console.log(arr[arr.length-1]);

// // //add element onto end of array
// // arr.push(200)
// // console.log(arr)

// // [20, 30, 40]
// // let newArr= arr.filter(element => {
// //     return (element <50)
// // })

// let newArr= arr.filter(element => element <50)
// console.log(newArr)

// let grades = ['A+', 'A', 'FAIL']

// // let goodGrades = grades.filter(element => element != 'FAIL')

// // console.log(goodGrades)

// //create cope new empty arr
// let goodGrades = []

// for(let i = 0; i <grades.length-1; i++) {
//     if (grades[i] != 'FAIL'){
//         goodGrades.push(grades[i]);
//     }
//     //add current element onto goodGrades onli if
//     //current element is not equal to 'FAIL'
//     console.log(grades[i])
// }

// // console log 'goodGrades'

// let arr = [1,4,9,16]

// let newArray = arr.map(element => 'dog');

// console.log(newArray)

// let dollars = [1,5,10,3]

// // let cents = dollars.map(element => element *100)
// // create new cents array
// //loop over every element in dollars
// //multiply by 100
// //return
// let cents = []
// for (let i = 0; i< dollars.length; i++) {
//     cents.push(dollars[i]*100)
// }

// console.log(cents)

// let userFirstName = 'Nafi'
// let userLastName = 'Osmani'
// let userDiscordID = 'NafiOsmani#0001'
// let userSUbscriptionStatus = 'VIP'

// let users = [
//     {
//     username: 'Nafi',
//     email: 'nafiosmani@gmail.com',
//     password: 'test123',
//     subscriptionStatus: 'VIP',
//     discordID: 'Nafi Osmani#0001',
//     lessonsCompleted: [0, 1]

//     },
//     {
//     username: 'Mitir',
//     email: 'mitir@gmail.com',
//     password: 'mitir123',
//     subscriptionStatus: 'VIP',
//     discordID: 'Mitir#0001',
//     lessonsCompleted: [0, 1, 2, 3]

//     }
// ];

// function login(email, password) {
//     for (let i = 0; i<users.length; ++i) {
//         if (users[i].email === email) {
//             console.log(users[i]);
//             if (users[i].password === password) {
//                 console.log('log the user in - the details are correct')
//             }

//             else {
//                 console.log('password is incorrect - try again')
//             }

//             return;
//         }

//     }
//     console.log('could not find email that matches')

// }

// login('nafiosmani@gmail.com', 'wrong password');

// console.log(users[0].username[0]);

// console.log(users[0].subscriptionStatus);

// console.log(users[0].lessonsCompleted.map(elem => elem*2));

// function register(user) {
//     users.push(user);
// }

// register({
//   username: "zen",
//   email: "zen@frontendsimplified.com",
//   password: "zen123",
//   subscriptionStatus: "VIP",
//   discordID: "Zen#0002",
//   lessonsCompleted: [0, 1],
// });

// console.log(users);


// console.log(document.querySelector('#title'));
// console.log(document.querySelector('h1'));

// console.log(document.getElementById('title'))

//change html
// document.querySelector('#title').innerHTML += 'Frontend Simplified' 

// //cahnge css

// document.querySelector('#title').style.fontSize = '16px'

// function changeTitleToRed() {
//     document.querySelector('#title').style.color = 'red'
//     console.log('clicked');
// }

function toggleDarkMode() {
    document.querySelector('body').classList.toggle("dark-theme")
}