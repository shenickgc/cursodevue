const apiUrl = process.env.VUE_APP_API_URL

export const fullUrl=(endpoint: string) => `${apiUrl}${endpoint}`


  export const optionsDefault : RequestInit = {
    credentials: 'include',
    headers: new Headers({ 'Content-Type': 'application/json', }),
  }
  

  