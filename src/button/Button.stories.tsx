import Button from './Button'
import LinkButton from './LinkButton'
import React from 'react'
import styles from './Button.stories.module.css'
import SearchIcon from '../icons/SearchIcon'

export const Base = () => <Button>Hello world</Button>

export const Outlined = () => <Button outlined>Hello outlined</Button>

export const Danger = () => (
  <Button className={styles.dangerButton} danger>
    Hello world
  </Button>
)

export const DangerDisabled = () => (
  <Button className={styles.dangerButton} danger disabled>
    Hello world
  </Button>
)

export const Disabled = () => <Button disabled>Hello world</Button>

export const IconButton = () => (
  <Button>
    <SearchIcon /> <span>Click to find peace</span>
  </Button>
)

export const SimpleLinkButton = () => (
  <LinkButton href="https://en.wikipedia.org/wiki/Alexander_the_Great">
    What's greatness?
  </LinkButton>
)

export const OutlinedDisabled = () => (
  <Button outlined disabled>
    Hello outlined
  </Button>
)
