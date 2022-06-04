import React, { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { platform, publisher } from "../../helpers/interfaces"
import { setFilter } from "../../store/appSlice"
import { AppDispatch, RootState } from "../../store/store"

interface ICheck {
  el: platform | publisher
  slug: string
}

const FilterCheck: React.FC<ICheck> = ({ el, slug }) => {
  const ref = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch<AppDispatch>()
  const filter = useSelector((state: RootState) => state.app.filter.filterTotal)

  useEffect(() => {
    if (!filter.length) {
      ref.current!.checked = false
    }
  }, [filter])

  return (
    <div className="filter-item">
      <label>
        <input
          type="checkbox"
          className="form-check-input"
          onChange={() => dispatch(setFilter({name: slug, value: el.id}))}
          ref={ref}
        />
        {el.name}
      </label>
    </div>
  )
}

export default FilterCheck