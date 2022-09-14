import { Theme } from './theme'

export function getPreferredTheme(): Theme {
  const theme = localStorage.getItem('theme')
  if (theme === null) {
    return 'system'
  }

  return theme as Theme
}

export function resolveTheme() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }

  return 'light'
}

export function setPreferredTheme(theme: Theme) {
  if (theme === 'system') {
    localStorage.removeItem('theme')
    return
  }

  localStorage.setItem('theme', theme)
}

export function updateDocumentTheme(theme: Theme) {
  document.querySelector('html')?.setAttribute('data-theme', theme)
}
