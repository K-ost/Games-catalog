import React, { useRef, useState } from 'react'
import { platform, publisher } from '../../helpers/interfaces'
import FilterCheck from './FilterCheck'
import './filter.scss'

interface IFilterBox {
  title: string
  list: platform[] | publisher[]
  func?: (title: string) => void
  slug: string
}

const FilterBox: React.FC<IFilterBox> = ({ func, list, title, slug }) => {
  const [show, setShow] = useState<boolean>(false)
  const filteRef = useRef<HTMLDivElement>(null)

  const height = show ? `${filteRef.current?.offsetHeight}px` : '160px'
  const hiddenClass = show ? "filter-box__hidden opened" : "filter-box__hidden"

  // ShowMore
  const showMore = (e: any) => {
    e.preventDefault()
    setShow(!show)
  }

  return (
    <div className="filter-box">
      <div className="filter-box__title">{title}</div>
      <div className={hiddenClass} style={{ height }}>
        <div className="filter-box__inner" ref={filteRef}>
          {list?.map(el => <FilterCheck key={el.id} el={el} slug={slug} />)}
        </div>
      </div>
      <div className="filter-more">
        <a href="/" onClick={showMore}>{show ? 'Hide' : 'Show'} more</a>
      </div>
    </div>
  )
}

export default FilterBox