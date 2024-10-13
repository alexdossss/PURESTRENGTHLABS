function toggleMenu() {
    const menu = document.getElementById('phone-inner-links');
    const hamburger = document.getElementById('hamburger-toggle-picture');

    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';

    if (hamburger.src.includes('hamburger-icon.png')) {
        hamburger.src = './media/icons/hamburger-close.png';
    } else {
        hamburger.src = './media/icons/hamburger-icon.png'; 
    }

    hamburger.classList.toggle('active');
}
