import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Gallery from '../../components/Gallery/Gallery'
import Loader from '../../components/Loader/Loader'
import Tags from '../../components/Tags/Tags'
import Platforms from '../../components/Platforms/Platforms'
import { Col, Row } from 'react-bootstrap'
import Stores from '../../components/Stores/Stores'
import Rates from '../../components/Rates/Rates'
import Metascore from '../../components/Metascore/Metascore'
import Dates from '../../components/Dates/Dates'
import { fetchGame, fetchScreens, fetchStores } from '../../store/middleware'
import { RootState } from '../../store/store'
import { resetGame, resetScreens, resetStores, setBg } from '../../store/appSlice'
import Description from '../../components/Description/Description'


const GamePage: React.FC = () => {
  const { slug } = useParams()
  const dispatch = useDispatch<any>()
  const game = useSelector((state: RootState) => state.app.game)
  const screenshots = useSelector((state: RootState) => state.app.screens)
  const stores = useSelector((state: RootState) => state.app.stores)


  // Fetch game details
  useEffect(() => {
    dispatch(fetchGame(`${slug}`))
    dispatch(fetchScreens(`${slug}`))
    dispatch(fetchStores(`${slug}`))
    return () => {
      dispatch(resetGame())
      dispatch(resetScreens())
      dispatch(resetStores())
    }
  }, [dispatch, slug])

  // bg
  useEffect(() => {
    dispatch(setBg(game?.background_image))
    return () => {
      dispatch(setBg(null))
    }
  }, [dispatch, game])

  
  // Loader
  if (!game) return <Loader />
  
  return (
    <div className="gamepage">
      <div className="gamepage-header">
        <Platforms list={game.parent_platforms} />
        <Dates date={game.released} bg={true} />
      </div>
      <h1>{game.name}</h1>
      <Row>
        <Col lg="8" xl="6">
          <Gallery screenshots={screenshots.results} />
        </Col>
        <Col lg="4" xl="6">
          <Rates rates={game.ratings} count={game.ratings_count} />
        </Col>
      </Row>

      <Row>
        <Col lg="8" className="gamepage-box">
          <Description text={game.description} />
        </Col>
        <Col lg="4" className="gamepage-box">
          <Stores list={game?.stores} links={stores.results} />
        </Col>
      </Row>

      <Row>
        <Col lg="6" className="gamepage-box">
          <h5>Release date</h5>
          <Dates date={game.released} />
        </Col>
        <Metascore score={game.metacritic} />
        <Col lg="6" className="gamepage-box">
          <h5>Website</h5>
          <a href={game.website}>{game.website}</a>
        </Col>
        <Col lg="6">
          <Tags list={game.publishers} pills={true} header="Publishers" />
        </Col>
        <Col lg="6">
          <Tags list={game.developers} pills={true} header="Developer" />
        </Col>
        <Col lg="6">
          <Tags list={game.genres} pills={true} header="Genres" link={true} />
        </Col>
        <Col lg="6">
          <h5>Platforms</h5>
          <div className="tagslist tagslist-pills">
            {game.platforms.map(el => <Link to={`/${el.platform.slug}`} key={el.platform.id}>{el.platform.name}</Link>)}
          </div>
        </Col>
      </Row>

      <Tags list={game.tags} pills={true} header="Tags" />
    </div>
  )
}

export default GamePage