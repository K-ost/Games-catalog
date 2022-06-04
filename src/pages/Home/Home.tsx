import React from 'react'
import { useSelector } from 'react-redux'
import Filter from '../../components/Filter/Filter'
import Game from '../../components/Game/Game'
import Loader from '../../components/Loader/Loader'
import Sort from '../../components/Sort/Sort'
import View from '../../components/View/View'
import { game } from '../../helpers/interfaces'
import { useScroll } from '../../helpers/useScroll'
import { RootState } from '../../store/store'


const Home: React.FC = () => {
  const status = useSelector((state: RootState) => state.app.status)
  const games = useSelector((state: RootState) => state.app.games)

  useScroll('')

  return (
    <div className="row">
      <Filter />
      <div className="col-12 col-md-9">
        <div className="article">
          <h1>New and trending</h1>
          <p>Based on player counts and release date</p>
        </div>
        
        <div className="page-header">
          <Sort />
          <View />
        </div>

        <div className="row games-row">
          {games && games.map((game: game, index: number) => <Game key={index} game={game} />)}
        </div>
        {status === 'loading' && games.length > 0 && <Loader />}
        {!games.length && <p>Games not found</p>}

        {/* <Loader /> */}
      </div>
    </div>
  )
}

export default Home