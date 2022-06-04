import React from 'react'
import { Link } from 'react-router-dom'
import { storeLink, storesItem } from '../../helpers/interfaces'
import './stores.scss'

interface IStores {
  list: storesItem[]
  links: storeLink[]
}

const Stores: React.FC<IStores> = ({ list, links }) => {


  return (
    <div>
      <h5>Stores</h5>
      {list.map(el => {
        const link = links.find(link => link.id === el.id)
        return <a href={link?.url} target="_blank" rel="noreferrer" className={`storeItem storeItem-${el.store.slug}`} key={el.id}>
          {el.store.name}
        </a>
      })}
    </div>
  )
}

export default Stores