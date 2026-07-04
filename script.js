const messages = [
"🥺 Sunte Ho...",
"❤️ Are Suno To Sahi...",
"💌 Kuchh Kahna Tha Aapse...",
"😔 I Miss You Very Much...",
"🧸 I Need A Tight Hug... 🤗",
"❤️ Lastly... I Love You So Much! ❤️"
];

let index = 0;

// 🎁 Open Gift
function openGift(){

document.getElementById("giftScreen").style.display="none";
document.getElementById("messageScreen").style.display="block";

createHearts();

showMessage();

}

// ❤️ Typewriter Effect
function showMessage(){

const typing=document.getElementById("typing");
const next=document.getElementById("nextBtn");

typing.innerHTML="";
next.style.display="none";

let i=0;

const timer=setInterval(()=>{

typing.innerHTML+=messages[index].charAt(i);

i++;

if(i>=messages[index].length){

clearInterval(timer);

next.style.display="inline-block";

}

},70);

}

// ➡️ Next Button
function nextMessage(){

index++;

if(index>=messages.length){

document.getElementById("nextBtn").style.display="none";
return;

}

// 🧸 Teddy Video Show
if(index==4){

const teddy=document.getElementById("teddy");

teddy.style.display="block";

teddy.play().catch(()=>{});

}

showMessage();

}

// ❤️ Falling Hearts
function createHearts(){

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";

heart.style.animationDuration=(3+Math.random()*3)+"s";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

},250);

}
