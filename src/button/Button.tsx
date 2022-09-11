import React, { ForwardedRef } from 'react'
import clsx from 'clsx'
import styles from './Button.module.css'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  outlined?: boolean
  type: 'button' | 'submit' | 'reset' | undefined
}

const Button = React.forwardRef(
  (
    { children, className, outlined, ...forwardedProps }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement> | undefined
  ) => {
    return (
      <button
        {...forwardedProps}
        className={clsx(
          styles.button,
          { [styles.buttonOutlined]: outlined },
          className
        )}
        ref={ref}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
