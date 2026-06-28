function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

const text = "B.Tech CSE (AI & ML) Student | Aspiring AI Engineer | Hackathon Enthusiast";

let index = 0;

function typeText() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 60);
    }
}

window.onload = typeText;