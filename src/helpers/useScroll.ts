import { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { resetGames, resetGenre, resetPage, setOrder, setPage, setStatus } from "../store/appSlice"
import { fetchGames } from "../store/middleware"
import { RootState } from "../store/store"

export const useScroll = (str: string) => {
  const dispatch = useDispatch<any>()
  const status = useSelector((state: RootState) => state.app.status)
  const page = useSelector((state: RootState) => state.app.page)
  const order = useSelector((state: RootState) => state.app.order)
  const filter = useSelector((state: RootState) => state.app.filter.filterTotal)
  const games = useSelector((state: RootState) => state.app.games)
  const [mount, setMount] = useState<boolean>(false)

  // Reset
  useEffect(() => {
    dispatch(resetGenre())
    dispatch(setOrder(''))
  }, [dispatch])


  // Fetch games
  useEffect(() => {
    if (status === 'loading') {
      dispatch(fetchGames(`${str}&page_size=20&page=${page}${order}${filter}`))
    }
    if (status === 'succeeded') setMount(true)
  }, [status, dispatch, order, page, str, filter])
  

  const scrollPage = useCallback((e: any) => {
    console.log('Scroll')
    let pageHeight = e.target.documentElement.scrollHeight
    let scrollHeight = e.target.documentElement.scrollTop + window.innerHeight
    if (pageHeight - scrollHeight === 0 && mount) {
      dispatch(setPage())
      dispatch(setStatus('loading'))
    }
  }, [dispatch, mount])


  // Infinite load
  useEffect(() => {
    document.addEventListener('scroll', scrollPage)
    return () => {
      document.removeEventListener('scroll', scrollPage)
      dispatch(setStatus('loading'))
      dispatch(resetPage())
      dispatch(resetGames())
    }
  }, [dispatch, scrollPage])

  return { scrollPage }
}