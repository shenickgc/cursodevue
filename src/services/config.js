const apiUrl = process.env.VUE_APP_API_URL

export const fullUrl=(endpoint) => `${apiUrl}${endpoint}`


  export const optionsDefault = {
    withCredentials: true,
    credentials: 'include',
    headers: new Headers({ 'Content-Type': 'application/json', }),
  }
  

  