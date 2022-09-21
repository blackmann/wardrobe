import clsx from 'clsx'
import React from 'react'
import styles from './Alert.module.css'

interface AlertProps extends React.PropsWithChildren {
  className?: string
  leading?: React.ReactNode
}

function Alert({ children, className, leading}: AlertProps) {
  return (
    <div className={clsx(styles.alert, className)}>
      {leading && <div className={styles.leading}>{leading}</div>}
      <div>
        {children}
      </div>
    </div>
  )
}

export default Alert