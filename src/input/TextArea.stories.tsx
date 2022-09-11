import React from 'react'
import TextArea from './TextArea'

export const Plain = () => <TextArea placeholder="Write a poem 🌹" rows={3} />
export const Disabled = () => (
  <TextArea disabled={true} value="And she fell straight…" rows={3} />
)
