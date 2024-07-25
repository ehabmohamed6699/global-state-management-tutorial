import React, { useContext } from 'react'
import { ThemeContext } from '../utils/ContextProvider'

const ContextApiComp = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <div>
      <h1>ContextApi for theme toggling</h1>
      <button onClick={toggleTheme}>{theme}</button>
    </div>
  )
}

export default ContextApiComp