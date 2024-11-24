const texts = ["Web Developer", "Web Designer", "Student"];
let count = 0;
let index = 0;
let currentText = "";
let isDeleting = false;

const type = () => {
    const target = document.getElementById("animated-text");

    if (!target) return;

    if (isDeleting) {
        currentText = texts[count].substring(0, index--);
    } else {
        currentText = texts[count].substring(0, index++);
    }

    target.textContent = currentText;

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && currentText === texts[count]) {
        speed = 1000;
        isDeleting = true;
    } 
    else if (isDeleting && currentText === "") {
        isDeleting = false;
        count = (count + 1) % texts.length;
    }
    setTimeout(type, speed);
};

type();