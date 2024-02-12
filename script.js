const buttonHeight = 50;
const buttonWidth = 150;

const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;

window.addEventListener('DOMContentLoaded', () => {
    const no_button = document.getElementById('no_button');
    const yes_button = document.getElementById('yes_button'); 

    no_button.addEventListener('click', ()=> alert('You clicked me'));
    no_button.addEventListener('mouseover', () => {
        no_button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
        no_button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
    })

    yes_button.addEventListener('click', ()=>{
        window.open('date.html', '_self');
    })

});

