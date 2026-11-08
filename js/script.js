function showWish() {
    let name = document.getElementById("username").value;

    if (name.trim() === "") {
        alert("Please enter your name!");
        return;
    }

    document.getElementById("message").innerText =
        "Happy Diwali, " + name + "! 🪔🎆";
}

function celebrate() {
    const fireworks = document.getElementById("fireworks");

    for (let i = 0; i < 30; i++) {
        let spark = document.createElement("div");

        spark.innerText = "✨";
        spark.style.position = "fixed";
        spark.style.left = Math.random() * 100 + "vw";
        spark.style.top = Math.random() * 80 + "vh";
        spark.style.fontSize = "25px";
        spark.style.pointerEvents = "none";

        fireworks.appendChild(spark);

        setTimeout(() => spark.remove(), 1500);
    }
}
