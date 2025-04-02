document.addEventListener("DOMContentLoaded", function () {
    // Create popup dynamically
    const popup = document.createElement("div");
    popup.id = "hydration-popup";
    popup.style.display = "none";
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.background = "#fff";
    popup.style.padding = "20px";
    popup.style.border = "2px solid #333";
    popup.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.3)";
    popup.style.textAlign = "center";
    popup.style.zIndex = "1000";

    // Popup content
    popup.innerHTML = `
        <p>💧 Stay hydrated! Drink a glass of water.</p>
        <button id="close-popup">OK</button>
    `;
    document.body.appendChild(popup);

    // Function to show the popup
    function showPopup() {
        const lastAlertTime = localStorage.getItem("lastAlertTime");
        const now = new Date().getTime();

        if (!lastAlertTime || now - lastAlertTime >= 2 * 60 * 60 * 1000) {
            popup.style.display = "block";
            localStorage.setItem("lastAlertTime", now);
        }
    }

    // Function to close the popup
    document.getElementById("close-popup").addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Run the function every 2 hours
    // setInterval(showPopup, 5 * 60 * 1000); // Checks every 5 minutes

    setInterval(showPopup, 60 * 10); // Runs every 1 minute (for testing)

});

