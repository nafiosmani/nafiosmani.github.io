// Given a rating from 1-5 stars, including half stars, return a (*) for each full star, and a (-) for each half star.

function starRating(rating) {
    let stars = '';
    for (let i = 0; i< Math.floor(rating); i++) {
        stars += '*';
        if(i !== Math.floor(rating)-1) {
            stars += ' '; 
        }
    }

    if (!Number.isInteger(rating)) {
        stars += ' .';
    }
    return stars;
}

console.log(starRating(3.5))


// initialize an empty string, loop through the rounded down rating, add a star to the string, if its not the last iteration, add a space, if the rating is not an integer, add a period, return the string.


function showRating(rating) {
    let stars = '';
    for (let i = 0; i < Math.floor(rating); i++) {
        stars += '*';
        if (i !== Math.floor(rating) - 1) {
            stars += ' ';
        }
    }
    if (!Number.isInteger(rating)) {
        stars += ' .';
    }
    return stars;
}

console.log(showRating(3.5))

// Given an array of numbers, return the prices sorted by low to high.

// function sortPrices(arr) {
//     let sorted = arr.sort((a, b) => a - b);
//     return sorted;
// }

// console.log(sortPrices([4, 2, 5, 1, 3]))
// console.log(sortPrices([20, 10, 40, 30, 50]))
// console.log(sortPrices([2, 23, 5, 54, 86, 8, 27, 19, 11, 1]))


//Given an array of objects, return the prices sorted by high to low

function sortPrices(arr) {
    let sorted = arr.sort((a, b) => b.price - a.price);
    return sorted;
}

console.log(sortPrices([
    { name: 'Sweater', price: 45 },
    { name: 'Jeans', price: 100 },
    { name: 'Hat', price: 25 },]))

    // Call this API 'https://jsonplaceholder.typicode.com/posts' and return all the posts by any given user id.

    function getPostsByUserId(userId) {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                let posts = data.filter(post => post.userId === userId);
                console.log(posts);
            })
    }

getPostsByUserId(4)


// Call this API 'https://jsonplaceholder.typicode.com/posts' and return all the posts by any given user id using await and async.

async function getPostsByUserId(userId) {
    let promise = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await promise.json();
    let posts = data.filter(post => post.userId === userId);
    console.log(posts);
}

getPostsByUserId(4)

// Call this API 'https://jsonplaceholder.typicode.com/todos' and return the firts 6 incomplete todo's from the results. 

async function getIncompleteTodos() {
    let promise = await fetch('https://jsonplaceholder.typicode.com/todos');
    let data = await promise.json();
    let todos = data.filter(todo => !todo.completed).slice(0, 6);
    console.log(todos);
}

getIncompleteTodos(6)