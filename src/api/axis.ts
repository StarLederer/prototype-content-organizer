import type { Axis } from '.'

let id = -1

export const axis: Axis[] = [
  // Beat
  {
    id: ++id,
    name: 'Trap',
    min: 0,
    max: 4,
  },
  {
    id: ++id,
    name: '4-On-The-Floor',
    min: 0,
    max: 4,
  },
  {
    id: ++id,
    name: '2-Step',
    min: 0,
    max: 4,
    optional: true,
  },
  {
    id: ++id,
    name: 'Funk Carioca',
    min: 0,
    max: 4,
    optional: true,
  },
  {
    id: ++id,
    name: 'Cumbia',
    min: 0,
    max: 4,
    optional: true,
  },

  // Character
  {
    id: ++id,
    name: ['Organic', 'Electronic'],
    min: 0,
    max: 3,
  },
  {
    id: ++id,
    name: 'Melodic',
    min: 0,
    max: 3,
  },

  // Mood
  {
    id: ++id,
    name: ['Calm', 'Energetic'],
    min: -2,
    max: 2,
  },
  {
    id: ++id,
    name: ['Bright', 'Dark'],
    min: -2,
    max: 2,
  },
  {
    id: ++id,
    name: 'Funny',
    min: 0,
    max: 2,
    optional: true,
  },
]

export default axis
