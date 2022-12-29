import React, { ForwardedRef } from 'react'
import clsx from 'clsx'
import styles from './Button.module.css'

interface LinkButtonProps extends React.ComponentProps<'a'> {
  danger?: Boolean
  disabled?: boolean
  outlined?: boolean
}

// FIX: Can this be DRYed?
const LinkButton = React.forwardRef(
  (
    {
      children,
      className,
      disabled,
      outlined,
      ...forwardedProps
    }: LinkButtonProps,
    ref: ForwardedRef<HTMLAnchorElement> | undefined
  ) => {
    return (
      <a
        {...forwardedProps}
        className={clsx(
          styles.button,
          { [styles.buttonOutlined]: outlined, [styles.disabled]: disabled },
          className
        )}
        ref={ref}
      >
        {children}
      </a>
    )
  }
)

LinkButton.displayName = 'Button'

export default LinkButton
