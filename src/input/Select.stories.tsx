import React from 'react'
import Select from './Select'

export const Labeled = () => (
  <label>
    Destination
    <Select>
      <option disabled selected>
        Select country
      </option>
      <option value="ghana">Ghana</option>
      <option value="canada">Netherlands</option>
      <option value="canada">Japan</option>
      <option value="canada">Canada</option>
    </Select>
  </label>
)

export const Disabled = () => (
  <label>
    Destination
    <Select disabled>
      <option disabled selected>
        Select country
      </option>
      <option value="ghana">Ghana</option>
      <option value="canada">Netherlands</option>
      <option value="canada">Japan</option>
      <option value="canada">Canada</option>
    </Select>
  </label>
)
