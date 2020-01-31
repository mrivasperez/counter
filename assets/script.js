let counter = document.querySelector('.counter')
const addCount = document.querySelector('#addCountBtn')
const lowerCount = document.querySelector('#lowerCountBtn')

let count = 0;

addCount.addEventListener('click',incrementCounter)
lowerCount.addEventListener('click',decrementCounter)

function incrementCounter(){
    count++;
    counter.innerHTML = count;
    if(counter.innerHTML > '0'){
        counter.style.color = '#d1ebd1';
    } else if(counter.innerHTML < '0'){
        counter.style.color = '#ffd7d7'
    } else {
        counter.style.color = 'white'
    }
}

function decrementCounter(){
    count--;
    counter.innerHTML = count;
    if(counter.innerHTML > '0'){
        counter.style.color = '#d1ebd1';
    } else if(counter.innerHTML < '0'){
        counter.style.color = '#ffd7d7'
    } else {
        counter.style.color = 'white'
    }
}