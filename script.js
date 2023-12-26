/*const typing_ground = document.querySelector(selectors:'#textarea');
const btn = document.querySelector(selectors:'#btn');
const score = document.querySelector(selectors:'#score');
const show_sentence = document.querySelector(selectors:'#showSentence');

//step 2

const startTypingTest = ()=>{
    var sentence = 'The quick brown fox jumps over the lazy dog.';
    show_sentence.innerHTML = sentence;
    
    let date = new Date();
    startTime = date.getTime();

    btn.innerText = "done";
}


//step 3
let startTime ,endTime ,totalTimeTaken ;
btn.addEventListener(type:'click',listener:()=>{
    switch(btn.innerText.toLowerCase()){
        case "start":
            typing_ground.removeAttribute(qualifiedName:'disabled');
            startTypingTest();
            break;
        case "done":
            typing_ground.setAttribute(qualifiedName:'disabled' , value:'true');
            endTypingTest();
            break;
    }
})*/
let startTime, endTime, totalTimeTaken;
const typing_ground = document.querySelector('#textarea');
const btn = document.querySelector('#btn');
const score = document.querySelector('#score');
const show_sentence = document.querySelector('#showSentence');

// Step 2
const startTypingTest = () => {
    var sentence = 'The quick brown fox jumps over the lazy dog.';
    show_sentence.innerHTML = sentence;
    
    let date = new Date();
    startTime = date.getTime();

    btn.innerText = "done";
};

// Step 3
const endTypingTest = () => {
    let date = new Date();
    endTime = date.getTime();
    totalTimeTaken = (endTime - startTime) / 1000; // in seconds

    // Add any additional logic for scoring or displaying results
    score.innerHTML = `Time taken: ${totalTimeTaken} seconds`;
    calculateTypingSpeed(totalTimeTaken);

    show_sentence.innerHTML = "";
    typing_ground.value = "";
};
const calculateTypingSpeed = (totalTimeTaken) => {
    let totalWords = typing_ground.value;
    let actualWords = totalWords.split(" ").length;

    if (actualWords > 0 && totalTimeTaken > 0) {
        let typing_speed = (actualWords / totalTimeTaken) * 60; // words per minute
        score.innerHTML = `Your typing speed is ${typing_speed.toFixed(2)} words per minute, and you wrote ${actualWords} words.`;
    } else {
        score.innerHTML = "Unable to calculate typing speed.";
    }
};

/*const calculateTypingSpeed = (time_taken)=>{
    let totalWords = typing_ground.value;
    let actualWords = totalWords.split(seperator:" ").length;

    if(actualWords === 0){
        let typing_speed = (actualWords/time_taken)*60;
        score.innerHTML = `Your typing speed is ${typing_speed} words per minute  and you wrote ${actualWords} words.`
    }
}*/

btn.addEventListener('click', () => {
    switch (btn.innerText.toLowerCase()) {
        case "start":
            typing_ground.removeAttribute('disabled');
            startTypingTest();
            break;
        case "done":
            typing_ground.setAttribute('disabled', 'true');
            endTypingTest();
            break;
    }
});

