import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { game } from '../../helpers/interfaces'
import { RootState } from '../../store/store'
import Loader from '../Loader/Loader'
import Platforms from '../Platforms/Platforms'

interface IAutocomplete {
  show: boolean
  close: () => void
  value: string
}

const Autocomplete: React.FC<IAutocomplete> = ({ show, close, value }) => {
  const finded = useSelector((state: RootState) => state.app.finded)

  if (!show) return null

  return (
    <>
      <div className="autocomplete-overlay" onClick={close}></div>
      <div className="autocomplete">
        {finded && <div className="autocomplete-title">Finded games: <b>{finded.count}</b></div>}
        {finded?.results.map((item: game) => (
          <Link to={`/games/${item.slug}`} className="autocomplete-item" key={item.id} onClick={close}>
            <span className="autocomplete-item__img" style={{backgroundImage: `url(${item.background_image})`}}></span>
            <span className="autocomplete-item__name">{item.name}</span>
            <Platforms list={item?.parent_platforms} />
          </Link>
        ))}
        {(finded?.count > 10) &&
          <div className="autocomplete-footer">
            <span className="btn btn-secondary btn-block">Show more results</span>
          </div>
        }
        {!finded?.results && <Loader />}
      </div>
    </>
  )
}

export default Autocomplete