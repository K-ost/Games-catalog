import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { developer, genre, publisher, tag } from '../../helpers/interfaces'
import './tags.scss'

interface ITags {
  header?: string
  list: tag[] | genre[] | publisher[] | developer[]
  pills?: boolean
  link?: boolean
}

const Tags: React.FC<ITags> = ({ list, pills, header, link }) => {
  const classTags = (!pills ) ? 'tagslist' : 'tagslist tagslist-pills'

  return (
    <div className={classTags}>
      {header && <h5>{header}</h5>}
      {list.map((el, index, array) => (
        <Fragment key={el.id}>
          {link
            ? <Link to={`/genres/${el.slug}`}>{el.name}</Link>
            : <span>{el.name}</span>
          }
          {!pills && (el !== array[array.length - 1]) && ', '}
        </Fragment>
      ))}
    </div>
  )
}

export default Tags