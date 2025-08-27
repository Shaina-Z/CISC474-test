const buttonContainer=document.getElementById('buttonContainer');
const catContainer=document.getElementById('catContainer');
let button = document.createElement("button");
button.textContent="CLICK THE BUTTON";
buttonContainer.appendChild(button);
button.addEventListener('click', () => {
        let cat=document.createElement('img')
        cat.src = 'cat.jpeg'
        catContainer.appendChild(cat);
    })