export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
    .then(response => checkResponse(response))
}

const checkResponse = (response: Response) => {
  if (response.ok) {
    return response.json()
  }
  handleError(response.status)
}

const handleError = (status: number) => {
  throw Error('Sorry, something went wrong!')
}
