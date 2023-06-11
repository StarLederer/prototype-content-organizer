let prevId = -1

export function nextId() {
  return (++prevId).toString()
}

export default nextId
