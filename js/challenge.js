const counter = document.querySelector('#counter');
myCounter = setInterval(function(){
    counter.textContent++;
},1000);

const minus = document.querySelector('#minus');
minus.addEventListener('click', function(){
    counter.textContent--;
});

const plus = document.querySelector('#plus');
plus.addEventListener('click', function(){
    counter.textContent++;
});

const ulLikes = document.querySelector('.likes');
const heart = document.querySelector('#heart');
let cCount = 0;

const hearts = heart.addEventListener('click', function(){
    const liLikes = document.createElement('li');
    liLikes.textContent = `${counter.textContent} has been liked `
    ulLikes.appendChild(liLikes).textContent;
    
    const likes = document.createElement('span');
    
    likes.textContent = `${numberOfClicks.push(1)} times`;
    liLikes.appendChild(likes).textContent;
});

const pause = document.querySelector('#pause');
pause.addEventListener('click', function(){
    if (pause.innerText === "pause") {
        clearInterval(myCounter);
        pause.innerText = "resume";

        minus.disabled = true;
        plus.disabled = true; 
        heart.disabled = true;
        submit.disabled = true;
    } else {
        myCounter = setInterval(function(){
            counter.innerText++;
        }, 1000);
        pause.innerText = "pause";
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
    }
});

    const comment = document.getElementById("comment-input");
    const submit = document.getElementById("submit");
    const commentsArea = document.getElementById("list");

    submit.addEventListener("click", function(e) {
        e.preventDefault();
        const pComment = document.createElement("P");
        console.log(comment.value);
        pComment.innerText = comment.value;
        commentsArea.appendChild(pComment);
        comment.value = "";
    });
