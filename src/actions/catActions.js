export const loadingCats = () => {
  return {
    type: "LOADING_CATS"
  }
}

export const fetchCatsSuccess = (catPics) => {
  return {
    type: "FETCH_CATS",
    payload: catPics
  }
}

export const fetchCats = () => {
  return dispatch => {
    dispatch(loadingCats());

    return fetch('http://localhost:4000/db')
      .then(resp => resp.ok ? resp.json() : new Error("404"))
      .then(data => dispatch(fetchCatsSuccess(data.images)))
  };
}
