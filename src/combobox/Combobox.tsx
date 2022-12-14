import { Input } from '../input'
import NewEntry from './NewEntry'
import React from 'react'
import ReactDOM from 'react-dom'
import styles from './Combobox.module.css'

interface ComboboxProps extends React.ComponentProps<'input'> {
  freeEntry?: boolean
  maxOptionsHeight?: string
  newEntryTitle?: string
  onNewItemSelect?: (entry: string) => void
  onFilter?: (option: any, query: string) => boolean
  onSelect?: (option: any) => void
  options: any[]
  optionRender?: (option: any) => React.ReactNode
  validateNewEntry?: (entry?: string) => boolean
}

function defaultOptionRender(option: string) {
  return <div className={styles.option}>{option}</div>
}

function defaultFilter(option: string, query: string = '') {
  return option.toLowerCase().includes(query.toLowerCase())
}

function defaultNewValueValidator() {
  return true
}

function getOptionsStyle(comboboxEl: HTMLDivElement | null) {
  if (!comboboxEl) {
    return {}
  }

  const boundingRect = comboboxEl.getBoundingClientRect()

  return {
    left: boundingRect.left,
    top: boundingRect.top + comboboxEl.clientHeight + 2,
    width: comboboxEl.clientWidth,
  }
}

const Combobox = React.forwardRef(
  (
    {
      freeEntry,
      maxOptionsHeight,
      newEntryTitle,
      onFilter = defaultFilter,
      onNewItemSelect,
      onSelect,
      options,
      optionRender = defaultOptionRender,
      type,
      validateNewEntry = defaultNewValueValidator,
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

    const newOption = React.useMemo(() => {
      if (!freeEntry) {
        return null
      }

      const value = inputProps.value?.toString() ?? ''
      const isValidEntry = validateNewEntry(value)
      const title = isValidEntry ? 'Click to add' : newEntryTitle

      return {
        element: (
          <NewEntry
            onClick={() => handleNewItemSelect(value)}
            title={title}
            value={value}
          />
        ),
        value,
      }
    }, [filteredOptions])

    const optionsStyle = getOptionsStyle(comboboxRef.current)

    const hasOptions = Boolean(filteredOptions.length) || newOption
    const optionsVisibile = showOptions && hasOptions

    function handleNewItemSelect(value: string) {
      onNewItemSelect?.(value)
      hideOptions()
    }

    function handleOptionSelect(option: any) {
      onSelect?.(option)
      hideOptions()
    }

    function hideOptions() {
      setShowOptions(false)
    }

    function handleFocus(event: React.FocusEvent<HTMLInputElement>) {
      setShowOptions(true)
      inputProps.onFocus?.(event)
    }

    function handleKeyDown(event: React.KeyboardEvent) {
      // this brings back options on key entry
      // REDO: this is lazy
      setShowOptions(true)

      event.stopPropagation()

      if (!optionsVisibile) {
        return
      }

      switch (event.key) {
        case 'Escape': {
          setShowOptions(false)
          break
        }

        case 'Enter': {
          // TODO: Allow cursor selection
          const option = filteredOptions[0]
          if (option) {
            event.preventDefault()

            handleOptionSelect(option)
          } else if (newOption?.value) {
            event.preventDefault()

            handleNewItemSelect(newOption.value)
          }
        }
      }
    }

    return (
      <div
        className={styles.combobox}
        onKeyDown={handleKeyDown}
        ref={comboboxRef}
      >
        <Input {...inputProps} onFocus={handleFocus} ref={ref} type="search" />

        {optionsVisibile &&
          ReactDOM.createPortal(
            <>
              <ul
                className={styles.options}
                style={{ maxHeight: maxOptionsHeight, ...optionsStyle }}
              >
                {!filteredOptions.length && newOption?.value && (
                  <li className={styles.optionItem}>{newOption.element}</li>
                )}

                {/* TODO: Accept key field name (or key getter) */}
                {filteredOptions.map((option, index) => (
                  <li
                    className={styles.optionItem}
                    key={index}
                    onClick={() => handleOptionSelect(option)}
                  >
                    {optionRender(option)}
                  </li>
                ))}
              </ul>
            </>,
            document.body
          )}

        {showOptions &&
          ReactDOM.createPortal(
            <div className={styles.backdrop} onClick={hideOptions}></div>,
            document.body
          )}
      </div>
    )
  }
)

Combobox.displayName = 'Combobox'

export default Combobox
