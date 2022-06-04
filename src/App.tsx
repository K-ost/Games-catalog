import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import GamePage from './pages/GamePage/GamePage'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store/store'
import { changeTheme } from './store/appSlice'


const App: React.FC = () => {
  const bg = useSelector((state: RootState) => state.app.bg)
  
  // Theme of app
  const dispatch = useDispatch()
  const theme = useSelector((state: RootState) => state.app.theme)
  useEffect(() => {
    if (localStorage.getItem('darkTheme')) {
      dispatch(changeTheme(true))
      document.body.classList.add('dark-theme')
    } else {
      document.body.classList.remove('dark-theme')
    }
  }, [dispatch, theme])


  return (
    <div className="app">
      {bg && <div className="bgImage" style={{backgroundImage: bg}}></div>}
      <Header />
      <div className="app-container">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games/:slug" element={<GamePage />} />
          </Routes>
        </div>
      </div>
      <div className="footer">RAWG API (c) 2022 - <a href="https://rawg.io/" rel="noreferrer" target="_blank">rawg.io</a></div>
    </div>
  )
}

export default App
