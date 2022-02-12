let input = document.getElementById('input');
let result = document.getElementById('result')
let select1 = document.getElementById('select1');
let select2 = document.getElementById('select2');
let reverse = document.getElementById('reverse');

// CURRENCY API

input.addEventListener('input', () => {
    getResults();
})

select1.addEventListener('change', () => {
    getResults();
})

select2.addEventListener('change', () => {
    getResults();
})

function getResults() {
    fetch(`https://api.exchangerate-api.com/v4/latest/${select1.value}`).then(currency => {
        return currency.json();
    }).then(displayResults);
}


function displayResults(currency) {
    result.innerText = (input.value * currency.rates[`${select2.value}`]).toFixed(2);
}

reverse.addEventListener('click', () => {
    let a = select1.value;
    let b = select2.value;
    select1.value = b;
    select2.value = a;
    getResults();
})

