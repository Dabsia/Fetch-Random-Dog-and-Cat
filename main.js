let cat__image = document.querySelector('.cat__image');
let dog__image = document.querySelector('.dog__image');
let dog__btn = document.getElementById('dog__btn');
let cat__btn = document.getElementById('cat__btn');

dog__btn.addEventListener('click', getDog)
cat__btn.addEventListener('click', getCat)

function getDog() {
    fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(data => {
        dog__image.innerHTML =  `<img src = ${data.url}>`
    })
}
function getCat() {
    fetch('https://aws.random.cat/meow')
    .then(res => res.json())
    .then(data => {
        cat__image.innerHTML =  `<img src = ${data.file}>`
    })
}
