import React from 'react'
import ReactDOM from 'react-dom'
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

const ContextMenu = function ({
  children,
  click = 'right',
  menu,
  onMenuItemClick,
}: ContextMenuProps) {
  const [showMenu, setShowMenu] = React.useState(false)
  const menuRef = React.useRef<HTMLUListElement>(null)

  function handleOnContextMenu(event: React.MouseEvent<HTMLDivElement>) {
    if (!showMenu && menuRef.current !== null) {
      // TODO: If it's a left click, let's use the bottom/middle of the target
      // as the position
      const x = event.pageX
      const y = event.pageY

      if (x + menuRef.current.offsetWidth > document.body.offsetWidth) {
        menuRef.current.style.removeProperty('left')
        const xr = document.body.offsetWidth - event.pageX
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
    <>
      <div
        className={styles.content}
        onClick={click === 'left' ? handleOnContextMenu : undefined}
        onContextMenu={click === 'right' ? handleOnContextMenu : undefined}
      >
        {children}
      </div>

      {ReactDOM.createPortal(
        <ul
          className={clsx(styles.contextMenu, 'context-menu', {
            [styles.active]: showMenu,
          })}
          onBlur={() => setShowMenu(false)}
          ref={menuRef}
          tabIndex={-1}
        >
          {menu.map((menuItem) => {
            return (
              <li className={styles.menuItem} key={menuItem.id}>
                <button
                  onClick={() => handleMenuItemClick(menuItem.id)}
                  onMouseDown={(e) => e.preventDefault()}
                >
                  {menuItem.title}
                </button>
              </li>
            )
          })}
        </ul>,
        document.body
      )}
    </>
  )
}

ContextMenu.displayName = 'ContextMenu'

export default ContextMenu
