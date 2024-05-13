// Smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 800; // milliseconds
    let start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(
        0,
        easeInOut(startPosition, distance, progress, duration)
      );
      if (progress < duration) window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
  });
});

// Easing function
function easeInOut(start, distance, elapsed, duration) {
  elapsed /= duration / 2;
  if (elapsed < 1) return (distance / 2) * elapsed * elapsed + start;
  elapsed--;
  return (-distance / 2) * (elapsed * (elapsed - 2) - 1) + start;
}
document.querySelectorAll("ul").forEach((ul) => {
  ul.addEventListener("click", () => {
    document.getElementById("check").checked = false; // Toggle the checked state of the checkbox
  });
});
