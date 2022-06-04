import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { resetFinded } from '../../store/appSlice'
import { fetchSearch } from '../../store/middleware'
import Autocomplete from './Autocomplete'
import './search.scss'

const Search: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch<any>()
  const [show, setShow] = useState<boolean>(false)
  const [val, setVal] = useState<string>('')


  // Input handler
  const inputHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target
    setVal(value)
    dispatch(fetchSearch(value))
    if (value.length > 0) {
      setShow(true)
    } else {
      dispatch(resetFinded())
      setShow(false)
    }
  }

  // closeAC
  const closeAC = () => {
    dispatch(resetFinded())
    inputRef.current!.value = ''
    setShow(false)
  }


  return (
    <div className="searchbox">
      <div className="searchbox-inner">
        <form>
          <input type="search" className="form-control" id="form-ac" placeholder="Search..." ref={inputRef} onChange={inputHandler} />
        </form>
        <div className="searchbox-key">Enter</div>
      </div>
      <Autocomplete show={show} close={closeAC} value={val} />
    </div>
  )
}

export default Search