
const defaultData = {
  data: null,
  expire: 0,
}

/**
 *
 * @param {string} key
 * @returns {any}
 */
function get(key) {
  const now = new Date()
  const time = now.getTime()

  const data = JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultData))

  if (data.expire > 0) {
    if (time > data.expire) {
      localStorage.removeItem(key)
      return null
    }
  }

  return data.data
}

/**
 *
 * @param {string} key
 * @param {any} value
 * @param {number} secondDuration [second]
 * @returns {void}
 */
function set(key, value, secondDuration = 0) {
  const now = new Date()
  const time = now.getTime()

  localStorage.setItem(key, JSON.stringify({
    data: value,
    expire: secondDuration > 0
      ? (time + (secondDuration * 1000))
      : 0
  }))
}

/**
 *
 * @param {string} key
 * @returns {void}
 */
function remove(key) {
  localStorage.removeItem(key)
}

const localStorageData = {
  get,
  set,
  remove
}

module.exports = localStorageData
