import Button from './Button'
import React from 'react'
import styles from './Button.stories.module.css'

export const Base = () => <Button>Hello world</Button>

export const Outlined = () => <Button outlined>Hello outlined</Button>

export const Danger = () => <Button className={styles.dangerButton} danger>Hello world</Button>

export const DangerDisabled = () => <Button className={styles.dangerButton}  danger disabled>Hello world</Button>

export const Disabled = () => <Button disabled>Hello world</Button>

export const OutlinedDisabled = () => (
  <Button outlined disabled>
    Hello outlined
  </Button>
)
