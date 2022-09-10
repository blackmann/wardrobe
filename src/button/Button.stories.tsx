import Button from './Button'
import React from 'react'

export const Base = () => <Button>Hello world</Button>

export const Outlined = () => <Button outlined>Hello outlined</Button>

export const Disabled = () => <Button disabled>Hello world</Button>

export const OutlinedDisabled = () => (
  <Button outlined disabled>
    Hello outlined
  </Button>
)
