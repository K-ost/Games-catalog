import React from 'react'
import { rate } from '../../helpers/interfaces'
import './rates.scss'

interface IRates {
  rates: rate[]
  count: number
}

const Rates: React.FC<IRates> = ({ rates, count }) => {
  return (
    <div className="rates">
      <h5>Ratings ({count})</h5>
      <div className="ratesWrap">
        {rates.map(el => (
          <div className={`ratesItem ratesItem-${el.title}`} key={el.id} style={{width: `${el.percent}%`}}></div>
        ))}
      </div>
      <ul className="ratesList">
        {rates.map(el => (
          <li key={el.id} className={el.title}><b>{el.title}</b> {el.count}</li>
        ))}
      </ul>
    </div>
  )
}

export default Rates