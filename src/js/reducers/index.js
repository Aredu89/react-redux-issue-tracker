import { ADD_ARTICLE } from "../constants/action-types"
import { DATA_LOADED } from "../constants/action-types"
import { FOUND_BAD_WORD } from "../constants/action-types"
import { DELETE_ARTICLE } from "../constants/action-types"

const initialState = {
  articles: [],
  remoteArticles: [],
  message: ""
}

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload),
      message: ""
    })
  }
  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload),
      message: ""
    })
  }
  if (action.type === FOUND_BAD_WORD) {
    return Object.assign({}, state, {
      message: "Esta utilizando una palabra no permitida"
    })
  }
  if (action.type === DELETE_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.filter((data) => data.id !== action.id)
    })
   }
  return state
}

export default rootReducer