export const duration = 0.15
export const duration2 = duration * 2
export const duration4 = duration2 * 2
export const duration8 = duration4 * 2
export const duration16 = duration8 * 2
export const duration32 = duration16 * 2
export const ease: [number, number, number, number] = [0.25, 0.75, 0, 1]
export const easeOvershoot: [number, number, number, number] = [0.25, 0.75, 0, 1.125]
export const easeInOut: [number, number, number, number] = [0.25, 0.125, 0, 1]
export const easeInOutOvershoot: [number, number, number, number] = [0.25, 0.75, 0, 1.125]

export function cssProps(): [string, string][] {
  return [
    ['--duration', `${duration}s`],
    ['--duration-x2', `${duration2}s`],
    ['--duration-x4', `${duration4}s`],
    ['--duration-x8', `${duration8}s`],
    ['--duration-x16', `${duration16}s`],
    ['--duration-x32', `${duration32}s`],
    ['--ease', `cubic-bezier(${ease.join(',')})`],
    ['--ease-overshoot', `cubic-bezier(${easeOvershoot.join(',')})`],
    ['--ease-in-out', `cubic-bezier(${easeInOut.join(',')})`],
    ['--ease-in-out-overshoot', `cubic-bezier(${easeInOutOvershoot.join(',')})`],
  ]
}
