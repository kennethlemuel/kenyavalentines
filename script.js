const buttonHeight = 50;
const buttonWidth = 150;

const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;

window.addEventListener('DOMContentLoaded', () => {
    const no_button = document.getElementById('no_button');
    const yes_button = document.getElementById('yes_button'); 

    no_button.addEventListener('mouseover', () => {
        const newLeft = Math.floor(Math.random() * (maxWidth + 1));
        const newTop = Math.floor(Math.random() * (maxHeight + 1));
        no_button.style.left = Math.min(newLeft, maxWidth) + 'px';
        no_button.style.top = Math.min(newTop, maxHeight) + 'px';
    })

    yes_button.addEventListener('click', ()=>{
        window.open('yes.html', '_self');
    })


});