alert('hello')

const h1 = document.getElementById('main-title')

h1.style.color = 'white';
h1.textContent = "this is the first change";
h1.style.fontSize = '20px';

const li = document.querySelectorAll('li')

for (const listItemsEl of listItemElement) {
    console.dir(listItemsEl)
}
