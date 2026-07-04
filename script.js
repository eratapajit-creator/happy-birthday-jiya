const startBtn = document.getElementById("startBtn");
const loader = document.getElementById("loader");
const main = document.getElementById("main");
const music = document.getElementById("bgMusic");

startBtn.onclick = () => {
    loader.style.display = "none";
    main.style.display = "block";

    music.play().catch(() => {
        console.log("Music couldn't start automatically.");
    });

    startTyping();
    startSlideshow();
    startHearts();
};

const message =
`Happy Sweet 16, Jiya ❤️

Today is all about celebrating the amazing person you are.

May your smile always stay bright, your dreams come true, and every moment of your life be filled with happiness.

Thank you for being such a wonderful part of my life.

Happy Birthday once again!

With lots of love,
James Basel ❤️`;

function startTyping() {
    const typing = document.getElementById("typing");
    let i = 0;

    function type() {
        if (i < message.length) {
            typing.innerHTML += message.charAt(i);
            i++;
            setTimeout(type, 45);
        }
    }

    type();
}

// Slideshow
const slides = document.querySelectorAll(".slide");
let current = 0;

function startSlideshow() {
    setInterval(() => {
        slides[current].classList.remove("active");
        current = (current + 1) % slides.length;
        slides[current].classList.add("active");
    }, 3000);
}

// Floating Hearts
function startHearts() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "heart";
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (18 + Math.random() * 25) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 8000);

    }, 400);

}

// Gift Button
document.getElementById("giftBtn").onclick = () => {

    document.getElementById("surprise").style.display = "block";

    confetti({
        particleCount:250,
        spread:180,
        origin:{y:0.6}
    });

    setTimeout(()=>{
        confetti({
            particleCount:250,
            spread:180
        });
    },800);

    window.scrollTo({
        top:document.body.scrollHeight,
        behavior:"smooth"
    });

};
