/*==========================================================
        FRIENDSHIP.EXE
        SCRIPT 3A
==========================================================*/


/*=========================================
BOOT SCREEN
=========================================*/

window.addEventListener("load",function(){

    setTimeout(function(){

        document.getElementById("bootScreen").style.display="none";

        document.getElementById("hero").classList.add("show");

    },3500);

});


/*=========================================
CURSOR GLOW
=========================================*/

const glow=document.getElementById("cursorGlow");

document.addEventListener("mousemove",function(e){

    glow.style.left=e.clientX+"px";

    glow.style.top=e.clientY+"px";

});


/*=========================================
SECTION ANIMATION
=========================================*/

const observer=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.25

}

);

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});


/*=========================================
FLOATING EMOJIS
=========================================*/

const emojiContainer=document.getElementById("floatingEmojis");

const emojis=[

"😂",

"☕",

"🥟",

"💀",

"✈️",

"🎁",

"⭐",

"✨",

"❤️"

];

function createEmoji(){

const emoji=document.createElement("div");

emoji.className="floatEmoji";

emoji.innerHTML=

emojis[Math.floor(Math.random()*emojis.length)];

emoji.style.left=Math.random()*100+"vw";

emoji.style.fontSize=

(Math.random()*25+20)+"px";

emoji.style.animationDuration=

(Math.random()*12+10)+"s";

emoji.style.opacity=Math.random()*.5+.2;

emojiContainer.appendChild(emoji);

setTimeout(()=>{

emoji.remove();

},22000);

}

setInterval(createEmoji,900);



/*=========================================
SHOOTING STARS
=========================================*/

function shootingStar(){

const star=document.createElement("div");

star.className="shootingStar";

star.style.left=(Math.random()*100)+"vw";

star.style.top=(Math.random()*40)+"vh";

document.body.appendChild(star);

setTimeout(function(){

star.remove();

},2000);

}

setInterval(shootingStar,4000);



/*=========================================
BUTTON RIPPLE
=========================================*/

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

ripple.style.position="absolute";

ripple.style.width="20px";

ripple.style.height="20px";

ripple.style.background="rgba(255,255,255,.7)";

ripple.style.borderRadius="50%";

ripple.style.left=e.offsetX+"px";

ripple.style.top=e.offsetY+"px";

ripple.style.transform="translate(-50%,-50%) scale(0)";

ripple.style.pointerEvents="none";

ripple.style.transition=".6s";

btn.appendChild(ripple);

setTimeout(()=>{

ripple.style.transform="translate(-50%,-50%) scale(15)";

ripple.style.opacity="0";

},10);

setTimeout(()=>{

ripple.remove();

},600);

});

});


/*=========================================
SMOOTH HERO BUTTON
=========================================*/

const start=document.getElementById("startJourney");

if(start){

start.addEventListener("click",function(){

document.getElementById("disclaimer")

.scrollIntoView({

behavior:"smooth"

});

});

}



/*=========================================
GLOW HERO TITLE
=========================================*/

const hero=document.getElementById("heroTitle");

let angle=0;

setInterval(function(){

angle+=1;

hero.style.textShadow=

"0 0 30px rgba("+

(120+Math.sin(angle*.04)*80)+

",220,255,.6)";

},40);



/*=========================================
CONSOLE MESSAGE 😂
=========================================*/

console.log("Friendship.exe Loaded");

console.log("Warning:");

console.log("Too many shared brain cells detected.");

console.log("Proceed with chaos.");
/*==========================================================
            MEMORY SYSTEM
==========================================================*/

const popup=document.getElementById("memoryPopup");

const popupTitle=document.getElementById("popupTitle");

const popupText=document.getElementById("popupText");

const closePopup=document.getElementById("closePopup");

const memories={

tea:{

title:"☕ Tea Mission",

text:
`Remember when I bunked the ENTIRE college day
just so we could drink one cup of tea?

100% worth it.

Attendance suffered.

Friendship improved.`

},

hike:{

title:"🥾 The Fake Fun Trip",

text:
`We went outside
thinking we'd just chill.

Five minutes later...

Congratulations.

We accidentally started hiking.

Nobody signed up for cardio.`

},

panipuri:{

title:"🎬 Horror Movie",

text:
`Remember when we went to watch
The Conjuring?

The movie wasn't even halfway through...

...and you screamed so loudly
I'm pretty sure half the theatre
thought the ghost had escaped the screen.

Meanwhile I was trying so hard
not to laugh.

10/10 entertainment.
Would absolutely watch a horror movie
with you again.`

},

wish:{

title:"🎁 Outstanding Wish",

text:
`You still have one wish.

Yes...

I remember.

No...

I'm not pretending I forgot.

(Okay maybe a little.)`

}

};



/*==========================================================
            OPEN MEMORY
==========================================================*/

document.querySelectorAll(".memory").forEach(card=>{

card.addEventListener("click",function(){

const target=this.dataset.target;

popupTitle.innerHTML=memories[target].title;

popupText.innerHTML=memories[target].text.replace(/\n/g,"<br>");

popup.style.display="flex";

document.body.style.overflow="hidden";

});

});



/*==========================================================
            CLOSE POPUP
==========================================================*/

closePopup.onclick=function(){

popup.style.display="none";

document.body.style.overflow="auto";

};



popup.onclick=function(e){

if(e.target===popup){

popup.style.display="none";

document.body.style.overflow="auto";

}

};



document.addEventListener("keydown",function(e){

if(e.key==="Escape"){

popup.style.display="none";

document.body.style.overflow="auto";

}

});



/*==========================================================
            MEMORY HOVER
==========================================================*/

document.querySelectorAll(".memory").forEach(card=>{

card.addEventListener("mousemove",function(e){

const rect=this.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/12;

const rotateX=-(y-rect.height/2)/12;

this.style.transform=

`perspective(900px)
 rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)
 scale(1.08)`;

});

card.addEventListener("mouseleave",function(){

this.style.transform="";

});

});



/*==========================================================
            RANDOM MESSAGE
==========================================================*/

const funnyMessages=[

"Friendship level: Legendary 😂",

"Shared brain cell detected 🧠",

"Tea addiction confirmed ☕",

"Panipuri trauma unlocked 🥟",

"Unexpected hike loading 🥾",

"Professional troublemakers 💀",

"Friendship.exe still running..."

];

setInterval(()=>{

console.log(

funnyMessages[

Math.floor(Math.random()*funnyMessages.length)

]

);

},12000);



/*==========================================================
            CARD POP ANIMATION
==========================================================*/

const cards=document.querySelectorAll(".card");

cards.forEach((card,index)=>{

card.style.animationDelay=(index*.15)+"s";

card.classList.add("show");

});
/*==========================================================
            SCRIPT 3C-1
==========================================================*/

/*=========================================
        POPUP IMAGES
=========================================*/

const popupImage = document.getElementById("popupImage");

const memoryImages = {

    tea: "images/tea.jpg",

    hike: "images/hike.jpg",

    panipuri: "images/movie.jpg",

    wish: "images/wish.jpg"

};


/*=========================================
        UPDATE POPUP
=========================================*/

document.querySelectorAll(".memory").forEach(memory=>{

memory.addEventListener("click",function(){

const id=this.dataset.target;

popupImage.src=memoryImages[id];

});

});


/*=========================================
        FINAL BUTTON
=========================================*/

const lastButton=document.getElementById("lastButton");

const loading=document.getElementById("loading");

const chapter=document.getElementById("chapterTwo");

const finalScreen=document.getElementById("finalScreen");

const progress=document.getElementById("progress");

const percent=document.getElementById("percent");

const loadingTitle=document.getElementById("loadingTitle");

const loadingText=document.getElementById("loadingText");



lastButton.addEventListener("click",function(){

chapter.style.display="none";

loading.style.display="flex";

startLoading();

});



/*=========================================
        LOADING
=========================================*/

const loadingMessages=[

"Checking Friendship...",

"Finding Tea Memories...",

"Looking for Shared Brain Cell...",

"Searching Bad Decisions...",

"Unexpected Hiking Detected...",

"Scanning Panipuri Trauma...",

"Loading Happiness...",

"Almost There..."

];


function startLoading(){

let value=0;

let msg=0;

loadingTitle.innerHTML="Preparing Your Surprise...";

loadingText.innerHTML=loadingMessages[0];

const timer=setInterval(function(){

value++;

progress.style.width=value+"%";

percent.innerHTML=value+"%";

if(value%12===0){

msg++;

if(msg<loadingMessages.length){

loadingText.innerHTML=

loadingMessages[msg];

}

}

if(value>=100){

clearInterval(timer);

setTimeout(function(){

loading.style.display="none";

finalScreen.style.display="flex";

},800);

}

},55);

}



/*=========================================
        FINAL BUTTON ANIMATION
=========================================*/

const playReward=document.getElementById("musicButton");

if(playReward){

playReward.addEventListener("mouseenter",function(){

this.style.transform="scale(1.08)";

});


playReward.addEventListener("mouseleave",function(){

this.style.transform="scale(1)";

});

}



/*=========================================
        POPUP SOUND
=========================================*/

function beep(){

const audioContext=new(window.AudioContext||

window.webkitAudioContext)();

const osc=audioContext.createOscillator();

const gain=audioContext.createGain();

osc.connect(gain);

gain.connect(audioContext.destination);

osc.frequency.value=550;

gain.gain.value=.05;

osc.start();

osc.stop(audioContext.currentTime+.08);

}

document.querySelectorAll(".memory").forEach(memory=>{

memory.addEventListener("click",beep);

});



/*=========================================
        IMAGE PRELOAD
=========================================*/

Object.values(memoryImages).forEach(src=>{

const img=new Image();

img.src=src;

});



/*=========================================
        CONSOLE 😂
=========================================*/

console.log("Loading complete...");

console.log("Friendship level over 9000.");

console.log("Warning: Too much tea detected.");

console.log("Bakwas Panipuri remembered.");

console.log("One wish still pending...");

/*==========================================================
                FRIENDSHIP.EXE
                    SCRIPT 3C-2
==========================================================*/


/*=========================================
        MUSIC
=========================================*/

const endingSong = document.getElementById("endingSong");
const musicButton = document.getElementById("musicButton");


if(musicButton && endingSong){

musicButton.addEventListener("click", function(){

    console.log("Button pressed");

    endingSong.currentTime = 0;

    endingSong.volume = 0.8;


    endingSong.play()
    .then(()=>{

        console.log("Music playing 🎵");

    })
    .catch(error=>{

        console.log("Music error:", error);

    });


    startConfetti();

    celebration();

});

}
/*=========================================
        CONFETTI
=========================================*/

const confettiContainer=document.getElementById("confettiContainer");

function startConfetti(){

for(let i=0;i<250;i++){

let conf=document.createElement("div");

conf.className="confetti";

conf.style.left=Math.random()*100+"vw";

conf.style.animationDuration=(Math.random()*3+3)+"s";

conf.style.opacity=Math.random();

conf.style.transform=`rotate(${Math.random()*360}deg)`;

conf.style.background=

`hsl(${Math.random()*360},90%,60%)`;

confettiContainer.appendChild(conf);

setTimeout(()=>{

conf.remove();

},7000);

}

}


/*=========================================
        CELEBRATION 🌧️ EMOJI RAIN
=========================================*/

function celebration(){

const emojis=[

"😂",
"☕",
"🥾",
"🥟",
"🎉",
"✨",
"💙",
"🎁",
"❤️"

];


for(let i=0;i<120;i++){

let e=document.createElement("div");


e.innerHTML =
emojis[Math.floor(Math.random()*emojis.length)];


e.style.position="fixed";


e.style.left=Math.random()*100+"vw";


e.style.top="-50px";


e.style.fontSize=(Math.random()*25+20)+"px";


e.style.pointerEvents="none";


e.style.zIndex="99999";


// different falling speeds
let duration=Math.random()*3+3;


// random sideways movement
let drift=Math.random()*200-100;


document.body.appendChild(e);



setTimeout(()=>{


e.style.transition=
`${duration}s linear`;


e.style.top="110vh";


e.style.left=
(parseFloat(e.style.left)+drift)+"vw";


e.style.transform=
`rotate(${Math.random()*720}deg)`;


},Math.random()*500);



setTimeout(()=>{

e.remove();

},6000);


}

}

/*=========================================
        MOVING BUTTON 😈
=========================================*/

let prankDone=false;

if(musicButton){

musicButton.addEventListener("mouseover",()=>{

if(prankDone)return;

prankDone=true;

let count=0;

const prank=setInterval(()=>{

count++;

musicButton.style.position="relative";

musicButton.style.left=(Math.random()*200-100)+"px";

musicButton.style.top=(Math.random()*100-50)+"px";


if(count==6){

clearInterval(prank);

musicButton.style.left="0px";

musicButton.style.top="0px";

}

},220);

});

}



/*=========================================
        FINAL MESSAGE
=========================================*/

setTimeout(()=>{

console.log("Friendship.exe");

console.log("Status : SUCCESS");

console.log("Tea Count : Infinite");

console.log("Panipuri : Still bad");

console.log("Shared Brain Cells : ∞");

},4000);



/*=========================================
        RANDOM SHOOTING STARS
=========================================*/

setInterval(()=>{

shootingStar();

},5000);



/*=========================================
        TITLE EFFECT
=========================================*/

const titles=document.querySelectorAll("h1");

titles.forEach(title=>{

title.addEventListener("mouseenter",()=>{

title.style.transform="scale(1.05)";

title.style.transition=".3s";

});

title.addEventListener("mouseleave",()=>{

title.style.transform="scale(1)";

});

});



/*=========================================
        DOUBLE CLICK SECRET
=========================================*/

document.body.addEventListener("dblclick",()=>{

alert(

"Achievement Unlocked 🏆\n\nProfessional Menace Detected."

);

});



/*=========================================
        THANK YOU
=========================================*/

console.log("");

console.log("====================================");

console.log("Friendship.exe Completed");

console.log("Made with 0% Logic");

console.log("100% Chaos");

console.log("====================================");

document.getElementById("analysisButton").addEventListener("click", function(){

    document.getElementById("analysis").scrollIntoView({
        behavior:"smooth"
    });

});
// ================= PASSWORD SYSTEM =================

function checkPassword(){

    let entered = document.getElementById("passwordInput").value.trim().toLowerCase();

    if(entered === "chiya"){

        document.getElementById("loginScreen").style.display = "none";

        document.getElementById("mainWebsite").style.display = "block";

    }

    else{

        document.getElementById("error").innerHTML =
        "❌ Wrong password. Try again So you dont know me :(";

    }

}