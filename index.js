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


const items = document.querySelectorAll('.js-toggle');

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

  // Focus / Blur (for keyboard navigation)
  item.addEventListener('focus', () => {
    if (window.innerWidth >= 1280) {
      expand(details);
    }
  });

  item.addEventListener('blur', () => {
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

  // Keyboard toggle for mobile/tablet (optional)
  item.addEventListener('keydown', (e) => {
    if (window.innerWidth < 1280 && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault(); // запобігає скролу на Space
      item.click(); // емуляція кліку
    }
  });
});

function expand(details) {
  details.style.height = details.scrollHeight + 'px';
  details.style.opacity = 1;
  details.style.overflow = 'hidden';
  details.style.transition = 'height 0.3s ease, opacity 0.3s ease';
}

function collapse(details) {
  details.style.height = '0px';
  details.style.opacity = 0;
  details.style.overflow = 'hidden';
}


