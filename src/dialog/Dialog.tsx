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
    function handleBackdropClick(event: React.MouseEvent) {
      if (dismissible) {
        onClose()
      }
    }

    React.useEffect(() => {
      if (dismissible) {
        function closeDialog(event: KeyboardEvent) {
          if (event.key === 'Escape') {
            onClose()
          }
        }

        window.addEventListener('keydown', closeDialog)

        return () => window.removeEventListener('keydown', closeDialog)
      }
    }, [])

    if (!open) {
      return null
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
