const playBtn = document.querySelector(".play-btn");

const correctThumbsUp = document.querySelector(".correct");
const incorrectThumbsDown = document.querySelector(".incorrect");
const scoreText = document.querySelector(".score-text");
const leftNote = document.querySelector(".left-note");
const rightNote = document.querySelector(".right-note");

const optionBtns = document.querySelectorAll(".option-btn");

const secondNoteOptions = ['c2', 'c-sharp-2', 'd2', 'd-sharp-2', 'e2', 'f2', 'f-sharp-2', 'g2', 'g-sharp-2', 'a2', 'a-sharp-2', 'b2', 'c3'];

let firstNote = 'c2';
let secondNote = null;
let score = 0;

optionBtns.disabled = true;


playBtn.addEventListener("click", function () {
    correctThumbsUp.classList.remove("active");

    let randomSecondNote = Math.floor(Math.random() * secondNoteOptions.length)
    secondNote = randomSecondNote;


    const firstNoteAudio = document.getElementById('c2');
    firstNoteAudio.currentTime = 0;
    firstNoteAudio.play();
    leftNote.style.background = "rgb(210, 210, 210)";
    leftNote.style["box-shadow"] = "inset -10px -10px 15px 0 rgba(255, 255, 255, 0.5), inset 10px 10px 15px 0 rgba(70, 70, 70, 0.12)"
    setTimeout(()=> {
        leftNote.style.background = "#ececec";  
        leftNote.style["box-shadow"] = "-10px -10px 15px 0 rgba(255, 255, 255, 0.5), 10px 10px 15px 0 rgba(70, 70, 70, 0.12)"
    }, 700)
    


    setTimeout(() => {
        const secondNoteAudio = document.getElementById(secondNoteOptions[randomSecondNote]);
        secondNoteAudio.currentTime = 0;
        secondNoteAudio.play();
        rightNote.style.background = "rgb(210, 210, 210)";
        rightNote.style["box-shadow"] = "inset -10px -10px 15px 0 rgba(255, 255, 255, 0.5), inset 10px 10px 15px 0 rgba(70, 70, 70, 0.12)"
    }, 1700);

    setTimeout(()=> {
        rightNote.style.background = "#ececec";  
        rightNote.style["box-shadow"] = "-10px -10px 15px 0 rgba(255, 255, 255, 0.5), 10px 10px 15px 0 rgba(70, 70, 70, 0.12)"
    }, 2400);

    setTimeout(()=> {
        optionBtns.forEach(btn => {
            btn.disabled = false;
        })
    }, 300);
   

    playBtn.disabled = true;
  
})

optionBtns.forEach(btn => {
    btn.addEventListener("click", function(e){
        if(e.target.classList.contains(secondNote)){
            score++;
            playBtn.disabled = false;
            correctThumbsUp.classList.add("active");
            incorrectThumbsDown.classList.remove("active");
            scoreText.textContent = score;
            optionBtns.forEach(btn => {
                btn.disabled = true;
            })
        } else {
            incorrectThumbsDown.classList.add("active");
        }
    })
})


