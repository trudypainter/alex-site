// Initialize visitor counter
let visitorCount = localStorage.getItem("visitorCount") || 0;
visitorCount = parseInt(visitorCount) + 1;
localStorage.setItem("visitorCount", visitorCount);

// Update visitor counter display
document.getElementById(
  "visitor-counter"
).textContent = `Visitors: ${visitorCount}`;

// Add sparkles following cursor
document.addEventListener("mousemove", (e) => {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = e.pageX + "px";
  sparkle.style.top = e.pageY + "px";
  sparkle.style.position = "absolute";
  sparkle.style.pointerEvents = "none";
  sparkle.style.width = "10px";
  sparkle.style.height = "10px";
  sparkle.style.background = "#ffffff";
  sparkle.style.borderRadius = "50%";
  sparkle.style.opacity = "0.8";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.style.transition = "all 0.5s";
    sparkle.style.opacity = "0";
    sparkle.style.transform = "translateY(-20px)";
    setTimeout(() => {
      document.body.removeChild(sparkle);
    }, 500);
  }, 50);
});

// Initialize confetti
const jsConfetti = new JSConfetti();

// Add click event listener to Alex's name
document.querySelector(".content p").addEventListener("click", () => {
  jsConfetti.addConfetti({
    confettiColors: ["#ff69b4", "#ffb6c1", "#ffffff", "#ff1493", "#fbb1bd"],
    confettiNumber: 100,
  });
});
