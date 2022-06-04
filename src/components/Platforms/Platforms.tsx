import React from 'react'
import { platformItem } from '../../helpers/interfaces'
import './platforms.scss'

interface IPlatforms {
  list: platformItem[]
}

const Platforms: React.FC<IPlatforms> = ({ list }) => {
  return (
    <ul className="platforms">
      {list?.map(pl => <li key={pl.platform.id} className={`platforms-${pl.platform.slug}`}></li>)}
    </ul>
  )
}

export default Platforms