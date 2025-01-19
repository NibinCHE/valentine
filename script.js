let noClickCount = 0;

function goToValentine() {
    // Redirect to valentine.html when "Yes" is clicked
    window.location.href = "valentine.html";
}

function handleNo() {
    noClickCount++;
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");
    const mainHeading = document.querySelector(".main-heading");
    const buttonsContainer = document.querySelector(".buttons");

    if (noClickCount >= 10) {
        // Hide the "No" button and make "Yes" full-screen
        noButton.style.display = "none";
        yesButton.classList.add("fullscreen-yes");
        yesButton.innerText = "YES!";
        mainHeading.style.display = "none"; // Hide the question
    } else {
        // Gradually enlarge the "Yes" button
        yesButton.style.transform = `scale(${1 + noClickCount * 0.5})`;

        // Dynamically adjust the position of the "No" button
        noButton.style.transform = `translate(${noClickCount * 20}px, ${noClickCount * 10}px)`;
        
        // Keep buttons aligned with the heading above
        buttonsContainer.style.marginTop = `${noClickCount * 10}px`;
    }
}
