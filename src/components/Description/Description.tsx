import React, { useRef, useState } from 'react'

interface IDescription {
  text: string
}

const Description: React.FC<IDescription> = ({ text }) => {
  const textRef = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState<boolean>(false)

  const height = show ? `${textRef.current?.offsetHeight}px` : 110
  const textClass = show ? 'gamepage-text show': 'gamepage-text'
  


  return (
    <div>
      <h5>Description</h5>
      <div className={textClass} style={{ height }}>
        <div className="gamepage-text__inner" dangerouslySetInnerHTML={{__html: text}} ref={textRef}></div>
      </div>
      <button className="btn btn-sm btn-secondary" onClick={() => setShow(!show)}>{!show ? 'Read more' : 'Hide'}</button>
    </div>
  )
}

export default Description