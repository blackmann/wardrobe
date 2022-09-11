import { Theme } from './theme'

export function getPreferredTheme(): Theme {
  const theme = localStorage.getItem('theme')
  if (theme === null) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }

    return 'light'
  }

  return theme as Theme
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
