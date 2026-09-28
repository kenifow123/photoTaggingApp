import { useState } from 'react';
import './styles.module.css'
import { Outlet } from "react-router-dom"
import { createContext } from "react";
import styles from "./styles.module.css";
import Header from "./components/Header.jsx";
import Highscores from "./components/Highscores.jsx";


// export const AppContext = createContext({
//     ;
// })

function App() {
  
  

  return (
    <>
        <Header className={styles.header}/>
        <Outlet />
        <Highscores />
    </>
  )
}

export default App
