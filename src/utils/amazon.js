export const amazon = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': REACT_APP_RAPID_API_HOST
    }
  };

  export const fetchData = async(url, options) =>{
    const res = await fetch(url, options);
    const data = await res.json();

    return data
}