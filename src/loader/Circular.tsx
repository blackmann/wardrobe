import clsx from "clsx"
import React from "react"
import styles from './Circular.module.css'

interface CircularLoaderProps {
  classname?: string
}

function CircularLoader({ classname }: CircularLoaderProps) {

  return (
    <svg className={clsx(styles.loader, classname)} xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path fill="none" d="M0 0h24v24H0z" />
      <path fill="currentColor" d="M5.463 4.433A9.961 9.961 0 0 1 12 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 0 0 6.46 6.228l-.997-1.795zm13.074 15.134A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0 0 13.54 5.772l.997 1.795z" />
    </svg>
  )
}

export default CircularLoader
