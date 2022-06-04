import { createSlice } from '@reduxjs/toolkit'
import { game, genre, publisher } from '../helpers/interfaces'
import { fetchGame, fetchGames, fetchGenre, fetchPlatforms, fetchDevelopers, fetchScreens, fetchSearch, fetchStores } from './middleware'

interface filter {
  filterTotal: string
  filter_platforms: any
  filter_developers: any
  filterLoad: boolean
}

// State
export interface AppState {
  theme: boolean
  games: game[]
  page: number,
  count_games: number
  platforms: any
  publishers: publisher[]
  developers: any
  status: 'loading' | 'succeeded' | 'failed'
  game: game | null
  screens: any
  stores: any
  finded: any
  order: string
  genre: genre | null
  bg: string | null
  filter: filter | any
}
const initialState = {
  theme: false,
  games: [],
  page: 1,
  order: '',
  count_games: 0,
  platforms: null,
  publishers: [],
  developers: null,
  status: 'loading',
  game: null,
  screens: null,
  stores: null,
  finded: null,
  genre: null,
  bg: null,
  filter: {
    filterTotal: '',
    filter_platforms: [],
    filter_developers: [],
    filterLoad: false
  }
} as AppState


// createSlice
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload
    },
    setPage: (state) => {
      state.page += 1
    },
    resetPage: (state) => {
      state.page = 1
    },
    setStatus: (state, action) => {
      state.status = action.payload
    },
    setOrder: (state, action) => {
      state.order = action.payload
    },
    setBg: (state, action) => {
      state.bg = action.payload ? `url(${action.payload})` : null
    },
    resetGames: (state) => {
      state.games = []
      state.count_games = 0
    },

    // Filter
    setFilterLoad: (state, action) => {
      // action
    },
    setFilter: (state, action) => {
      const { name, value } = action.payload
      if ( !state.filter[`filter_${name}`].includes(value) ) {
        state.filter[`filter_${name}`].push(value)
      } else {
        state.filter[`filter_${name}`] = state.filter[`filter_${name}`].filter((el: number) => el !== value)
      }
      state.filter[`filter_${name}`] = state.filter[`filter_${name}`].sort((a: number, b: number) => a - b)

      // create filter string
      let filter1 = ''
      let filter2 = ''
      if (state.filter.filter_platforms.length) {
        filter1 = `&parent_platforms=${state.filter.filter_platforms.join(',')}`
      }
      if (state.filter.filter_developers.length) {
        filter2 = `&developers=${state.filter.filter_developers.join(',')}`
      }
      state.filter.filterTotal = `${filter1}${filter2}`
    },
    setResetFilter: (state) => {
      state.filter.filterTotal = ''
      state.filter.filter_platforms = []
      state.filter.filter_developers = []
    },

    // Reset
    resetGame: (state) => { state.game = null },
    resetScreens: (state) => { state.screens = [] },
    resetStores: (state) => { state.stores = [] },
    resetFinded: (state) => { state.finded = null },
    resetGenre: (state) => { state.genre = null },
  },

  extraReducers: (builder) => {

    // fetchGames
    builder
      .addCase(fetchGames.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.status = 'succeeded'
        if ( action.payload.count !== 0 ) {
          if (state.page === 1) {
            state.games = action.payload.results
          } else {
            state.games = [...state.games, ...action.payload.results]
          }
        } else {
          state.games = []
        }
      })
    
    // fetchPlatforms
    builder
      .addCase(fetchPlatforms.fulfilled, (state, action) => {
        state.platforms = action.payload
      })

    // fetchGame
    builder
      .addCase(fetchGame.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchGame.fulfilled, (state, action) => {
        state.game = action.payload
      })
    
    // fetch screenshots
    builder.addCase(fetchScreens.fulfilled, (state, action) => {
      state.screens = action.payload
    })
    
    // fetch developers
    builder.addCase(fetchDevelopers.fulfilled, (state, action) => {
      state.developers = action.payload
    })
    
    // fetch stores
    builder.addCase(fetchStores.fulfilled, (state, action) => {
      state.stores = action.payload
    })

    // fetch search
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      state.finded = action.payload
    })
    
    // fetch genres
    builder.addCase(fetchGenre.fulfilled, (state, action) => {
      state.genre = action.payload
    })
  },
})

// Action creators are generated for each case reducer function
export const {
  changeTheme, setStatus, setPage, resetPage, resetGames, setBg,
  resetGame, resetScreens, resetStores, resetFinded, setOrder,
  resetGenre, setFilterLoad, setFilter, setResetFilter
} = appSlice.actions

export default appSlice.reducer