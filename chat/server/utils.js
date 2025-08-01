import moment from 'moment'

export const botName = 'Welcome to Metran'
export const users = []

export function userJoin(user) {
  users.push(user)
  return user
}

export function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().format('YYYY-MM-DD HH:mm')
  }
}

export function getRoomUsers(room) {
  return users.filter(user => user.room === room)
}

export function userLeave(id) {
  const index = users.findIndex(user => user.id === id)

  if (index !== -1) {
    return users.splice(index, 1)[0]
  }
}

export function getCurrentUser(id) {
  return users.find(user => user.id === id)
}
