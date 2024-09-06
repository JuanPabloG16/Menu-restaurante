// Selecciona los elementos del DOM
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-links a');

// Función para alternar la visibilidad del menú
function toggleMenu() {
  navLinks.classList.toggle('active');
}

// Añade un evento al ícono del menú para abrir/cerrar el menú
menuIcon.addEventListener('click', toggleMenu);

// Cerrar el menú cuando se haga clic en un enlace
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Función para cerrar el menú si se hace clic fuera de él
window.addEventListener('click', function(event) {
  if (!menuIcon.contains(event.target) && !navLinks.contains(event.target)) {
    navLinks.classList.remove('active');
  }
});

// Función para mostrar/ocultar modales
const modals = document.querySelectorAll('.modal');
const buttons = document.querySelectorAll('.details-btn');
const closes = document.querySelectorAll('.close');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'block';
  });
});

closes.forEach(close => {
  close.addEventListener('click', () => {
    const modalId = close.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'none';
  });
});

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
});
