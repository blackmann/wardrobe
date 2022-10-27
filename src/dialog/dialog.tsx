import React, { ForwardedRef } from 'react'
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

    return (
      <div className={styles.backdrop} onClick={handleBackdropClick}>
        <div>
          <div
            className={clsx(styles.dialogContent, className)}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
          >
            {children}
          </div>

          <div className={styles.stepper}></div>
        </div>
      </div>
    )
  }
)

Dialog.displayName = 'Dialog'

export default Dialog
