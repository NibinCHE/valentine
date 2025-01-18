let noClickCount = 0;

function goToValentine() {
    // Redirect to valentine.html when "Yes" is clicked
    window.location.href = "valentine.html";
}

function handleNo() {
    noClickCount++;
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");

    if (noClickCount >= 10) {
        // Hide the "No" button and make "Yes" full-screen with a solid background
        noButton.style.display = "none";
        yesButton.classList.add("fullscreen-yes");
        yesButton.innerText = "YES!";
    } else {
        // Keep the "No" button size constant but move it outward
        noButton.style.position = "relative";
        noButton.style.left = `${noClickCount * 30}px`;
        noButton.style.top = `${noClickCount * 15}px`;

        // Enlarge the "Yes" button
        yesButton.style.transform = `scale(${1 + noClickCount * 1})`;
    }
}
