import React from 'react'
import clsx from 'clsx'
import styles from './TextInput.module.css'

interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
  leading?: React.ReactNode
}

const TextInput = React.forwardRef(
  (
    { className, leading, ...forwardedProps }: TextInputProps,
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

    return (
      <div
        className={clsx(styles.textInputContainer, className, {
          [styles.focused]: focused,
        })}
      >
        {leading}
        <input
          {...forwardedProps}
          className={styles.textInput}
          onBlur={handleBlur}
          onFocus={handleFocus}
          ref={ref}
        />
      </div>
    )
  }
)

TextInput.displayName = 'TextInput'

export default TextInput
