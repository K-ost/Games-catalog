export interface genre {
  games_count: number
  id: number
  image_background: string
  name: string
  slug: string
  description: string
}

export interface platform {
  games_count: number
  id: number
  image: string
  image_background: string
  name: string
  slug: string
}

export type platformItem = {
  platform: platform
  released_at?: string
}

export interface rate {
  count: number
  id: number
  percent: number
  title: string
}

export type screenshot = {
  id: number
  image: string
  is_deleted?: boolean
}

export interface store {
  domain: string
  games_count: number
  id: number
  image_background: string
  name: string
  slug: string
}

export interface storeLink {
  id: number
  game_id: string
  store_id: string
  url: string
}

export type storesItem = {
  id: number
  store: store
}

export interface tag {
  games_count: number
  id: number
  image_background: string
  language: string
  name: string
  slug: string
}

export interface publisher {
  games_count: number
  id: number
  image_background: string
  name: string
  slug: string
}

export interface developer {
  games_count: number
  id: number
  image_background: string
  name: string
  slug: string
}

export interface game {
  added: number
  background_image: string
  id: number
  metacritic: number
  dominant_color: string
  genres: genre[]
  name: string
  slug: string
  developers: developer[]
  description: string
  parent_platforms: platformItem[]
  platforms: platformItem[]
  rating: number
  rating_top: number
  reviews_count: number
  released: string
  publishers: publisher[]
  ratings: rate[]
  ratings_count: number
  short_screenshots: screenshot[]
  stores: storesItem[]
  suggestions_count?: number
  tags: tag[]
  tba: boolean
  updated: string
  website: string
  youtube_count: number
}

export interface orderFieldItem {
  id: number
  title: string
  slug: string
}