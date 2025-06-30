const categories = {
  work: ['⬜ team', '⬜ program or project ideas', '⬜ a process', '⬜ feedback or reflection', '⬜ something else'],
  personal: ['⬜ life admin', '⬜ routines or habits', '⬜ something emotional', '⬜ just venting'],
  creative: ['⬜ content or writing', '⬜ design', '⬜ just a spark of something'],
  random: ['⬜ no subcategory needed']
};

const subcategoryContainer = document.getElementById('subcategoryContainer');
const textAreaContainer = document.querySelector('.text-area-container');

document.querySelectorAll('[data-category]').forEach(button => {
  button.addEventListener('click', () => {
    const selected = button.dataset.category;
    subcategoryContainer.innerHTML = categories[selected].map(sub =>
      `<button type="button" class="subcategory">${sub}</button>`
    ).join('');
    subcategoryContainer.classList.remove('hidden');
    textAreaContainer.classList.add('hidden');

    document.querySelectorAll('.subcategory').forEach(btn => {
      btn.addEventListener('click', () => {
        textAreaContainer.classList.remove('hidden');
      });
    });
  });
});

// Falling emojis animation
const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const emojis = ['🦋','✨','❤️','🧁','🍒'];
const particles = [];

function EmojiParticle() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.size = 24 + Math.random() * 8;
  this.emoji = emojis[Math.floor(Math.random() * emojis.length)];
  this.speed = 0.3 + Math.random() * 0.7;
}

function initParticles() {
  for (let i = 0; i < 40; i++) {
    particles.push(new EmojiParticle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.font = `${p.size}px serif`;
    ctx.fillText(p.emoji, p.x, p.y);
    p.y += p.speed;
    if (p.y > canvas.height) {
      p.y = -50;
      p.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(animate);
}

initParticles();
animate();
