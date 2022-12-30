import React from 'react'
import Combobox from './Combobox'

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const places: Array<string> = [
  'Gotham City',
  'Paradise Palms',
  'Shifty Shafts',
  'Tilted Towers',
  'Wide Wild West',
]

const emails: Array<string> = ['mail@degraat.co.uk', 'yarteydegraat@gmail.com']

function ComboExample(props: any) {
  const [selection, setSelection] = React.useState('')

  return (
    <label>
      Game 7
      <Combobox
        onChange={(e) => setSelection(e.target.value)}
        onSelect={(option) => {
          console.log('selected', option)
          setSelection(option)
        }}
        options={places}
        placeholder="Search for landing spot"
        value={selection}
        {...props}
      />
      <br />
      <div>Give it a shot 🤺</div>
    </label>
  )
}

export const Enabled = () => <ComboExample />

export const FreeEntryEmail = () => (
  <ComboExample
    freeEntry
    newEntryTitle="Enter email to send invite"
    validateNewEntry={(value: string) => EMAIL_REGEX.test(value)}
    onNewItemSelect={(value: string) => console.log('new entry', value)}
    options={emails}
    placeholder="Invite some people"
  />
)
