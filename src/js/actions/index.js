import { ADD_ARTICLE } from "../constants/action-types"
import { FOUND_BAD_WORD } from "../constants/action-types"
import { DATA_LOADED } from "../constants/action-types"
import { DELETE_ARTICLE } from "../constants/action-types"

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }
}

export function foundBadWord() {
  return { type: FOUND_BAD_WORD }
}

export function deleteArticle(id) {
  return { type: DELETE_ARTICLE, id }
}

export function getData() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        return { type: DATA_LOADED, payload: json }
      })
  }
}