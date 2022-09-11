import React from 'react'
import useTheme from './use-theme'

export default function useMetaThemeColor({ dark = '#222', light = '#fff' }) {
  const { theme } = useTheme()

  React.useEffect(() => {
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? dark : light)
  }, [theme])
}
