import React, { ForwardedRef } from 'react'
import ReactDOM from 'react-dom'
import clsx from 'clsx'
import styles from './Dialog.module.css'

interface DialogProps extends React.PropsWithChildren {
  dismissible?: boolean
  className?: string
  onClose: () => void
  open: boolean
}

const Dialog = React.forwardRef(
  (
    { children, className, dismissible = true, onClose, open }: DialogProps,
    ref: ForwardedRef<HTMLElement> | null
  ) => {
    if (!open) {
      return null
    }

    function handleBackdropClick(event: React.MouseEvent) {
      if (dismissible) {
        onClose()
      }
    }

    return ReactDOM.createPortal(
      <div className={styles.backdrop} onClick={handleBackdropClick}>
        <div
          className={clsx(styles.dialogContent, className)}
          onClick={(event) => event.stopPropagation()}
          role="dialog"
        >
          {children}
        </div>
      </div>,
      document.body
    )
  }
)

Dialog.displayName = 'Dialog'

export default Dialog
