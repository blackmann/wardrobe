import Button from './Button'
import React from 'react'
import styles from './Button.stories.module.css'
import SearchIcon from '../icons/SearchIcon'

export const Base = () => <Button>Hello world</Button>

export const Outlined = () => <Button outlined>Hello outlined</Button>

export const Danger = () => (
  <Button className={styles.dangerButton}>Hello world</Button>
)

export const DangerDisabled = () => (
  <Button className={styles.dangerButton} disabled>
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
  <Button href="https://en.wikipedia.org/wiki/Alexander_the_Great">
    What's greatness?
  </Button>
)

export const DisabledLinkButton = () => (
  <Button disabled href="https://en.wikipedia.org/wiki/Alexander_the_Great">
    Can we see greatness?
  </Button>
)

export const OutlinedDisabled = () => (
  <Button outlined disabled>
    Hello outlined
  </Button>
)
