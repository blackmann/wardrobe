import React, { ForwardedRef } from 'react'
import clsx from 'clsx'
import styles from './Button.module.css'

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

Button.displayName = 'Button'

export default Button
