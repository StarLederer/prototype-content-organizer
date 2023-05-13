let prevId = -1

export function nextId() {
  return ++prevId
}

export default nextId
