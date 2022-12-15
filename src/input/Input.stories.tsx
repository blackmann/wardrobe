import React from 'react'
import SearchIcon from '../icons/SearchIcon'
import Input from './Input'

export const Plain = () => {
  const ref = React.useRef()

  return (
    <Input
      leading={<SearchIcon />}
      placeholder="What are you searching for"
      ref={ref}
    />
  )
}

export const LabeledNumber = () => (
  <div style={{ width: 200 }}>
    <label>
      How much?
      <Input
        leading={<span style={{ color: 'var(--color-inactive)' }}>GHS</span>}
        type="number"
      />
    </label>
  </div>
)

export const Disabled = () => (
  <Input disabled placeholder="This should be disabled" />
)

export const Checkbox = () => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Input type="checkbox" id="feeling" style={{ marginRight: '1rem' }}>
      <label htmlFor="feeling">Looking good?</label>
    </Input>
  </div>
)

export const Radio = () => (
  <>
    <fieldset>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Input
          name="choice"
          type="radio"
          id="money"
          style={{ marginRight: '1rem' }}
        >
          <label htmlFor="money">Get all you want</label>
        </Input>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Input
          name="choice"
          type="radio"
          id="power"
          style={{ marginRight: '1rem' }}
        >
          <label htmlFor="power">Influence people</label>
        </Input>
      </div>
    </fieldset>
  </>
)
