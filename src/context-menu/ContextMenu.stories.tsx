import ContextMenu from './ContextMenu'
import React from 'react'
import styles from './ContextMenu.stories.module.css'

function Demo({ click }: { click: 'left' | 'right' }) {
  return (
    <ContextMenu
      className={styles.message}
      click={click}
      menu={[
        { id: 'see-island', title: 'See island' },
        { id: 'restart', title: 'Restart Game' },
        { id: 'quit', title: '🚪 Quit Game' },
      ]}
      onMenuItemClick={console.log}
    >
      <div>Hello world, {click}-click to see what we have beneath.</div>
    </ContextMenu>
  )
}

export const RightClick = () => <Demo click="right" />
export const LeftClick = () => <Demo click="left" />
