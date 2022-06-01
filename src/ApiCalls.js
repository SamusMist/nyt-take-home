const fetchData = {
  getData(url : string) {
    return fetch(url)
      .then(response => {
        if(!response.ok) {
          if(response.status >= 500) {
              throw new Error(`Please Be sure to select a rover and date within the rovers lifecycle`)
            } else if (response.status === 404) {
              throw new Error(`Cannot load page. Please try again.`)
            } else {
              throw new Error(`Please select a rover and a date within the rovers lifecycle`)
          }
        }
        else {
        return response.json()
      }
    })
  }
}

export default fetchData;
