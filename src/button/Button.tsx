import React from 'react'
import styles from './Button.module.css'
import clsx from 'clsx'

interface ButtonProps extends React.PropsWithChildren {
  outlined?: boolean
}

function Button({ children, outlined }: ButtonProps) {
  return (
    <button
      className={clsx(styles.button, { [styles.buttonOutlined]: outlined })}
    >
      {children}
    </button>
  )
}

export default Button
