import React from 'react'
import styles from './Button.module.css'
import clsx from 'clsx'

interface ButtonProps extends React.PropsWithChildren {
  disabled?: boolean
  outlined?: boolean
}

function Button({children, disabled, outlined}: ButtonProps) {
  return (
    <button
      className={clsx(styles.button, {[styles.buttonOutlined]: outlined})}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
