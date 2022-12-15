import React, { ForwardedRef } from 'react'
import clsx from 'clsx'
import styles from './Button.module.css'

interface LinkButtonProps extends React.ComponentProps<'a'> {
  danger?: Boolean
  outlined?: boolean
}

// FIX: Can this be DRYed?
const LinkButton = React.forwardRef(
  (
    { children, className, outlined, ...forwardedProps }: LinkButtonProps,
    ref: ForwardedRef<HTMLAnchorElement> | undefined
  ) => {
    return (
      <a
        {...forwardedProps}
        className={clsx(
          styles.button,
          { [styles.buttonOutlined]: outlined },
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
