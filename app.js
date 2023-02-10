document.querySelector('.btn').addEventListener('click', () => {
    fetch('https://apis.scrimba.com/bored/api/activity')
        .then((response) => response.json())
        .then((data) => {
            document.querySelector('.activity').textContent = data.activity;
            document.querySelector(".title").textContent = "🦾 HappyBot 🦿";
            document.body.classList.add("fun");
        });
});