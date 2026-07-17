(() => {
  const storageKey = 'task-manager-theme'
  const root = document.documentElement

  const getPreferredTheme = () => {
    const savedTheme = window.localStorage.getItem(storageKey)
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  }

  const applyTheme = (theme) => {
    root.classList.toggle('dark-theme', theme === 'dark')
    window.localStorage.setItem(storageKey, theme)
    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      button.textContent = theme === 'dark' ? 'light mode' : 'dark mode'
      button.setAttribute('aria-pressed', String(theme === 'dark'))
    })
  }

  applyTheme(getPreferredTheme())

  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      button.addEventListener('click', () => {
        applyTheme(root.classList.contains('dark-theme') ? 'light' : 'dark')
      })
    })

    applyTheme(root.classList.contains('dark-theme') ? 'dark' : 'light')
  })
})()