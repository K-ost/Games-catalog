import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../../store/appSlice'
import { RootState } from '../../store/store'
import './themebtn.scss'

const ThemeBtn: React.FC = () => {
  const theme: boolean = useSelector((state: RootState) => state.app.theme)
  const dispatch = useDispatch()
  const btnClass: string = theme ? 'sun' : 'moon'

  const themeHandler = () => {
    dispatch(changeTheme(!theme))
    if (!theme) {
      localStorage.setItem('darkTheme', 'true')
    } else {
      localStorage.removeItem('darkTheme')
    }
  }

  return <button className={`btn btn-theme btn-${btnClass}`} onClick={themeHandler}></button>
}

export default ThemeBtn