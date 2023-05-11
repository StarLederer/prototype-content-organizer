export type AxisId = number

export interface Axis {
  id: AxisId
  name: string | [string, string]
  min: number
  max: number
}

export type Coordinate = number | number[]

export type Vector = Record<AxisId, Coordinate>

export interface Track {
  vector: Vector
}
