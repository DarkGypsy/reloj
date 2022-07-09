const dark = document.getElementById('dark'), 
body = document.querySelector('body'),
text = document.getElementById('contenedor-reloj'),
btn = document.querySelector('button'), 
btn2 = document.getElementById('alarma-btn');

dark.addEventListener('click', e => {
    body.classList.toggle('dark');
    text.classList.toggle('dark');
    btn.classList.toggle('dark');
    btn2.classList.toggle('dark');
})