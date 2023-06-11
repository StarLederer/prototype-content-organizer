import styles from './common.module.scss'

export const variants = ['ghost', 'primary', 'secondary', 'tertiary'] as const
export type Variant = typeof variants[number]

export function getClass(variant?: Variant) {
  if (variant === 'primary')
    return styles.primary

  if (variant === 'secondary')
    return styles.secondary

  if (variant === 'tertiary')
    return styles.tertiary

  return styles.ghost
}
