import React from 'react'
import { Button, ThemeProvider } from '../index'
import useTheme from './use-theme'

function ThemeSwitch() {
  const { theme, setTheme } = useTheme()

  const target = theme === 'light' ? 'dark' : 'light'

  function switchTheme() {
    setTheme(target)
  }

  function useSystem() {
    setTheme('system')
  }

  return (
    <div>
      <Button onClick={switchTheme} style={{ marginRight: '1rem' }}>
        Go {target}
      </Button>
      <Button onClick={useSystem} outlined>
        Use system
      </Button>
    </div>
  )
}

export const ToggleTheme = () => <ThemeSwitch />

ToggleTheme.decorators = [
  (Component: React.FC) => (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  ),
]
