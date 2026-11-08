* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #18002e, #52004f, #a83200);
    color: white;
    min-height: 100vh;
    text-align: center;
}

nav {
    display: flex;
    justify-content: space-between;
    padding: 25px 8%;
    background: rgba(0, 0, 0, 0.3);
}

main {
    padding: 70px 20px;
}

.diya {
    font-size: 100px;
    animation: glow 1.5s infinite alternate;
}

h1 {
    color: #ffd700;
    font-size: 48px;
    margin: 20px;
}

h2 {
    color: #ffb347;
    margin: 15px;
}

p {
    font-size: 18px;
    margin: 20px;
}

.wish-box {
    margin: 30px;
}

input {
    padding: 14px;
    width: 250px;
    border-radius: 8px;
    border: none;
}

button {
    padding: 14px 22px;
    background: #ff9800;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    margin: 8px;
}

button:hover {
    background: #e65100;
}

.firework-btn {
    background: #d4145a;
}

#message {
    color: #ffd700;
    margin: 20px;
}

@keyframes glow {
    from {
        filter: drop-shadow(0 0 5px orange);
    }
    to {
        filter: drop-shadow(0 0 30px yellow);
    }
}

footer {
    padding: 20px;
    background: rgba(0, 0, 0, 0.3);
}

@media (max-width: 600px) {
    nav {
        flex-direction: column;
        gap: 10px;
    }

    h1 {
        font-size: 32px;
    }

    input {
        width: 90%;
    }
}
