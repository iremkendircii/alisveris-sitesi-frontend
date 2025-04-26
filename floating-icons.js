document.addEventListener("DOMContentLoaded", () => {
  const icons = [
    "box.png",
    "buyer.png",
    "discount.png",
    "heart.png",
    "love.png",
    "mobile-shopping.png",
    "sale-tag.png",
    "shopping-bag.png",
    "woman.png",
    "gift.png",
    "shopping-cart.png",
    "notification.png",
    "logout.png"
  ];

  const container = document.getElementById("floatingContainer");

  function createFloatingIcon() {
    const icon = document.createElement("img");
    icon.src = `./icons/${icons[Math.floor(Math.random() * icons.length)]}`;
    icon.className = "floating-icon";

    const left = Math.random() * 90;
    icon.style.left = `${left}%`;

    const size = 40 + Math.random() * 20;
    icon.style.width = `${size}px`;
    icon.style.height = `${size}px`;

    container.appendChild(icon);

    setTimeout(() => {
      icon.remove();
    }, 6000);
  }

  setInterval(createFloatingIcon, 1500);
});


const icons = [
  "box.png",
  "buyer.png",
  "discount.png",
  "heart.png",
  "love.png",
  "mobile-shopping.png",
  "sale-tag.png",
  "shopping-bag.png",
  "woman.png",
  "gift.png",
  "shopping-cart.png",
  "notification.png",
  "logout.png"
];
const container = document.querySelector('.floating-icons-container');

function createFloatingIcon() {
    const icon = document.createElement('img');
    icon.className = 'floating-icon';
    icon.textContent = icons[Math.floor(Math.random() * icons.length)];
    
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    
    const moveX = (Math.random() - 0.5) * 200;
    const moveY = -Math.random() * 200 - 100;
    const rotate = (Math.random() - 0.5) * 720;
    
    icon.style.left = `${startX}px`;
    icon.style.top = `${startY}px`;
    icon.style.setProperty('--moveX', `${moveX}px`);
    icon.style.setProperty('--moveY', `${moveY}px`);
    icon.style.setProperty('--rotate', `${rotate}deg`);
    
    icon.style.animation = `float ${3 + Math.random() * 4}s linear infinite`;
    
    container.appendChild(icon);
    
    setTimeout(() => {
        icon.remove();
    }, 7000);
}

setInterval(createFloatingIcon, 300);