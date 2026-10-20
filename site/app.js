(() => {
  'use strict';
  const root = document.documentElement;
  const languageButton = document.getElementById('language');
  const themeButton = document.getElementById('theme');
  const readPreference = (key) => { try { return localStorage.getItem(key); } catch { return null; } };
  const savePreference = (key, value) => { try { localStorage.setItem(key, value); } catch { /* Preferences are optional. */ } };
  const translations = [...document.querySelectorAll('[data-en][data-zh]')];
  function setLanguage(language) {
    const chinese = language === 'zh';
    root.lang = chinese ? 'zh-CN' : 'en';
    for (const element of translations) element.innerHTML = element.dataset[chinese ? 'zh' : 'en'];
    languageButton.textContent = chinese ? 'EN' : '中文';
    languageButton.setAttribute('aria-label', chinese ? 'Switch to English' : '切换到中文');
    document.querySelector('.section-nav').setAttribute('aria-label', chinese ? '页面导航' : 'Page sections');
    updateThemeLabel();
    savePreference('rw-language', language);
  }
  function updateThemeLabel() {
    const dark = root.dataset.theme === 'dark';
    themeButton.setAttribute('aria-pressed', String(dark));
    themeButton.setAttribute('aria-label', root.lang === 'zh-CN' ? (dark ? '切换到浅色模式' : '切换到深色模式') : (dark ? 'Switch to light mode' : 'Switch to dark mode'));
    document.querySelector('meta[name="theme-color"]').content = dark ? '#111111' : '#ffffff';
  }
  const savedTheme = readPreference('rw-theme');
  root.dataset.theme = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  setLanguage(readPreference('rw-language') === 'zh' ? 'zh' : 'en');
  languageButton.addEventListener('click', () => setLanguage(root.lang === 'en' ? 'zh' : 'en'));
  themeButton.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    savePreference('rw-theme', root.dataset.theme);
    updateThemeLabel();
  });
  const links = [...document.querySelectorAll('.section-nav a')];
  function updateActiveSection() {
    let current = links[0];
    for (const link of links) {
      if (document.querySelector(link.hash).getBoundingClientRect().top <= 160) current = link;
    }
    for (const link of links) {
      const active = link === current;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
    }
  }
  let scheduled = false;
  window.addEventListener('scroll', () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(() => { updateActiveSection(); scheduled = false; });
    }
  }, { passive: true });
  updateActiveSection();
})();
