function getDate(value) {

  const date = new Date(value)

  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  return `${day}.${month}.${year}`
}

export { getDate }