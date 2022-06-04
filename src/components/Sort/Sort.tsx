import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { orderFields } from '../../helpers/helpers'
import { resetGames, setOrder, setStatus } from '../../store/appSlice'
import './sort.scss'

const Sort: React.FC = () => {
  const [orderName, setOrderName] = useState<string>('Order by')
  const dispatch = useDispatch<any>()

  // orderHandler
  const orderHandler = (slug: string, title: string) => {
    dispatch(resetGames())
    dispatch(setStatus('loading'))
    dispatch(setOrder(`&ordering=${slug}`))
    setOrderName(title)
  }


  return (
    <div className="sorting">
      <Dropdown>
        <Dropdown.Toggle className="dropdown-btn">
          {orderName}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {orderFields.map(el => (
            <Dropdown.Item key={el.id} onClick={() => orderHandler(el.slug, el.title)}>{el.title}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default Sort