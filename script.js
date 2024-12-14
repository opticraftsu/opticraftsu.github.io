document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const languageSelect = document.getElementById('language-select');
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    // Загружаем сохранённые настройки
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.add(savedTheme);
    
    // Изменение темы
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.body.classList.remove(currentTheme);
        document.body.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
    });
    // Навигация
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = document.querySelector(e.target.getAttribute('href'));
            
            pages.forEach(page => page.classList.remove('active'));
            targetPage.classList.add('active');
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const versionSearchInput = document.getElementById('version-search');
    const versionList = document.getElementById('version-list');
    const versionItems = Array.from(versionList.getElementsByClassName('version-item'));

    // Функция для фильтрации версий по поисковому запросу
    versionSearchInput.addEventListener('input', () => {
        const searchTerm = versionSearchInput.value.toLowerCase();

        versionItems.forEach(item => {
            const versionText = item.textContent.toLowerCase();
            if (versionText.includes(searchTerm)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const versionItems = document.querySelectorAll('.version-item');
    const downloadSections = document.querySelectorAll('.download-section');
    const backButtons = document.querySelectorAll('.back-btn');
    const versionList = document.getElementById('version-list');
    const selectVersionText = document.getElementById('select-version-text');

    // Показать секцию для выбранной версии
    versionItems.forEach(item => {
        item.addEventListener('click', () => {
            const version = item.dataset.version;
            versionList.style.display = 'none';
            selectVersionText.style.display = 'none';
            document.getElementById(version).style.display = 'block';
        });
    });

    // Кнопка "Назад"
    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            versionList.style.display = 'block';
            selectVersionText.style.display = 'block';
            downloadSections.forEach(section => {
                section.style.display = 'none';
            });
        });
    });
});