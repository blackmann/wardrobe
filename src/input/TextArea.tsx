import React from 'react'
import clsx from 'clsx'
import styles from './TextArea.module.css'

interface TextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {}

const TextArea = React.forwardRef(
  (props: TextAreaProps, ref: React.ForwardedRef<any>) => {
    return (
      <textarea
        {...props}
        className={clsx(styles.textArea, props.className)}
        ref={ref}
      ></textarea>
    )
  }
)

TextArea.displayName = 'TextArea'

export default TextArea
