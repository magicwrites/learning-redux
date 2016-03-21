export const types = {
  login: 'login',
  logout: 'logout'
}

export function login (username, password) {
  return { type: types.login, username, password }
}

export function logout () {
  return { type: types.logout }
}
