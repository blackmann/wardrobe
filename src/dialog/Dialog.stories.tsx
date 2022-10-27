import React from 'react'
import Button from '../button'
import Dialog from './Dialog'
import styles from './Dialog.stories.module.css'

function DialogApp() {
  const [open, setOpen] = React.useState(false)

  function hideDialog() {
    setOpen(false)
  }

  function showDialog() {
    setOpen(true)
  }

  return (
    <>
      <Button onClick={showDialog} outlined>Answer Survey</Button>

      <Dialog className={styles.dialog} onClose={hideDialog} open={open}>
        <div className={styles.dialogContent}>
          <h3>Confirm</h3>

          <p>You sure you want to get into a lobby?</p>

          <footer className={styles.footer}>
            <Button onClick={hideDialog} outlined>Never again</Button>
            <Button onClick={hideDialog}>Nope</Button>
          </footer>
        </div>
      </Dialog>
    </>
  )
}

export const SimpleDialog = () => <DialogApp />
