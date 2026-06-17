console.log("UI Testing and Debugging Page Loaded");

// Test buttons

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert(button.textContent);
    });
});

// Example debugging test

function pageLoadedSuccessfully() {
    return document.readyState === "complete";
}

console.log(
    pageLoadedSuccessfully()
        ? "Page Load Test Passed"
        : "Page Load Test Failed"
);