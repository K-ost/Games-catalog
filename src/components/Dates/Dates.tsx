import React from 'react'

interface IDate {
  date: string
  bg?: boolean
}

const Dates: React.FC<IDate> = ({ date, bg }) => {
  const monthes = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const day = new Date(date).getDate()
  const month = monthes[new Date(date).getMonth()]
  const year = new Date(date).getFullYear()
  const dateClass = (bg) ? 'gamepage-date gamepage-date__styled' : 'gamepage-date'

  return <div className={dateClass}>{month} {day}, {year}</div>
}

export default Dates