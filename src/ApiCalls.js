const fetchData = {
  getData(url : string) {
    return fetch(url)
      .then(response => {
        if(!response.ok) {
          if(response.status >= 500) {
              throw new Error(`Uh oh, something went wrong.`)
            } else if (response.status === 404) {
              throw new Error(`Page not found`)
            } else {
              throw new Error(`Uh oh, something went wrong.`)
          }
        }
        else {
        return response.json()
      }
    })
  }
}

export default fetchData;
