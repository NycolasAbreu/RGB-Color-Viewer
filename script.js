const colors = ["rgb(255, 255, 255)",
                "rgb(0, 0, 0)",
                "rgb(255, 0, 0)",
                "rgb(0, 255, 0)",
                "rgb(0, 0, 255)"];

// Function to display colors in the HTML
function displayColors() {
    const colorContainer = document.getElementById("color-container");

    colors.forEach((color, index) => {
        const colorDiv = document.createElement("div");
        colorDiv.classList.add("color-item");
        colorDiv.style.backgroundColor = color;
        colorDiv.textContent = `${index + 1}`;
        colorContainer.appendChild(colorDiv);
    });
}

// Call the function to display colors when the page loads
window.addEventListener("load", displayColors);