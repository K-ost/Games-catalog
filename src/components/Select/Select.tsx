import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { platform } from '../../helpers/interfaces'
import './select.scss'

interface ISelect {
  title: string
  list: platform[]
  func: (value: string) => void
}

const Select: React.FC<ISelect> = ({ title, list, func }) => {
  const [val, setVal] = useState<string>(title)

  // selectHandler
  const selectHandler = (value: string, title: string) => {
    setVal(title)
    func(value)
  }

  return (
    <Dropdown>
      <Dropdown.Toggle className="dropdown-btn">
        {val}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {list.map(el => (
          <Dropdown.Item key={el.id} onClick={() => selectHandler(el.slug, el.name)}>{el.name}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}
export default Select