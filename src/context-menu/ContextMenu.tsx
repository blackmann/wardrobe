import React from 'react'
import ReactDOM from 'react-dom'
import clsx from 'clsx'
import styles from './ContextMenu.module.css'

interface MenuItem {
  disabled?: boolean
  id: string
  title: React.ReactNode
}

interface ContextMenuProps {
  children: React.ReactElement
  className?: string
  click?: 'left' | 'right'
  menu: MenuItem[]
  onMenuItemClick: (id: string) => void
}

interface MenuProps {
  menu: MenuItem[]
  onItemClick: (item: string) => void
  onHide: VoidFunction
  xy: [number, number]
}

function Menu({ menu, onHide, onItemClick, xy }: MenuProps) {
  const menuRef = React.useRef<HTMLUListElement>(null)

  function handleItemClick(event: React.MouseEvent, item: string) {
    event.preventDefault()
    onItemClick(item)
    event.stopPropagation()
  }

  React.useEffect(() => {
    const [x, y] = xy
    if (menuRef.current === null) {
      return
    }

    if (x + menuRef.current.offsetWidth > document.body.offsetWidth) {
      menuRef.current.style.removeProperty('left')
      const xr = document.body.offsetWidth - x
      menuRef.current.style.right = `${xr}px`
    } else {
      menuRef.current.style.removeProperty('right')
      menuRef.current.style.left = `${x}px`
    }

    if (y + menuRef.current.offsetHeight > document.body.offsetHeight) {
      menuRef.current.style.removeProperty('top')
      menuRef.current.style.bottom = `${document.body.offsetHeight - y}px`
    } else {
      menuRef.current.style.removeProperty('bottom')
      menuRef.current.style.top = `${y}px`
    }

    menuRef.current?.focus()
  }, [xy])

  return ReactDOM.createPortal(
    <ul
      className={clsx(styles.contextMenu, 'context-menu')}
      onBlur={onHide}
      ref={menuRef}
      tabIndex={-1}
    >
      {menu.map((menuItem) => {
        return (
          <li className={styles.menuItem} key={menuItem.id}>
            <button
              disabled={menuItem.disabled}
              onClick={(e) => handleItemClick(e, menuItem.id)}
              onMouseDown={(e) => e.preventDefault()}
            >
              {menuItem.title}
            </button>
          </li>
        )
      })}
    </ul>,
    document.body
  )
}

const ContextMenu = function ({
  children,
  click = 'right',
  menu,
  onMenuItemClick,
}: ContextMenuProps) {
  const [showMenu, setShowMenu] = React.useState(false)

  const [xy, setXy] = React.useState<[number, number]>([0, 0])

  function handleOnContextMenu(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault()
    if (!showMenu) {
      // TODO: If it's a left click, let's use the bottom/middle of the target
      // as the position
      const x = event.pageX
      const y = event.pageY

      setXy([x, y])

      setShowMenu(true)
    }

    event.stopPropagation()
  }

  function handleMenuItemClick(id: string) {
    setShowMenu(false)
    onMenuItemClick(id)
  }

  return (
    <>
      {React.cloneElement(children, {
        className: clsx(styles.content, children.props.className),
        onClick: click === 'left' ? handleOnContextMenu : undefined,
        onContextMenu: click === 'right' ? handleOnContextMenu : undefined,
      })}

      {showMenu && (
        <Menu
          menu={menu}
          onHide={() => setShowMenu(false)}
          onItemClick={handleMenuItemClick}
          xy={xy}
        />
      )}
    </>
  )
}

ContextMenu.displayName = 'ContextMenu'

export default ContextMenu
export type { ContextMenuProps, MenuItem }
