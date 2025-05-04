const el = document.querySelector('.glow-follow');

function updateShadow(e) {
  // Для мобільних пристроїв, використовуємо touch, для десктопу - mousemove
  let x, y;
  
  if (e.type === 'mousemove') {
    const rect = el.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
  } else if (e.type === 'touchmove') {
    const rect = el.getBoundingClientRect();
    const touch = e.touches[0]; // Використовуємо перший дотик
    x = touch.clientX - rect.left;
    y = touch.clientY - rect.top;
  }

  const centerX = el.offsetWidth / 2;
  const centerY = el.offsetHeight / 2;

  const dx = x - centerX;
  const dy = y - centerY;


  const blur = 60; // розмиття
  const spread = 20; // розпорошення

  // Тінь рухається до курсора/дотику з більшим розпорошенням і розмиттям
  el.style.boxShadow = `${dx / 10}px ${dy / 10}px ${blur}px ${spread}px rgba(255,154,0,0.6)`;
}

document.addEventListener('mousemove', updateShadow);
document.addEventListener('touchmove', updateShadow);
