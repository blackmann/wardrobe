import React from 'react'
import Combobox from './combobox'

const places: Array<string> = [
  'Gotham City',
  'Paradise Palms',
  'Shifty Shafts',
  'Tilted Towers',
  'Wide Wild West',
]

function ComboExample() {
  const [selection, setSelection] = React.useState('')

  return (
    <>
    <Combobox
      onChange={(e) => setSelection(e.target.value)}
      onSelect={(option) => setSelection(option)}
      options={places}
      placeholder="Search for landing spot"
      value={selection}
    />

    <div>Be ready to fight 🤺</div>
    </>
  )
}

export const Enabled = () => <ComboExample />