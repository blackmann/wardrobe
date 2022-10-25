import React from 'react'
import clsx from 'clsx'
import styles from './Input.module.css'

interface InputProps extends React.ComponentProps<'input'> {
  leading?: React.ReactNode
}

const Input = React.forwardRef(
  (
    { className, leading, ...forwardedProps }: InputProps,
    ref: React.ForwardedRef<any> | undefined
  ) => {
    const [focused, setFocused] = React.useState(false)

    function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
      setFocused(false)
      forwardedProps.onBlur?.(event)
    }

    function handleFocus(event: React.FocusEvent<HTMLInputElement>) {
      setFocused(true)
      forwardedProps.onFocus?.(event)
    }

    const checkable = ['checkbox', 'radio'].includes(
      forwardedProps.type || 'text'
    )

    return (
      <div
        className={clsx(styles.inputContainer, className, {
          [styles.focused]: focused,
          [styles.noBackground]: checkable,
          [styles.inline]: checkable,
        })}
      >
        {leading && <div>{leading}</div>}
        <input
          {...forwardedProps}
          className={styles.input}
          onBlur={handleBlur}
          onFocus={handleFocus}
          ref={ref}
        />
        {forwardedProps.children}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
