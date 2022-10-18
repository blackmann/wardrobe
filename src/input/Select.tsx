import React from 'react'
import clsx from 'clsx'
import styles from './Select.module.css'

interface SelectProps extends React.ComponentProps<'select'> {}

const Select = React.forwardRef(
  (
    { className, ...forwardedProps }: SelectProps,
    ref: React.ForwardedRef<any>
  ) => {
    return (
      <select
        {...forwardedProps}
        className={clsx(styles.select, className)}
        ref={ref}
      />
    )
  }
)

Select.displayName = 'Select'

export default Select
