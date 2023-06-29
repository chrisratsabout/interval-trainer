const playBtn = document.querySelector(".play-btn");
const answerBtn = document.querySelector(".answer-btn");
const answerText = document.querySelector(".answer-box");
const leftNote = document.querySelector(".left-note");
const rightNote = document.querySelector(".right-note");
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");
const legend = document.querySelector(".legend");


const secondNoteOptions = ['c2', 'c-sharp-2', 'd2', 'd-sharp-2', 'e2', 'f2', 'f-sharp-2', 'g2', 'g-sharp-2', 'a2', 'a-sharp-2', 'b2', 'c3'];

let firstNote = 'c2';
let secondNote = null;

answerBtn.disabled = true;

playBtn.addEventListener("click", function () {
    answerText.innerHTML = "Interval";

    let randomSecondNote = Math.floor(Math.random() * secondNoteOptions.length)
    secondNote = randomSecondNote;


    const firstNoteAudio = document.getElementById('c2');
    firstNoteAudio.currentTime = 0;
    firstNoteAudio.play();
    leftNote.style.background = "yellow";
    setTimeout(()=> {
        leftNote.style.background = "black";  
    }, 700)
    


    setTimeout(() => {
        const secondNoteAudio = document.getElementById(secondNoteOptions[randomSecondNote]);
        secondNoteAudio.currentTime = 0;
        secondNoteAudio.play();
        rightNote.style.background = "yellow";
    }, 1700);
    setTimeout(()=> {
        rightNote.style.background = "black";  
    }, 2400)

    setTimeout(() => {
        answerBtn.disabled = false;
    }, 3000)

    playBtn.disabled = true;
})

answerBtn.addEventListener("click", function () {
    answerBtn.disabled = true;
    playBtn.disabled = false;
    switch (secondNote) {
        case 0:
            answerText.innerHTML = "P1";
            break;
        case 1:
            answerText.innerHTML = "m2";
            break;
        case 2:
            answerText.innerHTML = "M2";
            break;
        case 3:
            answerText.innerHTML = "m3";
            break;
        case 4:
            answerText.innerHTML = "M3";
            break;
        case 5:
            answerText.innerHTML = "P4";
            break;
        case 6:
            answerText.innerHTML = "Tritone";
            break;
        case 7:
            answerText.innerHTML = "P5";
            break;
        case 8:
            answerText.innerHTML = "m6";
            break;
        case 9:
            answerText.innerHTML = "M6";
            break;
        case 10:
            answerText.innerHTML = "m7";
            break;
        case 11:
            answerText.innerHTML = "M7";
            break;
        case 12:
            answerText.innerHTML = "P8";
            break;
    }
})

closeBtn.addEventListener("click", function(){
    modal.classList.toggle("active")
})

legend.addEventListener("click", function(){
    modal.classList.toggle("active")
})