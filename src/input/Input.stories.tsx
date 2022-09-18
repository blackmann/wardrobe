import React from 'react'
import Input from './Input'

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path
        fill="var(--color-inactive)"
        d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
      />
    </svg>
  )
}

export const Plain = () => {
  const ref = React.useRef()

  return (
    <Input
      leading={<SearchIcon />}
      placeholder="What are you searching for"
      type="search"
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
    <Input type="checkbox" id="feeling" style={{ marginRight: '1rem' }} />
    <label htmlFor="feeling">Looking good?</label>
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
        />
        <label htmlFor="money">Get all you want</label>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Input
          name="choice"
          type="radio"
          id="power"
          style={{ marginRight: '1rem' }}
        />
        <label htmlFor="power">Influence people</label>
      </div>
    </fieldset>
  </>
)
