const apiBaseUrl = 'http://localhost:3000'

export const getUsersUrl = () => `${apiBaseUrl}/api/users`
export const updateUsersStatusUrl = (id) => `${apiBaseUrl}/api/user/${id}`
export const authorizeUserUrl = () => `${apiBaseUrl}/api/login`
