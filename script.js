// Hiệu ứng làm mờ khi cuộn
window.addEventListener('scroll', () => {
    const container = document.querySelector('.container');
    const scrollY = window.scrollY;
    container.style.opacity = 1 - scrollY / 500;
});

// Hiển thị thông báo khi nhấn vào email
document.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã quan tâm! Hãy gửi email cho mình nhé!');
});