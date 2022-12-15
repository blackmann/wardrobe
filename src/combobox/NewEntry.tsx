import React from 'react'
import clsx from 'clsx'
import styles from './NewEntry.module.css'

interface NewEntryProps {
  className?: string
  onClick?: VoidFunction
  title?: string
  value: string
}

function NewEntry({ className, onClick, title, value }: NewEntryProps) {
  return (
    <div className={clsx(styles.newEntry, className)} onClick={onClick}>
      <header className={styles.title}>{title}</header>
      <div>{value}</div>
    </div>
  )
}

export default NewEntry
