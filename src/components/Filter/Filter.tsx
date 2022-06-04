import React, { useEffect } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import FilterBox from './FilterBox'
import { setResetFilter, setStatus } from '../../store/appSlice'
import { fetchDevelopers, fetchPlatforms } from '../../store/middleware'
import './filter.scss'


const Sidebar: React.FC = () => {
  const platforms = useSelector((state: RootState) => state.app.platforms)
  const developers = useSelector((state: RootState) => state.app.developers)
  const status = useSelector((state: RootState) => state.app.status)
  const filter = useSelector((state: RootState) => state.app.filter.filterTotal)
  const dispatch = useDispatch<AppDispatch>()
  
  useEffect(() => {
    dispatch(fetchPlatforms())
    dispatch(fetchDevelopers())
  }, [dispatch])

  // resetFilter
  const resetFilter = () => {
    dispatch(setStatus('loading'))
    dispatch(setResetFilter())
  }

  return (
    <div className="col-12 col-md-3 filter">
      <h3>Filter</h3>
      <FilterBox title="Platforms" list={platforms?.results} slug="platforms" />
      <FilterBox title="Developers" list={developers?.results} slug="developers" />
      <Button className="btn-block" onClick={() => dispatch(setStatus('loading'))}>
        Filter
        {status === 'loading' && <Spinner animation="border" size="sm" style={{marginLeft: '10px'}} />}
      </Button>
      {(filter.length > 0) &&
        <button className="btn btn-outline-secondary btn-block" onClick={resetFilter}>Reset</button>
      }
    </div>
  )
}

export default Sidebar