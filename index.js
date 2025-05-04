// AVATAR BOXSHADOW 
const el = document.querySelector('.glow-follow');

function updateShadow(e) {
  let x, y;
  
  if (e.type === 'mousemove') {
    const rect = el.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
  } else if (e.type === 'touchmove') {
    const rect = el.getBoundingClientRect();
    const touch = e.touches[0];
    x = touch.clientX - rect.left;
    y = touch.clientY - rect.top;
  }

  const centerX = el.offsetWidth / 2;
  const centerY = el.offsetHeight / 2;

  const dx = x - centerX;
  const dy = y - centerY;


  const blur = 60; 
  const spread = 20; 

  el.style.boxShadow = `${dx / 10}px ${dy / 10}px ${blur}px ${spread}px rgba(255,154,0,0.6)`;
}

document.addEventListener('mousemove', updateShadow);
document.addEventListener('touchmove', updateShadow);

const items = document.querySelectorAll('.timeline__item');

items.forEach(item => {
  const details = item.querySelector('.timeline__details');

  // Desktop: Hover
  item.addEventListener('mouseenter', () => {
    if (window.innerWidth >= 1280) { 
      expand(details);
    }
  });

  item.addEventListener('mouseleave', () => {
    if (window.innerWidth >= 1280) {
      collapse(details);
    }
  });

  // Mobile/Tablet: Click (toggle)
  item.addEventListener('click', () => {
    if (window.innerWidth < 1280) {
      if (details.style.height && details.style.height !== '0px') {
        collapse(details);
      } else {
        expand(details);
      }
    }
  });
});

function expand(details) {
  const scrollHeight = details.scrollHeight;
  details.style.height = scrollHeight + 'px';
  details.style.opacity = 1;
}

function collapse(details) {
  details.style.height = '0px';
  details.style.opacity = 0;
}

