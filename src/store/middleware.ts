import { createAsyncThunk } from "@reduxjs/toolkit"
import { key } from "../helpers/key"

export const link = 'https://api.rawg.io/api'

// fetchFunc
const fetchFunc = async (endpoint: string, game?: boolean) => {
  const response = await fetch(endpoint)
  const data = await response.json()
  if (game) return data
  return data
}


// Middleware fetchGames
export const fetchGames = createAsyncThunk(
  'games/fetchGames',
  async (options: string) => {
    try {
      const response = await fetch(`${link}/games${key}${options}`)
      const data = await response.json()
      return data
    } catch(e) {
      console.log(e)
    }
  }
)


// Platforms
export const fetchPlatforms = createAsyncThunk(
  'platforms/fetchPlatforms',
  async () => fetchFunc(`${link}/platforms/lists/parents${key}`, true)
)

// Game details
export const fetchGame = createAsyncThunk(
  'games/fetchGame',
  async (slug: string) => fetchFunc(`${link}/games/${slug}${key}`, true)
)

// Screenshots
export const fetchScreens = createAsyncThunk(
  'game/fetchScreens',
  async (slug: string) => fetchFunc(`${link}/games/${slug}/screenshots${key}`)
)

// Screenshots
export const fetchStores = createAsyncThunk(
  'game/fetchStores',
  async (slug: string) => fetchFunc(`${link}/games/${slug}/stores${key}`)
)

// Search
export const fetchSearch = createAsyncThunk(
  'games/fetchSearch',
  async (value: string) => fetchFunc(`${link}/games${key}&search=${value}&page_size=7`, true)
)

// Genres
export const fetchGenre = createAsyncThunk(
  'genre/fetchGenre',
  async (genre: string) => fetchFunc(`${link}/genres/${genre}${key}`, true)
)

// Publishers
export const fetchDevelopers = createAsyncThunk(
  'games/fetchDevelopers',
  async () => fetchFunc(`${link}/developers${key}`)
)
