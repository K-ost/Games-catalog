import React, { useEffect, useState } from 'react'
import './view.scss'

const View: React.FC = () => {
  const [activeGrid, setActiveGrid] = useState<string>('active')
  const [activeList, setActiveList] = useState<string>('')

  useEffect(() => {
    if (localStorage.getItem('view')) {
      setActiveGrid('')
      setActiveList('active')
      document.body.classList.add('view-list')
    }
  }, [])

  // gridHandler
  const gridHandler = () => {
    setActiveGrid('active')
    setActiveList('')
    localStorage.removeItem('view')
    document.body.classList.remove('view-list')
  }
  
  // listHandler
  const listHandler = () => {
    setActiveGrid('')
    setActiveList('active')
    localStorage.setItem('view', 'list')
    document.body.classList.add('view-list')
  }

  return (
    <div className="viewbox">
      <button className={`btn btn-view btn-grid ${activeGrid}`} onClick={gridHandler}></button>
      <button className={`btn btn-view btn-list ${activeList}`} onClick={listHandler}></button>
    </div>
  )
}

export default View