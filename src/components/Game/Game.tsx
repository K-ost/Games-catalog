import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './game.scss'
import { game } from '../../helpers/interfaces'
import Tags from './../Tags/Tags'
import Platforms from '../Platforms/Platforms'
import Dates from '../Dates/Dates'

interface gameProps {
  game: game
}

const Game: React.FC<gameProps> = ({ game }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number | undefined>(0)

  useEffect(() => {
    setHeight(ref.current?.offsetHeight)
  }, [ref])
  

  return (
    <div className="col-12 col-sm-6 col-lg-4 col-xxl-3 gamebox-grid">
      <div className="gamebox" style={{ height }}>
        <div className="gamebox-wrapper" ref={ref}>
          <Link
            to={`/games/${game.slug}`}
            className="gamebox-img"
            style={{backgroundImage: `url(${game!.background_image})`}}
          ></Link>
          <div className="gamebox-details">
            <Platforms list={game.parent_platforms} />
            <h4><Link to={`/games/${game.slug}`}>{game.name}</Link></h4>
            <ul className="gamebox-feats">
              <li><div>Release date:</div> <Dates date={game.released} /></li>
              <li>
                <div>Genres:</div>
                <Tags list={game.genres} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game