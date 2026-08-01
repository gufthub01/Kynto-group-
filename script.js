
// Main website menu
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}


function askAI() {
    const question = document.getElementById("question").value.trim();
    const q = question.toLowerCase();
    const answer = document.getElementById("answer");

    if (!question) {
        answer.innerHTML = "<p>Please ask a question.</p>";
        return;
    }

    let reply = "";

    if (q.includes("hello") || q.includes("hi")) {
        reply = "Hello! Welcome to Kynto AI. How can I help you today?";

    } else if (q.includes("your name") || q.includes("who are you")) {
        reply = "I am Kynto AI, the official virtual assistant of Kynto Group.";

    } else if (q.includes("founder") || q.includes("who founded") || q.includes("owner")) {
        reply = "Kynto Group was founded by Bobidul Ali.";

    } else if (q.includes("ceo")) {
        reply = "The CEO of Kynto Group is Bobidul Ali.";

    } else if (q.includes("company") || q.includes("kynto group")) {
        reply = "Kynto Group is a technology company focused on AI, software, cybersecurity and digital innovation.";

    } else if (q.includes("mission")) {
        reply = "Our mission is to build innovative AI and software solutions for people and businesses.";

    } else if (q.includes("vision")) {
        reply = "Our vision is to become a trusted global technology company.";

    } else if (q.includes("product")) {
        reply = "Our products include Kynto AI, Kynto Core, Kynto Shield and Kynto IQ.";

    } else if (q.includes("launch")) {
        reply = "Our products are under development. Launch dates will be announced soon.";

    } else if (q.includes("service")) {
        reply = "We provide AI, software development, web development and digital technology solutions.";

    } else if (q.includes("ai")) {
        reply = "Kynto AI is currently in Beta and is continuously improving.";

    } else if (q.includes("contact")) {
        reply = "Please visit the Contact page on our website to reach Kynto Group.";

    } else if (q.includes("email")) {
        reply = "Official Email: contact@kyntogroup.com";

    } else if (q.includes("website")) {
        reply = "Official Website: www.kyntogroup.com";

    } else if (q.includes("location") || q.includes("where")) {
        reply = "Kynto Group is based in India.";

    } else if (q.includes("career") || q.includes("job")) {
        reply = "Career opportunities will be announced on our official website.";

    } else if (q.includes("price") || q.includes("cost")) {
        reply = "Pricing information will be announced after product launch.";

    } else if (q.includes("support")) {
        reply = "For support, please contact the Kynto Group support team.";

    } else if (q.includes("good morning")) {
        reply = "Good morning! Have a wonderful day.";

    } else if (q.includes("good afternoon")) {
        reply = "Good afternoon! How can I help you?";

    } else if (q.includes("good evening")) {
        reply = "Good evening! Welcome to Kynto AI.";

    } else if (q.includes("good night")) {
        reply = "Good night! Take care.";

    } else if (q.includes("how are you")) {
        reply = "I'm doing great. Thank you for asking!";

    } else if (q.includes("thank")) {
        reply = "You're welcome! Happy to help.";

    } else if (q.includes("bye")) {
        reply = "Goodbye! Have a great day.";

    } else if (q.includes("help")) {
        reply = "I can answer questions about Kynto Group, our products, services and company information.";
    } else if (q.includes("what is html")) {
    reply = "HTML is the standard markup language used to create web pages.";

} else if (q.includes("what is css")) {
    reply = "CSS is used to style and design web pages.";

} else if (q.includes("what is javascript")) {
    reply = "JavaScript is used to make websites interactive.";

} else if (q.includes("what is python")) {
    reply = "Python is a popular programming language used for AI and software development.";

} else if (q.includes("what is java")) {
    reply = "Java is a powerful programming language used for Android and enterprise applications.";

} else if (q.includes("what is c")) {
    reply = "C is a general-purpose programming language.";

} else if (q.includes("what is c++")) {
    reply = "C++ is an object-oriented programming language.";

} else if (q.includes("what is github")) {
    reply = "GitHub is a platform to host and manage software projects.";

} else if (q.includes("what is git")) {
    reply = "Git is a version control system used by developers.";

} else if (q.includes("what is ai")) {
    reply = "Artificial Intelligence enables computers to perform tasks that normally require human intelligence.";

} else if (q.includes("what is machine learning")) {
    reply = "Machine Learning is a branch of AI that learns from data.";

} else if (q.includes("what is chatbot")) {
    reply = "A chatbot is a program that communicates with users through text or voice.";

} else if (q.includes("what is chatgpt")) {
    reply = "ChatGPT is an AI chatbot developed by OpenAI.";

} else if (q.includes("what is google")) {
    reply = "Google is a global technology company known for Search, Android and YouTube.";

} else if (q.includes("what is youtube")) {
    reply = "YouTube is the world's largest video-sharing platform.";

} else if (q.includes("what is android")) {
    reply = "Android is a mobile operating system developed by Google.";

} else if (q.includes("what is iphone")) {
    reply = "iPhone is a smartphone developed by Apple.";

} else if (q.includes("what is website")) {
    reply = "A website is a collection of web pages available on the internet.";

} else if (q.includes("what is internet")) {
    reply = "The Internet is a global network connecting millions of computers.";

} else if (q.includes("what is software")) {
    reply = "Software is a collection of programs that perform specific tasks.";

} else if (q.includes("what is hardware")) {
    reply = "Hardware refers to the physical components of a computer.";

} else if (q.includes("what is coding")) {
    reply = "Coding is the process of writing instructions for computers.";

} else if (q.includes("what is programming")) {
    reply = "Programming is the process of creating software using programming languages.";

} else if (q.includes("who is elon musk")) {
    reply = "Elon Musk is an entrepreneur known for Tesla, SpaceX and other companies.";

} else if (q.includes("who is bill gates")) {
    reply = "Bill Gates is the co-founder of Microsoft.";

} else if (q.includes("who is steve jobs")) {
    reply = "Steve Jobs was the co-founder of Apple.";

} else if (q.includes("what is microsoft")) {
    reply = "Microsoft is a global software and technology company.";

} else if (q.includes("what is apple")) {
    reply = "Apple is a technology company known for iPhone, Mac and iPad.";

} else if (q.includes("what is openai")) {
    reply = "OpenAI is an AI research and technology company.";

} else if (q.includes("who created you")) {
    reply = "This version of Kynto AI was created by Kynto Group.";

} else if (q.includes("can you code")) {
    reply = "Yes, I can help with HTML, CSS, JavaScript and other programming questions.";

} else if (q.includes("do you know coding")) {
    reply = "Yes. I can help explain programming concepts and code.";

} else if (q.includes("what can you do")) {
    reply = "I can answer questions, provide information and help with technology topics.";
} else if (q.includes("date")) {
    reply = "Sorry, I can't show the current date yet.";

} else if (q.includes("time")) {
    reply = "Sorry, I can't show the current time yet.";

} else if (q.includes("weather")) {
    reply = "Sorry, I can't check live weather yet.";

} else if (q.includes("news")) {
    reply = "Sorry, I can't provide live news yet.";

} else if (q.includes("capital of india")) {
    reply = "The capital of India is New Delhi.";

} else if (q.includes("capital of assam")) {
    reply = "The capital of Assam is Dispur.";

} else if (q.includes("india")) {
    reply = "India is a country in South Asia.";

} else if (q.includes("assam")) {
    reply = "Assam is a state in northeastern India.";

} else if (q.includes("computer")) {
    reply = "A computer is an electronic device that processes data.";

} else if (q.includes("laptop")) {
    reply = "A laptop is a portable personal computer.";

} else if (q.includes("mobile")) {
    reply = "A mobile phone is a portable communication device.";

} else if (q.includes("internet")) {
    reply = "The Internet connects millions of devices around the world.";

} else if (q.includes("browser")) {
    reply = "A web browser is used to access websites on the Internet.";

} else if (q.includes("chrome")) {
    reply = "Google Chrome is a popular web browser.";

} else if (q.includes("edge")) {
    reply = "Microsoft Edge is a web browser developed by Microsoft.";

} else if (q.includes("firefox")) {
    reply = "Mozilla Firefox is a free and open-source web browser.";

} else if (q.includes("linux")) {
    reply = "Linux is a free and open-source operating system.";

} else if (q.includes("windows")) {
    reply = "Windows is an operating system developed by Microsoft.";

} else if (q.includes("mac")) {
    reply = "macOS is Apple's operating system for Mac computers.";

} else if (q.includes("database")) {
    reply = "A database stores and organizes information.";

} else if (q.includes("sql")) {
    reply = "SQL is a language used to manage databases.";

} else if (q.includes("api")) {
    reply = "An API allows different software applications to communicate.";

} else if (q.includes("cloud")) {
    reply = "Cloud computing provides services over the Internet.";

} else if (q.includes("cyber security")) {
    reply = "Cybersecurity protects computers, networks and data from attacks.";

} else if (q.includes("password")) {
    reply = "Use a strong password with letters, numbers and symbols.";

} else if (q.includes("virus")) {
    reply = "A computer virus is malicious software that can damage systems.";

} else if (q.includes("wifi")) {
    reply = "Wi-Fi is a wireless technology used to connect devices to the Internet.";

} else if (q.includes("bluetooth")) {
    reply = "Bluetooth is used for short-range wireless communication.";

} else if (q.includes("facebook")) {
    reply = "Facebook is a social networking platform.";

} else if (q.includes("instagram")) {
    reply = "Instagram is a photo and video sharing platform.";

} else if (q.includes("whatsapp")) {
    reply = "WhatsApp is a messaging application.";

} else if (q.includes("telegram")) {
    reply = "Telegram is a cloud-based messaging app.";

} else if (q.includes("x") || q.includes("twitter")) {
    reply = "X, formerly Twitter, is a social media platform.";

} else if (q.includes("tiktok")) {
    reply = "TikTok is a short-video sharing platform.";

} else if (q.includes("amazon")) {
    reply = "Amazon is a global e-commerce and cloud computing company.";

} else if (q.includes("netflix")) {
    reply = "Netflix is a streaming platform for movies and TV shows.";

} else if (q.includes("spotify")) {
    reply = "Spotify is a music streaming platform.";

} else if (q.includes("thank you")) {
    reply = "You're most welcome! I'm always here to help.";

} else if (q.includes("see you")) {
    reply = "See you again! Have a great day.";
} else if (q.includes("math")) {
    reply = "I can help with basic mathematics.";

} else if (q.includes("science")) {
    reply = "Science helps us understand the natural world.";

} else if (q.includes("physics")) {
    reply = "Physics is the study of matter, energy and motion.";

} else if (q.includes("chemistry")) {
    reply = "Chemistry is the study of substances and their reactions.";

} else if (q.includes("biology")) {
    reply = "Biology is the study of living organisms.";

} else if (q.includes("earth")) {
    reply = "Earth is the third planet from the Sun.";

} else if (q.includes("moon")) {
    reply = "The Moon is Earth's natural satellite.";

} else if (q.includes("sun")) {
    reply = "The Sun is the star at the center of our Solar System.";

} else if (q.includes("solar system")) {
    reply = "The Solar System has eight planets orbiting the Sun.";

} else if (q.includes("planet")) {
    reply = "A planet is a celestial body that orbits a star.";

} else if (q.includes("space")) {
    reply = "Space is the vast region beyond Earth's atmosphere.";

} else if (q.includes("technology")) {
    reply = "Technology helps solve problems using scientific knowledge.";

} else if (q.includes("robot")) {
    reply = "A robot is a programmable machine that performs tasks automatically.";

} else if (q.includes("developer")) {
    reply = "A developer creates software, websites and applications.";

} else if (q.includes("engineer")) {
    reply = "An engineer designs and builds systems, machines and software.";

} else if (q.includes("business")) {
    reply = "A business provides products or services to customers.";

} else if (q.includes("startup")) {
    reply = "A startup is a newly established company focused on growth and innovation.";

} else if (q.includes("money")) {
    reply = "Money is used to buy goods and services.";

} else if (q.includes("bank")) {
    reply = "A bank provides financial services such as savings, loans and payments.";

} else if (q.includes("education")) {
    reply = "Education helps people gain knowledge and skills.";

} else if (q.includes("school")) {
    reply = "A school is a place where students learn from teachers.";

} else if (q.includes("college")) {
    reply = "A college provides higher education.";

} else if (q.includes("university")) {
    reply = "A university offers higher education and research opportunities.";

} else if (q.includes("book")) {
    reply = "Books are valuable sources of knowledge.";

} else if (q.includes("music")) {
    reply = "Music is an art form enjoyed by people around the world.";

} else if (q.includes("movie")) {
    reply = "Movies are a popular form of entertainment.";

} else if (q.includes("game")) {
    reply = "Games are played for entertainment and learning.";

} else if (q.includes("football")) {
    reply = "Football is one of the world's most popular sports.";

} else if (q.includes("cricket")) {
    reply = "Cricket is a popular sport played in many countries.";

} else if (q.includes("love")) {
    reply = "Love is a feeling of deep care and affection.";

} else if (q.includes("friend")) {
    reply = "A true friend supports and cares for you.";

} else if (q.includes("life")) {
    reply = "Life is a journey of learning, growth and experiences.";

} else if (q.includes("success")) {
    reply = "Success comes through dedication, learning and hard work.";

} else if (q.includes("motivation")) {
    reply = "Keep learning, keep improving and never give up.";

} else if (q.includes("joke")) {
    reply = "Why did the programmer quit his job? Because he didn't get arrays! 😄";

} else if (q.includes("who made kynto ai")) {
    reply = "Kynto AI was developed by Kynto Group.";
    } else {
        reply = "Sorry, I don't know the answer yet. Kynto AI is currently in Beta and learning every day.";
    }

    answer.innerHTML += `
<div class="user-message">
    <strong>You:</strong><br>${question}
</div>

<div class="ai-message">
    <strong>Kynto AI:</strong><br>${reply}
</div>
`;
answer.scrollTop = answer.scrollHeight;
    document.getElementById("question").value = "";
}
const questionBox = document.getElementById("question");

questionBox.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        askAI();
    }
});
function searchWebsite() {

const input = document.getElementById("searchBox").value.toLowerCase();

if (input.includes("ai")) {
    window.location.href = "kynto-ai.html";
} else if (input.includes("login")) {
    window.location.href = "login.html";
} else if (input.includes("register")) {
    window.location.href = "register.html";
} else if (input.includes("contact")) {
    location.href = "#contact";
} else if (input.includes("product")) {
    location.href = "#products";
} else if (input.includes("about")) {
    location.href = "#about";
}

}
function toggleDarkMode(){

document.body.classList.toggle("dark-mode");

}
let visitors = localStorage.getItem("visitors");

if (visitors === null) {
    visitors = 1;
} else {
    visitors = parseInt(visitors) + 1;
}

localStorage.setItem("visitors", visitors);

const visitorElement = document.getElementById("visitorCount");

if (visitorElement) {
    visitorElement.innerText = visitors;
}
function setEnglish() {

document.querySelector(".hero h1").innerText =
"Building the Future with Technology";

document.querySelector(".hero p").innerText =
"Kynto Group creates innovative software, AI solutions, and digital products for businesses and people worldwide.";

}

function setAssamese() {

document.querySelector(".hero h1").innerText =
"প্ৰযুক্তিৰে ভৱিষ্যৎ গঢ়ি তোলা";

document.querySelector(".hero p").innerText =
"Kynto Group এ AI, Software আৰু Digital Product নিৰ্মাণ কৰে।";

}
function sendMessage(event){

event.preventDefault();

const name=document.querySelector('input[type="text"]').value.trim();

const email=document.querySelector('input[type="email"]').value.trim();

const message=document.querySelector("textarea").value.trim();

if(name==="" || email==="" || message===""){

alert("Please fill in all fields.");

return;

}

alert("Thank you! Your message has been received.");

document.querySelector("form").reset();

}
// ===============================
// REGISTER
// ===============================
function registerUser(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (name === "" || email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    const user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("kyntoUser", JSON.stringify(user));

    alert("Registration Successful!");

    window.location.href = "login.html";
}

// ===============================
// LOGIN
// ===============================
function loginUser(event) {

    event.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    const user = JSON.parse(localStorage.getItem("kyntoUser"));

    if (!user) {
        alert("No account found. Please register first.");
        return;
    }

    if (email === user.email && password === user.password) {

        alert("Login Successful!");

        localStorage.setItem("isLoggedIn", "true");

        window.location.href = "index.html";

    } else {

        alert("Invalid Email or Password!");

    }
}

// ===============================
// LOGOUT
// ===============================
function logoutUser() {

    localStorage.removeItem("isLoggedIn");

    alert("Logged Out Successfully!");

    window.location.href = "login.html";
}