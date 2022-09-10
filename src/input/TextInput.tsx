import React, { ChangeEventHandler } from 'react'
import styles from './TextInput.module.css'
import clsx from 'clsx'

interface TextInputProps {
  className?: string
  disabled?: boolean
  leading?: React.ReactNode
  onChange?: ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  type?: string
  value?: string
}

const TextInput = React.forwardRef(
  ({
    className,
    disabled,
    leading,
    onChange,
    placeholder,
    type = 'text',
    value,
  }: TextInputProps, ref: React.ForwardedRef<HTMLInputElement> | undefined) => {
    return (
      <div className={clsx(styles.textInputContainer, className)}>
        {leading}
        <input
          className={styles.textInput}
          disabled={disabled}
          onChange={onChange}
          placeholder={placeholder}
          ref={ref}
          type={type}
          value={value}
        />
      </div>
    )
  }
)

export default TextInput
