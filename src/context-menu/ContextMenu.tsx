import React from 'react'
import clsx from 'clsx'
import styles from './ContextMenu.module.css'

interface MenuItem {
  id: string
  title: React.ReactNode
}

interface ContextMenuProps extends React.PropsWithChildren {
  className?: string
  click?: 'left' | 'right'
  menu: MenuItem[]
  onMenuItemClick: (id: string) => void
}

const ContextMenu = React.forwardRef(
  (
    {
      children,
      className,
      click = 'right',
      menu,
      onMenuItemClick,
    }: ContextMenuProps,
    ref?: React.ForwardedRef<any>
  ) => {
    const [showMenu, setShowMenu] = React.useState(false)
    const menuRef = React.useRef<HTMLUListElement>(null)

    function handleOnContextMenu(event: React.MouseEvent<HTMLDivElement>) {
      if (!showMenu && menuRef.current !== null) {
        const x = event.pageX - event.currentTarget.offsetLeft
        const y = event.pageY - event.currentTarget.offsetTop

        if (x + menuRef.current.offsetWidth > document.body.offsetWidth) {
          menuRef.current.style.removeProperty('left')
          const xr =
            event.currentTarget.offsetWidth +
            event.currentTarget.offsetLeft -
            event.pageX
          menuRef.current.style.right = `${xr}px`
        } else {
          menuRef.current.style.removeProperty('right')
          menuRef.current.style.left = `${x}px`
        }

        menuRef.current.style.top = `${y}px`
        setShowMenu(true)

        menuRef.current?.focus()
      }
      event.preventDefault()
    }

    function handleMenuItemClick(id: string) {
      setShowMenu(false)
      onMenuItemClick(id)
    }

    return (
      <div
        className={clsx(styles.contextMenuWrapper, className, {
          [styles.active]: showMenu,
        })}
        onClick={click === 'left' ? handleOnContextMenu : undefined}
        onContextMenu={click === 'right' ? handleOnContextMenu : undefined}
        ref={ref}
      >
        <div className={styles.content}>{children}</div>

        <ul
          className={clsx(styles.contextMenu, 'context-menu')}
          onBlur={() => setShowMenu(false)}
          ref={menuRef}
          tabIndex={-1}
        >
          {menu.map((menuItem) => {
            return (
              <li className={styles.menuItem} key={menuItem.id}>
                <button onClick={() => handleMenuItemClick(menuItem.id)}>
                  {menuItem.title}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
)

ContextMenu.displayName = 'ContextMenu'

export default ContextMenu
