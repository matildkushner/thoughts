document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll('input[name="category"]');
  const subgroups = document.querySelectorAll(".subgroup");

  checkboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      // Hide all subgroups first
      subgroups.forEach(sg => sg.classList.add("hidden"));

      // Show relevant subgroup based on selection
      if (cb.checked) {
        document.querySelectorAll(`.subgroup[data-group="${cb.value}"]`).forEach(sg =>
          sg.classList.remove("hidden")
        );
      }
    });
  });

  // Falling emoji animation
  const canvas = document.getElementById("emojiCanvas");
  const ctx = canvas.getContext("2d");
  const emojis = ["🍒", "💌", "✨", "🧁", "🦋", "❤️", "🌿"];
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticles() {
    for (let i = 0; i < 20; i++) {
      particles.push({
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 1 + Math.random() * 2,
        size: 24 + Math.random() * 12
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "24px serif";

    particles.forEach(p => {
      ctx.font = `${p.size}px serif`;
      ctx.fillText(p.emoji, p.x, p.y);
      p.y += p.speed;

      if (p.y > canvas.height) {
        p.y = -20;
        p.x = Math.random() * canvas.width;
      }
    });

    requestAnimationFrame(draw);
  }

  resizeCanvas();
  createParticles();
  draw();
  window.addEventListener("resize", () => {
    resizeCanvas();
  });
});
