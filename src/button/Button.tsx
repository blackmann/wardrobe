import React, { ForwardedRef } from 'react'
import styles from './Button.module.css'
import clsx from 'clsx'

interface ButtonProps extends React.PropsWithChildren {
  className?: string
  disabled?: boolean
  onClick?: VoidFunction
  outlined?: boolean
}

const Button = React.forwardRef(
  (
    { children, className, disabled, onClick, outlined }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement> | undefined
  ) => {
    return (
      <button
        className={clsx(
          styles.button,
          { [styles.buttonOutlined]: outlined },
          className
        )}
        disabled={disabled}
        onClick={onClick}
        ref={ref}
      >
        {children}
      </button>
    )
  }
)

export default Button
