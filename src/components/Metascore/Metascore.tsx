import React from 'react'
import { Col } from 'react-bootstrap'

interface IMetascore {
  score: number
}

const Metascore: React.FC<IMetascore> = ({ score }) => {
  const scoreClassName = (score <= 70) ? 'metascore metascore-yellow' : 'metascore'
  if (!score) return null

  return (
    <Col lg="6" className="gamepage-box">
      <h5>Metascore</h5>
      <div className={scoreClassName}>
        {score}
      </div>
    </Col>
  )
}

export default Metascore