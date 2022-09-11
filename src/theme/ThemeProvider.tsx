import {
  getPreferredTheme,
  setPreferredTheme,
  updateDocumentTheme,
} from './utils'
import React from 'react'
import { Theme } from './theme'

interface ThemeProviderProps extends React.PropsWithChildren {}

interface ThemeProviderValue {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = React.createContext<ThemeProviderValue>({
  setTheme() {
    console.error(
      'Missing `ThemeProvider`. You need to call `setTheme` within a ThemeContext'
    )
  },
  theme: getPreferredTheme(),
})

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<Theme>(getPreferredTheme)

  React.useEffect(() => {
    setPreferredTheme(theme)
    updateDocumentTheme(getPreferredTheme())
  }, [theme])

  React.useEffect(() => {
    // FIXME: Keep in sync with state
    window.matchMedia('(prefers-color-scheme: dark)').onchange = () => {
      updateDocumentTheme(getPreferredTheme())
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext, ThemeProviderValue }
