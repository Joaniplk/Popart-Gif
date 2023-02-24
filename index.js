const Btn = document.querySelector('.btn');
const audio = document.getElementById('audio');
const Gif = document.querySelector('.wrapper');

Btn.addEventListener('click', (_) => {
     audio.play();
     Btn.style.display = "none"; 
     Gif.style.display = "block";
    });