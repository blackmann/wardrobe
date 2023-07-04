import React, { ForwardedRef } from 'react'
import clsx from 'clsx'
import styles from './Button.module.css'

type buttonType = React.ComponentProps<'button'> & React.ComponentProps<'a'>
interface ButtonProps extends buttonType {
  danger?: Boolean
  outlined?: boolean
}

const Button = React.forwardRef(
  (
    {
      children,
      className,
      outlined,
      href,
      disabled,
      ...forwardedProps
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement> | undefined
  ) => {
    //Check if elem has href and render html element  accoordingly.
    const elementType = href ? 'a' : 'button'
    const isDisabledLink = elementType === 'a' && disabled
    // Intercept forwarded onClick function
    const forwardedOnClick = forwardedProps.onClick
    let handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (isDisabledLink) {
        e.preventDefault()
        return
      }
      forwardedOnClick && forwardedOnClick(e)
    }

    className = clsx(
      styles.button,
      {
        [styles.buttonOutlined]: outlined,
        [styles.disabled]: disabled,
      },
      className
    )
    let onClick = handleClick
    let button = React.createElement(elementType, {
      children,
      className,
      disabled,
      outlined,
      href,
      ...forwardedProps,
      onClick,
      ref,
    })
    return button
  }
)

Button.displayName = 'Button'

export default Button
