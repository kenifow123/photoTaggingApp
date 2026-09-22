import { useState } from 'react'
import './styles.module.css'
import { Outlet } from "react-router-dom"
import { createContext } from "react";
import styles from "./styles.module.css";


export const AppContext = createContext({
    ;
})

function App() {
  
  

  return (
    <>
      <AppContext>
        <Nav className={styles.nav}/>
      </AppContext>
    </>
  )
}

export default App
