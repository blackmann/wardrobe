import { Input } from '../input'
import React from 'react'
import ReactDOM from 'react-dom'
import styles from './Combobox.module.css'

interface ComboboxProps extends React.ComponentProps<'input'> {
  maxOptionsHeight?: string
  onFilter?: (option: any, query: string) => boolean
  onSelect?: (option: any) => void
  options: any[]
  optionRender?: (option: any) => React.ReactNode
}

function defaultOptionRender(option: string) {
  return <div className={styles.option}>{option}</div>
}

function defaultFilter(option: string, query: string) {
  return option.toLowerCase().includes(query.toLowerCase())
}

function getOptionsStyle(comboboxEl: HTMLDivElement | null) {
  if (!comboboxEl) {
    return {}
  }

  return {
    left: comboboxEl.offsetLeft,
    top: comboboxEl.offsetTop + comboboxEl.clientHeight + 2,
    width: comboboxEl.clientWidth,
  }
}

const Combobox = React.forwardRef(
  (
    {
      maxOptionsHeight,
      onFilter = defaultFilter,
      onSelect,
      options,
      optionRender = defaultOptionRender,
      // Exclude type
      type,
      ...inputProps
    }: ComboboxProps,
    ref?: React.ForwardedRef<any>
  ) => {
    const comboboxRef = React.useRef<HTMLDivElement>(null)
    const [showOptions, setShowOptions] = React.useState(false)

    const filteredOptions = React.useMemo(() => {
      return options.filter((option) =>
        onFilter(option, inputProps.value as string)
      )
    }, [inputProps.value, options])

    const optionsStyle = getOptionsStyle(comboboxRef.current)

    function handleOptionSelect(option: any) {
      onSelect?.(option)
    }

    function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
      inputProps.onBlur?.(event)
      setShowOptions(false)
    }

    function handleFocus(event: React.FocusEvent<HTMLInputElement>) {
      setShowOptions(true)
      inputProps.onFocus?.(event)
    }

    return (
      <div className={styles.combobox} ref={comboboxRef}>
        <Input
          {...inputProps}
          onBlur={handleBlur}
          onFocus={handleFocus}
          ref={ref}
          type="search"
        />

        {showOptions &&
          Boolean(filteredOptions.length) &&
          ReactDOM.createPortal(
            <>
              <ul
                className={styles.options}
                style={{ maxHeight: maxOptionsHeight, ...optionsStyle }}
              >
                {/* TODO: Accept key field name (or key getter) */}
                {filteredOptions.map((option, index) => (
                  <li
                    className={styles.optionItem}
                    key={index}
                    onMouseDown={() => handleOptionSelect(option)}
                  >
                    {optionRender(option)}
                  </li>
                ))}
              </ul>
            </>,
            document.body
          )}
      </div>
    )
  }
)

Combobox.displayName = 'Combobox'

export default Combobox
