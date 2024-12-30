

const jokeButton = document.querySelector('button');
const jokeContainer = document.querySelector('#joke-container');
var setupElement = document.querySelector('#joke-setup');
var punchlineElement = document.querySelector('#joke-punchline');

let apiURL = "https://official-joke-api.appspot.com/random_joke";

function fetchJoke(apiURL) {
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const setup = data.setup;
            const punchline = data.punchline;

            setupElement.innerText = setup;
            punchlineElement.innerText = punchline;
        })
        .catch(error => {
            console.error('Error fetching joke:' + error);
            setupElement.innerText = "Please check your internet connection";
    });
}

// anonymous function version of an event listener
jokeButton.addEventListener('click', event => {
    fetchJoke(apiURL);
});
