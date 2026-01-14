document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.animate-on-load');

    // 1. Toggle Search Input dengan Fokus Otomatis
    searchBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        searchInput.classList.toggle('active');
        
        if (searchInput.classList.contains('active')) {
            searchInput.focus();
        }
    });

    // Menutup search bar jika klik di luar area
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-wrapper')) {
            searchInput.classList.remove('active');
        }
    });

    // 2. Animasi Scroll/Load untuk Card
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });
});
