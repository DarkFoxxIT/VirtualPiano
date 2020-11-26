const notes = Array.from(document.querySelectorAll('.note'));


window.addEventListener("keydown", function (ev)
{
    const audio = document.querySelector(`audio[data-key='${ev.keyCode}']`);
    const key = document.querySelector(`div[data-key='${ev.keyCode}']`);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
    console.log(audio);
});
